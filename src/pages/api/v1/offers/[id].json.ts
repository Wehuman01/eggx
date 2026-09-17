import type { APIRoute } from "astro";
import { jsonResponse, serializeOffer } from "../../../../lib/api";
import { offers } from "../../../../content/offers";

export const GET: APIRoute = ({ params }) => {
  const offer = offers.find((o) => o.id === params.id);
  if (!offer) {
    return jsonResponse({ error: "Not found" }, 404);
  }
  return jsonResponse({ schemaVersion: "2.0", data: serializeOffer(offer) });
};

export async function getStaticPaths() {
  return offers.map((o) => ({ params: { id: o.id } }));
}
