import { test, expect } from '@playwright/test';
import PlaywrightHomePage from '../pages/playwrightHomePage';

test('smoke: Navigate to Getting Started page', async ({ page }) => {
  const home = new PlaywrightHomePage(page);
  await home.goto();
  await home.clickGettingStarted();

  // URL can be /docs/intro or land on Installation, both fine
  await expect(page).toHaveURL(/playwright\.dev\/docs\//);

  const h1 = page.locator('h1');
  await expect(h1).toHaveText(/(Getting started|Installation)/i);
});
