// Central place for configuration. Every secret comes from environment
// variables (set in Vercel Project Settings), never from the repository.

const env = (name) => (process.env[name] || "").trim();

export const isVercel = () => Boolean(process.env.VERCEL);

// Local mock mode lets the whole admin flow run without HubSpot, Claude or
// Slack credentials. It can never switch on in a Vercel deployment.
export const isMock = () => env("QA_MOCK") === "1" && !isVercel();

export const config = {
  adminEmails: () => env("ADMIN_EMAIL").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean),
  adminPassword: () => env("ADMIN_PASSWORD"),
  sessionSecret: () => env("SESSION_SECRET"),
  hubspotToken: () => env("HUBSPOT_ACCESS_TOKEN"),
  anthropicKey: () => env("ANTHROPIC_API_KEY"),
  slackToken: () => env("SLACK_BOT_TOKEN"),
  // Optional JSON map of agent name to Slack member ID, e.g. {"Anna H":"U0123ABC"}
  slackUserMap: () => {
    const raw = env("SLACK_USER_MAP");
    if (!raw) return {};
    try { return JSON.parse(raw); } catch { return {}; }
  },
  redisUrl: () => env("UPSTASH_REDIS_REST_URL") || env("KV_REST_API_URL"),
  redisToken: () => env("UPSTASH_REDIS_REST_TOKEN") || env("KV_REST_API_TOKEN"),
};

// What the admin page shows in its setup checklist.
export function setupStatus() {
  const mock = isMock();
  return {
    mock,
    login: config.adminEmails().length > 0 && config.adminPassword().length > 0,
    storage: Boolean(config.redisUrl() && config.redisToken()) || !isVercel(),
    hubspot: mock || Boolean(config.hubspotToken()),
    claude: mock || Boolean(config.anthropicKey()),
    slack: mock || Boolean(config.slackToken()),
  };
}
