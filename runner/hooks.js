const { BeforeAll, Before, AfterAll, After,setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

 setDefaultTimeout(50 * 1000);

// Create a global browser for the test session.
BeforeAll(async () => {
  global.browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  await global.browser.close();
  
});

// Creating a fresh browser context for each test case.
Before(async (scenario) => {
  global.context = await global.browser.newContext({
    recordVideo: {
      dir: "Exe-Videos/" + scenario.pickle.name,
    },
  });
  global.page = await global.context.newPage();
});

After(async () => {
  await global.page.close();
});
