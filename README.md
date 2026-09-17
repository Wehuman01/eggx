# eggx

A mobile-first directory of verified free AI coding and agent offers — for humans and for agents.

eggx answers one question: **what can I claim for free right now to build with AI?** It tracks limited-time campaigns, multi-model free platforms, and application programs (OSS maintainers, students, builders), each with honest limits, expiry state, official sources, and the date it was last verified.

## Why

Free AI offers appear and vanish weekly. Most lists rot because nobody re-checks them. eggx treats an offer as a small claim with evidence: a source URL, an evidence level, a lifecycle state, and a `lastVerified` date. Unknown limits are shown as "not published" — never as "unlimited".

## Site

- `/` — current offers grouped by limited-time / platform / application, with an expiry rail
- `/daily/` — dated changelog of additions, removals, and limit changes
- `/providers/<slug>/` — provider profile: sources, action links, access and evidence levels
- `/expires/` — offers ending soon, ordered by end date
- `/about/` — editorial policy and evidence standards

## Agent API

Anonymous, read-only, statically generated, cacheable. All responses carry `X-API-Version: 1`.

| Endpoint | Description |
| --- | --- |
| `GET /api/v1/offers` | Active offers |
| `GET /api/v1/offers/:id` | One offer |
| `GET /api/v1/providers/:slug` | Provider profile with its offers |
| `GET /api/v1/daily/latest` | Latest daily changelog |
| `GET /api/v1/snapshot` | Schema-versioned full registry (non-archived) |
| `GET /api/v1/changes?since=ISO8601` | Change feed |

Also served: `/feed.xml` (RSS 2.0), `/llms.txt` (agent guide), `/openapi.json` (OpenAPI 3.1).

```bash
curl https://wehuman01.github.io/eggx/api/v1/offers
curl https://wehuman01.github.io/eggx/api/v1/snapshot | jq '.data[0]'
```

Static endpoints mean query parameters are advisory in `changes` (documented in OpenAPI); do full-sync via `snapshot`.

## Content model

Source of truth: `src/content/offers.ts` (validated at import time).

- **Category**: `limited-time` | `platform` | `application`
- **Access**: `public` | `invite` | `student` | `application`
- **Evidence**: `official` | `community` | `unverified`
- **State**: `verified` | `provisional` | `expiring` | `archived`

Rules enforced by tests:

- every non-archived offer carries a source URL, an action URL, and a `lastVerified` date
- limited-time offers carry an expiry date or an explicit caveat
- expiry dates may not be in the past
- archived offers stay in history; they are never silently deleted

## Develop

```bash
npm install
npm run dev     # local dev (set SITE_URL=/ BASE_PATH=/ for root serving)
npm test        # vitest (run once)
npm run check   # astro check
npm run build   # static build to dist/
```

Tests that assert build output assume `npm run build` has already run — same as CI.

## Deploy

GitHub Actions builds on push to `main` and publishes `dist/` to GitHub Pages. Pages source must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## License

MIT.
