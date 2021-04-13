import * as helper from "../support/helperFile"
import * as dataLocator from "../fixtures/locators";
import * as config from "../support/constants"


describe('To test Login ', () => {
    beforeEach(() => {
        cy.visit('http://angularjs.realworld.io/#/')
    })

    config.sizes.forEach(function (size) {
       it('Test 1- Login with correct email and Password for size' + size  ,() => {
            helper.selectViewPort(size)
            helper.login("munisha@yopmail.com", "Password@1")
            cy.get(dataLocator.loggedInUsername).contains("Munisha")
        })


        it('Test 2 - Login with empty email and password' + size  ,() => {
            helper.selectViewPort(size)
            cy.get(dataLocator.signInLink).click();
            cy.get(dataLocator.loginButton).click();
            cy.get(dataLocator.invalidEmailOrPasswordErrorMessage).contains('email or password is invalid')
        })

        it('Test 3 - Login with correct email and empty password' + size  ,() => {
            helper.selectViewPort(size)
            cy.get(dataLocator.signInLink).click();
            cy.get(dataLocator.email).type("munisha@yopmail.com")
            cy.get(dataLocator.loginButton).click();
            cy.get(dataLocator.invalidEmailOrPasswordErrorMessage).contains('email or password is invalid')
        })

        it('Test 4 - Login with correct email and empty password' + size  ,() => {
            helper.selectViewPort(size)
            cy.get(dataLocator.signInLink).click();
            cy.get(dataLocator.password).clear().type("password")
            cy.get(dataLocator.loginButton).click();
            cy.get(dataLocator.invalidEmailOrPasswordErrorMessage).contains('email or password is invalid')
        })

        it('Test 5 - Login with correct email and Password for size' + size  ,() => {
            helper.selectViewPort(size)
            helper.login("munishaRandom@yopmail.com", "Password@11234")
            cy.get(dataLocator.invalidEmailOrPasswordErrorMessage).contains('email or password is invalid')
        })

        it('Test 6- Login with in-correct email' + size  ,() => {
            helper.selectViewPort(size)
            cy.get(dataLocator.signInLink).click();
            cy.get(dataLocator.email).type("munisha")
            cy.get(dataLocator.loginButton).click();
            cy.get('input:invalid')
                .invoke('prop', 'validationMessage')
                .should('equal', 'Please include an \'@\' in the email address. \'munisha\' is missing an \'@\'.')
        })

    })
})

