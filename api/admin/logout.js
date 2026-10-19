import { sessionCookie } from "../../lib/auth.js";
import { json, route, readJsonBody } from "../../lib/http.js";

export const POST = route(async (request) => {
  await readJsonBody(request);
  return json({ ok: true }, 200, { "Set-Cookie": sessionCookie(request, "") });
});
