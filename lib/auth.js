// Admin sign-in. Anyone with an allowed email (by default any @doola.com
// address, see ADMIN_EMAIL) and the shared ADMIN_PASSWORD can sign in, and
// every signed-in admin can run cycles and approve. A successful sign-in sets a
// signed, HttpOnly session cookie that every admin API route checks on the server.

import crypto from "node:crypto";
import { config } from "./env.js";
import { HttpError, cookies } from "./http.js";
import { incrWindow, storageReady } from "./store.js";

const COOKIE = "qa_admin";
const SESSION_HOURS = 12;
const MAX_ATTEMPTS = 8; // per IP per 15 minutes

function key() {
  const secret = config.sessionSecret() || `doola-qa-session:${config.adminPassword()}`;
  return crypto.createHash("sha256").update(secret).digest();
}

const b64 = (buf) => Buffer.from(buf).toString("base64url");

function sign(payload) {
  const body = b64(JSON.stringify(payload));
  const mac = b64(crypto.createHmac("sha256", key()).update(body).digest());
  return `${body}.${mac}`;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// An entry is either an exact email or "@domain" for everyone at that domain.
export function emailAllowed(email) {
  const e = String(email || "").trim().toLowerCase();
  if (!EMAIL.test(e)) return false;
  return config.adminEmails().some((entry) => (entry.startsWith("@") ? e.endsWith(entry) : entry === e));
}

function verify(token) {
  if (!token || !token.includes(".")) return null;
  const [body, mac] = token.split(".");
  const expected = b64(crypto.createHmac("sha256", key()).update(body).digest());
  if (mac.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (!payload.exp || payload.exp < Date.now()) return null;
    if (!emailAllowed(payload.email)) return null;
    return payload;
  } catch {
    return null;
  }
}

function sameSecret(a, b) {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

export function loginConfigured() {
  return config.adminPassword().length > 0;
}

// Failed-attempt limit. Uses storage when connected; before that, a counter
// kept by the running function instance.
const localAttempts = new Map();
async function countAttempt(ip) {
  if (storageReady()) return incrWindow(`qa:login:${ip}`, 15 * 60);
  const now = Date.now();
  const cur = localAttempts.get(ip);
  const next = cur && cur.until > now ? { n: cur.n + 1, until: cur.until } : { n: 1, until: now + 15 * 60 * 1000 };
  localAttempts.set(ip, next);
  return next.n;
}

export async function checkLogin(email, password, ip) {
  if (!loginConfigured()) {
    throw new HttpError(503, "Admin sign-in is not set up yet. Add ADMIN_PASSWORD in Vercel, then redeploy.");
  }
  const attempts = await countAttempt(ip);
  if (attempts > MAX_ATTEMPTS) throw new HttpError(429, "Too many sign-in attempts. Try again in 15 minutes.");
  const normalized = String(email || "").trim().toLowerCase();
  const emailOk = emailAllowed(normalized);
  const passwordOk = sameSecret(config.adminPassword(), password || "");
  if (!emailOk || !passwordOk) throw new HttpError(401, "Use your doola email address and the admin password.");
  return sign({ email: normalized, exp: Date.now() + SESSION_HOURS * 3600 * 1000 });
}

export function sessionCookie(request, token) {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  const maxAge = token ? SESSION_HOURS * 3600 : 0;
  return `${COOKIE}=${token || ""}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`;
}

export function currentAdmin(request) {
  if (!loginConfigured()) return null;
  return verify(cookies(request)[COOKIE]);
}

export function requireAdmin(request) {
  const admin = currentAdmin(request);
  if (!admin) throw new HttpError(401, "Please sign in to the admin page.");
  return admin;
}
