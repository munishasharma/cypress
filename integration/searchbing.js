import * as helper from "../support/helperFile"
import * as dataLocator from "../support/locators";
import * as config from "../support/constants"

describe('To test Login ', () => {

    beforeEach(() => {
        cy.visit('http://www.bing.com/')

    })

    config.sizes.forEach(function (size) {

        it('Verify that the SEO is intact and Leica-geosystems is displayed at the first place '  ,() => {
            //helper.selectViewPort(size)
            cy.get("button[id='bnp_btn_accept']").click();
            cy.get(dataLocator.searchTextBox).type("Leica Geosystems").type('{enter}');
            cy.get("#b_results > li:nth-child(1)").contains('https://leica-geosystems.com');

        })


    })
})

