import type { APIRoute } from "astro";
import { jsonResponse } from "../lib/api";

export const GET: APIRoute = () => {
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "eggx API",
      version: "1.0.0",
      description: "Agent-readable static API for eggx offers",
    },
    paths: {
      "/api/v1/offers": {
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
      "/api/v1/offers/{id}": {
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
              description: "Offer details",
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
      "/api/v1/providers/{slug}": {
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
      "/api/v1/daily/latest": {
        get: {
          summary: "Get latest daily offers",
          responses: {
            "200": {
              description: "Daily offers",
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
      "/api/v1/snapshot": {
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
      "/api/v1/changes": {
        get: {
          summary: "Get changes since a date",
          parameters: [
            {
              name: "since",
              in: "query",
              required: false,
              schema: { type: "string", format: "date-time" },
              description: "ISO-8601 date to filter changes since",
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
    },
    components: {
      schemas: {
        Offer: {
          type: "object",
          required: [
            "id",
            "name",
            "provider",
            "category",
            "access",
            "evidence",
            "state",
            "description",
          ],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            provider: { type: "string" },
            category: {
              type: "string",
              enum: ["limited-time", "platform", "application"],
            },
            access: {
              type: "string",
              enum: ["public", "invite", "student", "application"],
            },
            evidence: {
              type: "string",
              enum: ["official", "community", "unverified"],
            },
            state: {
              type: "string",
              enum: ["verified", "provisional", "expiring", "archived"],
            },
            description: { type: "string" },
            url: { type: ["string", "null"] },
            source: { type: ["string", "null"] },
            actionUrl: { type: ["string", "null"] },
            limits: { type: ["string", "null"] },
            expiresAt: { type: ["string", "null"] },
            caveat: { type: ["string", "null"] },
            lastVerified: { type: ["string", "null"] },
          },
        },
      },
    },
  };

  return jsonResponse(spec);
};
