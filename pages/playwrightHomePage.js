import { expect } from '@playwright/test';

class PlaywrightHomePage {
  constructor(page) {
    this.page = page;
    this.getStartedLink = this.page.locator('a[href="/docs/intro"]').first();
  }
  async goto() {
    await this.page.goto('/');                      
    await expect(this.getStartedLink).toBeVisible(); 
  }
  async clickGettingStarted() {
    await this.getStartedLink.click();
  }
}
export default PlaywrightHomePage;
