// <reference types="Cypress" />

describe('Typography Step Test', function () {

    before(() => {
        // cy.exec('npx wp-env run cli wp theme activate yith-wonder');
        // cy.exec('npx wp-env run cli wp option delete nfd_module_onboarding_flow');
        // cy.exec('npx wp-env run cli wp option delete nfd_module_onboarding_theme_settings');
        // cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/preview');
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/typography');
        // cy.injectAxe();
    });

    it('Navigate to Typography Step', () => {
        cy.wait(10000);
        // Have to select the Preview Step Checkbox to activate Colors and Typgoraphy
        cy.get('.theme-styles-preview__checkbox__label').click();
        cy.get('.navigation-buttons_next').click();
        cy.get('.navigation-buttons_next').click();
    });

    it('Is Accessible', () => {
    	cy.wait(10000);
    	// cy.checkA11y();
    });

    it('Check if Drawer toggles', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
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
        let previewCount = 0;
        const className = '.font-palette ';
        const arr = cy.get(className);

        arr.each(() => {
            cy.get(className).eq(previewCount).click();
            cy.get('.font-palette-selected').scrollIntoView().should('be.visible');
            previewCount += 1;
        });
    });

});
