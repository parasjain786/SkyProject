const { test, expect } = require("@playwright/test");

class HomePage {
  async navigate() {
    await page.goto("https://www.sky.com");
  }

  async agreeConsent(){
    await page.frameLocator('#sp_message_iframe_474555').locator('text=Agree').click();
  }

  async clickSignIn(){
      await page.locator('[data-test-id="sign-in-link"]').click();
  }
}
module.exports = { HomePage };