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
  /\branking\b/i,
  /\btraffic\b/i,
  /\bguest post\b/i,
  /\btelegram\b/i,
  /\bwhatsapp marketing\b/i,
];

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

async function postJson(url, payload, token) {
  if (!url) return null;
  const headers = { 'content-type': 'application/json' };
  if (token) headers.authorization = `Bearer ${token}`;
  const result = await fetch(url, {
    method: 'POST',
    headers,
    redirect: 'manual',
    body: JSON.stringify(payload),
  });
  if (!result.ok && result.status >= 400) {
    throw new Error(`POST ${url} failed with ${result.status}`);
  }
  return result;
}

async function forwardToFormspree(env, payload) {
  if (!env.FORMSPREE_ENDPOINT) return null;
  const result = await fetch(env.FORMSPREE_ENDPOINT, {
    method: 'POST',
    redirect: 'manual',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!result.ok && result.status >= 400) {
    throw new Error(`Formspree failed with ${result.status}`);
  }
  return result;
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

async function forwardToFallbackEmail(env, payload) {
  const fallbackUrl = env.FALLBACK_FORM_ACTION || 'https://formsubmit.co/sophia@wxjiebo.cc';
  const body = new FormData();
  const flat = flattenPayload(payload);
  for (const [key, value] of Object.entries(flat)) {
    if (value !== undefined && value !== null && value !== '') body.append(key, String(value));
  }
  const result = await fetch(fallbackUrl, {
    method: 'POST',
    headers: {
      accept: 'application/json',
    },
    redirect: 'manual',
    body,
  });
  if (!result.ok && result.status >= 400) {
    throw new Error(`Fallback form failed with ${result.status}`);
  }
  return result;
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
  try {
    if (env.FORMSPREE_ENDPOINT || env.CRM_WEBHOOK_URL || env.EMAIL_WEBHOOK_URL) {
      await Promise.all([
        forwardToFormspree(env, payload),
        postJson(env.CRM_WEBHOOK_URL, payload, env.CRM_WEBHOOK_TOKEN),
        postJson(env.EMAIL_WEBHOOK_URL, payload, env.EMAIL_WEBHOOK_TOKEN),
      ]);
    } else {
      console.warn('Inquiry forwarding is not configured; using fallback email endpoint server-side');
      await forwardToFallbackEmail(env, payload);
    }
  } catch (error) {
    console.error('Inquiry forwarding failed; trying fallback email endpoint', error);
    try {
      await forwardToFallbackEmail(env, payload);
    } catch (fallbackError) {
      console.error('Fallback email forwarding failed', fallbackError);
      return json(502, {
        ok: false,
        error: 'Inquiry accepted but forwarding failed. Please contact sales@wxjiebo.cc or WhatsApp +86 181 1891 5721.',
      });
    }
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
      error: 'Inquiry service error. Please contact sales@wxjiebo.cc or WhatsApp +86 181 1891 5721.',
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
