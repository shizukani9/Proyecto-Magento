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

Given('El usuario está en la página de inicio', async function () {
    console.log("El usuario está en la página de inicio");
    const expectedUrl = "https://magento2-demo.magebit.com/";
    await DriverFactory.myDriver.get(expectedUrl);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, currentUrl);
});

Given('El usuario navega a página de Yoga Collection', async function () {
    console.log("El usuario navega a página de Yoga Collection");
    const YogaPageButton = await DriverFactory.myDriver.wait(until.elementLocated(HomePage.yogaCollectionLink), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(YogaPageButton), configuration.browser.timeout);
    await YogaPageButton.click();
});

When('El usuario añade un producto al carrito', async function () {
    console.log("El usuario añade un producto al carrito");
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/collections/yoga-new.html?product_list_mode=list");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/collections/yoga-new.html?product_list_mode=list"), configuration.browser.timeout);

    const firstAddToCartButton = await DriverFactory.myDriver.wait(until.elementLocated(YogaPage.firstAddToCartButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(firstAddToCartButton), configuration.browser.timeout); 
    await DriverFactory.myDriver.wait(until.elementIsEnabled(firstAddToCartButton), configuration.browser.timeout); 
    await firstAddToCartButton.click();
});

Then('La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart', async function () {
    console.log("La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart");
    await DriverFactory.myDriver.sleep(2000); 
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/checkout/cart/");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
});

Then('El usuario modifica la cantidad de uno de los productos', async function () {
    console.log("El usuario modifica la cantidad de uno de los productos");
    await CheckoutCarPage.waitForCartPageLoad(); 
    const randomQuantity = DataGenerator.generateRandomNumber(1);
    await CheckoutCarPage.scrollToAndEnterQuantity(randomQuantity);
    await CheckoutCarPage.waitForCartPageLoad(); 
    await CheckoutCarPage.clickUpdateCartButton(); 
    await CheckoutCarPage.waitForCartPageLoad(); 
});

Then('El precio total del carrito debe actualizarse correctamente', async function () {
    console.log("El precio total del carrito debe actualizarse correctamente");
    await DriverFactory.myDriver.sleep(2000);
    await CheckoutCarPage.waitForCartPageLoad();

    const subtotalText1 = await CheckoutCarPage.getSubtotalText1();
    const subtotalText2 = await CheckoutCarPage.getSubtotalText2();

    const subtotal1 = parseFloat(subtotalText1.replace('$', '').trim());
    const subtotal2 = parseFloat(subtotalText2.replace('$', '').trim());
    expect(subtotal1).to.equal(subtotal2, `El subtotal 1 (${subtotal1}) no coincide con el subtotal 2 (${subtotal2})`);
});

When('El usuario elimina uno de los productos del carrito', async function () {
    console.log("El usuario elimina uno de los productos del carrito");
    await CheckoutCarPage.waitForCartPageLoad();
    await CheckoutCarPage.clickRemoveItemButton();
    await CheckoutCarPage.waitForCartPageLoad();
});

Then('El producto debe desaparecer del listado, se muestra un mensaje de confirmacion', async function () {
    console.log("El producto debe desaparecer del listado, se muestra un mensaje de confirmacion");
    const expectedMessage = "You have no items in your shopping cart.";
    await CheckoutCarPage.verifyEmptyCartMessage(expectedMessage);
});

Then('El usuario ingresa el código de descuento en el campo Código de descuento', async function () {
    console.log("El usuario ingresa el código de descuento en el campo Código de descuento");
    const couponCode = environment.demo.website.couponCode;
    await CheckoutCarPage.clickDiscountCodeTitle(); 
    await CheckoutCarPage.enterCouponCode(couponCode);
});

Then('El usuario hace clic en Aplicar', async function () {
    console.log("El usuario hace clic en Aplicar");
    await DriverFactory.myDriver.sleep(2000); 
    await CheckoutCarPage.waitForCartPageLoad();
    await CheckoutCarPage.clickApplyDiscountButton();
});

