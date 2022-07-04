class MenuComponents {
  async navigateTo(menu) {
    await page
      .locator('[data-test-id="primary-nav-list"] >> text=' + menu + "")
      .click();
  }

}
module.exports = { MenuComponents };
