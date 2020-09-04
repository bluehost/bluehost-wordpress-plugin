// <reference types="Cypress" />

describe('Services Page - Loading State', function () {

    beforeEach(() => {
        cy.server();
        cy.route({
            url: '**/mojo/v1/services?category=&count=1000*',
            method: 'GET',
            response: 'fx:services',
            delay: 2000,
        }).as('services');
        cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace/services');
    });

    it('Test Loading State', () => {
        cy.get('.product-card.--placeholder').should('have.length', 12);
        cy.get('.bluehost-marketplace__pagination-container').should('be.empty');
        cy.wait('@services');
        cy.get('.product-card.--placeholder').should('have.length', 0);
        cy.get('.bluehost-marketplace__pagination-container').should('not.be.empty');
    });

});
