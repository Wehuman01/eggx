// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE = process.env.SITE_URL ?? "https://wehuman01.github.io/eggx/";
const BASE = process.env.BASE_PATH ?? "/eggx/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  integrations: [
    sitemap({
      // Machine endpoints (API, feeds, llms.txt) are not landing pages;
      // keep the sitemap to pages a search visitor can open.
      filter: (page) => !/\/(api\/|openapi\.json|feed\.xml|llms\.txt|robots\.txt)/.test(page),
    }),
  ],
});