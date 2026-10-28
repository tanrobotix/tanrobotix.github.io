import test from "node:test";
import assert from "node:assert/strict";
import { readSiteConfig } from "../scripts/site-config.mjs";

test("local site defaults to root and permits an explicit deployment base", () => {
  assert.deepEqual(readSiteConfig({}), {
    site: "https://tanrobotix.github.io",
    base: "/",
    domain: "",
  });
  assert.equal(readSiteConfig({ BASE_PATH: "portfolio" }).base, "/portfolio/");
});
test("custom domain requires matching origin and root base", () => {
  assert.deepEqual(
    readSiteConfig({
      SITE_URL: "https://duytan.is-a.dev",
      BASE_PATH: "/",
      CUSTOM_DOMAIN: "duytan.is-a.dev",
    }),
    { site: "https://duytan.is-a.dev", base: "/", domain: "duytan.is-a.dev" },
  );
  assert.throws(() => readSiteConfig({ CUSTOM_DOMAIN: "duytan.is-a.dev" }));
  assert.throws(() =>
    readSiteConfig({
      SITE_URL: "https://duytan.is-a.dev",
      BASE_PATH: "/tantnd/",
      CUSTOM_DOMAIN: "duytan.is-a.dev",
    }),
  );
});
test("rejects malformed deployment settings", () => {
  for (const SITE_URL of [
    "http://example.com",
    "https://example.com/path",
    "https://user:pass@example.com",
    "https://example.com?a=b",
  ])
    assert.throws(() => readSiteConfig({ SITE_URL }));
  for (const BASE_PATH of ["/../", "//bad/", "/bad?query"])
    assert.throws(() => readSiteConfig({ BASE_PATH }));
});
