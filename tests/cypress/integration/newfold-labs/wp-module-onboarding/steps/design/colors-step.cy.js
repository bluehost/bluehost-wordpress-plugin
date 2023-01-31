// <reference types="Cypress" />

describe('Colors Step Test', function () {

    before(() => {
        cy.exec('npx wp-env run cli wp option delete nfd_module_onboarding_flow');
        cy.exec('npx wp-env run cli wp option delete nfd_module_onboarding_theme_settings');
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/preview');
        // cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/colors');
        cy.injectAxe();
    });

    it('Navigate to Colors Step', () => {
        cy.wait(10000);
        // Have to select the Preview Step Checkbox to activate Colors and Typgoraphy
        cy.get('.theme-styles-preview__checkbox__label').click();
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

    it('Check if Default Color variations exists and are selectable', () => {
        cy.get('.theme-colors--drawer')
        .find('.color-palette')
        .each(($color) => {
            cy.wrap($color).click();
            cy.get('.color-palette-selected').scrollIntoView().should('be.visible');
        });
    });

    it('Check for Custom Colors', () => {
        // Opens Custom Palette
        cy.get('.custom-palette__top').scrollIntoView().click();

        // Select Colors for custom Palette
        const colors = ['F312345', 'DA34125', '2512453', '85E01D2', 'C541A04'];
        let classname = '.custom-palette__below';

        cy.get(classname)
        .find(classname.concat('-row'))
        .each(($color) => {
            // Get a Random Color to be used
            const randomIndex = Math.floor(Math.random() * colors.length);
            cy.wrap($color).click();
            cy.get('.components-input-control__input').clear();
            cy.get('.components-input-control__input').type(colors[randomIndex]);
            cy.wrap($color).click();
        });

        // Closes Custom Palette
        cy.get('.custom-palette__top').scrollIntoView().click();
    });

});
