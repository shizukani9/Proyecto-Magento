@ui
Feature: Create an Account

Scenario: Create an account with valid data
    Given I set the create account with:
        | firstName         | Juan                   |
        | lastName          | Pérez                  |
        | email             | juan.perez3@example.com |
        | password          | ContraseñaSegura123    |
        | confirmPassword   | ContraseñaSegura123    |
    When I click on the Create an Account button
    Then the account should be created successfully
    Then Delete customer
        | email             | juan.perez3@example.com |