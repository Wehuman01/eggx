import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const text = `# eggx

eggx is a curated registry of limited-time AI platform offers and applications.

## Verification rules

- **verified**: offer has been confirmed through official channels or direct evidence.
- **provisional**: offer is community-reported and requires explicit confirmation before relying on it.
- **expiring**: offer has a known expiry date and is nearing or past it.
- **archived**: offer is no longer active and is excluded from public listings.

## API

- GET /api/v1/offers — all active offers
- GET /api/v1/offers/:id — single offer by ID
- GET /api/v1/providers/:slug — offers by provider slug
- GET /api/v1/daily/latest — daily selection
- GET /api/v1/snapshot — schema-versioned snapshot
- GET /api/v1/changes?since=ISO8601 — changes since a date

All JSON responses include X-API-Version: 1 and Cache-Control headers.
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-API-Version": "1",
    },
  });
};
