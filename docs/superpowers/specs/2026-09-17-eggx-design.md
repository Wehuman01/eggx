# Eggx Design

## Goal

Build a mobile-first public directory for verified free AI coding and agent
offers. Eggx helps people and agents find current opportunities, understand
their limits, and act before time-limited offers expire.

The initial scope is deliberately narrow: offers must be useful for AI coding
or agent workflows. General AI news and ordinary paid-model catalogs are out
of scope.

## Product Shape

Eggx has two equal entry points:

- A visual daily site for people, inspired by AIHOT's daily digest but focused
  on actionable offers rather than news.
- A stable, anonymous, read-only API surface for agents and automation.

The home page highlights current actions in three groups:

- Limited-time offers: campaigns or zero-price lanes that may disappear.
- Multi-model platforms: recurring free model catalogs and gateways.
- Application programs: offers requiring an OSS project, student status, or a
  short application.

Each offer makes the same facts visible: what it gives, who qualifies, the
most important limit, expiry state, official source, verification timestamp,
and a direct action link.

## Content Rules

An offer is only eligible if it supports a coding or agent workflow and has an
official source. Third-party sources can lead to an entry but cannot be its
only evidence.

Every item has one of four states:

- `verified`: official evidence reviewed recently.
- `provisional`: useful lead that still requires official confirmation.
- `expiring`: verified offer with a known end date in the next 14 days.
- `archived`: expired, removed, or no longer valid; retained for audit but not
  recommended on the home page.

Every item also has an independent evidence level:

- `official`: current provider documentation or program page confirms the
  offer.
- `community`: multiple reproducible reports exist, but the provider's terms
  are incomplete or ambiguous.
- `unverified`: a useful lead whose official evidence has not yet been found.

All visible limits are described conservatively. Unknown limits are presented
as "not published" rather than inferred as unlimited.

## Information Architecture

- `/`: current offers, with status filters and an expiry rail.
- `/daily/`: a date-indexed changelog of meaningful additions, removals, and
  limit changes.
- `/providers/<slug>/`: provider detail with offers, configuration hints,
  sources, and verification history.
- `/expires/`: currently expiring items ordered by end date.
- `/about/`: editorial policy, source standards, privacy, and API links.

The visual system is mobile-first: offer cards form a single readable column
on phones; desktop adds a persistent category rail and expiry sidebar. Status
is expressed through labelled badges and text, never colour alone.

## Static-First Architecture

The source of truth is versioned content in Git. A build script validates the
content and emits the site and all machine-readable artifacts. No database,
accounts, or server-side state are needed for the first release.

```text
content/offers.json + content/daily.json
              |
              v
       schema validation
              |
              v
 Astro static build
              |
              +--> responsive web pages
              +--> /api/v1/*.json
              +--> /feed.xml
              +--> /llms.txt
              +--> /openapi.json
```

Astro is the recommended site framework: it produces static HTML by default,
allows a purposeful visual interface without a client-side application shell,
and can generate JSON, RSS, and text routes during the same build.

## Canonical Data

`content/offers.json` is the canonical offer registry. An offer contains:

```json
{
  "id": "opencode-zen-union-alpha",
  "name": "Union Alpha Free",
  "provider": "OpenCode Zen",
  "providerSlug": "opencode-zen",
  "category": "limited-time",
  "summary": "OpenCode Zen's zero-price Union Alpha lane.",
  "eligibility": "OpenCode Zen account",
  "limit": "Not publicly specified",
  "expiresAt": null,
  "status": "verified",
  "lastVerified": "2026-09-17",
  "sourceUrl": "https://opencode.ai/docs/zen",
  "actionUrl": "https://opencode.ai/auth",
  "tags": ["coding-agent", "anthropic-compatible"]
}
```

`content/daily.json` records concise, dated changes that reference registry
offer IDs. It does not duplicate offer facts.

## Public Agent Contract

All endpoints are anonymous, read-only, cacheable, and stable under `/api/v1`.
They return structured JSON with a schema version and timestamps.

- `GET /api/v1/offers?window=active|expiring&category=<category>`: current
  offers with filters.
- `GET /api/v1/offers/<id>`: one offer and its source data.
- `GET /api/v1/providers/<slug>`: provider profile plus its offers.
- `GET /api/v1/daily/latest`: most recent daily change list.
- `GET /api/v1/snapshot`: complete current registry for first synchronization.
- `GET /api/v1/changes`: initial simple change feed. Cursor-based incremental
  replication is deferred until the data volume proves it necessary.

In addition, Eggx serves `/feed.xml`, `/llms.txt`, and `/openapi.json`. The
first release documents the REST contract; MCP is explicitly a second release
once the content and terminology have stabilized.

## Initial Content

The initial registry includes the researched offers from this session:

- ZCode activity, marked `provisional` until confirmed in the client.
- OpenCode Zen Union Alpha Free, marked `verified` and limited-time.
- AIHubMix, OpenRouter, and aweshare as multi-platform entries.
- OpenAI Codex for Open Source, Codex for Students, StepFun Builder Program,
  GitHub Student Developer Pack, and Zed as application/tool entries.

Zed is represented honestly as a free editor with custom-provider support, not
as a source of free inference credits.

## Failure Handling

- Invalid content fails the build before publishing.
- An unavailable official source is shown as an unchanged prior verification,
  never as evidence of continued availability.
- Unknown rate limits remain unknown; the UI never claims "unlimited" without
  explicit official wording.
- Expired and removed entries are archived rather than deleted, preserving the
  public audit trail.
- The site has no user data collection or user-submitted secrets.

## Verification

The repository will have automated tests for data validation, generated API
routes, and expired-offer handling. The production build will be checked before
each release. Manual visual review covers both a narrow mobile viewport and a
wide desktop viewport.
