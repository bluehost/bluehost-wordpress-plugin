// <reference types="Cypress" />

describe('Themes Page - Loading State', function () {

    beforeEach(() => {
        cy.server();
        cy.route({
            url: '/wp-json/mojo/v1/themes?count=1000&_locale=user',
            method: 'GET',
            response: 'fx:themes',
            delay: 2000,
        }).as('themes');
        cy.visit({
            url: '/wp-admin/admin.php?page=bluehost#/marketplace/themes',
            onBeforeLoad(win) {
                // See https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
                delete win.fetch;
            }
        });
    });

    it('Test Loading State', () => {
        cy.get('.product-card.--placeholder').should('have.length', 12);
        cy.get('.bluehost-marketplace__pagination-container').should('be.empty');
        cy.wait('@themes');
        cy.get('.product-card.--placeholder').should('have.length', 0);
        cy.get('.bluehost-marketplace__pagination-container').should('not.be.empty');
    });

});