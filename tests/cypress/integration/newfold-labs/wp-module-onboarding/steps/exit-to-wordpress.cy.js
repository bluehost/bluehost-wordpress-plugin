// <reference types="Cypress" />

describe('Exit to WordPress', function () {

    before(() => {
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/products');
		cy.injectAxe();
    });


    it('Stay on Onboarding Page', () => {
        var drawer_status = cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('not.be.visible');
        var noExitToWPLabel = cy.get('.is-drawer-fade > button').contains('Exit to WordPress').should('not.be.visible');
        if(drawer_status || noExitToWPLabel) {
            cy.get('button').contains('Next').click();
        }
        
        cy.get('.is-drawer-fade > button').contains('Exit to WordPress').click();
        cy.get('.components-modal__header > button').click();

        cy.get('.is-drawer-fade > button').contains('Exit to WordPress').click();
        cy.get('.is-secondary').contains('Continue').click();

        cy.url().should('contain', '#/wp-setup/step/basic-info');
    });

    it('Exit to WordPress Page', () => {
        cy.get('.is-drawer-fade > button').contains('Exit to WordPress').click();
        cy.get('.is-primary').contains('Exit').click();
        cy.wait(3000);
        cy.url().should('contain', '#/home/onboarding');
    });
});