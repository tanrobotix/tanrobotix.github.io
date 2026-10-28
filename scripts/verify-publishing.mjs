import assert from "node:assert/strict";
import { mkdir, readFile, rm, access } from "node:fs/promises";
import { writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

// Temporary, clearly identified test content. Never included in the final build.
const directory = "src/content/notes/qa-publishing-fixtures";
assert.ok(
  !existsSync(directory),
  "Refusing to overwrite an existing fixture directory.",
);
await mkdir(directory, { recursive: true });
const build = (env = process.env) =>
  execFileSync("npm", ["run", "build"], { env, stdio: "pipe" });
const fixture = (name, draft, date) =>
  writeFileSync(
    `${directory}/${name}.md`,
    `---\ntitle: "QA fixture ${name}"\ndescription: "Temporary publishing verification fixture."\npublished: ${date}\ndraft: ${draft}\n---\n\nTest-only article body.\n`,
  );
try {
  fixture("published", false, "2000-01-01");
  fixture("draft", true, "2000-01-01");
  fixture("future", false, "2999-01-01");
  build();
  execFileSync("npm", ["test"], { stdio: "pipe" });
  const html = await readFile("dist/index.html", "utf8");
  assert.ok(html.includes("QA fixture published"));
  assert.ok(!html.includes("QA fixture draft"));
  assert.ok(!html.includes("QA fixture future"));
  assert.ok(
    (
      await readFile(
        "dist/notes/qa-publishing-fixtures/published/index.html",
        "utf8",
      )
    ).includes("Test-only article body."),
  );
  await assert.rejects(
    access("dist/notes/qa-publishing-fixtures/draft/index.html"),
  );
  await assert.rejects(
    access("dist/notes/qa-publishing-fixtures/future/index.html"),
  );
  console.log(
    "PASS: real notes render; draft and scheduled notes produce no public routes.",
  );
  await rm(directory, { recursive: true });
  const env = {
    ...process.env,
    SITE_URL: "https://portfolio.example",
    BASE_PATH: "/",
    CUSTOM_DOMAIN: "portfolio.example",
  };
  build(env);
  execFileSync("npm", ["test"], { env, stdio: "pipe" });
  console.log(
    "PASS: root custom-domain build, CNAME, canonical metadata, sitemap, assets, and links.",
  );
} finally {
  await rm(directory, { recursive: true, force: true });
  build();
  console.log("Restored the configured default build without test articles.");
}
