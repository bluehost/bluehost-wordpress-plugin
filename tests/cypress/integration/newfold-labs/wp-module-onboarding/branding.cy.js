// <reference types="Cypress" />

describe('Branding', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/index.php?page=nfd-onboarding&flow=ecommerce');
        // cy.injectAxe();
    });

    // it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y();
	// });

    it('Has brand specific CSS.', () => {
        cy.exec('npx wp-env run cli wp option set mm_brand BlueHost');
        cy.reload().wait(2000);
        cy.get('body').should('have.class', 'nfd-brand-bluehost');
    });

    it('Has Newfold CSS when mm_brand does not exist.', () => {
        cy.exec('npx wp-env run cli wp option delete mm_brand');
        cy.reload().wait(2000);
        cy.get('body').should('have.class', 'nfd-brand-newfold');
    });

    after(() => {
        // Reset this data so that it does not affect the behaviour of other tests.
        cy.exec('npx wp-env run cli wp option set mm_brand BlueHost');
        cy.clearCustomerData();
    });

});
