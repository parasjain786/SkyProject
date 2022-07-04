const { test ,expect } = require("@playwright/test");

class SearchPage{

    async clickSearch(){
        await page.screenshot({ path: 'screenshot2.png', fullPage: false });
        await page.locator('[data-test-id="masthead-search-toggle-button"]').click();
    }

    async enterSearchKey(searchkey){
        await page.locator('[data-test-id="input-box"]').fill(searchkey);
    }

    async clickSearchBtn(){
        await page.screenshot({ path: 'screenshot3.png', fullPage: false });
        await page.locator('[data-test-id="submit-button"]').click();
    }

    async editorialSection() {
        await page.screenshot({ path: 'screenshot4.png', fullPage: true });
        expect(await page.locator('//a[contains(text(),"Sky offers")]')).toContainText('Sky offers');
      }
}
module.exports = { SearchPage };