import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { writeFile, rm } from "node:fs/promises";
import { readSiteConfig } from "./scripts/site-config.mjs";

const { site, base, domain } = readSiteConfig();
export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "ignore",
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({
      filter: (page) => !/\/(?:404|wedding)\/?$/.test(new URL(page).pathname),
    }),
    {
      name: "optional-custom-domain",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          const path = new URL("CNAME", dir);
          if (domain) await writeFile(path, `${domain}\n`);
          else await rm(path, { force: true });
        },
      },
    },
  ],
});
