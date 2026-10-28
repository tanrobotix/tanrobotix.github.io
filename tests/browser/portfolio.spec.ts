import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readSiteConfig } from "../../scripts/site-config.mjs";
const { base } = readSiteConfig();

for (const width of [1440, 1024, 768, 390]) {
  test(`responsive layout, navigation, assets and accessibility at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Making complex",
    );
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to content" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
    await expect(page.locator("#main")).toBeFocused();
    for (const section of ["Work", "Experience", "About", "Contact"]) {
      await page
        .getByRole("navigation")
        .getByRole("link", { name: section, exact: false })
        .click();
      await expect(page).toHaveURL(new RegExp(`#${section.toLowerCase()}$`));
    }
    await page.getByRole("link", { name: /^BACK TO TOP/ }).click();
    await expect(page).toHaveURL(/#top$/);
    await page.emulateMedia({ reducedMotion: "reduce" });
    expect(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
    ).toBe("auto");
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({ path: `test-results/viewport-${width}.png` });
    await page.screenshot({
      path: `test-results/portfolio-${width}.png`,
      fullPage: true,
    });
  });
}
