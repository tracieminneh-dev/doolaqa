// Key-value storage. In production this is Upstash Redis (connected through the
// Vercel Marketplace), spoken to over its REST API. Locally, without Redis
// credentials, it falls back to a JSON file in .data/ so the app can be tested.

import fs from "node:fs";
import path from "node:path";
import { config, isVercel } from "./env.js";
import { HttpError } from "./http.js";

const hasRedis = () => Boolean(config.redisUrl() && config.redisToken());

export function storageReady() {
  return hasRedis() || !isVercel();
}

function requireStorage() {
  if (!storageReady()) {
    throw new HttpError(503, "Storage is not connected yet. Connect Upstash Redis to this Vercel project, then redeploy.");
  }
}

async function redis(command) {
  const res = await fetch(config.redisUrl(), {
    method: "POST",
    headers: { Authorization: `Bearer ${config.redisToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.error) throw new Error(`Redis ${command[0]} failed: ${body.error || res.status}`);
  return body.result;
}

// ---- local development store -------------------------------------------
const DEV_FILE = path.join(process.cwd(), ".data", "dev-store.json");
let devCache = null;
function dev() {
  if (!devCache) {
    try { devCache = JSON.parse(fs.readFileSync(DEV_FILE, "utf8")); } catch { devCache = {}; }
  }
  const now = Date.now();
  for (const [k, v] of Object.entries(devCache)) if (v.exp && v.exp < now) delete devCache[k];
  return devCache;
}
function devSave() {
  fs.mkdirSync(path.dirname(DEV_FILE), { recursive: true });
  fs.writeFileSync(DEV_FILE, JSON.stringify(devCache));
}

// ---- public API ------------------------------------------------------------
export async function getJson(key) {
  requireStorage();
  if (!hasRedis()) return dev()[key]?.v ?? null;
  const raw = await redis(["GET", key]);
  return raw == null ? null : JSON.parse(raw);
}

export async function mgetJson(keys) {
  requireStorage();
  if (!keys.length) return [];
  if (!hasRedis()) return keys.map((k) => dev()[k]?.v ?? null);
  const raws = await redis(["MGET", ...keys]);
  return raws.map((r) => (r == null ? null : JSON.parse(r)));
}

// Returns false when `nx` is set and the key already exists.
export async function setJson(key, value, { ex, nx } = {}) {
  requireStorage();
  if (!hasRedis()) {
    const d = dev();
    if (nx && d[key]) return false;
    d[key] = { v: value, exp: ex ? Date.now() + ex * 1000 : 0 };
    devSave();
    return true;
  }
  const cmd = ["SET", key, JSON.stringify(value)];
  if (ex) cmd.push("EX", String(ex));
  if (nx) cmd.push("NX");
  return (await redis(cmd)) === "OK";
}

export async function del(key) {
  requireStorage();
  if (!hasRedis()) { delete dev()[key]; devSave(); return; }
  await redis(["DEL", key]);
}

// Counter with a time window, used for login rate limiting.
export async function incrWindow(key, ttlSeconds) {
  requireStorage();
  if (!hasRedis()) {
    const d = dev();
    const cur = d[key] || { v: 0, exp: Date.now() + ttlSeconds * 1000 };
    cur.v += 1;
    d[key] = cur;
    devSave();
    return cur.v;
  }
  const n = await redis(["INCR", key]);
  if (n === 1) await redis(["EXPIRE", key, String(ttlSeconds)]);
  return n;
}