Then('El precio total del carrito se actualiza con el descuento aplicado', async function () {
    console.log("El precio total del carrito se actualiza con el descuento aplicado");
    await DriverFactory.myDriver.sleep(2000); 
    await CheckoutCarPage.waitForCartPageLoad();
    
    const subtotalText1 = await CheckoutCarPage.getSubtotalText1();
    const subtotalText2 = await CheckoutCarPage.getSubtotalText2();

    const subtotal1 = parseFloat(subtotalText1.replace('$', '').trim());
    const subtotal2 = parseFloat(subtotalText2.replace('$', '').trim());
    expect(subtotal1).to.equal(subtotal2, `El subtotal 1 (${subtotal1}) no coincide con el subtotal 2 (${subtotal2})`);
});

Then('El usuario procede a confirmar el producto para la compra', async function () {
    console.log("El usuario procede a confirmar el producto para la compra");
    await DriverFactory.myDriver.sleep(2000); 
    await CheckoutCarPage.waitForCartPageLoad();
    await CheckoutCarPage.clickProceedToCheckoutButton();
});

Then('El usuario ingresa una dirección de envío válida', async function () { //FUNCIONA LA REFACTORIZACION
    console.log("El usuario ingresa una dirección de envío válida");
    await DriverFactory.myDriver.sleep(4000);
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/#shipping'), configuration.browser.timeout);

    const firstName = environment.demo.userShippingAddress.firstName;
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

Then('El usuario guarda la dirección', async function () {
    console.log("El usuario guarda la dirección");
    await ShippingAdressPage.saveAddress();
});

Then('El usuario completa la compra', async function () {
    console.log("El usuario completa la compra");
    const placeOrderButton = await DriverFactory.myDriver.wait(until.elementLocated(ReviewAndPaymentsPage.placeOrderButton), configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView({block: 'center'});", placeOrderButton);
    await DriverFactory.myDriver.wait(until.elementIsVisible(placeOrderButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(placeOrderButton), configuration.browser.timeout);

    try {
        await placeOrderButton.click();
    } catch (error) {
        console.log("El clic normal falló, intentando con JavaScript");
        await DriverFactory.myDriver.executeScript("arguments[0].click();", placeOrderButton);
    }
});

Then('El usuario ve un mensaje de confirmación de compra', async function () {
    console.log("El usuario ve un mensaje de confirmación de compra");
    await DriverFactory.myDriver.sleep(5000); 
    await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/onepage/success/'), configuration.browser.timeout);
    const thankYouMessage  = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutSucessPage.thankYouMessage),configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(thankYouMessage), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(thankYouMessage), configuration.browser.timeout);
    const messageText = await thankYouMessage.getText();
    const expectedMessage = "Thank you for your purchase!";
    expect(messageText.trim()).to.equal(expectedMessage, `El mensaje obtenido fue: "${messageText}", pero se esperaba: "${expectedMessage}".`);
});

Then('El usuario ingresa el código no válido de descuento en el campo Código de descuento', async function () {
    console.log("El usuario ingresa el código no válido de descuento en el campo Código de descuento");
    const couponCode = environment.demo.website.incorrectCouponCode;
    await CheckoutCarPage.clickDiscountCodeTitle(); 
    await CheckoutCarPage.enterCouponCode(couponCode);
});

Then('El usuario ve un mensaje de error de código de descuento', async function () {
    console.log("El usuario ve un mensaje de error de código de descuento");
    await DriverFactory.myDriver.sleep(2000); 
    await CheckoutCarPage.waitForCartPageLoad();
    const errorMessage = await CheckoutCarPage.getErrorMessage();
    const couponCode = environment.demo.website.incorrectCouponCode;
    const expectedMessage = `The coupon code "${couponCode}" is not valid.`;
    expect(errorMessage.trim()).to.equal(expectedMessage, `El mensaje obtenido fue: "${errorMessage}", pero se esperaba: "${expectedMessage}".`);
});