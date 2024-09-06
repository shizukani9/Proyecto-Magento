@ui
Feature: Adding Products to Cart

@funcional_Positivo 
Scenario: Verify Adding a Product to the Cart
    Given I navigate to a product in the store
    When I click on Add to Cart
    Then the product is correctly added to my cart

@funcional_Positivo @GC-1
Scenario: GC-1 Verificar que cuando se añade un producto al carrito entonces se actualiza la cantidad y el precio total
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
        And El usuario añade un producto al carrito
    Then La cantidad de productos en el carrito debe actualizarse
        And El precio total del carrito debe reflejar el producto añadido

@funcional_Positivo @GC-2
Scenario: GC-2 Verificar que cuando se edita la cantidad de un producto en el carrito entonces el precio total se actualiza correctamente
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
        And El usuario añade un producto al carrito  
    When El usuario modifica la cantidad de uno de los productos
    Then El precio total del carrito debe actualizarse correctamente

@funcional_Positivo @GC-3
Scenario: GC-3 Verificar que cuando se elimina un producto del carrito entonces el producto desaparece del listado y el precio total se actualiza
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
        And El usuario añade un producto al carrito  
    When El usuario elimina uno de los productos del carrito
    Then El producto debe desaparecer del listado
        And El precio total del carrito debe actualizarse correctamente

@funcional_Positivo @GC-4
Scenario: GC-4: Verificar que cuando se aplica un código de descuento en el carrito entonces el precio total se actualiza correctamente
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
        And El usuario añade un producto al carrito
        And El usuario navega a Checkout
    When El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección
    Then El usuario ingresa el código de descuento en el campo Código de descuento
        And El usuario hace clic en Aplicar
    Then El precio total del carrito se actualiza con el descuento aplicado
        And El usuario completa la compra
        And El usuario ve un mensaje de confirmación de compra

@funcional_Positivo @GC-5
Scenario: GC-5 Verificar que cuando se ingresa una dirección de envío completa y válida entonces se almacena correctamente y se muestra en la revisión del pedido
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
        And El usuario añade un producto al carrito
        And El usuario navega a Checkout
    When El usuario ingresa una dirección de envío válida
        And El usuario guarda la dirección  
        And La dirección debe mostrarse en la pantalla de revisión del pedido

@funcional_Positivo @GC-6
Scenario: GC-6 Verificar que cuando se deja un campo obligatorio vacío en la dirección de envío entonces se muestra un mensaje de error
    Given El usuario está en la página de inicio
        And El usuario navega a página de Yoga Collection
        And El usuario añade un producto al carrito
        And El usuario navega a Checkout
    When El usuario ingresa una dirección de sin completar todos los campos obligatorios
    Then Se debe mostrar un mensaje de error indicando que faltan campos obligatorios
