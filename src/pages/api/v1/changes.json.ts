import type { APIRoute } from "astro";
import { jsonResponse, activeOnly, serializeOffer } from "../../../lib/api";
import { offers } from "../../../content/offers";

export const GET: APIRoute = ({ url }) => {
  const since = url.searchParams.get("since");
  const data = activeOnly(offers).map(serializeOffer);
  return jsonResponse({
    schemaVersion: "2.0",
    since: since ?? null,
    data,
  });
};
