// <reference types="Cypress" />

describe('Plugins Page - Loading State', function () {

    beforeEach(() => {
        cy.server();
        cy.route({
            url: '/wp-json/mojo/v1/plugins?count=1000&_locale=user',
            method: 'GET',
            response: 'fx:plugins',
            delay: 2000,
        }).as('plugins');
        cy.visit({
            url: '/wp-admin/admin.php?page=bluehost#/marketplace/plugins',
            onBeforeLoad(win) {
                // See https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
                delete win.fetch;
            }
        });
    });

    it('Test Loading State', () => {
        cy.get('.product-card.--placeholder').should('have.length', 12);
        cy.get('.bluehost-marketplace__pagination-container').should('be.empty');
        cy.wait('@plugins');
        cy.get('.product-card.--placeholder').should('have.length', 0);
        cy.get('.bluehost-marketplace__pagination-container').should('not.be.empty');
    });

});