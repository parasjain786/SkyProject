const {Given, When, Then} = require ('@cucumber/cucumber')  
const {SignInPage} = require('../PageObjects/signin.page')

const signInPage = new SignInPage();

When('User enters invalid credentials {string}', async(userName)=>{
    await signInPage.enterUserName(userName)
});

When('User clicks on Continue button', async()=>{
    await signInPage.clickContinueBtn()
});

Then('User should displayed a box with text{}',async(expPasswordText)=>{
    await signInPage. verifyCreatePasstext(expPasswordText) 
});