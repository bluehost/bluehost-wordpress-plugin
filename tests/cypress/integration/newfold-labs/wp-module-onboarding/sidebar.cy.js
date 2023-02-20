// <reference types="Cypress" />

describe('Sidebar', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/welcome');
        // cy.injectAxe();
    });

    it('Check to make sure sidebar opens, content is in place and close sidebar with X', () => {
        cy.get('.nfd-onboarding-header__end > .components-button').click().and('have.class', 'is-pressed');
        cy.get('.nfd-onboarding-sidebar-learn-more__get-started-welcome').should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more--step-intro-panel').should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more--illustration-panel__container').should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more--info-panel').should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more--help-panel__links').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__header > button').click();
        cy.get('.components-panel__header').should('not.exist');
    });

    it('Check for help panel links in sidebar and close it with `i` icon', () => {
        cy.get('.nfd-onboarding-header__end > .components-button').click().and('have.class', 'is-pressed');
        cy.get('.nfd-onboarding-sidebar-learn-more--help-panel__links').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-button--blue').should('have.attr', 'type').and('match', /button/);
        cy.get('.nfd-onboarding-button--white').should('have.attr', 'type').and('match', /button/);
        cy.get('.nfd-onboarding-sidebar-learn-more--help-panel__links > a')
            .should('exist')
            .should('have.attr', 'href');
        cy.get('.nfd-onboarding-header__end > .components-button').click();
        cy.get('.components-panel__header').should('not.exist');
    });

    it('Navigate pages and check if sidebar is open/closed', () => {
        cy.get('.nfd-onboarding-header__end > .components-button').click().and('have.class', 'is-pressed');
        cy.get('.components-panel__header').should('be.visible');
        cy.get('.navigation-buttons_next').click();
        cy.url().should('not.include', '#/wp-setup/step/get-started/welcome');
        cy.get('.components-panel__header').should('be.visible');
        cy.get('.nfd-onboarding-header__end > .components-button').click();
        cy.go('back');
        cy.get('.components-panel__header').should('not.exist');
    });

    it('Go to the next step on clicking navigation Next', () => {
        cy.get('.navigation-buttons_next').click();
        cy.url().should('not.include', '#/wp-setup/step/get-started/welcome');
    });

    it('Check for help panel links in sidebar and close it with `i` icon', () => {
        cy.get('.nfd-onboarding-header__end > .components-button').click().and('have.class', 'is-pressed');
        cy.get('.nfd-onboarding-sidebar-learn-more--help-panel__links').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-button--white').should('have.attr', 'type').and('match', /button/);
        cy.get('.nfd-onboarding-sidebar-learn-more--help-panel__links > a')
            .should('exist')
            .should('have.attr', 'href');
        cy.get('.nfd-onboarding-header__end > .components-button').click();
        cy.get('.components-panel__header').should('not.exist');
    });

    after(() => {
        cy.clearCustomerData();
    });
})