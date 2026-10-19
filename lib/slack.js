// Sends an approved QA report to an agent's Slack DM. Needs SLACK_BOT_TOKEN for
// a Slack app with scopes: users:read, users:read.email, im:write, files:write,
// chat:write.

import { config, isMock } from "./env.js";
import * as mock from "./mock.js";

const FRIENDLY = {
  users_not_found: "No Slack account matches this agent's email. Add their Slack member ID to SLACK_USER_MAP.",
  missing_scope: "The Slack app is missing a permission. It needs users:read, users:read.email, im:write, files:write and chat:write.",
  not_authed: "SLACK_BOT_TOKEN is missing or invalid.",
  invalid_auth: "SLACK_BOT_TOKEN is missing or invalid.",
  account_inactive: "The Slack app token has been revoked. Reinstall the app and update SLACK_BOT_TOKEN.",
  user_disabled: "This agent's Slack account is deactivated.",
  cannot_dm_bot: "The Slack member ID points at a bot, not a person.",
};

async function slack(method, params) {
  const res = await fetch(`https://slack.com/api/${method}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.slackToken()}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params),
  });
  const data = await res.json().catch(() => ({ ok: false, error: `http_${res.status}` }));
  if (!data.ok) throw new Error(FRIENDLY[data.error] || `Slack ${method} failed: ${data.error}`);
  return data;
}

export async function findSlackUser({ agentName, email }) {
  const mapped = config.slackUserMap()[agentName];
  if (mapped) return mapped;
  if (!email) throw new Error("No email on this agent's HubSpot owner record, so Slack cannot find them. Add them to SLACK_USER_MAP.");
  const data = await slack("users.lookupByEmail", { email });
  return data.user.id;
}

export async function sendReportDm({ agentName, email, filename, title, pdfBytes, message }) {
  if (isMock()) return mock.sendReportDm({ agentName, filename, pdfBytes });
  if (!config.slackToken()) throw new Error("SLACK_BOT_TOKEN is not set.");
  const userId = await findSlackUser({ agentName, email });
  const dm = await slack("conversations.open", { users: userId });
  const channel = dm.channel.id;
  const upload = await slack("files.getUploadURLExternal", { filename, length: String(pdfBytes.length) });
  const put = await fetch(upload.upload_url, { method: "POST", headers: { "Content-Type": "application/octet-stream" }, body: pdfBytes });
  if (!put.ok) throw new Error(`Uploading the PDF to Slack failed (${put.status}).`);
  await slack("files.completeUploadExternal", {
    files: JSON.stringify([{ id: upload.file_id, title }]),
    channel_id: channel,
    initial_comment: message,
  });
  return { channel, fileId: upload.file_id };
}
