// Verifies a "Sign in with Google" ID token on the server: signature against
// Google's published keys, issuer, audience (our OAuth client ID), expiry, and
// a verified email in the doola.com Google Workspace.

import crypto from "node:crypto";
import { HttpError } from "./http.js";

const CERTS_URL = "https://www.googleapis.com/oauth2/v3/certs";
const ISSUERS = new Set(["accounts.google.com", "https://accounts.google.com"]);
let cache = { keys: null, until: 0 };

async function googleKeys(forceRefresh = false) {
  if (!forceRefresh && cache.keys && cache.until > Date.now()) return cache.keys;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new HttpError(502, "Couldn't reach Google to check the sign-in. Try again.");
  const { keys } = await res.json();
  const maxAge = Number(/max-age=(\d+)/.exec(res.headers.get("cache-control") || "")?.[1] || 3600);
  cache = { keys, until: Date.now() + Math.min(maxAge, 6 * 3600) * 1000 };
  return keys;
}

const decode = (part) => JSON.parse(Buffer.from(part, "base64url").toString("utf8"));

export async function verifyGoogleIdToken(idToken, clientId, domain) {
  const bad = () => new HttpError(401, "That Google sign-in couldn't be verified. Try again.");
  const parts = String(idToken || "").split(".");
  if (parts.length !== 3) throw bad();
  let header, payload;
  try {
    header = decode(parts[0]);
    payload = decode(parts[1]);
  } catch {
    throw bad();
  }
  if (header.alg !== "RS256" || !header.kid) throw bad();

  let jwk = (await googleKeys()).find((k) => k.kid === header.kid);
  if (!jwk) jwk = (await googleKeys(true)).find((k) => k.kid === header.kid);
  if (!jwk) throw bad();
  const key = crypto.createPublicKey({ key: jwk, format: "jwk" });
  const ok = crypto.verify("RSA-SHA256", Buffer.from(`${parts[0]}.${parts[1]}`), key, Buffer.from(parts[2], "base64url"));
  if (!ok) throw bad();

  const now = Math.floor(Date.now() / 1000);
  if (!ISSUERS.has(payload.iss) || payload.aud !== clientId || !(payload.exp > now - 60)) throw bad();
  const email = String(payload.email || "").toLowerCase();
  if (payload.email_verified !== true || !email) throw bad();
  // hd is only set for Google Workspace accounts, so a personal Gmail with a
  // look-alike address can't pass.
  if (payload.hd !== domain || !email.endsWith(`@${domain}`)) {
    throw new HttpError(403, `Sign in with your @${domain} Google account.`);
  }
  return { email, name: payload.name || "" };
}
