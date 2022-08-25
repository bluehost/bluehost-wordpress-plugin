// <reference types="Cypress" />

describe('Start Setup WP Experience Page', function () {

	before(() => {
		cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/experience');
		cy.injectAxe();
	});

    it('Check if Drawer Suppressed', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('not.be.visible');
    });

    it('Check if Headers Load', () => {
        cy.get('.nfd-step-card-heading').should('exist');
        cy.get('.nfd-step-card-subheading-other').should('exist');
        cy.get('.nfd-step-card-question').should('exist');
    });

    it('Check if radio options load', () => {
        cy.get('.components-radio-control__option').should('exist');
    });

    it('Navigation Buttons Landing on expected pages', () => {
        cy.get('button').contains('Back').click();
        cy.url().should('contain', 'get-started/welcome');
        cy.get('button').contains('Next').click();
        cy.url().should('contain', 'get-started/experience');
    });

    it('Enable Button based on the radio button selected', () => {
        cy.get('.nfd-card-button').should('be.disabled');
        cy.url().should('contain', 'get-started/experience');

        cy.get('[type="radio"]').check('1', { force: true });
        cy.get('[type=radio]:checked').should('have.css', 'background-color', 'rgb(53, 117, 211)');
        cy.get('.nfd-card-button').should('not.be.disabled').contains('Continue Setup').click();
        cy.url().should('contain', 'get-started/site-secondary');
    });

    it('Check Need Help Tag', () => {
        cy.get('.nfd-card-need-help-tag > a').should('exist').should('have.attr', 'href');
    });
});