import { test, expect } from '@playwright/test';
import WikiHomePage from '../pages/basePage';

test('smoke: Wikipedia search for Playwright', async ({ page }) => {
  const wiki = new WikiHomePage(page);
  await wiki.goto();
  await wiki.search('Playwright (software)');
  await expect(page.locator('#firstHeading')).toHaveText(/Playwright/i);
});
