// <reference types="Cypress" />

describe('Branding', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/index.php?page=nfd-onboarding&flow=ecommerce');
    });

    it('Has brand specific CSS.', () => {
        cy.exec('npx wp-env run cli wp option set mm_brand BlueHost');
        cy.reload();
        cy.get('body').should('have.class', 'nfd-brand-bluehost');
    });

    it('Has Newfold CSS when mm_brand has an empty value.', () => {
        cy.exec('npx wp-env run cli wp option set mm_brand ""');
        cy.reload();
        cy.get('body').should('have.class', 'nfd-brand-newfold');
    });

    it('Has Newfold CSS when mm_brand does not exist.', () => {
        cy.exec('npx wp-env run cli wp option delete mm_brand');
        cy.reload();
        cy.get('body').should('have.class', 'nfd-brand-newfold');
    });

    after(() => {
        // Reset this data so that it does not affect the behaviour of other tests.
        cy.exec('npx wp-env run cli wp option set mm_brand BlueHost');
        cy.clearCustomerData();
    });

});
