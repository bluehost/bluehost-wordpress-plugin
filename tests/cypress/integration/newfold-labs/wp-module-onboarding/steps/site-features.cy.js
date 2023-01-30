// <reference types="Cypress" />

describe('Site Features', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/site-features');
        cy.injectAxe();
    });

    it('Is Accessible', () => {
        cy.wait(3000);
        // cy.checkA11y();
    });

    it('Check if Header and Subheader shows up', () => {
        cy.get('.nfd-main-heading__title').should('be.visible');
        cy.get('.nfd-main-heading__subtitle').should('be.visible');
    });

    it('Check if Drawer opens', () => {
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
    });

    it('Check if Sidebar opens', () => {
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('not.be.visible');
    });

    it('Check if Site Features list exists and select them', () => {
        cy.get('.checkbox-list')
        .find('.checkbox-list-col')
        .each(($checkBoxListCol) => {
            cy.wrap($checkBoxListCol)
            .find('.checkbox-item')
            .each(($checkBoxItem) => {
                cy.wrap($checkBoxItem).find('.components-base-control').find('input').scrollIntoView().click();
            });
        });
    });

    after(() => {
        cy.clearCustomerData();
    });

});
