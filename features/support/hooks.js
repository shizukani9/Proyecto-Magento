const { Before, After, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const axios = require('axios');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const DriverFactory = require("../../core/ui/driverFactory");
const CustomerloginPage = require("../../main/ui/customer_login_page");
const CreateAnAccountPage = require('../../main/ui/create_an_account_page');
const MyAccountCustomer = require("../../main/ui/my_account_customer_page");
const { until, Key } = require("selenium-webdriver");
var {setDefaultTimeout} = require('@cucumber/cucumber');
const UserService = require('../../main/api/userService');

setDefaultTimeout(60 * 1000);
let loginHook = false;
let isCookieEnabled = false;

BeforeAll( { tags: "@ui" }, async function(){
    console.log("Starting Framework");
    this.driver = await new DriverFactory();
    console.log("Starting Browser");
    await this.driver.get("https://magento2-demo.magebit.com/customer/account/create/");
    await this.driver.manage().window().setRect(configuration.browser.resolution);
});


Before({ tags: "@createAccount" }, async function() {
    console.log("Starting Create Account Process");
    const firstNameInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.firstNameInput));
    const lastNameInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.lastNameInput));
    const emailInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.emailInput));
    const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.passwordInput));
    const confirmPasswordInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.confirmPasswordInput));
    const createAccountButton = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.createAccountButton));

    await firstNameInput.sendKeys(environment.demo.user.firstName);
    await lastNameInput.sendKeys(environment.demo.user.lastName);
    await emailInput.sendKeys(environment.demo.user.email);
    await passwordInput.sendKeys(environment.demo.user.password);
    await confirmPasswordInput.sendKeys(environment.demo.user.confirmPassword);
    await createAccountButton.click();
});

After({ tags: "@deleteAccount" }, async function() {
    console.log("Starting Account Deletion Process");
    const userService = new UserService();
    const email = environment.demo.user.email;
    const userId = await userService.getUserIdByEmail(email);
    if (userId) {
        await userService.deleteUserById(userId);
        console.log(`User with email ${email} deleted successfully.`);
    } else {
        console.log(`User with email ${email} not found.`);
    }
});

Before( { tags: "@login" }, async function(scenario){
    console.log("Test scenario: " + scenario.pickle.name);
    if ((loginHook === undefined) || (loginHook === false)){
        console.log("Hook: Starting Login");
        const emailInput = await DriverFactory.myDriver.wait(until.elementLocated(CustomerloginPage.emailInput));
        const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(CustomerloginPage.passwordInput));
        const signInButton = await DriverFactory.myDriver.wait(until.elementLocated(CustomerloginPage.signInButton));
        await emailInput.sendKeys(environment.demo.user.email);
        await passwordInput.sendKeys(environment.demo.user.password);
        await signInButton.click();
    }
    loginHook = true;
});

AfterAll({ tags: "@ui" },async function(){
    //await DriverFactory.closeDriver();
});