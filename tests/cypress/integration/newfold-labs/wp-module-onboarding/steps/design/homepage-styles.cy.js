// <reference types="Cypress" />

describe('Homepage Styles Page', function () {

    before(() => {
        // cy.exec('npx wp-env run cli wp theme activate yith-wonder');
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/homepage-menu');
        // cy.injectAxe();
    });

    it('Is Accessible', () => {
    	cy.wait(15000);
    });

    it('Check if Header and Subheader shows up', () => {
        cy.get('.nfd-main-heading__title').should('be.visible');
        cy.get('.nfd-main-heading__subtitle').should('be.visible');
    });

    it('Check if Drawer toggles', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
    });

    it('Check if Sidebar toggles', () => {
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
    });

    it('Check if Homepage Styles exist and are selectable', () => {
        let previewCount = 0;
        const className = '.homepage_preview__list__item';
        const arr = cy.get(className);

        arr.each(() => {
            cy.get(className).eq(previewCount).click();
            cy.get(className).eq(previewCount)
                .find(className.concat('__title-bar--selected')).should('be.visible');
            previewCount += 1;
        });
    });

});
