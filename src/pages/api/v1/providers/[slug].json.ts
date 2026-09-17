import type { APIRoute } from "astro";
import { jsonResponse, activeOnly, serializeOffer, toSlug } from "../../../../lib/api";
import { offers } from "../../../../content/offers";

export const GET: APIRoute = ({ params }) => {
  const slug = params.slug;
  const matched = activeOnly(offers).filter((o) => toSlug(o.provider) === slug);
  if (matched.length === 0) {
    return jsonResponse({ error: "Provider not found" }, 404);
  }
  return jsonResponse({
    schemaVersion: "2.0",
    data: matched.map(serializeOffer),
  });
};

export async function getStaticPaths() {
  const providers = [...new Set(offers.map((o) => o.provider))];
  return providers.map((p) => ({ params: { slug: toSlug(p) } }));
}
