import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://segulaglobal.com/",
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2022-02-24"),
    }),
  ],
});
