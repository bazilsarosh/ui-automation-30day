import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  globalSetup: require.resolve('./scripts/generateStorageState.js'),
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: { headless: true, screenshot: 'only-on-failure', video: 'retain-on-failure', trace: 'retain-on-failure', ignoreHTTPSErrors: true, baseURL: 'https://playwright.dev' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'chromium-auth', use: { ...devices['Desktop Chrome'], storageState: 'storageState.json' } },
  ],
});
