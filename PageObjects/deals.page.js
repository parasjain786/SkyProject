const { test, expect } = require("@playwright/test");
const { HomePage } = require("./home.page");

const homePage = new HomePage();

class DealsPage {
  async isLoaded(url) {
    const currentUrl = await page.url();
    expect(currentUrl).toEqual(url);
    console.log(currentUrl);
  } 

  async validateBroadBandPrices(expPrices){
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await homePage.agreeConsent();
    await page.locator('//*[@id="deals-filter"]/button[3]').click();
    await expect(page.locator('(//span[@class="text__Text-sc-1u9gciq-0 jQyTRA"])[1]')).toContainText(expPrices.slice(0,2));
    await expect(page.locator('(//span[@class="text__Text-sc-1u9gciq-0 jQyTRA"])[2]')).toContainText(expPrices.slice(3,5));
    await expect(page.locator('(//span[@class="text__Text-sc-1u9gciq-0 jQyTRA"])[3]')).toContainText(expPrices.slice(6,8));
     
  }
}
module.exports = { DealsPage };