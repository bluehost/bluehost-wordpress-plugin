// <reference types="Cypress" />

describe('Get Started Welcome Page', function () {

    before(() => {
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/welcome');
        cy.injectAxe(); 
        cy.wait(5000);
    });

    it('Check if Drawer is closed', () => {
        cy.get('.nfd-onboarding-drawer__panel-inner').should('not.be.visible');
    });

    it('Check if welcome card is visible', () => {
        cy.get('.welcome-card').should('be.visible');
    });

    it('Check if Header and Subheader shows up', () => {
        cy.get('.nfd-step-card-heading').should('be.visible');
        cy.get('.nfd-step-card-subheading').should('be.visible');
    });

    it('Change tab and check', () => {
        cy.get('#tab-panel-0-tab2').click().should('be.visible');
        cy.get('#tab-panel-0-tab2-view').should('be.visible').and('contain', 'POWERFUL FEATURES');
    });

    it('Check if next step is loading', () => {
        cy.url().then(url => {
            cy.get('.nfd-card-button').click();
            cy.url().should('not.contain', '/wp-setup/step/get-started/welcome');
        });

    });
});