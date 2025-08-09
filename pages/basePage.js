class BasePage {
  constructor(page) {
    this.page = page;
    this.searchBox = 'textarea[name="q"]';
  }

  async goto() {
    // NCR avoids country redirect; helps with stable selectors
    await this.page.goto('https://www.google.com/ncr');
    await this.acceptConsentIfPresent();
    await this.page.waitForSelector(this.searchBox, { state: 'visible' });
  }

  async acceptConsentIfPresent() {
    // Try common consent button labels; ignore if not found
    const labels = ['I agree', 'Accept all', 'Agree to all', 'Accept', 'I accept'];
    for (const label of labels) {
      const btn = this.page.getByRole('button', { name: new RegExp(label, 'i') });
      if ((await btn.count()) > 0)  {
        await btn.first().click().catch(() => {});
        break;
      }
    }
  }

  async search(term) {
    await this.page.fill(this.searchBox, term);
    await this.page.keyboard.press('Enter');
  }
}

module.exports = BasePage;