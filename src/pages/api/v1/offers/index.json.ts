import { jsonResponse, activeOnly, serializeOffer } from "../../../../lib/api";
import { offers } from "../../../../content/offers";

export const GET = () => {
  const data = activeOnly(offers).map(serializeOffer);
  return jsonResponse({ schemaVersion: "1.0", data });
};
