@ui
Feature: Gestión de Carrito de compras 

@createAccount @deleteAccount @funcional_Positivo @GC-1 @Iteracion1 @pass
Scenario: GC-1: Verificar que cuando se añade un producto al carrito entonces se actualiza la cantidad y el precio total
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El precio total del carrito debe actualizarse correctamente

@createAccount @deleteAccount @funcional_Positivo @GC-2 @Iteracion1 @pass
Scenario: GC-2: Verificar que cuando se edita la cantidad de un producto en el carrito entonces el precio total se actualiza correctamente
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart 
    Then El usuario modifica la cantidad de uno de los productos
    Then El precio total del carrito debe actualizarse correctamente

@createAccount @deleteAccount @funcional_Negativo @GC-3 @Iteracion1 @pass
Scenario: GC-3: Verificar que cuando se elimina un producto del carrito entonces el producto desaparece del listado y el precio total se actualiza
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart  
    When El usuario elimina uno de los productos del carrito
    Then El producto debe desaparecer del listado, se muestra un mensaje de confirmacion

@createAccount @deleteAccount @funcional_Positivo @GC-4 @Iteracion1 @pass @shop
Scenario: GC-4: Verificar que cuando se aplica un código de descuento válido en el carrito entonces el precio total se actualiza correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario ingresa el código de descuento en el campo Código de descuento
        And El usuario hace clic en Aplicar
    Then El precio total del carrito se actualiza con el descuento aplicado
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra

@createAccount @deleteAccount @funcional_Positivo @GC-5 @Iteracion1 @pass
Scenario: GC-5: Verificar que cuando se ingresa una dirección de envío completa y válida entonces se almacena correctamente y se completa la compra
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario procede a confirmar el producto para la compra
    Then El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra

@createAccount @deleteAccount @funcional_Negativo @GC-6 @Iteracion1 @pass
Scenario: GC-6: Verificar que cuando se aplica un código de descuento no válido en el carrito entonces el precio total se actualiza correctamente.
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
    When El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse en la pagina Checkout cart
    Then El usuario ingresa el código no válido de descuento en el campo Código de descuento
        And El usuario hace clic en Aplicar
    Then El usuario ve un mensaje de error de código de descuento