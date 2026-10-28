import test from "node:test";
import { globSync } from "node:fs";
import { contacts, projects, experience } from "../src/data/portfolio.ts";
import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { resolve, join } from "node:path";
import { load } from "cheerio";
import { readSiteConfig } from "../scripts/site-config.mjs";

const { site, base, domain } = readSiteConfig();
const root = resolve("dist");
const html = await readFile(join(root, "index.html"), "utf8");
const $ = load(html);

test("homepage includes required content and honest optional states", () => {
  assert.equal($("h1").length, 1);
  assert.equal(
    $('a[href*="wedding"]').length,
    0,
    "wedding is not linked from the homepage",
  );
  for (const id of ["work", "experience", "expertise", "about", "contact"])
    assert.equal($(`#${id}`).length, 1);
  assert.equal(
    $(".project-index article").length + $(".featured-project").length,
    projects.length,
  );
  assert.equal($(".experience-index article").length, experience.length);
  if (globSync("src/content/notes/**/*.md").length === 0)
    assert.equal($("#notes").length, 0, "empty notes stay hidden");
  assert.equal(
    $(".contact-links a").length,
    contacts.length,
    "only configured contacts render",
  );
  assert.equal(
    $("script[src]").length,
    0,
    "static homepage needs no runtime JavaScript",
  );
});
test("SEO and social metadata use configured production URLs", async () => {
  assert.equal($("link[rel=canonical]").attr("href"), `${site}${base}`);
  assert.equal(
    $('meta[property="og:image"]').attr("content"),
    `${site}${base}og.png`,
  );
  assert.equal(
    JSON.parse($('script[type="application/ld+json"]').text())["@type"],
    "Person",
  );
  const robots = await readFile(join(root, "robots.txt"), "utf8");
  assert.ok(robots.includes(`${site}${base}sitemap-index.xml`));
  await access(join(root, "sitemap-index.xml"));
  const sitemap = await readFile(join(root, "sitemap-0.xml"), "utf8");
  assert.ok(sitemap.includes(`${site}${base}`));
  assert.ok(!sitemap.includes("/404/"));
  assert.ok(
    !sitemap.includes("/wedding/"),
    "direct-link wedding page stays out of sitemap",
  );
  if (domain)
    assert.equal((await readFile(join(root, "CNAME"), "utf8")).trim(), domain);
  else await assert.rejects(access(join(root, "CNAME")));
});
async function htmlFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}
test("all emitted internal links, fragments, and assets resolve", async () => {
  for (const file of await htmlFiles(root)) {
    const dom = load(await readFile(file, "utf8"));
    const relative = file.slice(root.length + 1).replace(/index\.html$/, "");
    const current = new URL(`${base}${relative}`, site);
    const ids = dom("[id]")
      .map((_, el) => dom(el).attr("id"))
      .get();
    assert.equal(ids.length, new Set(ids).size, `Duplicate IDs in ${file}`);
    for (const el of dom("[href], [src]").toArray()) {
      const ref = dom(el).attr("href") ?? dom(el).attr("src");
      if (!ref || /^(mailto:|tel:|data:)/.test(ref)) continue;
      const target = new URL(ref, current);
      if (target.origin !== site) continue;
      assert.ok(target.pathname.startsWith(base), `Wrong base: ${ref}`);
      let path = join(
        root,
        decodeURIComponent(target.pathname.slice(base.length)),
      );
      if (target.pathname.endsWith("/")) path = join(path, "index.html");
      await access(path);
      if (target.hash) {
        const targetDoc = load(await readFile(path, "utf8"));
        assert.equal(
          targetDoc(`[id="${decodeURIComponent(target.hash.slice(1))}"]`)
            .length,
          1,
          `Broken fragment ${ref}`,
        );
      }
    }
  }
});

test("wedding invitation is isolated and available only through its direct route", async () => {
  const wedding = load(
    await readFile(join(root, "wedding/index.html"), "utf8"),
  );
  assert.ok(wedding("title").text().includes("Wedding Invitation"));
  assert.equal(
    wedding('meta[name="robots"]').attr("content"),
    "noindex, nofollow",
  );
  assert.equal(wedding(".site-header, .site-footer").length, 0);
  assert.equal(wedding(".slide").length, wedding(".dot").length);
  assert.equal(wedding('script[src*="tailwindcss.com"]').length, 0);
  assert.equal(
    wedding("#rsvp iframe").attr("src"),
    "https://form.typeform.com/to/Mii1vK2T?typeform-embed=embed-fullpage",
  );
  for (const image of wedding("img[src]").toArray()) {
    assert.ok(wedding(image).attr("src").startsWith(`${base}wedding/img/`));
  }
});
