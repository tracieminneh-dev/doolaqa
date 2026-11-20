// Step 1 of Google sign-in: send the visitor to Google with our client ID,
// redirect URI and the openid email profile scopes. A random state value is
// kept in a short-lived cookie and checked on the way back.
import crypto from "node:crypto";
import { config } from "../../lib/env.js";
import { route } from "../../lib/http.js";
import { safeNext, page } from "../../lib/oauth.js";

export const GET = route(async (request) => {
  if (!config.googleEnabled()) return page(503, "Google sign-in isn't set up yet", "Add GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET and GOOGLE_REDIRECT_URI in Vercel, then redeploy.");
  const url = new URL(request.url);
  const state = crypto.randomBytes(24).toString("base64url");
  const next = safeNext(url.searchParams.get("next"));
  const google = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  google.search = new URLSearchParams({
    client_id: config.googleClientId(),
    redirect_uri: config.googleRedirectUri(),
    response_type: "code",
    scope: "openid email profile",
    hd: config.googleDomain(),
    prompt: "select_account",
    state,
  }).toString();
  const secure = url.protocol === "https:" ? "; Secure" : "";
  const cookie = `qa_oauth=${state}.${Buffer.from(next).toString("base64url")}; Path=/api/auth; HttpOnly; SameSite=Lax; Max-Age=600${secure}`;
  return new Response(null, { status: 302, headers: { Location: google.toString(), "Set-Cookie": cookie, "Cache-Control": "no-store" } });
});
