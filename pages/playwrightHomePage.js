class PlaywrightHomePage {
  constructor(page) {
    this.page = page;
    this.gettingStartedLink = 'a[href="/docs/intro"]';
  }
  async goto() { await this.page.goto('https://playwright.dev'); }
  async clickGettingStarted() { await this.page.click(this.gettingStartedLink); }
}

export default PlaywrightHomePage;
