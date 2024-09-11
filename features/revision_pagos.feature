@createAccount @deleteAccount @funcional_Positivo @RP-1 @Iteracion3 @pass @shopping
Scenario: RP-1: Verificar que cuando se llega a la pantalla de revisión del pedido entonces se muestra un resumen detallado del pedido.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
        And La dirección debe guardarse correctamente sin errores
    Then El usuario visualiza un resumen detallado del pedido

@createAccount @deleteAccount @funcional_Positivo @RP-2 @Iteracion3 @pass @shopping
Scenario: RP-2: Verificar que cuando se selecciona un método de pago válido entonces se puede completar la transacción.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario selecciona el metodo de envio valido
    Then El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra

@createAccount @deleteAccount @funcional_Positivo @RP-3 @Iteracion3 @pass @shopping
Scenario: RP-3: Verificar que cuando se aplica un código de descuento válido entonces el total del pedido se actualiza correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario selecciona el metodo de envio valido
    Then El usuario ingresa el código de descuento en el campo Código de descuento
    And El usuario hace clic en Aplicar
    Then El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra