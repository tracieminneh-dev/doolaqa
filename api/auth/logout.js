// Signs out: clears the session cookie and shows the signed-out page.
import { sessionCookie } from "../../lib/auth.js";
import { route } from "../../lib/http.js";

const out = (request) => new Response(null, {
  status: 302,
  headers: { Location: "/signed-out", "Set-Cookie": sessionCookie(request, ""), "Cache-Control": "no-store" },
});
export const GET = route(async (request) => out(request));
export const POST = route(async (request) => out(request));
