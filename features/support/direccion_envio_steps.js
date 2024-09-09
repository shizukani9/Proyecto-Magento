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

Then('La dirección debe guardarse correctamente sin errores', async function () {
    console.log("La dirección debe guardarse correctamente sin errores");
    
});

Then('Se muestra un mensaje de error', async function () {
    console.log("Se muestra un mensaje de error");
    
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

    const firstName = DataGenerator.generateAlphanumeric(10);
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