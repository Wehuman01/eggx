import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const text = `# eggx

eggx is a verified free AI coding deals registry. Every entry is a real platform, model, or program you can sign up for or apply to — tracked in three tiers:

- **temporary** — limited-time campaigns with a known expiry date, or a caveat when no end date is published.
- **long-term** — ongoing public free tiers and programs you can rely on.
- **application** — benefits that require an application, verification, or invite to claim; grouped in their own section regardless of duration.

## Verification

- **verified=true** — the offer has been confirmed through official channels or direct evidence, and carries a \`lastVerified\` date.
- **verified=false** — community-reported; confirm independently before relying on it.
- **archived** — no longer active; excluded from public listings but kept in history.

## Text fields

All name and description fields are bilingual objects:

- \`name.zh\` / \`description.zh\` — Simplified Chinese (default on the site).
- \`name.en\` / \`description.en\` — English (default on /en/).

Other localized fields (\`limits\`, \`caveat\`) follow the same shape: \`{zh, en}\`, each may be a string or \`null\`.

## Web pages

Default language is Chinese (Simplified). English mirror lives under /en/.

- / — temporary offers (default landing)
- /long-term/ — long-term offers
- /application/ — application-required offers
- /codex-reset/ — Codex reset tracker (full resets and reset cards announced by @thsottiaux)
- /about/ — editorial policy
- /agent/ — agent access guide (Skill, REST API, RSS)
- /en/ — English temporary offers
- /en/long-term/ — English long-term offers
- /en/application/ — English application-required offers
- /en/codex-reset/ — English Codex reset tracker
- /en/about/ — English about
- /en/agent/ — English agent access guide

## API

Endpoints are static JSON files, anonymous and read-only, no API key. Canonical base is https://eggx.wehuman.top (GitHub Pages mirror: https://wehuman01.github.io/eggx/); URLs include the .json extension. All JSON responses carry \`X-API-Version: 2\` and \`schemaVersion: "2.0"\`.

- GET /api/v1/offers.json — all active (non-archived) offers
- GET /api/v1/offers/:id.json — single offer by ID
- GET /api/v1/providers/:slug.json — offers grouped by provider slug (provider lowercased, spaces as hyphens)
- GET /api/v1/snapshot.json — schema-versioned snapshot of the full non-archived registry
- GET /api/v1/codex-resets.json — tracked Codex resets and reset cards (source posts, status, gap stats; not an official OpenAI feed)
- GET /api/v1/changes.json?since=ISO8601 — advisory on static hosting: the file always returns all active offers sorted by lastVerified (newest first); filter client-side with lastVerified >= since

Also served: /feed.xml (RSS 2.0, Chinese default), /llms.txt (this file), /openapi.json (OpenAPI 3.1).

## Agent Skill

An official skill package lives at skills/eggx/ in the repository. Install it with aweskill (one install, projected into Claude Code, Codex, Gemini CLI, Cursor, and more):

- aweskill install wehuman01/eggx --skill eggx
- aweskill update eggx

Manual install: copy skills/eggx/ from https://github.com/wehuman01/eggx into your agent's skills directory. Guide: /agent/.
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-API-Version": "2",
    },
  });
};
