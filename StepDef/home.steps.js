const {Given, When, Then} = require ('@cucumber/cucumber')
const {HomePage} = require('../PageObjects/home.page')
const {MenuComponents} = require('../PageObjects/menu.component')
const {SearchPage} = require('../PageObjects/search.page')


const homePage = new HomePage();
const menuComponents = new MenuComponents();
const searchPage = new SearchPage();


Given('User is on Home Page', async()=>{
    await homePage.navigate();
    await homePage.agreeConsent();
 });

 When('User clicks on {string}', async(menu)=>{
     await menuComponents.navigateTo(menu);
 })

 When('User clicks on Sign in', async()=>{
     await homePage.clickSignIn();
 })

 When('User search {string} in the search bar', async (searchkey)=> {
    await searchPage.clickSearch();
    await searchPage.enterSearchKey(searchkey);
  })

  Then('User should be displayed with the editorial section', async() =>{
    await searchPage.clickSearchBtn();
    await searchPage.editorialSection();
  })
