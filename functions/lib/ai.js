// Claude-generated reply draft for the "template + AI" hybrid flow.
// The template reply is always sent instantly; this produces a tailored draft
// answer grounded in the product knowledge base for a human to review/send.
import { SITE, productKnowledge } from './site.js';

const LOCALE_NAMES = { en: 'English', ru: 'Russian', es: 'Spanish', ar: 'Arabic' };

// Returns a draft string, or null when AI is not configured or the call fails.
export async function generateAiDraft({ env, intent, locale, message, name, company, product }) {
  const apiKey = env.CLAUDE_API_KEY || env.ANTHROPIC_API_KEY;
  if (!apiKey || !String(message || '').trim()) return null;

  const model = env.CLAUDE_MODEL || 'claude-haiku-4-5-20251001';
  const language = LOCALE_NAMES[locale] || 'English';
  const role = intent === 'aftersale' ? 'after-sales support engineer' : 'pre-sales application engineer';

  const system =
`You are a ${role} at ${SITE.brand} (${SITE.legalName}), a Chinese manufacturer of metal-analysis instruments (OES spectrometers, carbon/sulfur analyzers, ONH analyzers, handheld XRF/LIBS).

Product catalogue:
${productKnowledge()}

Write a concise, professional reply DRAFT in ${language} that a salesperson can review and send.
Rules:
- Only state facts supported by the catalogue above; never invent specs, prices, or delivery dates.
- If specifics (price, lead time, exact spec) are unknown, say a engineer will confirm rather than guessing.
- Recommend the most relevant model(s) when the customer describes an application or sample.
- Keep it under 180 words. End with a single clear next step. Do not add a subject line.`;

  const userParts = [
    name ? `Customer name: ${name}` : null,
    company ? `Company: ${company}` : null,
    product ? `Product of interest: ${product}` : null,
    `Customer message:\n${message}`,
  ].filter(Boolean).join('\n');

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 600,
        system,
        messages: [{ role: 'user', content: userParts }],
      }),
    });
    if (!res.ok) {
      console.warn('Claude draft failed', res.status);
      return null;
    }
    const data = await res.json();
    const text = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
    return text || null;
  } catch (error) {
    console.warn('Claude draft error', error);
    return null;
  }
}
