export function onRequestGet({ env }) {
  return new Response(
    JSON.stringify({
      turnstileSiteKey: env.PUBLIC_TURNSTILE_SITE_KEY || env.TURNSTILE_SITE_KEY || '',
    }),
    {
      headers: {
        'cache-control': 'no-store',
        'content-type': 'application/json; charset=utf-8',
      },
    },
  );
}
