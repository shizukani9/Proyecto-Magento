const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const YogaPage = require('../../main/ui/yoga_page');
const HomePage = require('../../main/ui/home_page');
const CheckoutCarPage = require('../../main/ui/checkout_car_page');
const ShippingAdressPage = require('../../main/ui/shipping_address_page');
const ReviewAndPaymentsPage = require('../../main/ui/review_and_payments_page');
const CheckoutSucessPage = require('../../main/ui/checkout_sucess_page');
const DataGenerator = require('../../utils/dataGenerator');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const { until, By, Select } = require('selenium-webdriver');

Then('La dirección debe guardarse correctamente sin errores', async function () {
    console.log("La dirección debe guardarse correctamente sin errores");
    await DriverFactory.myDriver.sleep(2000);
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/#payment"), configuration.browser.extendedTimeout);
    const expectedUrl = "https://magento2-demo.magebit.com/checkout/#payment";
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, `La URL actual (${currentUrl}) no coincide con la esperada (${expectedUrl})`);
});

Then('Se muestra un mensaje de error', async function () {
    console.log("Se muestra un mensaje de error");
    const errorMessageFirstName2 = await DriverFactory.myDriver.findElement(ShippingAdressPage.errorMessageFirstName2);
    const expectedMessage = "Error message";
    if (await errorMessageFirstName2.isDisplayed()) {
        const messageText = await errorMessageFirstName2.getText();
        if (messageText.trim() !== expectedMessage) {
            throw new Error(`El mensaje obtenido fue: "${messageText}", pero se esperaba: "${expectedMessage}".`);
        }
    } else {
        throw new Error('El mensaje de error no se mostró como se esperaba.');
    }
});

Then('Se muestra un mensaje de error que el campo requerido', async function () {
    console.log("Se muestra un mensaje de error que el campo requerido");
    const errorMessageFirstName2 = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.errorMessageFirstName2),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", errorMessageFirstName2);
    await DriverFactory.myDriver.wait(until.elementIsVisible(errorMessageFirstName2), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(errorMessageFirstName2), configuration.browser.timeout);
    
    const expectedMessage = "This is a required field.";
    const messageText = await errorMessageFirstName2.getText();
        if (messageText !== expectedMessage) {
            throw new Error(`El mensaje obtenido fue: "${messageText}", pero se esperaba: "${expectedMessage}".`);
        }
});

Then('Se muestra un mensaje de error de mas de 255 caracteres', async function () {
    console.log("Se muestra un mensaje de error de mas de 255 caracteres");
    const shortTimeout = 3000; 
    try {
        const errorMessageFirstName1 = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.errorMessageFirstName1),shortTimeout);
        await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", errorMessageFirstName1);
        await DriverFactory.myDriver.wait(until.elementIsVisible(errorMessageFirstName1), configuration.browser.timeout);
        await DriverFactory.myDriver.wait(until.elementIsEnabled(errorMessageFirstName1), configuration.browser.timeout);
        const messageText = await errorMessageFirstName1.getText();
        const expectedMessage = "Please enter less or equal than 255 symbols.";
        if (messageText.trim() !== expectedMessage) {
            throw new Error(`El mensaje obtenido fue: "${messageText}", pero se esperaba: "${expectedMessage}".`);
        }
        console.log("El mensaje de error es correcto.");
    } catch (error) {
        throw new Error('El mensaje de error no se mostró como se esperaba dentro del tiempo límite.');
    }
});

