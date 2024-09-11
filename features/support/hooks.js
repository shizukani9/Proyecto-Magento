const { Before, After, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const axios = require('axios');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const DriverFactory = require("../../core/ui/driverFactory");
const CustomerloginPage = require("../../main/ui/customer_login_page");
const CreateAnAccountPage = require('../../main/ui/create_an_account_page');
const MyAccountCustomerPage = require("../../main/ui/my_account_customer_page");
const { until, Key, By } = require("selenium-webdriver");
var {setDefaultTimeout} = require('@cucumber/cucumber');
const UserService = require('../../main/api/userService');
const allure = require('allure-cucumberjs');

setDefaultTimeout(60 * 1000);
let loginHook = false;

BeforeAll( { tags: "@ui" }, async function(){
    console.log("Starting Framework");
    this.driver = await new DriverFactory();
    console.log("Starting Browser");
    await this.driver.get("https://magento2-demo.magebit.com/");
    await this.driver.manage().window().setRect(configuration.browser.resolution.heigth, configuration.browser.resolution.width);
});

Before( { tags: "@login" }, async function(scenario){
    console.log("Test scenario: " + scenario.pickle.name);
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/"), configuration.browser.timeout);

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

Before({ tags: "@createAccount" }, async function() {
    console.log("Starting Create Account Process");
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/customer/account/create/");
    await DriverFactory.myDriver.sleep(2000);
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/customer/account/create/"), configuration.browser.timeout);

    const firstNameInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.firstNameInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(firstNameInput), configuration.browser.timeout);

    const lastNameInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.lastNameInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(lastNameInput), configuration.browser.timeout);

    const emailInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.emailInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(emailInput), configuration.browser.timeout);

    const passwordInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.passwordInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(passwordInput), configuration.browser.timeout);

    const confirmPasswordInput = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.confirmPasswordInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(confirmPasswordInput), configuration.browser.timeout);

    const createAccountButton = await DriverFactory.myDriver.wait(until.elementLocated(CreateAnAccountPage.createAccountButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(createAccountButton), configuration.browser.timeout);

    await firstNameInput.sendKeys(environment.demo.user.firstName);
    await lastNameInput.sendKeys(environment.demo.user.lastName);
    await emailInput.sendKeys(environment.demo.user.email);
    await passwordInput.sendKeys(environment.demo.user.password);
    await confirmPasswordInput.sendKeys(environment.demo.user.confirmPassword);
    await createAccountButton.click();
});

After({ tags: "@signOut" }, async function () {
    console.log("Iniciando el proceso de cierre de sesión...");

    try {
        await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/customer/account/");
        console.log("Página de cuenta de cliente cargada.");

        await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/customer/account/"), configuration.browser.timeout);

        const menuToggleSpan = await DriverFactory.myDriver.wait(until.elementLocated(By.css('span.customer-name')), configuration.browser.timeout);
        console.log("Elemento span localizado.");

        // Estrategia 1: Intentar clic en el span
        await DriverFactory.myDriver.wait(until.elementIsVisible(menuToggleSpan), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(menuToggleSpan), configuration.browser.timeout);
        await menuToggleSpan.click();
        console.log("Clic en el span realizado.");

        // Esperar un poco antes de verificar el estado
        await DriverFactory.myDriver.sleep(1000);

        let expanded = await menuToggleSpan.getAttribute("aria-expanded");
        console.log("Estado de aria-expanded después de hacer clic en el span:", expanded);

        if (expanded !== "true") {
            console.log("El menú no se desplegó con el clic en el span, intentando con JavaScript...");

            // Estrategia 2: Forzar el clic con JavaScript
            await DriverFactory.myDriver.executeScript("arguments[0].click();", menuToggleSpan);

            // Esperar un poco antes de verificar el estado
            await DriverFactory.myDriver.sleep(1000);

            expanded = await menuToggleSpan.getAttribute("aria-expanded");
            console.log("Estado de aria-expanded después de hacer clic con JavaScript en el span:", expanded);

            if (expanded !== "true") {
                console.log("El menú no se desplegó con JavaScript, intentando simular movimiento del mouse...");

                // Estrategia 3: Simular movimiento del mouse
                const actions = DriverFactory.myDriver.actions({ bridge: true });
                await actions.move({ origin: menuToggleSpan }).perform();
                await DriverFactory.myDriver.sleep(500); // Asegúrate de que el menú tenga tiempo de desplegarse

                await menuToggleSpan.click();
                console.log("Clic en el span realizado después del movimiento del mouse.");

                expanded = await menuToggleSpan.getAttribute("aria-expanded");
                console.log("Estado de aria-expanded después de mover el mouse y hacer clic en el span:", expanded);

                if (expanded !== "true") {
                    throw new Error("El menú no se desplegó correctamente después de intentar todas las estrategias.");
                }
            }
        }

        const signOutLink = await DriverFactory.myDriver.wait(until.elementLocated(MyAccountCustomerPage.signOutLink), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsVisible(signOutLink), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(signOutLink), configuration.browser.timeout);
        await signOutLink.click();
        console.log("Cierre de sesión completado con éxito.");
    } catch (error) {
        console.error("Error durante el proceso de cierre de sesión:", error);
        throw error;
    }
});


After({ tags: "@deleteAccount" }, async function() {
    console.log("Starting Account Deletion Process");
    const userService = new UserService();
    const email = environment.demo.user.email;
    const userId = await userService.getUserIdByEmail(email);
    console.log("userId", userId);
    if (userId) {
        await userService.deleteUserById(userId);
        console.log(`User with email ${email} deleted successfully.`);
    } else {
        console.log(`User with email ${email} not found.`);
    }
});

After(async function(scenario) {
    console.log("allure generating");
    if (scenario.result.status === 'failed') {
        const screenshot = await DriverFactory.myDriver.takeScreenshot();
        console.log("Screenshot generated");
        console.log(screenshot);
        allure.createAttachment('Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
    }
});

AfterAll({ tags: "@ui" },async function(){
    //await DriverFactory.closeDriver();
});