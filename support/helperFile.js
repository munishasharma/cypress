import * as dataLocator from "../fixtures/locators.json"
import * as config from "./constants"

export function login(email,password) {
    cy.get(dataLocator.signInLink).click();
    cy.get(dataLocator.email).clear().type(email)
    cy.get(dataLocator.password).clear().type(password)
    cy.get(dataLocator.loginButton).click();
    
}

export function selectViewPort(size) {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }

}