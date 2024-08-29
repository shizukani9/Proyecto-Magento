@ui
Feature: Adding Products to Cart
@shop @createAccount @signOut 
Scenario: Verify Adding a Product to the Cart
    Given I navigate to a product in the store
    When I click on Add to Cart
    Then the product is correctly added to my cart
