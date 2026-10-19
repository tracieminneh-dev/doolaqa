# doola QA Dashboard

QA scores for the Customer Care and Account Management teams, month by month,
plus an admin page for running new monthly QA cycles and approving results.

- `/` is the dashboard. Pick a month, pipeline and agent at the top.
- `/admin` is the admin page: month on month charts per team and per agent,
  the **Ping new QA cycle** button with a progress tracker, and approvals that
  send each agent a **QA analysis - month** PDF in Slack.

## How it fits together

| Path | What it does |
|---|---|
| `index.html` | Dashboard. Loads every published month from `/api/data`; falls back to the September 2026 data built into the page. |
| `admin.html` | Admin page. Everything on it goes through the signed-in `/api/admin/*` routes. |
| `api/` | Vercel Functions (Node.js). |
| `lib/roster.js` | The fixed QA roster, HubSpot owner ids and pipeline ids. Only these agents are scored. |
| `lib/pipeline.js` | The monthly run: samples 10 closed tickets per agent, reads each HubSpot conversation, keeps tickets the agent answered (attributed by message sender), scores them with Claude, and publishes the month once every agent is finished. |
| `lib/scorer.js` | The QA rubric prompt and the Claude call (`claude-opus-5-5`, structured JSON output). |
| `lib/report.js`, `lib/slack.js` | The PDF report and the Slack DM. |
| `data/seed-2026-09.js` | September 2026 (Cycle 2), loaded into storage on first run. |

## Setup in Vercel

Set these under Project, Settings, Environment Variables, then redeploy.
Never put real values in this repository.

1. **Storage.** Connect Upstash Redis from the Vercel Marketplace (Storage tab)
   to this project. It adds the connection variables automatically.
2. **Admin sign-in.** `ADMIN_PASSWORD`. Anyone with a doola.com email and this
   password can sign in, and every admin can run cycles and approve. To narrow
   it, set `ADMIN_EMAIL` to specific emails and/or `@domain` entries, comma
   separated. Optional `SESSION_SECRET`: a long random string.
3. **HubSpot.** Create a private app with scopes `tickets`,
   `conversations.read` and `crm.objects.owners.read`, and set
   `HUBSPOT_ACCESS_TOKEN`.
4. **Claude.** Set `ANTHROPIC_API_KEY`. A full monthly run reads up to about
   200 conversations, roughly 10 to 15 US dollars of API usage.
5. **Slack.** Create a Slack app with bot scopes `users:read`,
   `users:read.email`, `im:write`, `files:write` and `chat:write`, install it,
   and set `SLACK_BOT_TOKEN`. Agents are found by their HubSpot email; if an
   email differs in Slack, set `SLACK_USER_MAP` to JSON such as
   `{"Anna H":"U0123ABC"}`.

The admin page shows a checklist of what is still missing.

## Running a monthly cycle

On `/admin`, pick the month and press **Ping new QA cycle**. Keep the page
open: it works through the agents a ticket at a time and shows the
percentage. If the page closes, the run picks up where it left off next time
the admin page is opened. The month is published to the dashboard only when
every agent is finished. Re-running a published month replaces it and resets
its approvals.

## Approving

In **Approvals**, pick the month. **Preview PDF** opens the report;
**Approve and send** builds "QA analysis - month" and sends it to the
agent's Slack DM. Only agents with a full 10 tickets can be approved.

## Local testing

```bash
npm install
cp .env.example .env.local   # fill in test values; QA_MOCK=1 simulates HubSpot, Claude and Slack
npm run dev                  # http://localhost:3123
```

## Privacy

The pages hold customer first names and named agent scores. Keep the GitHub
repository private and turn on Vercel Deployment Protection before sharing.
