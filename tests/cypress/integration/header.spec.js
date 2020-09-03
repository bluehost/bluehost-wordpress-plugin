// <reference types="Cypress" />

describe('App Header', function () {

    before(() => {
        cy.visit('/wp-admin/admin.php?page=bluehost#/home');
        cy.injectAxe();
    });

    it('Exists', () => {
        cy.get(header).should('exist');
    });

    it('Is Accessible', () => {
        cy.checkA11y(header);
    });

    it('Bluehost logo is visible', () => {
        cy.get(logo).should('be.visible');
    });

    it('Bluehost logo links to Bluerock', () => {
        cy.get(logoLink)
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/app');
    });

    it('Help icon is visible', () => {
        cy.get(helpIcon).should('be.visible');
    });

    it('Help icon links to help on Bluerock', () => {
        cy.get(helpLink)
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/help');
    });

    it('User menu icon is visible', () => {
        cy.get(userMenuIcon).should('be.visible');
    });

    it('Clicking user menu icon shows dropdown', () => {
        cy.get(userMenu).should('not.be.visible');
        cy.get(userMenuToggle).should('be.visible');
        cy.get(userMenuToggle).click();
        cy.get(userMenu).should('be.visible');
    });

    it('Dropdown: "Bluehost Account"', () => {
        cy.get(userMenu).find('a').eq(0).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/app');
    });

    it('Dropdown: "Billing"', () => {
        cy.get(userMenu).find('a').eq(1).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/account_center#billing');
    });

    it('Dropdown: "Products"', () => {
        cy.get(userMenu).find('a').eq(2).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/account_center#products');
    });

    it('Dropdown: "Security"', () => {
        cy.get(userMenu).find('a').eq(3).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/account_center#security');
    });

    it('Dropdown: "Validation Token"', () => {
        cy.get(userMenu).find('a').eq(4).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', '#');
    });

    xit('Clicking on "Validation Token" show you a token', () => {
        // TODO: Implement this functionality!
    });

    it('Navigate to Themes', () => {
        cy.get(nav).contains('Themes').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/marketplace/themes');
    });

    it('Navigate to Plugins', () => {
        cy.get(nav).contains('Plugins').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/marketplace/plugins');
    });

    it('Navigate to Services', () => {
        cy.get(nav).contains('Services').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/marketplace/services');
    });

    it('Navigate to Staging', () => {
        cy.get(nav).contains('Staging').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/tools/staging');
    });

    it('Navigate to Settings', () => {
        cy.get(nav).contains('Settings').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/settings');
    });

    it('Navigate to home', () => {
        cy.get(nav).contains('Home').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/home');
    });

})
;