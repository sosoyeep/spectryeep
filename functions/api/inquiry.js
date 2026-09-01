const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const rateLimit = new Map();

const spamPatterns = [
  /\bseo\b/i,
  /\bcasino\b/i,
  /\bloan\b/i,
  /\bcrypto\b/i,
  /\bporn\b/i,
  /\bviagra\b/i,
  /\bbacklink/i,
  /\b(google|search|serp) ranking\b/i,
  /\b(website|web|organic) traffic\b/i,
  /\bguest post\b/i,
  /\bwhatsapp marketing\b/i,
];

// Cloudflare owns the 502/504 gateway codes: a 502 returned from here is
// discarded at the edge and the visitor gets Cloudflare's "Bad gateway" page
// instead of this one, losing the WhatsApp and email fallbacks. Verified on
// this zone - a 500 from this same handler passes through untouched, a 502
// does not. Anything user-facing must therefore avoid 502/504.
function errorPage(status, headline, detail, deliveryState) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>${headline} | JIEBO Instrument</title>
<style>
:root{color-scheme:light}
body{margin:0;font:16px/1.6 system-ui,-apple-system,"Segoe UI",sans-serif;color:#0f172a;background:#f8fafc}
.wrap{max-width:34rem;margin:0 auto;padding:4rem 1.5rem}
h1{font-size:1.6rem;line-height:1.25;margin:0 0 1rem}
p{color:#475569;margin:0 0 1rem}
.btn{display:inline-block;padding:.8rem 1.4rem;border-radius:.5rem;background:#075E54;color:#fff;text-decoration:none;font-weight:600}
.btn--ghost{background:transparent;color:#0f172a;border:1px solid #cbd5e1;margin-inline-start:.5rem}
</style></head><body><div class="wrap">
<h1>${headline}</h1>
<p>${detail}</p>
<p>Your message was not lost on your side &mdash; please reach us directly and we will pick it up immediately.</p>
<p><a class="btn" href="https://wa.me/8618118915721">WhatsApp +86 181 1891 5721</a>
<a class="btn btn--ghost" href="mailto:info@spectryeep.com">info@spectryeep.com</a></p>
</div></body></html>`;
  return new Response(html, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      // Machine-readable delivery state, so an uptime check can tell a healthy
      // form from a broken one without parsing the page.
      'x-inquiry-delivery': deliveryState,
    },
  });
}

function json(status, body, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...headers,
    },
  });
}

function getIp(request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

async function parseBody(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return request.json();
  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

function isRateLimited(ip, limit) {
  const now = Date.now();
  const bucket = rateLimit.get(ip) || [];
  const recent = bucket.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  rateLimit.set(ip, recent);
  return recent.length > limit;
}

function validationErrors(data, ip, env) {
  const errors = [];
  const required = ['name', 'company', 'country', 'email', 'message', 'consent'];
  const minSubmitSeconds = Number(env.MIN_SUBMIT_SECONDS || 4);
  const rateLimitMax = Number(env.INQUIRY_RATE_LIMIT_MAX || 5);

  for (const field of required) {
    if (!String(data[field] || '').trim()) errors.push(`${field} is required`);
  }

  if (data.company_website) errors.push('honeypot field was filled');

  const email = String(data.email || '');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('email is invalid');

  const startedAt = Number(data.started_at || 0);
  if (startedAt && Date.now() - startedAt < minSubmitSeconds * 1000) {
    errors.push('form submitted too quickly');
  }

  const text = [
    data.name,
    data.company,
    data.country,
    data.email,
    data.phone,
    data.product,
    data.application,
    data.sample_material,
    data.target_elements,
    data.message,
  ].join(' ');
  if (text.length > MAX_MESSAGE_LENGTH) errors.push('message is too long');
  if (spamPatterns.some((pattern) => pattern.test(text))) errors.push('spam keyword detected');
  if ((text.match(/https?:\/\//gi) || []).length > 2) errors.push('too many links');
  if (isRateLimited(ip, rateLimitMax)) errors.push('rate limit exceeded');

  return errors;
}

async function verifyTurnstile(token, ip, env) {
  if (!env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const body = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
    remoteip: ip,
  });
  const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const payload = await result.json();
  return Boolean(payload.success);
}

function leadPayload(data, request, ip) {
  return {
    source: 'spectryeep.com',
    received_at: new Date().toISOString(),
    ip,
    locale: data.locale || 'en',
    name: data.name,
    company: data.company,
    country: data.country,
    email: data.email,
    phone: data.phone,
    product: data.product,
    product_sku: data.product_sku,
    application: data.application,
    sample_material: data.sample_material,
    target_elements: data.target_elements,
    message: data.message,
    source_page: data.source_page || request.headers.get('referer') || '',
    utm: {
      source: data.utm_source,
      medium: data.utm_medium,
      campaign: data.utm_campaign,
      term: data.utm_term,
      content: data.utm_content,
    },
  };
}

// formsubmit.co buries its status message ~8.4 KB into a 10 KB marketing page,
// so a short snippet silently loses the very line worth reporting.
const RESPONSE_SNIPPET_LIMIT = 65536;

// A channel counts as delivered only on positive evidence. Several of these
// services answer HTTP 200 while dropping the message - formsubmit.co when the
// address is not activated, Apps Script when the script itself throws - so
// "status is not >= 400" is not a delivery receipt.
async function readSnippet(response) {
  try {
    return (await response.text()).slice(0, RESPONSE_SNIPPET_LIMIT);
  } catch {
    return '';
  }
}

async function postJson(url, payload, token) {
  if (!url) return { configured: false, ok: true };
  const headers = { 'content-type': 'application/json' };
  if (token) headers.authorization = `Bearer ${token}`;
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers,
      // Apps Script /exec answers 302 to script.googleusercontent.com; the real
      // outcome only appears after following that hop.
      redirect: 'follow',
      body: JSON.stringify(payload),
    });
    if (result.status < 200 || result.status >= 300) {
      return { configured: true, ok: false, status: result.status, error: `Webhook answered ${result.status}` };
    }
    const snippet = await readSnippet(result);
    if (/ScriptError|Exception:|<title>\s*Error\s*<\/title>/i.test(snippet)) {
      return { configured: true, ok: false, status: result.status, error: 'Webhook returned a script error page' };
    }
    return { configured: true, ok: true, status: result.status };
  } catch (error) {
    return { configured: true, ok: false, error: error?.message || 'POST failed' };
  }
}

async function forwardToFormspree(env, payload) {
  if (!env.FORMSPREE_ENDPOINT) return { configured: false, ok: true };
  try {
    const result = await fetch(env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (result.status < 200 || result.status >= 300) {
      return { configured: true, ok: false, status: result.status, error: `Formspree answered ${result.status}` };
    }
    const snippet = await readSnippet(result);
    let parsed;
    try {
      parsed = JSON.parse(snippet);
    } catch {
      return { configured: true, ok: false, status: result.status, error: 'Formspree returned a non-JSON body' };
    }
    if (parsed?.ok === true || parsed?.next) return { configured: true, ok: true, status: result.status };
    const detail = Array.isArray(parsed?.errors)
      ? parsed.errors.map((item) => item?.message || item?.code).filter(Boolean).join('; ')
      : '';
    return {
      configured: true,
      ok: false,
      status: result.status,
      error: `Formspree did not confirm delivery${detail ? `: ${detail}` : ''}`,
    };
  } catch (error) {
    return { configured: true, ok: false, error: error?.message || 'Formspree failed' };
  }
}

function flattenPayload(payload) {
  return {
    _subject: `Spectryeep inquiry${payload.product ? ` - ${payload.product}` : ''}`,
    _template: 'table',
    _captcha: 'false',
    _next: 'https://spectryeep.com/thank-you/',
    source: payload.source,
    received_at: payload.received_at,
    source_page: payload.source_page,
    locale: payload.locale,
    name: payload.name,
    company: payload.company,
    country: payload.country,
    email: payload.email,
    phone: payload.phone,
    product: payload.product,
    product_sku: payload.product_sku,
    application: payload.application,
    sample_material: payload.sample_material,
    target_elements: payload.target_elements,
    message: payload.message,
    utm_source: payload.utm?.source,
    utm_medium: payload.utm?.medium,
    utm_campaign: payload.utm?.campaign,
    utm_term: payload.utm?.term,
    utm_content: payload.utm?.content,
  };
}

async function forwardToTelegram(env, payload) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return { configured: false, ok: true };

  const lines = [
    'New inquiry - spectryeep.com',
    '',
    `${payload.name || '?'} | ${payload.company || '?'} | ${payload.country || '?'}`,
    `Email: ${payload.email || '?'}`,
  ];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.product) lines.push(`Product: ${payload.product}`);
  if (payload.application) lines.push(`Application: ${payload.application}`);
  if (payload.sample_material) lines.push(`Material: ${payload.sample_material}`);
  if (payload.target_elements) lines.push(`Elements: ${payload.target_elements}`);
  if (payload.source_page) lines.push(`Page: ${payload.source_page}`);
  const utm = [payload.utm?.source, payload.utm?.medium, payload.utm?.campaign].filter(Boolean).join(' / ');
  if (utm) lines.push(`Source: ${utm}`);
  if (payload.message) lines.push('', '--- message ---', String(payload.message).slice(0, 1500));
  const text = lines.join('\n').slice(0, 4000);

  try {
    const result = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, disable_web_page_preview: true }),
    });
    const snippet = await readSnippet(result);
    let parsed;
    try {
      parsed = JSON.parse(snippet);
    } catch {
      parsed = null;
    }
    // Telegram always answers JSON with an explicit ok flag; trust that, not the status.
    if (parsed?.ok === true) return { configured: true, ok: true, status: result.status };
    const detail = parsed?.description ? `: ${parsed.description}` : '';
    return {
      configured: true,
      ok: false,
      status: result.status,
      error: `Telegram did not confirm delivery${detail}`,
    };
  } catch (error) {
    return { configured: true, ok: false, error: error?.message || 'Telegram failed' };
  }
}

async function forwardToFallbackEmail(env, payload) {
  if (env.ENABLE_SERVER_SIDE_FALLBACK !== 'true') {
    return { configured: false, ok: true };
  }
  const fallbackUrl = env.FALLBACK_FORM_ACTION || 'https://formsubmit.co/info@spectryeep.com';
  const body = new FormData();
  const flat = flattenPayload(payload);
  for (const [key, value] of Object.entries(flat)) {
    if (value !== undefined && value !== null && value !== '') body.append(key, String(value));
  }
  try {
    const result = await fetch(fallbackUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        // Without a browser origin formsubmit.co refuses the post and still
        // answers 200 ("Unable to submit form").
        origin: 'https://spectryeep.com',
        referer: 'https://spectryeep.com/contact/',
      },
      redirect: 'manual',
      body,
    });
    // Genuine success is the 3xx hop to _next. Anything else needs proof.
    if (result.status >= 300 && result.status < 400) {
      return { configured: true, ok: true, status: result.status };
    }
    if (result.status >= 400) {
      return { configured: true, ok: false, status: result.status, error: `Fallback form answered ${result.status}` };
    }
    const snippet = await readSnippet(result);
    if (/needs Activation|Activate Form|Check Your Email/i.test(snippet)) {
      return {
        configured: true,
        ok: false,
        status: result.status,
        error: 'formsubmit.co inbox is not activated - click the "Activate Form" link it emailed',
      };
    }
    if (/Unable to submit form/i.test(snippet)) {
      return { configured: true, ok: false, status: result.status, error: 'formsubmit.co rejected the submission' };
    }
    try {
      const parsed = JSON.parse(snippet);
      if (parsed?.success === true || parsed?.success === 'true') {
        return { configured: true, ok: true, status: result.status };
      }
    } catch {
      // fall through to the unconfirmed case below
    }
    return { configured: true, ok: false, status: result.status, error: 'Fallback form did not confirm delivery' };
  } catch (error) {
    return { configured: true, ok: false, error: error?.message || 'Fallback form failed' };
  }
}

async function forwardLead(env, payload) {
  const channels = ['formspree', 'crm_webhook', 'email_webhook', 'telegram', 'formsubmit_fallback'];
  const settled = await Promise.all([
    forwardToFormspree(env, payload),
    postJson(env.CRM_WEBHOOK_URL, payload, env.CRM_WEBHOOK_TOKEN),
    postJson(env.EMAIL_WEBHOOK_URL, payload, env.EMAIL_WEBHOOK_TOKEN),
    forwardToTelegram(env, payload),
    forwardToFallbackEmail(env, payload),
  ]);
  const results = settled.map((result, index) => ({ channel: channels[index], ...result }));
  const configured = results.filter((result) => result.configured);
  const delivered = configured.some((result) => result.ok);
  if (configured.length === 0) {
    return { configured: false, delivered: false, results };
  }
  if (!delivered) {
    console.error(
      'All inquiry forwarding targets failed',
      configured.map((r) => `${r.channel}: status=${r.status ?? 'n/a'} ${r.error || 'no error reported'}`).join(' | '),
    );
  }
  return { configured: true, delivered, results };
}

async function handleInquiryPost({ request, env }) {
  const ip = getIp(request);
  let data;
  try {
    data = await parseBody(request);
  } catch {
    return json(400, { ok: false, error: 'Invalid request body' });
  }

  const errors = validationErrors(data, ip, env);
  const turnstileOk = await verifyTurnstile(data['cf-turnstile-response'], ip, env);
  if (!turnstileOk) errors.push('Turnstile verification failed');

  if (errors.length) {
    console.warn('Blocked inquiry', { ip, errors, email: data.email, source_page: data.source_page });
    return json(400, { ok: false, error: 'Submission blocked', reasons: errors });
  }

  const payload = leadPayload(data, request, ip);
  const forwarding = await forwardLead(env, payload);
  if (!forwarding.configured) {
    console.error('Inquiry forwarding is not configured');
    return errorPage(
      503,
      'We could not deliver your enquiry',
      'Our enquiry routing is not configured correctly right now. This is our fault, not yours.',
      'unconfigured',
    );
  }
  if (!forwarding.delivered) {
    return errorPage(
      503,
      'We could not deliver your enquiry',
      'Every delivery route for our enquiry form failed just now. This is our fault, not yours.',
      'failed',
    );
  }

  const locale = data.locale && data.locale !== 'en' ? `/${data.locale}` : '';
  return Response.redirect(new URL(`${locale}/thank-you/`, request.url), 302);
}

export async function onRequestPost(context) {
  try {
    return await handleInquiryPost(context);
  } catch (error) {
    console.error('Unhandled inquiry error', error);
    return json(500, {
      ok: false,
      error: 'Inquiry service error. Please contact info@spectryeep.com or WhatsApp +86 181 1891 5721.',
    });
  }
}

export function onRequestGet() {
  return json(405, { ok: false, error: 'Method not allowed' }, { allow: 'POST' });
}

export function onRequestPut() {
  return json(405, { ok: false, error: 'Method not allowed' }, { allow: 'POST' });
}

export function onRequestPatch() {
  return json(405, { ok: false, error: 'Method not allowed' }, { allow: 'POST' });
}

export function onRequestDelete() {
  return json(405, { ok: false, error: 'Method not allowed' }, { allow: 'POST' });
}
