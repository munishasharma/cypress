import * as dataLocator from "./locators.json"

export function selectViewPort(size) {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }

}