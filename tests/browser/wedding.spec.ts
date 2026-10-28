import { test, expect } from "@playwright/test";
import { readSiteConfig } from "../../scripts/site-config.mjs";
const { base } = readSiteConfig();

for (const width of [1440, 390]) {
  test(`direct wedding route and invitation interactions at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    // Exercise local integration without loading or submitting third-party embeds.
    await page.route("https://www.google.com/maps/embed**", (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<title>Map embed placeholder for local test</title>",
      }),
    );
    await page.route("https://form.typeform.com/**", (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<title>RSVP embed placeholder for local test</title>",
      }),
    );
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (
        new URL(response.url()).hostname === "127.0.0.1" &&
        response.status() >= 400
      )
        errors.push(`${response.status()} ${response.url()}`);
    });
    const response = await page.goto(`${base}wedding`);
    expect(response?.status()).toBe(200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Duy Tân",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      ),
    ).toBe(false);
    await page.getByRole("button", { name: "EN", exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator('[data-i18n="story.title"]')).toHaveText(
      "Our Journey",
    );
    await page.getByRole("button", { name: "VI", exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", "vi");
    await expect(page.locator('[data-i18n="story.title"]')).toHaveText(
      "Hành Trình Của Chúng Tôi",
    );
    const dots = page.locator(".dot");
    expect(await dots.count()).toBe(await page.locator(".slide").count());
    await dots.last().click();
    await expect(page.locator(".slide").last()).toHaveClass(/active/);
    await expect(page.locator("#days")).toHaveText("0");
    const gift = page
      .locator(".gift-btn")
      .filter({ hasText: "Mừng Cưới Cô Dâu" });
    await gift.click();
    const modal = page.locator("#brideModal");
    await expect(modal).toBeVisible();
    await expect(modal).toHaveAttribute("role", "dialog");
    await page.keyboard.press("Escape");
    await expect(modal).toBeHidden();
    await expect(gift).toBeFocused();
    await page
      .locator(".gift-btn")
      .filter({ hasText: "Mừng Cưới Chú Rể" })
      .click();
    await expect(page.locator("#groomModal")).toBeVisible();
    await page.locator("#groomModal .modal-close").click();
    await expect(page.locator("#groomModal")).toBeHidden();
    // Scroll through lazy-loaded photos before capturing the complete invitation.
    for (const image of await page.locator("#story img, #gallery img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => (element as HTMLImageElement).decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: `test-results/wedding-${width}.png`,
      fullPage: true,
    });
    expect(errors).toEqual([]);
  });
}
