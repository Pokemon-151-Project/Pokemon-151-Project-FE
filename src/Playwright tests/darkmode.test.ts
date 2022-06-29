import { test, expect } from "@playwright/test";

test.describe("Dark Mode Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Elements have lightmode CSS by default", async ({ page }) => {
    const body = page.locator("body");

    await expect(body)
      // It's #bef8f8 in my code but the test runner interprets it as this rgb color
      .toHaveCSS("background-color", "rgb(60, 152, 147)");
  });
});
