import * as helper from "../support/helperFile"
import * as dataLocator from "../fixtures/locators.json"
import * as config from "../support/constants"


describe('To test Login ', () => {

    beforeEach(() => {
        cy.visit('http://angularjs.realworld.io/#/')
        helper.login("munisha@yopmail.com", "Password@1")
    })

    config.sizes.forEach(function (size) {

       it('Test 1 - setting feature : When updating bio', () => {
            helper.selectViewPort(size)
            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.textArea).clear().type("Not changing")
            cy.get(dataLocator.updateButton).click()
            cy.get(dataLocator.updatedText).contains("Not changing")
        })

        it('Test 2 - setting feature : When updating same Password and bio ', () => {
            helper.selectViewPort(size)
            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.newPassword).type("Password@1")
            cy.get(dataLocator.textArea).clear().type("Not changing")
            cy.get(dataLocator.updateButton).click()
            cy.get(dataLocator.updatedText).contains("Not changing")
        })

        it('Test 3 - setting feature : When updating new Password and bio', () => {
            helper.selectViewPort(size)

            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.newPassword).type("Password@2")
            cy.get(dataLocator.textArea).clear().type("Password got changed")
            cy.get(dataLocator.updateButton).click()
            cy.get(dataLocator.updatedText).contains("Password got changed")


            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.logoutButton).click()

            //login with old password
            helper.login("munisha@yopmail.com", "Password@1");
            cy.get(dataLocator.invalidEmailOrPasswordErrorMessage).contains('email or password is invalid')

            // login with the new password
            helper.login("munisha@yopmail.com", "Password@2");
            cy.get(dataLocator.loggedInUsername).contains("Munisha")

            // changing back to the original Password
            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.newPassword).type("Password@1")
            cy.get(dataLocator.textArea).clear().type("Password got changed")
            cy.get(dataLocator.updateButton).click()
            cy.get(dataLocator.updatedText).contains("Password got changed")
        })


        it('Test 4 - setting feature : updating username', () => {
            helper.selectViewPort(size)

            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.updateUsername).clear().type("Munisha Sharma")
            cy.get(dataLocator.updateButton).click()
            cy.get(dataLocator.updatedUsername).contains("Munisha Sharma")

            // changing back to the original Username
            cy.get(dataLocator.settingLink).click()
            cy.get(dataLocator.updateUsername).clear().type("Munisha")
            cy.get(dataLocator.updateButton).click()
        })


    })

})




