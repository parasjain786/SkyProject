const {Given, When, Then} = require ('@cucumber/cucumber')
const {DealsPage} = require('../PageObjects/deals.page')

const dealsPage = new DealsPage();

Then('User should navigate to {string}', async(url)=>{
    await dealsPage.isLoaded(url);
})

Then('User should be displayed with list of deals and prices {string}', async(expPrices)=> {
    await dealsPage.validateBroadBandPrices(expPrices);
  });


