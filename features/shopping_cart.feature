@ui
Feature: Adding Products to Cart
@shop @login @signOut @deleteAccount
Scenario: Verify Adding a Product to the Cart
    Given I navigate to a product in the store
    When I click on Add to Cart
    Then the product is correctly added to my cart


#Feature: Removing Products from Cart

#Scenario: Verify Removing a Product from the Cart
#    Given I am logged in and have a product in my cart
#    When I click on Remove from Cart
#    Then the product is correctly removed from my cart
#    And the total amount in the cart is updated
    