Feature: Navigation and Usage of Sky Home and Deal page

Scenario Outline: verify user is navigated and displayed with list of deals on the deals page
    Given User is on Home Page
    When  User clicks on "Deals"
    Then  User should navigate to "<url>"
    Then  User should be displayed with list of deals and prices "<prices>"

        Examples:
            | prices   |    url     |
            | 28_31_35 |  https://www.sky.com/deals     |  

  Scenario: To verify user is taken to 'Create your My Sky password' screen tries to login with invalid credentails
        Given User is on Home Page
        When  User clicks on Sign in
        And   User enters invalid credentials "parasjain@gmail.com"
        And   User clicks on Continue button
        Then  User should displayed a box with text 'Create your My Sky password'



