import type { APIRoute } from "astro";
import { jsonResponse } from "../lib/api";

export const GET: APIRoute = () => {
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "eggx API",
      version: "2.0.0",
      description:
        "Agent-readable static API for eggx verified AI coding deals. Endpoints are static JSON files served from GitHub Pages; URLs include the .json extension. Query parameters on static endpoints are advisory.",
    },
    servers: [
      { url: "https://eggx.wehuman.top" },
      { url: "https://wehuman01.github.io/eggx/" },
    ],
    paths: {
      "/api/v1/offers.json": {
        get: {
          summary: "List all active offers",
          responses: {
            "200": {
              description: "List of active offers",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      schemaVersion: { type: "string" },
                      data: {
                        type: "array",
                        items: { $ref: "#/components/schemas/Offer" },
                      },
                    },
                    required: ["schemaVersion", "data"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/offers/{id}.json": {
        get: {
          summary: "Get a single offer by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description:
                "Offer details. Expired and archived IDs still resolve here — check the `archived` field and `expiresAt` against today before relying on the offer.",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Offer" },
                },
              },
            },
            "404": {
              description: "Offer not found",
            },
          },
        },
      },
      "/api/v1/providers/{slug}.json": {
        get: {
          summary: "Get offers by provider slug",
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Provider offers",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      schemaVersion: { type: "string" },
                      data: {
                        type: "array",
                        items: { $ref: "#/components/schemas/Offer" },
                      },
                    },
                    required: ["schemaVersion", "data"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/snapshot.json": {
        get: {
          summary: "Get schema-versioned snapshot",
          responses: {
            "200": {
              description: "Snapshot",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      schemaVersion: { type: "string" },
                      generatedAt: { type: "string", format: "date-time" },
                      data: {
                        type: "array",
                        items: { $ref: "#/components/schemas/Offer" },
                      },
                    },
                    required: ["schemaVersion", "generatedAt", "data"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/changes.json": {
        get: {
          summary: "Get changes since a date",
          parameters: [
            {
              name: "since",
              in: "query",
              required: false,
              schema: { type: "string", format: "date-time" },
              description:
                "Advisory on static hosting: the file always returns all active offers sorted by lastVerified (newest first); filter client-side with lastVerified >= since",
            },
          ],
          responses: {
            "200": {
              description: "Changes",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      schemaVersion: { type: "string" },
                      since: { type: ["string", "null"] },
                      data: {
                        type: "array",
                        items: { $ref: "#/components/schemas/Offer" },
                      },
                    },
                    required: ["schemaVersion", "since", "data"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/codex-resets.json": {
        get: {
          summary: "List tracked Codex resets and reset cards announced by Tibo (@thsottiaux)",
          description:
            "Static curated snapshot: events sorted newest first, each with source post links (x.com), original English quotes, confirmation status, and the verified Beijing-time stamp. Includes the upstream check time and historical gap statistics across confirmed resets and reset-card grants. History before 2026-06-12 was backfilled in one pass from codex-resets.com (announcement times only; provenance in data.backfill) and merged with the live feed. Chinese translations are available on the web page only. Not an official OpenAI feed; synced automatically from the upstream curator.",
          responses: {
            "200": {
              description: "Reset events and interval statistics",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      schemaVersion: { type: "string" },
                      data: {
                        type: "object",
                        properties: {
                          snapshot: { $ref: "#/components/schemas/ResetSnapshot" },
                          backfill: { $ref: "#/components/schemas/ResetSnapshot" },
                          intervalStats: {
                            type: ["object", "null"],
                            properties: {
                              count: { type: "integer" },
                              min: { type: "integer" },
                              median: { type: "integer" },
                              max: { type: "integer" },
                            },
                          },
                          events: {
                            type: "array",
                            items: { $ref: "#/components/schemas/ResetEvent" },
                          },
                        },
                        required: ["snapshot", "backfill", "events"],
                      },
                    },
                    required: ["schemaVersion", "data"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/v1/aweshare.json": {
        get: {
          summary: "Snapshot of shared models available on the aweshare hub",
          description:
            "Hourly snapshot of the aweshare hub catalog (run by the eggx team): which shared models are usable right now, their wire protocols, status, last hub-side success, and shared daily token budgets. Public fields only — upstream model identity and live occupancy stay hub-side. Status reflects snapshot time and is no availability guarantee.",
          responses: {
            "200": {
              description: "Hub catalog snapshot",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      schemaVersion: { type: "string" },
                      data: {
                        type: "object",
                        properties: {
                          snapshot: { $ref: "#/components/schemas/AweshareSnapshot" },
                          offerings: {
                            type: "array",
                            items: { $ref: "#/components/schemas/AweshareOffering" },
                          },
                        },
                        required: ["snapshot", "offerings"],
                      },
                    },
                    required: ["schemaVersion", "data"],
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        AweshareSnapshot: {
          type: "object",
          required: ["hubUrl", "checkedAt", "count"],
          properties: {
            hubUrl: { type: "string" },
            checkedAt: { type: "string" },
            count: { type: "integer" },
          },
        },
        AweshareOffering: {
          type: "object",
          required: [
            "producer",
            "alias",
            "protocols",
            "status",
            "hubCheckAt",
            "degradedSince",
            "maxConcurrencyPerUser",
            "maxConcurrentUsers",
            "dailyTokens",
            "usedDailyTokens",
            "shareState",
          ],
          properties: {
            producer: { type: "string" },
            alias: { type: "string" },
            protocols: {
              type: "array",
              items: {
                type: "string",
                enum: ["anthropic", "openai-chat", "openai-responses"],
              },
            },
            status: { type: "string", enum: ["online", "degraded", "offline", "blocked"] },
            hubCheckAt: { type: ["string", "null"] },
            degradedSince: { type: ["string", "null"] },
            maxConcurrencyPerUser: { type: "integer" },
            maxConcurrentUsers: { type: "integer" },
            dailyTokens: { type: "integer", description: "0 = unlimited" },
            usedDailyTokens: { type: "integer" },
            shareState: { type: ["string", "null"], enum: ["open", "closed", null] },
          },
        },
        ResetSnapshot: {
          type: "object",
          required: ["checkedAt", "historyFrom", "source", "curator"],
          properties: {
            checkedAt: { type: "string" },
            historyFrom: { type: "string" },
            source: { type: "string" },
            curator: { type: "string" },
          },
        },
        ResetEvent: {
          type: "object",
          required: ["id", "type", "status", "posts"],
          properties: {
            id: { type: "string" },
            type: { type: "string", enum: ["reset", "card"] },
            status: { type: "string", enum: ["confirmed", "announced"] },
            scope: { type: ["string", "null"] },
            confirmedAt: { type: ["string", "null"] },
            occurredOn: { type: ["string", "null"] },
            scheduleFrom: { type: ["string", "null"] },
            scheduleThrough: { type: ["string", "null"] },
            posts: {
              type: "array",
              items: {
                type: "object",
                required: ["stage", "publishedAt", "url", "en"],
                properties: {
                  stage: { type: "string", enum: ["announce", "confirm"] },
                  publishedAt: { type: "string" },
                  url: { type: "string" },
                  en: { type: "string" },
                },
              },
            },
          },
        },
        Offer: {
          type: "object",
          required: [
            "id",
            "provider",
            "kind",
            "access",
            "verified",
            "archived",
            "name",
            "description",
          ],
          properties: {
            id: { type: "string" },
            provider: { type: "string" },
            kind: {
              type: "string",
              enum: ["temporary", "long-term"],
            },
            access: {
              type: "string",
              enum: ["public", "application"],
            },
            verified: { type: "boolean" },
            archived: { type: "boolean" },
            name: {
              type: "object",
              properties: {
                zh: { type: "string" },
                en: { type: "string" },
              },
              required: ["zh", "en"],
            },
            description: {
              type: "object",
              properties: {
                zh: { type: "string" },
                en: { type: "string" },
              },
              required: ["zh", "en"],
            },
            limits: {
              type: "object",
              properties: {
                zh: { type: ["string", "null"] },
                en: { type: ["string", "null"] },
              },
              required: ["zh", "en"],
            },
            caveat: {
              type: "object",
              properties: {
                zh: { type: ["string", "null"] },
                en: { type: ["string", "null"] },
              },
              required: ["zh", "en"],
            },
            url: { type: ["string", "null"] },
            source: { type: ["string", "null"] },
            actionUrl: { type: ["string", "null"] },
            code: { type: ["string", "null"], description: "Redemption code, if the offer ships one" },
            expiresAt: { type: ["string", "null"] },
            lastVerified: { type: ["string", "null"] },
          },
        },
      },
    },
  };

  return jsonResponse(spec);
};
