import { existsSync } from "node:fs";
if (existsSync(".env")) process.loadEnvFile(".env");

/** Resolve deployment settings once for Astro and static-output tests. */
export function readSiteConfig(env = process.env) {
  const origin = new URL(env.SITE_URL || "https://tanrobotix.github.io");
  if (
    origin.protocol !== "https:" ||
    origin.pathname !== "/" ||
    origin.search ||
    origin.hash ||
    origin.username ||
    origin.password
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS origin without a path, credentials, query, or fragment.",
    );
  }
  const rawBase = env.BASE_PATH ?? "/";
  if (
    /[^a-zA-Z0-9/_-]/.test(rawBase) ||
    rawBase.includes("..") ||
    rawBase.includes("//")
  ) {
    throw new Error(
      "BASE_PATH must be a simple URL path, for example /tantnd/ or /.",
    );
  }
  const base = `/${rawBase.split("/").filter(Boolean).join("/")}${rawBase.split("/").filter(Boolean).length ? "/" : ""}`;
  const domain = env.CUSTOM_DOMAIN?.trim() || "";
  if (
    domain &&
    (!/^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i.test(domain) ||
      origin.hostname !== domain.toLowerCase() ||
      base !== "/")
  ) {
    throw new Error(
      "CUSTOM_DOMAIN requires a valid hostname, matching SITE_URL, and BASE_PATH=/.",
    );
  }
  return { site: origin.origin, base, domain };
}
