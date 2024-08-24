const { Before, After, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const axios = require('axios');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const DriverFactory = require("../../core/ui/driverFactory");
const LoginPage = require("../../main/ui/login_page");
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

    try {
        const userId = await userService.getUserIdByEmail(email);
        if (userId) {
            await userService.deleteUserById(userId);
            console.log(`User with email ${email} deleted successfully.`);
        } else {
            console.log(`User with email ${email} not found.`);
        }
    } catch (error) {
        console.error("Account deletion process failed.", error);
    }
});






Before( { tags: "@login" }, async function(scenario){
    console.log("Test scenario: " + scenario.pickle.name);
    if ((loginHook === undefined) || (loginHook === false)){
        console.log("Hook: Starting Login");
        const usernameInput = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.usernameInput));
        const nextButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.nextButton));
        await usernameInput.sendKeys(environment.prod.userAdmin.username);
        await nextButton.click();

        const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.passwordInput));
        await passwordInput.sendKeys(environment.prod.userAdmin.password);

        if (!isCookieEnabled){
            try {
                const cookiesButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.cookiesButton));
                    await cookiesButton.click();
                    isCookieEnabled = true;
                } catch (error) {
                    console.log("No se encontró la ventana emergente de cookies o ya fue cerrada."+error);
                }
        }
        const loginButton = await DriverFactory.myDriver.wait(until.elementLocated(LoginPage.loginButton));
        await loginButton.click();
    }
    loginHook = true;
});






AfterAll({ tags: "@ui" },async function(){
    //await DriverFactory.closeDriver();
});