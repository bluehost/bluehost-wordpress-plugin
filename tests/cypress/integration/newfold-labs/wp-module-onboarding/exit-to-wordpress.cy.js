// <reference types="Cypress" />

describe('Exit to WordPress', function () {
    before(() => {
        cy.setCustomerData();
        cy.visit(
            'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/basic-info');
        // cy.injectAxe();
    });

    // it('Is Accessible', () => {
    // 	cy.checkA11y();
    // });

    it('Go to the Page where the Drawer contains Exit to WordPress Button', () => {
        var noExitToWPLabel =
            cy.get('.nfd-onboarding-etw__trigger').should('not.exist') ||
            !cy
                .get('.nfd-onboarding-drawer__toggle-button')
                .click()
                .and('not.have.class', 'is-suppressed');
        if (noExitToWPLabel) {
            cy.get('.navigation-buttons_next').click();
        }
        cy.url().should('not.contain', '/ecommerce/step/products');
        cy.get('.nfd-onboarding-etw__trigger').click();
        cy.get('.components-modal__content').should('be.visible');
    });

    it('Check if heading and paragraph content exists', () => {
        cy.get('h1.components-modal__header-heading').should('be.visible');
        cy.get('.components-modal__content > p').should('be.visible');
    });

    it("Stay on Onboarding Page when 'X'/Continue is clicked", () => {
        cy.url().then((currUrl) => {
            // When 'X' is clicked
            cy.get('.components-modal__header > .components-button').click();
            cy.url().should('equal', currUrl);

            // When 'Continue' is clicked
            cy.get('.nfd-onboarding-etw__trigger').click();
            cy.get('.nfd-onboarding-etw__buttons > .is-secondary').click();
            cy.url().should('equal', currUrl);
        });
    });

    it('Exit to WordPress Page', () => {
        cy.get('.nfd-onboarding-etw__trigger').click();
        cy.get('.nfd-onboarding-etw__buttons > .is-primary').click();
        cy.url({ timeout: 12000 }).should('contain', '#/home');
    });

    after(() => {
        cy.clearCustomerData();
    });
});
