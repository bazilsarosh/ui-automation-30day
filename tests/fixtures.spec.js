import { test, expect } from '@playwright/test';

test.describe('isolated suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev');
  });

  test('nav to docs', async ({ page }) => {
    await page.getByRole('link', { name: /docs/i }).click();
    await expect(page).toHaveURL(/docs/);
  });
});
