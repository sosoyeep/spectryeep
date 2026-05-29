// Inbound email webhook. Accepts parsed-email JSON from an email provider
// (Cloudflare Email Worker, Postmark inbound, SendGrid Inbound Parse, etc.) or
// from forwarded Alibaba / social-platform notification emails, then runs the
// auto-reply engine and replies to the sender by email.
//
// Expected JSON body (lenient — common field names are accepted):
//   { from, name, subject, text, locale }
import { runAutoReply } from '../../lib/engine.js';
import { sendEmail } from '../../lib/channels.js';
import { SITE } from '../../lib/site.js';

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

function parseAddress(value) {
  // "Sophia Wang <s@x.com>" -> { name, email }
  const raw = String(value || '').trim();
  const match = raw.match(/^(.*?)\s*<([^>]+)>$/);
  if (match) return { name: match[1].replace(/^"|"$/g, '').trim(), email: match[2].trim() };
  return { name: '', email: raw };
}

export async function onRequestPost(context) {
  const { request, env } = context;

  // Optional shared-secret check via ?token= or Authorization: Bearer.
  if (env.INBOUND_EMAIL_TOKEN) {
    const url = new URL(request.url);
    const bearer = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
    const token = url.searchParams.get('token') || bearer;
    if (token !== env.INBOUND_EMAIL_TOKEN) return json(401, { ok: false, error: 'Unauthorized' });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON body' });
  }

  const fromField = data.from || data.sender || data.From || '';
  const { name: parsedName, email } = parseAddress(fromField);
  if (!email) return json(400, { ok: false, error: 'Missing sender address' });

  const subject = data.subject || data.Subject || '';
  const text = data.text || data.body || data['stripped-text'] || data['body-plain'] || '';

  const msg = {
    channel: 'email',
    from: email,
    name: data.name || parsedName || '',
    email,
    company: data.company || '',
    country: data.country || '',
    phone: '',
    product: data.product || '',
    message: [subject, text].filter(Boolean).join('\n\n'),
    locale: data.locale || '',
  };

  const job = runAutoReply({
    env,
    msg,
    sendToCustomer: (replyText) =>
      sendEmail({
        env,
        to: email,
        subject: subject ? `Re: ${subject}` : `${SITE.brand} — we received your message`,
        text: replyText,
      }),
  });
  if (context.waitUntil) context.waitUntil(job);
  else await job;

  return json(200, { ok: true });
}

export function onRequestGet() {
  return json(405, { ok: false, error: 'Method not allowed' });
}
