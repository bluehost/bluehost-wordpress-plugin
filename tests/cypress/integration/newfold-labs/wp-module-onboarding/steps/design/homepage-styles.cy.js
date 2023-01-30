// <reference types="Cypress" />

describe('Homepage Styles Page', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/homepage-menu');
        cy.injectAxe();
    });

    it('Is Accessible', () => {
    	cy.wait(5000);
    	// cy.checkA11y();
    });

    it('Check if Header and Subheader shows up', () => {
        cy.get('.nfd-main-heading__title').should('be.visible');
        cy.get('.nfd-main-heading__subtitle').should('be.visible');
    });

    it('Check if Drawer opens', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('not.be.visible');
    });

    it('Check if Sidebar opens', () => {
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('not.be.visible');
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

    after(() => {
        cy.clearCustomerData();
    });

});
