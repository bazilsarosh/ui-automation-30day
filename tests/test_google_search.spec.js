const { test, expect } = require('@playwright/test');
const BasePage = require('../pages/basePage'); // or '../pages/homePage' if you used that file

test('Google search for Playwright', async ({ page }) => {
  const home = new BasePage(page);
  await home.goto();
  await home.search('Playwright automation');

  // Title may vary; these two checks are robust:
  await expect(page).toHaveURL(/search/);
  await expect(page).toHaveTitle(/Playwright/i);
});
