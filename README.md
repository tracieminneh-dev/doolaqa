# CS QA Dashboard

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
2. **Google sign-in (recommended).** Set `GOOGLE_CLIENT_ID` to a Google OAuth
   client ID (Google Cloud Console, APIs & Services, Credentials, OAuth client
   ID, type Web application, Authorized JavaScript origin
   `https://doolaqa-d76b.vercel.app`; no redirect URI needed). Admins then
   use **Sign in with Google**, only verified @doola.com Google Workspace
   accounts get in, and the shared password is switched off. Sessions are
   signed with `SESSION_SECRET` (a long random string) or, if that is not
   set, a key derived from `ADMIN_PASSWORD`, so keep one of them.
   Without `GOOGLE_CLIENT_ID`, sign-in falls back to the password below.
3. **Admin sign-in (password fallback).** `ADMIN_PASSWORD`. Anyone with a doola.com email and this
   password can sign in, and every admin can run cycles and approve. To narrow
   it, set `ADMIN_EMAIL` to specific emails and/or `@domain` entries, comma
   separated. Optional `SESSION_SECRET`: a long random string.
4. **Slack.** Create a Slack app with bot scopes `users:read`,
   `users:read.email`, `im:write`, `files:write` and `chat:write`, install it,
   and set `SLACK_BOT_TOKEN`. Agents are found by their HubSpot email; if an
   email differs in Slack, set `SLACK_USER_MAP` to JSON such as
   `{"Anna H":"U0123ABC"}`. Without a HubSpot token the report can't look up
   HubSpot emails, so list every agent in `SLACK_USER_MAP`.
5. **Optional: one-click runs.** `HUBSPOT_ACCESS_TOKEN` (private app with
   scopes `tickets`, `crm.objects.notes.read`, `conversations.read`,
   `crm.objects.owners.read`) plus `ANTHROPIC_API_KEY` switch on the
   **Ping new QA cycle** button. Not needed: by default cycles are run through
   Claude (see below).

The admin page shows a checklist of what is still missing.

## Running a monthly cycle

**Default: through Claude.** After a month closes, ask Claude in this project
to "run QA for <month>". Claude reads each agent's closed tickets through the
HubSpot connector (conversations, HubSpot notes and response times), scores
them against the rubric, writes `data/seed-YYYY-MM.js`, lists it in
`data/seeds.js` and pushes to `main`. Vercel redeploys and the month appears
on the dashboard and in admin, ready for ticket review and approvals. A month
already in storage is never overwritten by a seed.

**With the optional keys:** on `/admin`, pick the month and press **Ping new QA cycle**. Keep the page
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
