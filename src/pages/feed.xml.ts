import type { APIRoute } from "astro";
import { activeOnly, serializeOffer } from "../lib/api";
import { offers } from "../content/offers";

export const GET: APIRoute = ({ site }) => {
  const items = activeOnly(offers)
    .slice(0, 20)
    .map((o) => {
      const s = serializeOffer(o);
      const link = s.url ?? s.actionUrl ?? "";
      const title = typeof s.name === "string" ? s.name : s.name.zh;
      const description = typeof s.description === "string" ? s.description : s.description.zh;
      const pubDate = s.lastVerified
        ? `<pubDate>${new Date(`${s.lastVerified}T00:00:00Z`).toUTCString()}</pubDate>`
        : "";
      return `<item>
          <title>${escapeXml(title)}</title>
          <link>${escapeXml(link)}</link>
          <guid isPermaLink="false">${escapeXml(s.id)}</guid>
          <description>${escapeXml(description)}</description>
          ${pubDate}
          ${s.expiresAt ? `<expiry>${escapeXml(s.expiresAt)}</expiry>` : ""}
        </item>`;
    })
    .join("\n");

  // RSS 2.0 wants absolute URLs: the channel link points at the site home,
  // not at the feed itself.
  const homeUrl = site ? new URL("/", site).href : "/";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>eggx — 一代人有一代人的鸡蛋领吧</title>
    <link>${escapeXml(homeUrl)}</link>
    <description>持续核实的免费 AI 编码额度与平台目录</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>eggx</generator>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "X-API-Version": "2",
    },
  });
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
