import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const text = `# eggx

eggx is a verified free AI coding deals registry. Every entry is a real platform, model, or program you can sign up for or apply to — tracked in two tiers:

- **temporary** — limited-time campaigns with a known expiry date, or a caveat when no end date is published.
- **long-term** — ongoing free tiers, student programs, invite-only hubs, and application-based benefits.

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
- /about/ — editorial policy
- /en/ — English temporary offers
- /en/long-term/ — English long-term offers
- /en/about/ — English about

## API

Endpoints are static JSON files served from GitHub Pages at /eggx/; URLs include the .json extension. All JSON responses carry \`X-API-Version: 2\` and \`schemaVersion: "2.0"\`.

- GET /api/v1/offers — all active (non-archived) offers
- GET /api/v1/offers/:id.json — single offer by ID
- GET /api/v1/providers/:slug.json — offers grouped by provider slug
- GET /api/v1/snapshot.json — schema-versioned snapshot of the full non-archived registry
- GET /api/v1/changes.json?since=ISO8601 — offers changed since the given date

Also served: /feed.xml (RSS 2.0, Chinese default), /llms.txt (this file), /openapi.json (OpenAPI 3.1).
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-API-Version": "2",
    },
  });
};
