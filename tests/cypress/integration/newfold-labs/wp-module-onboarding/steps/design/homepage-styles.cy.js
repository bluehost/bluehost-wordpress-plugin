// <reference types="Cypress" />

describe('Homepage Styles Page', function () {

    before(() => {
        cy.exec('npx wp-env run cli wp theme activate yith-wonder');
        cy.exec('npx wp-env run cli wp option set mm_brand BlueHost');
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/homepage-menu');
        cy.injectAxe();
    });

    it('Is Accessible', () => {
    	cy.wait(5000);
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
        let classname = '.homepage_preview__list';

        cy.get(classname)
        .find(classname.concat('__item'))
        .each(($homepage) => {
            cy.wrap($homepage).find(classname.concat('__item__live-preview-container')).click();
            cy.wrap($homepage).find(classname.concat('__item__title-bar--selected')).should('be.visible');
        });
    });

});
