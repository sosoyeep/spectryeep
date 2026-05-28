export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.spectryeep.com') {
    url.hostname = 'spectryeep.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
