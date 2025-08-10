class WikiHomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = '#searchInput';
  }
  async goto() { await this.page.goto('https://www.wikipedia.org'); }
  async search(term) {
    await this.page.fill(this.searchInput, term);
    await this.page.keyboard.press('Enter');
  }
}
export default WikiHomePage;