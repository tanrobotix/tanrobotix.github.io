import { defineConfig } from "@playwright/test";
import { readSiteConfig } from "./scripts/site-config.mjs";
const { base } = readSiteConfig();

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4322",
    browserName: "chromium",
    channel: process.env.CI ? undefined : "chrome",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run preview -- --port 4322 --ignore-lock",
    url: `http://127.0.0.1:4322${base}`,
    reuseExistingServer: false,
  },
});
