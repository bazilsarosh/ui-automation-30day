class GettingStartedPage {
  constructor(page) {
    this.page = page;
    this.header = 'h1';
  }

  async getHeaderText() {
    return await this.page.textContent(this.header);
  }
}

module.exports = GettingStartedPage;
