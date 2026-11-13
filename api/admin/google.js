// "Sign in with Google": receives the ID token from Google's button, verifies
// it on the server and sets the admin session cookie.
import { checkGoogleLogin, sessionCookie } from "../../lib/auth.js";
import { json, route, readJsonBody, clientIp } from "../../lib/http.js";

export const POST = route(async (request) => {
  const { credential } = await readJsonBody(request);
  const token = await checkGoogleLogin(credential, clientIp(request));
  return json({ ok: true }, 200, { "Set-Cookie": sessionCookie(request, token) });
});
