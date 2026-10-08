# doola QA Dashboard

Static single-page dashboard. No build step, no dependencies, no server.

## Contents
- `index.html` - the entire dashboard, self-contained
- `vercel.json` - noindex headers so the page stays out of search engines

## Deploy

**Option A, drag and drop (no tooling)**
1. Go to https://vercel.com/new
2. Drag this whole folder onto the deploy area
3. Framework Preset: **Other**. Leave build and output settings empty.
4. Deploy.

**Option B, CLI**
```bash
npm i -g vercel
cd qa-dashboard-vercel
vercel          # preview deployment
vercel --prod   # production
```

**Option C, Git**
Commit this folder to a repo, import it at https://vercel.com/new,
Framework Preset "Other", no build command, output directory `.`

## Restrict access before sharing

This page contains customer names, ticket content and named agent
performance scores. A Vercel deployment is public by default.

Project Settings > Deployment Protection, then enable either:
- **Vercel Authentication** - only your Vercel team members can open it
- **Password Protection** - single shared password (paid plans)

Set this before circulating the URL.

## Updating

Replace `index.html` and redeploy. All data lives in the `T` array
inside the file, so a new QA cycle is a data edit, not a rebuild.
