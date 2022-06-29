import { test, expect } from "@playwright/test";

test.describe("Dark Mode Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Elements have lightmode CSS by default", async ({ page }) => {
    await expect(
      page.locator(
        "text=Bulbasaur #1Grass / Poison Height: 0.71 m Weight: 6.9 kgA strange seed was plant"
      )
      // It's #bef8f8 in my code but the test runner interprets it as this rgb color
    ).toHaveCSS("background-color", "rgb(190, 248, 248)");
  });
});
