import type { APIRoute } from "astro";
import { jsonResponse, activeOnly, serializeOffer } from "../../../../lib/api";
import { daily } from "../../../../content/daily";

export const GET: APIRoute = () => {
  const data = activeOnly(daily).map(serializeOffer);
  return jsonResponse({ schemaVersion: "1.0", data });
};
