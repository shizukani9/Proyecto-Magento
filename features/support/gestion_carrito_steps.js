const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const axios = require('axios');
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
    await DriverFactory.myDriver.get("https://magento2-demo.magebit.com/checkout/cart/");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.timeout);

    const expectedUrl = "https://magento2-demo.magebit.com/checkout/cart/";
    await DriverFactory.myDriver.get(expectedUrl);
    const currentUrl = await DriverFactory.myDriver.getCurrentUrl();
    expect(currentUrl).to.equal(expectedUrl, currentUrl);
});

Then('El usuario modifica la cantidad de uno de los productos', async function () {
    console.log("El usuario modifica la cantidad de uno de los productos");
    
    const cartQuantityInput = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.cartQuantityInput),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", cartQuantityInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(cartQuantityInput), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(cartQuantityInput), configuration.browser.extendedTimeout);

    const randomQuantity = DataGenerator.generateRandomNumber(1);
    await cartQuantityInput.sendKeys(randomQuantity.toString());
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
    
    const updateCartButton = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.updateCartButton),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(updateCartButton), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(updateCartButton), configuration.browser.extendedTimeout);
    await updateCartButton.click();

    await DriverFactory.myDriver.wait(until.stalenessOf(updateCartButton), configuration.browser.extendedTimeout); 
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
});

Then('El precio total del carrito debe actualizarse correctamente', async function () {
    console.log("El precio total del carrito debe actualizarse correctamente");
    await DriverFactory.myDriver.sleep(7000); 
    
    const subtotalPriceElement1 = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.subtotalPriceElement1),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", subtotalPriceElement1);
    await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement1), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement1), configuration.browser.extendedTimeout);
    const subtotalText1 = await subtotalPriceElement1.getText();

    const subtotalPriceElement2 = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.subtotalPriceElement2),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement2), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement2), configuration.browser.extendedTimeout);
    const subtotalText2 = await subtotalPriceElement2.getText();

    const subtotal1 = parseFloat(subtotalText1.replace('$', '').trim());
    const subtotal2 = parseFloat(subtotalText2.replace('$', '').trim());
    expect(subtotal1).to.equal(subtotal2, `El subtotal 1 (${subtotal1}) no coincide con el subtotal 2 (${subtotal2})`);
});

When('El usuario elimina uno de los productos del carrito', async function () {
    console.log("El usuario elimina uno de los productos del carrito");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
    
    const removeItemButton = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.removeItemButton),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", removeItemButton);
    await DriverFactory.myDriver.wait(until.elementIsVisible(removeItemButton), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(removeItemButton), configuration.browser.extendedTimeout);
    await removeItemButton.click();
    await DriverFactory.myDriver.wait(until.stalenessOf(removeItemButton), configuration.browser.extendedTimeout);
    console.log("El producto fue eliminado del carrito.");
});

Then('El producto debe desaparecer del listado, se muestra un mensaje de confirmacion', async function () {
    console.log("El producto debe desaparecer del listado, se muestra un mensaje de confirmacion");
    const emptyCartMessage = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.emptyCartMessage),configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(emptyCartMessage), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(emptyCartMessage), configuration.browser.timeout);
    const messageText = await emptyCartMessage.getText();
    const expectedMessage = "You have no items in your shopping cart.";
    expect(messageText.trim()).to.equal(expectedMessage, `El mensaje obtenido fue: "${messageText}", pero se esperaba: "${expectedMessage}".`);
});

Then('El usuario ingresa el código de descuento en el campo Código de descuento', async function () {
    console.log("El usuario ingresa el código de descuento en el campo Código de descuento");
    const discountCodeTitle = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.discountCodeTitle),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", discountCodeTitle);
    await DriverFactory.myDriver.wait(until.elementIsVisible(discountCodeTitle), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(discountCodeTitle), configuration.browser.timeout);
    await discountCodeTitle.click();

    const couponCodeInput = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.couponCodeInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", couponCodeInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(couponCodeInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(couponCodeInput), configuration.browser.timeout);
    await couponCodeInput.sendKeys(environment.demo.website.couponCode);
});

Then('El usuario hace clic en Aplicar', async function () {
    console.log("El usuario hace clic en Aplicar");
    const applyDiscountButton = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.applyDiscountButton),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", applyDiscountButton);
    await DriverFactory.myDriver.wait(until.elementIsVisible(applyDiscountButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(applyDiscountButton), configuration.browser.timeout);
    await applyDiscountButton.click();
});

