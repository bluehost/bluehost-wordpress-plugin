// <reference types="Cypress" />

describe('Typography Step Test', function () {

    before(() => {
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/preview');
        cy.wait(3000);
    });

    it('Navigate to Typography Step', () => {
        // Have to select the Preview Step Checkbox to activate Colors and Typgoraphy
        cy.get('.theme-styles-preview__checkbox__label').scrollIntoView().click();
        cy.get('.navigation-buttons_next').click();
        cy.get('.navigation-buttons_next').click();
        cy.wait(3000);
    });

    it('Check if Drawer opens', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').should('not.be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
    });

    it('Check if Sidebar opens', () => {
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
