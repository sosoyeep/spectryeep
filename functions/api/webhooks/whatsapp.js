// WhatsApp Business Cloud API webhook.
// GET  — Meta verification handshake (hub.challenge).
// POST — inbound messages → auto-reply engine → WhatsApp text reply.
import { runAutoReply } from '../../lib/engine.js';
import { sendWhatsApp } from '../../lib/channels.js';

export function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');
  if (mode === 'subscribe' && token && token === env.WHATSAPP_VERIFY_TOKEN) {
    return new Response(challenge || '', { status: 200 });
  }
  return new Response('Forbidden', { status: 403 });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response('Bad Request', { status: 400 });
  }

  const messages = extractMessages(payload);
  // Acknowledge Meta immediately; process replies in the background.
  for (const msg of messages) {
    const job = runAutoReply({
      env,
      msg,
      sendToCustomer: (text) => sendWhatsApp({ env, to: msg.from, body: text }),
    });
    if (context.waitUntil) context.waitUntil(job);
    else await job;
  }

  return new Response('EVENT_RECEIVED', { status: 200 });
}

// Flatten Meta's nested webhook payload into normalized messages.
function extractMessages(payload) {
  const out = [];
  for (const entry of payload.entry || []) {
    for (const change of entry.changes || []) {
      const value = change.value || {};
      const contacts = value.contacts || [];
      const profileName = contacts[0]?.profile?.name || '';
      const language = contacts[0]?.profile?.language || '';
      for (const m of value.messages || []) {
        if (m.type !== 'text') continue; // media/interactive handled by humans
        out.push({
          channel: 'whatsapp',
          from: m.from,
          name: profileName,
          email: '',
          company: '',
          country: '',
          phone: m.from,
          product: '',
          message: m.text?.body || '',
          locale: language,
        });
      }
    }
  }
  return out;
}

export function onRequestPut() {
  return new Response('Method not allowed', { status: 405 });
}
