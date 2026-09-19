import type { APIRoute } from "astro";

// Answer engines and training crawlers are explicitly welcome: eggx is a
// public, read-only directory. The Sitemap line derives from `site`, so it
// follows SITE_URL in CI instead of hardcoding the domain.
const AI_AGENTS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT live fetch
  "ClaudeBot", // Anthropic training
  "Claude-Web", // Anthropic live fetch
  "anthropic-ai",
  "PerplexityBot",
  "PerplexityBot-User",
  "Google-Extended", // Gemini
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Meta-ExternalAgent",
];

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = site ? new URL("sitemap-index.xml", site).href : "";
  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    ...AI_AGENTS.flatMap((agent) => ["User-agent: " + agent, "Allow: /", ""]),
    ...(sitemapUrl ? ["Sitemap: " + sitemapUrl] : []),
  ];
  return new Response(lines.join("\n").trimEnd() + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
