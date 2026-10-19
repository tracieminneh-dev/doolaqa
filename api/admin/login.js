import { checkLogin, sessionCookie } from "../../lib/auth.js";
import { json, route, readJsonBody, clientIp } from "../../lib/http.js";

export const POST = route(async (request) => {
  const { email, password } = await readJsonBody(request);
  const token = await checkLogin(email, password, clientIp(request));
  return json({ ok: true }, 200, { "Set-Cookie": sessionCookie(request, token) });
});
