// <reference types="Cypress" />

describe('Typography Step Test', function () {

    before(() => {
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/typography');
        // cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/preview');
        // cy.injectAxe();
    });

    it('Navigate to Typography Step', () => {
        cy.wait(3000);
        // Have to select the Preview Step Checkbox to activate Colors and Typgoraphy
        // cy.get('.theme-styles-preview__checkbox__label').click();
        // cy.get('.navigation-buttons_next').click();
        // cy.get('.navigation-buttons_next').click();
    });

    it('Is Accessible', () => {
    	cy.wait(3000);
    	// cy.checkA11y();
    });

    it('Check if Drawer toggles', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
    });

    it('Check if Sidebar toggles', () => {
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').should('not.be.visible');
    });

    it('Check if Default Typography variations exists and are selectable', () => {
        cy.get('.theme-fonts--drawer')
        .find('.font-palette')
        .each(($font) => {
            cy.wrap($font).click();
            cy.get('.font-palette-selected').scrollIntoView().should('be.visible');
        });
    });

});
