// <reference types="Cypress" />

describe('Step Ecommerce Address/Store Details', function () {
    before(() => {
        cy.setCustomerData();
        cy.exec('npx wp-env run cli wp plugin install woocommerce --activate');
        cy.visit(
            'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/address'
        );
        cy.wait(45000);
        // cy.injectAxe();
    });

    it('Is Accessible', () => {
        cy.wait(8000);
	});

    it('Checks if Drawer opened', () => {
        cy.get('.nfd-onboarding-drawer__toggle-button').click();
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('be.visible');
    });

    it('Checks Active Link in the drawer is Store Details', () => {
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

    it('Check to make sure sidebar opens, content is in place and close sidebar with X', () => {
        cy.get('.nfd-onboarding-header__end > .components-button').click().and('have.class', 'is-pressed');
        cy.get('.nfd-onboarding-sidebar-learn-more__ecommerce-address').should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__header > button').click();
        cy.get('.components-panel__header').should('not.exist');
    });

    it('Checks if Heading and Subheading are present', () => {
        cy.wait(2000);
        cy.get('.nfd-step-card-heading').should('be.visible');
        cy.get('.nfd-step-card-subheading').should('be.visible');
    });

    it('Checks if all the inputs are enabled', () => {
        cy.get('select[name="country"]')
            .should('be.visible')
            .and('not.be.disabled').select('US');
        cy.get('input[name="woocommerce_store_address"]')
            .should('be.visible')
            .and('not.be.disabled').clear().type('5335 Gate Pkwy');
        cy.get('input[name="woocommerce_store_city"]')
            .should('be.visible')
            .and('not.be.disabled').clear().type('Jacksonville');
        cy.get('select[name="state"]')
            .should('be.visible')
            .and('not.be.disabled').select('FL');
        cy.get('input[name="woocommerce_store_postcode"]')
            .should('be.visible')
            .and('not.be.disabled').clear().type('32256');
        cy.get('input[name="woocommerce_email_from_address"]')
            .should('be.visible')
            .and('not.be.disabled').clear().type('test123@gmail.com');
        cy.get('select[name="woocommerce_currency"]')
            .should('be.visible')
            .and('not.be.disabled').select('USD');
    });

    it('Checks if there are the correct number of countries', () => {
        cy.get('select[name="country"]')
            .find('option')
            .should('have.length', 224);
    });

    it('Populates the correct number of states for a country', () => {
        cy.get('select[name="country"]').select('US');
        cy.get('select[name="state"]').find('option').should('have.length', 55);
    });

    it('Checks if there are the correct number of currencies', () => {
        cy.get('select[name="woocommerce_currency"]')
            .find('option')
            .should('have.length', 163);
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

    it('Goes to next step on Continue Setup', () => {
        cy.get('.nfd-nav-card-button').scrollIntoView().click();
        cy.url().should('not.include', '#/ecommerce/step/address');
        cy.go('back');
    });

    after(() => {
        cy.clearCustomerData();
    });
});
