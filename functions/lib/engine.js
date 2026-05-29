// Unified auto-reply engine. Every platform normalizes its inbound payload to
// the shared `msg` shape, then calls runAutoReply(). The engine classifies the
// intent, sends an instant multilingual template reply to the customer, drafts
// a tailored AI answer for the sales team, and logs everything to the CRM.
//
// msg shape:
//   { channel, from, name, company, country, email, phone, product, message, locale }
import { classifyIntent, buildTemplateReply, normalizeLocale } from './replies.js';
import { generateAiDraft } from './ai.js';
import { notifySales, logToCrm } from './channels.js';

// sendToCustomer(text) is the channel-specific transport for the instant reply
// (e.g. WhatsApp message, confirmation email). It may be omitted when the
// channel acknowledges the customer another way (e.g. the website thank-you page).
export async function runAutoReply({ env, msg, sendToCustomer, logCrm = true }) {
  msg.locale = normalizeLocale(msg.locale);
  const intent = classifyIntent(`${msg.message || ''} ${msg.product || ''}`);

  const templateReply = buildTemplateReply({
    intent,
    locale: msg.locale,
    name: msg.name,
    product: msg.product,
  });

  // Generate the AI draft and send the instant template reply concurrently.
  const [draft] = await Promise.all([
    generateAiDraft({
      env,
      intent,
      locale: msg.locale,
      message: msg.message,
      name: msg.name,
      company: msg.company,
      product: msg.product,
    }),
    typeof sendToCustomer === 'function'
      ? Promise.resolve(sendToCustomer(templateReply)).catch((e) => console.warn('sendToCustomer failed', e))
      : Promise.resolve(),
  ]);

  // Internal logging/notification never blocks the customer reply.
  await Promise.allSettled([
    logCrm ? logToCrm({ env, msg, intent }) : Promise.resolve(),
    notifySales({ env, msg, intent, draft }),
  ]);

  return { intent, templateReply, draft };
}
