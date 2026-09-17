# eggx

A mobile-first directory of verified free AI coding and agent offers — for humans and for agents.

eggx answers one question: **what can I claim for free right now to build with AI?** It tracks temporary campaigns and long-term free tiers — open platforms, student programs, invite-only hubs, and application-based benefits — each with honest limits, verified status, official sources, and the date it was last confirmed.

## Why

Free AI offers appear and vanish weekly. Most lists rot because nobody re-checks them. eggx treats an offer as a small claim with evidence: a source URL, a verified flag, a kind (temporary / long-term), and a `lastVerified` date. Unknown limits are shown as "not published" — never as "unlimited".

## Site

- `/` — temporary offers (default landing, Chinese)
- `/long-term/` — long-term offers
- `/about/` — editorial policy
- `/en/` — English temporary offers
- `/en/long-term/` — English long-term offers
- `/en/about/` — English about

## Agent API

Anonymous, read-only, statically generated, cacheable. All JSON responses carry `X-API-Version: 2` and `schemaVersion: "2.0"`.

| Endpoint | Description |
| --- | --- |
| `GET /api/v1/offers` | All active (non-archived) offers |
| `GET /api/v1/offers/:id.json` | One offer by ID |
| `GET /api/v1/providers/:slug.json` | Offers grouped by provider slug |
| `GET /api/v1/snapshot.json` | Schema-versioned full registry (non-archived) |
| `GET /api/v1/changes.json?since=ISO8601` | Change feed |

Text fields (`name`, `description`, `limits`, `caveat`) are bilingual objects: `{zh: string, en: string}`. `limits` and `caveat` may also be `null`.

`kind` is one of `temporary` | `long-term`. `access` is one of `public` | `invite` | `student` | `application`. `verified` is a boolean. `archived` is a boolean (default `false`); archived entries are excluded from listings but retained in history.

Endpoints are static JSON files on GitHub Pages; URLs include the `.json` extension.

Also served: `/feed.xml` (RSS 2.0, Chinese default), `/llms.txt` (agent guide), `/openapi.json` (OpenAPI 3.1).

```bash
curl https://wehuman01.github.io/eggx/api/v1/offers
curl https://wehuman01.github.io/eggx/api/v1/snapshot | jq '.data[0]'
```

Static endpoints mean query parameters are advisory in `changes` (documented in OpenAPI); do full-sync via `snapshot`.

## Content model

Source of truth: `src/content/offers.ts` (validated at import time).

- **kind**: `temporary` | `long-term`
- **access**: `public` | `invite` | `student` | `application`
- **verified**: boolean — official-channel or direct-evidence confirmation
- **archived**: boolean — excluded from public listings, kept in history

Rules enforced by tests:

- every non-archived offer carries an http(s) `source`, an http(s) `actionUrl`, and a `lastVerified` date (`YYYY-MM-DD`)
- `temporary` offers must have an `expiry` date or a non-empty `zh.caveat`
- `expiry` dates may not be in the past
- `zh.name` and `en.name` are non-empty strings; same for `description`
- `archived` offers stay in history; they are never silently deleted

## Develop

```bash
npm install
npm run dev     # local dev
npm test        # vitest (run once)
npm run check   # astro check
npm run build   # static build to dist/
```

Tests that assert build output assume `npm run build` has already run — same as CI.

## Deploy

GitHub Actions builds on push to `main` and publishes `dist/` to GitHub Pages. Pages source must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## License

MIT.
