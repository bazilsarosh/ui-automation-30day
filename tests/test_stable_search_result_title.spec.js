const { test, expect } = require('@playwright/test');

test('stable search result title', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.getByRole('link', { name: /getting started/i }).click();

  await expect.poll(async () => {
    const title = await page.title();
    return title.toLowerCase();
  }, { timeout: 15000 }).toContain('getting started');
});
