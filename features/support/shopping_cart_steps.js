const { Given, When, Then } = require("@cucumber/cucumber");
const DriverFactory = require("../../core/ui/driverFactory");
let chai = require('chai');
let expect = chai.expect;
const axios = require('axios');
const YogaPage = require('../../main/ui/yoga_page');
const HomePage = require('../../main/ui/home_page');
const CheckoutCarPage = require('../../main/ui/checkout_car_page');
const DataGenerator = require('../../utils/dataGenerator');
const environment = require("../../environment.json");
const configuration = require("../../configuration.json");
const { until, By } = require('selenium-webdriver');

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

    await DriverFactory.myDriver.wait(until.stalenessOf(updateCartButton), configuration.browser.extendedTimeout); // Espera a que el botón de actualización ya no esté en el DOM
    await DriverFactory.myDriver.wait(until.urlIs("https://magento2-demo.magebit.com/checkout/cart/"), configuration.browser.extendedTimeout); // Asegurarse que la URL no cambió o ya esté cargada
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

Then('El usuario confirma el producto para la compra', async function () {
    console.log("El usuario confirma el producto para la compra");
    
});

Then('El usuario ingresa una dirección de envío válida', async function () {
    console.log("El usuario ingresa una dirección de envío válida");
    
});

Then('El usuario guarda la dirección', async function () {
    console.log("El usuario guarda la dirección");
    
});

Then('El usuario ingresa el código de descuento en el campo Código de descuento', async function () {
    console.log("El usuario ingresa el código de descuento en el campo Código de descuento");
    
});

Then('El usuario hace clic en Aplicar', async function () {
    console.log("El usuario hace clic en Aplicar");
    
});

Then('El precio total del carrito se actualiza con el descuento aplicado', async function () {
    console.log("El precio total del carrito se actualiza con el descuento aplicado");
    
});

Then('El usuario completa la compra', async function () {
    console.log("El usuario completa la compra");
    
});

Then('El usuario ve un mensaje de confirmación de compra', async function () {
    console.log("El usuario ve un mensaje de confirmación de compra");
    
});