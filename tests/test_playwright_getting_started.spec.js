const { test, expect } = require('@playwright/test');
const PlaywrightHomePage = require('../pages/playwrightHomePage');
const GettingStartedPage = require('../pages/gettingStartedPage');

test('Navigate to Getting Started page', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  const gettingStartedPage = new GettingStartedPage(page);

  await homePage.goto();
  await homePage.clickGettingStarted();
  const headerText = await gettingStartedPage.getHeaderText();

  expect(headerText).toMatch(/Playwright enables reliable end-to-end testing for modern web apps./i);
});
