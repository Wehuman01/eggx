// @ts-check
import { defineConfig } from "astro/config";

const SITE = process.env.SITE_URL ?? "https://wehuman01.github.io/eggx/";
const BASE = process.env.BASE_PATH ?? "/eggx/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
});