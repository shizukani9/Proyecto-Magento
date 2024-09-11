@ui
Feature: Confirmacion de pedido

@createAccount @deleteAccount @funcional_Positivo @CP-1 @Iteracion4 @pass @shopping
Scenario: CP-1: Verificar que cuando se completa el pago entonces se genera un número de pedido único.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario visualiza el metodo de envio valido
    Then El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra
    Then El usuario visualiza el numero unico de pedido

@createAccount @deleteAccount @funcional_Positivo @CP-2 @Iteracion4 @pass @shopping
Scenario: CP-2: Verificar que cuando se realiza clic en el número de pedido único entonces se redirecciona a la página de detalles del pedido
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario visualiza el metodo de envio valido
    Then El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra
    Then El usuario visualiza el numero unico de pedido
    Then El usuario realiza clic en el numero unico de pedido
    Then El usuario visualiza detalles del pedido

@createAccount @deleteAccount @funcional_Positivo @CP-3 @Iteracion4 @pass @shopping
Scenario: CP-3: Verificar que cuando se completa la compra entonces se muestra un mensaje de agradecimiento.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario visualiza el metodo de envio valido
    Then El usuario completa la compra
    Then El usuario ve un mensaje de agradecimiento de compra