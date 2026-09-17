import type { APIRoute } from "astro";
import { jsonResponse, activeOnly, serializeOffer } from "../../../lib/api";
import { offers } from "../../../content/offers";

// Static hosting: query params never reach the handler, so `since` is always
// null in the emitted file. The list is sorted by lastVerified (newest first),
// which lets callers do incremental sync with a prefix scan on lastVerified.
export const GET: APIRoute = () => {
  const data = activeOnly(offers)
    .map(serializeOffer)
    .sort((a, b) => (b.lastVerified ?? "").localeCompare(a.lastVerified ?? ""));
  return jsonResponse({
    schemaVersion: "2.0",
    since: null,
    data,
  });
};
