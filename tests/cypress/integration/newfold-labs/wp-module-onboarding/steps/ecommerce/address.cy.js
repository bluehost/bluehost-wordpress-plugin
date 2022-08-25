// <reference types="Cypress" />

describe('Step Ecommerce Address/Store Details', function () {
    before(() => {
        cy.setCustomerData();
        cy.visit(
            'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/address'
        );
        cy.wait(2000);
    });

    it('Checks if Drawer opened', () => {
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('be.visible');
    });

    it('Checks Active Link is Store Details', () => {
        cy.get(':nth-child(1) > .nfd-onboarding-drawer__panel-menu-link')
        .should('have.class', 'active')
        .and('have.attr', 'href')
        .and('include', '#/ecommerce/step/address')
    });

    it('Closes the Drawer and checks if closed', () => {
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('not.be.visible');
    });

    it('Checks if Heading and Subheading are present', () => {
        cy.get('.nfd-step-card-heading').should('be.visible');
        cy.get('.nfd-step-card-subheading').should('be.visible');
    });

    it('Checks if all the inputs are enabled', () => {
        cy.get('input[name="woocommerce_store_address"]')
            .should('be.visible')
            .and('not.be.disabled');
        cy.get('input[name="woocommerce_store_address_2"]')
            .should('be.visible')
            .and('not.be.disabled');
        cy.get('input[name="woocommerce_store_city"]')
            .should('be.visible')
            .and('not.be.disabled');
        cy.get('input[name="woocommerce_store_postcode"]')
            .should('be.visible')
            .and('not.be.disabled');
        cy.get('select[name="state"]')
            .should('be.visible')
            .and('not.be.disabled');
        cy.get('select[name="country"]')
            .should('be.visible')
            .and('not.be.disabled');
    });

    it('Checks if there are the correct number of countries', () => {
        cy.get('select[name="country"]')
            .find('option')
            .should('have.length', 224);
    });

    it('Populates the correct number of states for a country', () => {
        cy.get('select[name="country"]').select('IN');

        cy.get('select[name="state"]').find('option').should('have.length', 37);
    });

    it('Checks existence of Need Help Tag', () => {
        cy.get('.nfd-card-need-help-tag').scrollIntoView().should('be.visible');
    });

    it("Checks existence of Need Help URL", () => {
        cy.get('.nfd-card-need-help-tag > a').should('have.attr', 'href');
    });

    it('Checks if Continue Setup exists and is enabled', () => {
        cy.get('.nfd-nav-card-button')
            .scrollIntoView()
            .should('be.visible')
            .and('not.be.disabled');
    });

    it('Goes to the next step on clicking navigation Next', () => {
        cy.get('.navigation-buttons_next').click();
        cy.url().should('not.include', '#/ecommerce/step/address');
        cy.go('back');
    });

    it('Goes to the previous step on clicking navigation Back', () => {
        cy.get('.navigation-buttons_back').click();
        cy.url().should('not.include', '#/ecommerce/step/address');
        cy.go('back');
    });

    it('Goes to next step on Continue Setup', () => {
        cy.get('.nfd-nav-card-button').click();
        cy.url().should('not.include', '#/ecommerce/step/address');
        cy.go('back');
    });

    after(() => {
        cy.clearCustomerData();
    });
});