Then('El usuario ingresa el nombre con solo 1 carácter', async function () {
    console.log("El usuario ingresa el nombre con solo 1 carácter");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = DataGenerator.generateLetters(1);
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el nombre con 255 caracteres', async function () {
    console.log("El usuario ingresa el nombre con 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = DataGenerator.generateLetters(255);
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el nombre con mas 255 caracteres', async function () {
    console.log("El usuario ingresa el nombre con mas 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = DataGenerator.generateLetters(300);
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el nombre vacio', async function () {
    console.log("El usuario ingresa el nombre vacio");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = "";
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el nombre con numeros', async function () {
    console.log("El usuario ingresa el nombre con numeros");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = DataGenerator.generateRandomNumber(10);
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el nombre con alfanumericos', async function () {
    console.log("El usuario ingresa el nombre con alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = DataGenerator.generateAlphanumeric(20);
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el apellido con solo 1 carácter', async function () {
    console.log("El usuario ingresa el apellido con solo 1 carácter");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = DataGenerator.generateLetters(1);
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el apellido con 255 caracteres', async function () {
    console.log("El usuario ingresa el apellido con 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = DataGenerator.generateLetters(255);
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el apellido con mas 255 caracteres', async function () {
    console.log("El usuario ingresa el apellido con mas 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = DataGenerator.generateLetters(300);
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el apellido vacio', async function () {
    console.log("El usuario ingresa el apellido vacio");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = "";
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el apellido con numeros', async function () {
    console.log("El usuario ingresa el apellido con numeros");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = DataGenerator.generateRandomNumber(10);
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el apellido con alfanumericos', async function () {
    console.log("El usuario ingresa el apellido con alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = DataGenerator.generateAlphanumeric(20);
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania con 1 caracter', async function () {
    console.log("El usuario ingresa la compania con 1 caracter");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = DataGenerator.generateLetters(1);
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania con 255 caracteres', async function () {
    console.log("El usuario ingresa la compania con 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = DataGenerator.generateLetters(255);
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania con mas 255 caracteres', async function () {
    console.log("El usuario ingresa la compania con mas 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = DataGenerator.generateLetters(300);
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania vacio', async function () {
    console.log("El usuario ingresa la compania vacio");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = "";
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania con numeros', async function () {
    console.log("El usuario ingresa la compania con numeros");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = DataGenerator.generateRandomNumber(10);
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania con alfanumericos', async function () {
    console.log("El usuario ingresa la compania con alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = DataGenerator.generateAlphanumeric(20);
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la compania con 5 caracteres', async function () {
    console.log("El usuario ingresa la compania con 5 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = DataGenerator.generateLetters(5);
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Dirección con 255 caracteres', async function () {
    console.log("El usuario ingresa la Dirección con 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = DataGenerator.generateLetters(255);
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Dirección con mas 255 caracteres', async function () {
    console.log("El usuario ingresa la Dirección con mas 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = DataGenerator.generateLetters(300);
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Dirección vacio', async function () {
    console.log("El usuario ingresa la Dirección vacio");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = "";
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Dirección con numeros', async function () {
    console.log("El usuario ingresa la Dirección con numeros");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = DataGenerator.generateRandomNumber(10);
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Dirección con alfanumericos', async function () {
    console.log("El usuario ingresa la Dirección con alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = DataGenerator.generateAlphanumeric(20);
    const stateValue = "2";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Ciudad con 1 caracter', async function () {
    console.log("El usuario ingresa la Ciudad con 1 caracter");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = DataGenerator.generateLetters(1);
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Ciudad con 255 caracteres', async function () {
    console.log("El usuario ingresa la Ciudad con 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = DataGenerator.generateLetters(255);
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Ciudad con mas 255 caracteres', async function () {
    console.log("El usuario ingresa la Ciudad con mas 255 caracteres");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = DataGenerator.generateLetters(300);
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Ciudad con numeros', async function () {
    console.log("El usuario ingresa la Ciudad con numeros");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = DataGenerator.generateRandomNumber(10);
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa la Ciudad con alfanumericos', async function () {
    console.log("El usuario ingresa la Ciudad con alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "2";
    const city = DataGenerator.generateAlphanumeric(20);
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Estado Provincia', async function () {
    console.log("El usuario ingresa el Estado Provincia");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario no ingresa el Estado Provincia', async function () {
    console.log("El usuario no ingresa el Estado Provincia");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "0";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    //await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Codigo Postal con 5 caracteres numericos', async function () {
    console.log("El usuario ingresa el Codigo Postal con 5 caracteres numericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = DataGenerator.generateRandomNumber(5);
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Codigo Postal con 255 caracteres numericos', async function () {
    console.log("El usuario ingresa el Codigo Postal con 255 caracteres numericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = DataGenerator.generateRandomNumber(255);
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Codigo Postal con mas 255 caracteres numericos', async function () {
    console.log("El usuario ingresa el Codigo Postal con mas 255 caracteres numericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = DataGenerator.generateRandomNumber(300);
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Codigo Postal vacio', async function () {
    console.log("El usuario ingresa el Codigo Postal vacio");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = "";
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Codigo Postal letras', async function () {
    console.log("El usuario ingresa el Codigo Postal letras");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = DataGenerator.generateLetters(20);
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Codigo Postal alfanumericos', async function () {
    console.log("El usuario ingresa el Codigo Postal alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = DataGenerator.generateAlphanumeric(20);
    const phoneNumber = environment.demo.userShippingAddress.phoneNumber;

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Teléfono con 7 caracteres numericos', async function () {
    console.log("El usuario ingresa el Teléfono con 7 caracteres numericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = DataGenerator.generateRandomNumber(7);

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Teléfono con 15 caracteres numericos', async function () {
    console.log("El usuario ingresa el Teléfono con 15 caracteres numericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = DataGenerator.generateRandomNumber(15);

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Teléfono con mas de 255 caracteres numericos', async function () {
    console.log("El usuario ingresa el Teléfono con mas de 255 caracteres numericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = DataGenerator.generateRandomNumber(300);

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Teléfono con letras', async function () {
    console.log("El usuario ingresa el Teléfono con letras");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = DataGenerator.generateLetters(20);

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});

Then('El usuario ingresa el Teléfono con alfanumericos', async function () {
    console.log("El usuario ingresa el Teléfono con alfanumericos");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
    const lastName = environment.demo.userShippingAddress.lastName;
    const company = environment.demo.userShippingAddress.company;
    const streetAddress = environment.demo.userShippingAddress.streetAddress;
    const stateValue = "5";
    const city = environment.demo.userShippingAddress.city;
    const postcode = environment.demo.userShippingAddress.zipPostal;
    const phoneNumber = DataGenerator.generateAlphanumeric(20);

    await ShippingAdressPage.enterFirstName(firstName);
    await ShippingAdressPage.enterLastName(lastName);
    await ShippingAdressPage.enterCompany(company);
    await ShippingAdressPage.enterStreetAddress(streetAddress);
    await ShippingAdressPage.selectState(stateValue);
    await ShippingAdressPage.enterCity(city);
    await ShippingAdressPage.enterPostcode(postcode);
    await ShippingAdressPage.enterTelephone(phoneNumber);
    await ShippingAdressPage.selectShippingMethod();
});