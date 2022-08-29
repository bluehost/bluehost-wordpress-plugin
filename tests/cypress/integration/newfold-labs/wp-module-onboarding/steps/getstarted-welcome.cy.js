// <reference types="Cypress" />

describe('Get Started Welcome Page', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/welcome');
        // cy.injectAxe();
        cy.wait(5000);
    });

    // it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y('.site-type-card');
	// });

    it('Check Exit to Wordpress button is visible and clickable and continue flow', () => {
        cy.get('.nfd-onboarding-etw__trigger')
            .should('be.visible')
            .click();
        cy.get('.components-modal__screen-overlay').should('be.visible');
        cy.get('.nfd-onboarding-etw__buttons > .is-secondary').click();
        cy.get('.components-modal__screen-overlay').should('not.exist');
    });

    it('Check Exit to Wordpress button is visible and clickable and cancel', () => {
        cy.get('.nfd-onboarding-etw__trigger')
            .should('be.visible')
            .click();
        cy.get('.components-modal__screen-overlay').should('be.visible');
        cy.get('.components-modal__header > button').click();
        cy.get('.components-modal__screen-overlay').should('not.exist');
    });


    it('Check if Drawer is closed', () => {
        cy.get('.nfd-onboarding-drawer__panel-inner').should('not.be.visible');
    });

    it('Check to make sure drawer does not open', () => {
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('not.be.visible');
    });

    it('Check if welcome card is visible', () => {
        cy.get('.welcome-card').should('be.visible');
    });

    it('Check if main heading and sub heading shows up', () => {
        cy.get('.nfd-step-card-heading').should('be.visible');
        cy.get('.nfd-step-card-subheading').should('be.visible');
    });

    it('Check for brandname in sub heading', () => {
        cy.exec('wp option set mm_brand BlueHost');
        cy.reload();
        cy.get('.nfd-step-card-subheading').should('contain', 'Bluehost');
    });

    it('Change tab and check', () => {
        cy.get('#tab-panel-0-tab2').trigger('mouseover').should('be.visible');
        cy.get('#tab-panel-0-tab2-view').should('be.visible');
    });

    it('Check navigation back is not visible', () => {
        cy.get('.navigation-buttons_back').should('not.exist');
    });

    it('Check if next step loads on clicking navigation next', () => {
        cy.get('.navigation-buttons_next').click();
        cy.url().should('not.include', '#/wp-setup/step/get-started/welcome');
        cy.go('back');
    });

    it('Check Exit to Wordpress button is visible and clickable and exit flow', () => {
        cy.get('.nfd-onboarding-etw__trigger')
            .should('be.visible')
            .click();
        cy.get('.components-modal__screen-overlay').should('be.visible');
        cy.get('.nfd-onboarding-etw__buttons > .is-primary').click();
        cy.wait(3000);
        cy.url().should('not.contain', '#/wp-setup/step/get-started/welcome');
    });

    after(() => {
        cy.clearCustomerData();
    });
});