import * as search from "../fixtures/search"
import * as dataLocator from "../support/locators";
import * as config from "../support/constants"

describe('To test Login ', () => {

    before(() => {
        cy.fixture('search.json').as('search')
    })

    config.sizes.forEach(function (size) {

        it('Verify that the SEO is intact and Leica-geosystems is displayed at the top of the list in - ' + size ,() => {
            cy.visit('http://www.google.com/')
            cy.get(dataLocator.googleAcceptCookies).click();
            cy.get(dataLocator.googleInputTextBox).type(search.searchText).type('{enter}');
            let searchResult = dataLocator.googleSearchResult;
            cy.get(searchResult).should(($searchResult) => {
                const text = $searchResult.text();
                expect(text).to.include(search.contentMatch);
            })
            cy.get(searchResult)
                .first()
                .invoke('attr', 'href')
                .then(href => console.log(href));
            // To get the first search URL
            cy.title().should('include',search.title)

            cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div.yuRUbf > a').click();
        })


    })


})