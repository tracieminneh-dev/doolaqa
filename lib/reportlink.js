// Personal report links. Each agent gets a link to their own month's report in
// their Slack DM. The token names the month and agent and is signed with the
// session key, so it can't be edited to open someone else's report or to file
// a dispute in their name.
import crypto from "node:crypto";
import { signValue } from "./auth.js";

const enc = (s) => Buffer.from(s).toString("base64url");

export function reportToken(month, agent) {
  const body = enc(JSON.stringify({ m: month, a: agent }));
  return `${body}.${signValue("report:" + body)}`;
}

export function readReportToken(token) {
  const [body, mac] = String(token || "").split(".");
  if (!body || !mac) return null;
  const expected = signValue("report:" + body);
  if (mac.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return null;
  try {
    const { m, a } = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    return /^\d{4}-(0[1-9]|1[0-2])$/.test(m) && a ? { month: m, agent: a } : null;
  } catch {
    return null;
  }
}

export const reportUrl = (origin, month, agent) => `${origin}/report?t=${reportToken(month, agent)}`;
