const { test, expect } = require('@playwright/test');
import PlaywrightHomePage from '../pages/playwrightHomePage';

test('smoke: stable search result title', async ({ page }) => {
  const home = new PlaywrightHomePage(page);
  await home.goto();
  await home.clickGettingStarted();

  await expect(page).toHaveURL(/\/docs\/(intro|installation)/i);
  await expect(page.locator('h1')).toHaveText(/getting started|installation/i);
});
