import { test, expect } from "@playwright/test";

test.describe("Dark Mode Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test.skip("[1] Elements have lightmode CSS by default", async ({ page }) => {
    const body = page.locator("body");

    await expect(body)
      // It's #bef8f8 in my code but the test runner interprets it as this rgb color
      .toHaveCSS("background-color", "rgb(60, 152, 147)");
  });

  test("[2] Toggling dark mode changes element colors", async ({ page }) => {
    const darkModeToggleButton = page.locator('[data-testid="toggle_btn"]');
    const pokemonCard = page.locator(
      "text=Bulbasaur #1Grass / Poison Height: 0.71 m Weight: 6.9 kgA strange seed was plant"
    );

    await darkModeToggleButton.click();
    await expect(pokemonCard).toHaveCSS("background-color", "rgb(17, 16, 16)");

    await darkModeToggleButton.click();
    await expect(pokemonCard).toHaveCSS(
      "background-color",
      "rgb(190, 248, 248)"
    );
  });
});
