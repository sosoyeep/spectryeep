// Outbound channels: customer email replies, WhatsApp Cloud API, internal
// sales notifications, and CRM logging. Every sender is best-effort and never
// throws into the caller — auto-reply must never break message intake.
import { SITE } from './site.js';

// Send an email via Resend (https://resend.com). No-op if not configured.
export async function sendEmail({ env, to, subject, text, replyTo }) {
  if (!env.RESEND_API_KEY || !to) return false;
  const from = env.AUTOREPLY_FROM || `${SITE.brand} <sales@${SITE.domain}>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({ from, to, subject, text, reply_to: replyTo || SITE.email }),
    });
    if (!res.ok) console.warn('Resend send failed', res.status);
    return res.ok;
  } catch (error) {
    console.warn('Resend send error', error);
    return false;
  }
}

// Send a WhatsApp text message via the Meta Cloud API. No-op if not configured.
export async function sendWhatsApp({ env, to, body }) {
  if (!env.WHATSAPP_TOKEN || !env.WHATSAPP_PHONE_ID || !to) return false;
  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/${env.WHATSAPP_PHONE_ID}/messages`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${env.WHATSAPP_TOKEN}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body },
      }),
    });
    if (!res.ok) console.warn('WhatsApp send failed', res.status, await res.text());
    return res.ok;
  } catch (error) {
    console.warn('WhatsApp send error', error);
    return false;
  }
}

// Notify the internal sales/service inbox, including the AI draft for approval.
export async function notifySales({ env, msg, intent, draft }) {
  const to = env.NOTIFY_EMAIL || SITE.email;
  const subject = `[${intent === 'aftersale' ? 'SERVICE' : 'SALES'}] ${msg.channel} — ${msg.company || msg.name || msg.from || 'New contact'}`;
  const lines = [
    `Channel: ${msg.channel}`,
    `Intent: ${intent}`,
    `From: ${msg.name || ''} <${msg.email || msg.from || ''}>`,
    msg.company ? `Company: ${msg.company}` : null,
    msg.country ? `Country: ${msg.country}` : null,
    msg.phone ? `Phone: ${msg.phone}` : null,
    msg.product ? `Product: ${msg.product}` : null,
    `Locale: ${msg.locale}`,
    '',
    'Customer message:',
    msg.message || '(none)',
    '',
    '--- Suggested AI reply (review before sending) ---',
    draft || '(AI draft unavailable — reply manually)',
  ].filter((l) => l !== null).join('\n');
  return sendEmail({ env, to, subject, text: lines, replyTo: msg.email });
}

// Append the conversation to the existing Google Sheets / CRM webhook.
export async function logToCrm({ env, msg, intent }) {
  if (!env.CRM_WEBHOOK_URL) return false;
  const headers = { 'content-type': 'application/json' };
  if (env.CRM_WEBHOOK_TOKEN) headers.authorization = `Bearer ${env.CRM_WEBHOOK_TOKEN}`;
  try {
    const res = await fetch(env.CRM_WEBHOOK_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: msg.channel,
        received_at: new Date().toISOString(),
        name: msg.name,
        company: msg.company,
        country: msg.country,
        email: msg.email,
        phone: msg.phone || msg.from,
        product: msg.product,
        message: msg.message,
        locale: msg.locale,
        notes: `intent=${intent}; channel=${msg.channel}`,
      }),
    });
    return res.ok;
  } catch (error) {
    console.warn('CRM log error', error);
    return false;
  }
}
