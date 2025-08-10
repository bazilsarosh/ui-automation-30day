// Generates storageState.json if missing, with a blank session.
// Later you can replace this with a real login flow and save the state.

import { chromium } from '@playwright/test';
import { existsSync } from 'fs';

export default async () => {
  const file = 'storageState.json';
  if (existsSync(file)) {
    console.log(`[globalSetup] ${file} already exists — skipping.`);
    return;
  }
  const browser = await chromium.launch();
  const context = await browser.newContext();
  // TODO: For real apps, do a login flow here, then save:
  // const page = await context.newPage();
  // await page.goto('https://your-app/login');
  // ...perform login...
  await context.storageState({ path: file });
  await browser.close();
  console.log(`[globalSetup] Wrote ${file}`);
};
