// Step 2 of Google sign-in. Google sends the visitor back here with a code;
// we check the state, exchange the code for tokens, verify the ID token
// (signature, audience, expiry, verified email in the doola.com Workspace)
// and set the signed, HttpOnly session cookie.
import crypto from "node:crypto";
import { config } from "../../lib/env.js";
import { cookies, route } from "../../lib/http.js";
import { issueSession, sessionCookie } from "../../lib/auth.js";
import { verifyGoogleIdToken } from "../../lib/google.js";
import { page } from "../../lib/oauth.js";

const CLEAR_STATE = "qa_oauth=; Path=/api/auth; HttpOnly; SameSite=Lax; Max-Age=0";
const tryAgain = '<a class="btn" href="/api/auth/google-login">Try again</a>';

export const GET = route(async (request) => {
  if (!config.googleEnabled()) return page(503, "Google sign-in isn't set up yet", "Add the Google settings in Vercel, then redeploy.");
  const url = new URL(request.url);
  if (url.searchParams.get("error")) return page(400, "Sign-in was cancelled", "Google didn't complete the sign-in. " + tryAgain, CLEAR_STATE);

  const [state = "", nextB64 = ""] = String(cookies(request).qa_oauth || "").split(".");
  const got = url.searchParams.get("state") || "";
  const same = state && got && state.length === got.length && crypto.timingSafeEqual(Buffer.from(state), Buffer.from(got));
  if (!same) return page(400, "Sign-in expired", "The sign-in took too long or was opened in another window. " + tryAgain, CLEAR_STATE);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code: url.searchParams.get("code") || "",
      client_id: config.googleClientId(),
      client_secret: config.googleClientSecret(),
      redirect_uri: config.googleRedirectUri(),
      grant_type: "authorization_code",
    }),
  });
  const tokens = await res.json().catch(() => ({}));
  if (!res.ok || !tokens.id_token) {
    console.error("Google token exchange failed", res.status, tokens.error);
    return page(502, "Couldn't finish signing in", "Google didn't accept the sign-in. " + tryAgain, CLEAR_STATE);
  }

  let user;
  try {
    user = await verifyGoogleIdToken(tokens.id_token, config.googleClientId(), config.googleDomain());
  } catch (err) {
    const msg = err.status === 403 ? `Only @${config.googleDomain()} Google accounts can open the CS QA dashboard.` : "That sign-in couldn't be verified.";
    return page(403, "Access denied", msg + ' <a class="btn" href="/api/auth/google-login">Use another account</a>', CLEAR_STATE);
  }
  let token;
  try {
    token = issueSession(user.email);
  } catch (err) {
    return page(err.status || 403, "Access denied", err.message, CLEAR_STATE);
  }
  let next = "/";
  try { next = Buffer.from(nextB64, "base64url").toString("utf8") || "/"; } catch {}
  if (!next.startsWith("/") || next.startsWith("//")) next = "/";
  const headers = new Headers({ Location: next, "Cache-Control": "no-store" });
  headers.append("Set-Cookie", sessionCookie(request, token));
  headers.append("Set-Cookie", CLEAR_STATE);
  return new Response(null, { status: 302, headers });
});