Then('El precio total del carrito se actualiza con el descuento aplicado', async function () {
    console.log("El precio total del carrito se actualiza con el descuento aplicado");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.sleep(4000); 
    
    const subtotalPriceElement1 = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.subtotalPriceElement1),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", subtotalPriceElement1);
    await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement1), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement1), configuration.browser.extendedTimeout);
    const subtotalText1 = await subtotalPriceElement1.getText();

    const subtotalPriceElement2 = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.subtotalPriceElement2),configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsVisible(subtotalPriceElement2), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(subtotalPriceElement2), configuration.browser.extendedTimeout);
    const subtotalText2 = await subtotalPriceElement2.getText();

    const subtotal1 = parseFloat(subtotalText1.replace('$', '').trim());
    const subtotal2 = parseFloat(subtotalText2.replace('$', '').trim());
    expect(subtotal1).to.equal(subtotal2, `El subtotal 1 (${subtotal1}) no coincide con el subtotal 2 (${subtotal2})`);
});

Then('El usuario procede a confirmar el producto para la compra', async function () {
    console.log("El usuario procede a confirmar el producto para la compra");
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout);
    await DriverFactory.myDriver.sleep(2000); 
    const proceedToCheckoutButton = await DriverFactory.myDriver.wait(until.elementLocated(CheckoutCarPage.proceedToCheckoutButton),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", proceedToCheckoutButton);
    await DriverFactory.myDriver.wait(until.elementIsVisible(proceedToCheckoutButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(proceedToCheckoutButton), configuration.browser.timeout);
    await proceedToCheckoutButton.click();
});

Then('El usuario ingresa una dirección de envío válida', async function () {
    console.log("El usuario ingresa una dirección de envío válida");
    await DriverFactory.myDriver.sleep(3000);
    //await DriverFactory.myDriver.wait(until.urlContains('https://magento2-demo.magebit.com/checkout/onepage/success/'), configuration.browser.timeout);
    const firstNameInput = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.firstNameInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", firstNameInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(firstNameInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(firstNameInput), configuration.browser.timeout);
    await firstNameInput.clear();
    await firstNameInput.sendKeys(environment.demo.userShippingAddress.firstName);

    const lastNameInput= await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.lastNameInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", lastNameInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(lastNameInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(lastNameInput), configuration.browser.timeout);
    await lastNameInput.clear();
    await lastNameInput.sendKeys(environment.demo.userShippingAddress.lastName);

    const companyInput= await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.companyInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", companyInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(companyInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(companyInput), configuration.browser.timeout);
    await companyInput.clear();
    await companyInput.sendKeys(environment.demo.userShippingAddress.company);

    const streetAddressInput = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.streetAddressInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", streetAddressInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(streetAddressInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(streetAddressInput), configuration.browser.timeout);
    await streetAddressInput.clear();
    await streetAddressInput.sendKeys(environment.demo.userShippingAddress.streetAddress);
    
    const stateSelect = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.stateSelect),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", stateSelect);
    await DriverFactory.myDriver.wait(until.elementIsVisible(stateSelect), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(stateSelect), configuration.browser.timeout);
    //await stateSelect.click();
    const select = new Select(stateSelect);
    await select.selectByValue("2"); 

    const cityInput = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.cityInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", cityInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(cityInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(cityInput), configuration.browser.timeout);
    await cityInput.clear();
    await cityInput.sendKeys(environment.demo.userShippingAddress.city);

    const postcodeInput = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.postcodeInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", postcodeInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(postcodeInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(postcodeInput), configuration.browser.timeout);
    await postcodeInput.clear();
    await postcodeInput.sendKeys(environment.demo.userShippingAddress.zipPostal);

    const telephoneInput = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.telephoneInput),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", telephoneInput);
    await DriverFactory.myDriver.wait(until.elementIsVisible(telephoneInput), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(telephoneInput), configuration.browser.timeout);
    await telephoneInput.clear();
    await telephoneInput.sendKeys(environment.demo.userShippingAddress.phoneNumber);

    const shippingMethodRadio = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.shippingMethodRadio),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", shippingMethodRadio);
    await DriverFactory.myDriver.wait(until.elementIsVisible(shippingMethodRadio), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(shippingMethodRadio), configuration.browser.timeout);
    await shippingMethodRadio.click();
});

Then('El usuario guarda la dirección', async function () {
    console.log("El usuario guarda la dirección");
    const nextButton = await DriverFactory.myDriver.wait(until.elementLocated(ShippingAdressPage.nextButton),configuration.browser.timeout);
    await DriverFactory.myDriver.executeScript("arguments[0].scrollIntoView(true);", nextButton);
    await DriverFactory.myDriver.wait(until.elementIsVisible(nextButton), configuration.browser.timeout);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(nextButton), configuration.browser.timeout);
    await nextButton.click();
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
    
});

Then('El usuario ve un mensaje de error de código de descuento', async function () {
    console.log("El usuario ve un mensaje de error de código de descuento");
    
});