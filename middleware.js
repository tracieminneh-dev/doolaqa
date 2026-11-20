// Keeps the whole CS QA site (pages, data files and APIs) behind Google
// sign-in once it is configured. Runs on Vercel before every request except
// the sign-in routes and the signed-out page. Until GOOGLE_CLIENT_ID,
// GOOGLE_CLIENT_SECRET and GOOGLE_REDIRECT_URI are all set it lets everything
// through, so the site keeps working while Google is being set up.

export const config = { matcher: ["/((?!api/auth/|signed-out).*)"] };

const env = (n) => (process.env[n] || "").trim();
const enabled = () => Boolean(env("GOOGLE_CLIENT_ID") && env("GOOGLE_CLIENT_SECRET") && env("GOOGLE_REDIRECT_URI"));

const enc = new TextEncoder();
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const fromB64url = (s) => atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));

function allowed(email) {
  const e = String(email || "").toLowerCase();
  const list = env("ADMIN_EMAIL").toLowerCase().split(",").map((x) => x.trim()).filter(Boolean);
  return (list.length ? list : ["@doola.com"]).some((x) => (x.startsWith("@") ? e.endsWith(x) : x === e));
}

// Same token format and key as lib/auth.js: body.mac, HMAC-SHA256 with a key
// of SHA-256(SESSION_SECRET), or of the ADMIN_PASSWORD fallback.
async function validSession(request) {
  const raw = (request.headers.get("cookie") || "").split(";").map((c) => c.trim()).find((c) => c.startsWith("qa_admin="));
  const token = raw ? decodeURIComponent(raw.slice(9)) : "";
  const [body, mac] = token.split(".");
  if (!body || !mac) return false;
  const secret = env("SESSION_SECRET") || `doola-qa-session:${env("ADMIN_PASSWORD")}`;
  const keyBytes = await crypto.subtle.digest("SHA-256", enc.encode(secret));
  const key = await crypto.subtle.importKey("raw", keyBytes, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const expected = b64url(await crypto.subtle.sign("HMAC", key, enc.encode(body)));
  if (expected.length !== mac.length) return false;
  let diff = 0;
  for (let i = 0; i < mac.length; i++) diff |= mac.charCodeAt(i) ^ expected.charCodeAt(i);
  if (diff) return false;
  try {
    const payload = JSON.parse(fromB64url(body));
    return payload.exp > Date.now() && allowed(payload.email);
  } catch {
    return false;
  }
}

export default async function middleware(request) {
  if (!enabled()) return;
  if (await validSession(request)) return;
  const url = new URL(request.url);
  if (url.pathname.startsWith("/api/")) {
    return new Response(JSON.stringify({ error: "Please sign in." }), { status: 401, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
  }
  const login = new URL("/api/auth/google-login", url);
  login.searchParams.set("next", url.pathname + url.search);
  return Response.redirect(login.toString(), 302);
}
