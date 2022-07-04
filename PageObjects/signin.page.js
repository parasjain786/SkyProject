const { expect } = require("@playwright/test");

class SignInPage{

    async enterUserName(userName){
        const frame = await getIframe();
        await frame.locator('#username').fill(userName);
    }

    async clickContinueBtn(){
        await page.screenshot({ path: 'screenshot5.png', fullPage: false });
        const frame = await getIframe();
        await frame.locator('[data-testid="AUTHN__SUBMIT_BTN"]').click();
    }

    async verifyCreatePasstext(expPasswordText){
        await page.screenshot({ path: 'screenshot6.png', fullPage: true });
        const frame = await getIframe();
        expect(await frame.locator('//h1[contains(text(),"Create your My Sky")]')).toContainText(expPasswordText);

    }
}
module.exports = { SignInPage };

async function getIframe() {
    await page.waitForSelector('iframe[title=\'iFrame containing Sky Sign-In application\']');
    const elementHandle = await page.$('iframe[title=\'iFrame containing Sky Sign-In application\']');
    const frame = await elementHandle.contentFrame();
    return frame;
}