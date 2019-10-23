// <reference types="Cypress" />

import 'cypress-axe';

describe('App Header', function () {

    before(() => {
        cy.visit('/wp-admin/admin.php?page=bluehost#/home');
        cy.injectAxe();
    });

    it('Exists', () => {
        cy.get('#bluehost-header').should('have.length', 1);
        cy.get('#navigation').should('have.length', 1);
    });

    it('Is Accessible', () => {
        cy.checkA11y('#bluehost-header');
        cy.checkA11y('#navigation');
    });

    it('Bluehost logo is visible', () => {
        cy.get('#bluehost-logo-wrap svg').should('be.visible');
    });

    it('Bluehost logo links to Bluerock', () => {
        cy.get('#bluehost-logo-wrap a')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/app');
    });

    it('Help button is visible', () => {
        cy.get('.bluehost-nav-wrap-element.help svg').should('be.visible');
    });

    it('Help button links to help on Bluerock', () => {
        cy.get('.bluehost-nav-wrap-element.help a')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/help');
    });

    it('User menu toggle is visible', () => {
        cy.get('.bluehost-nav-wrap-element.user-menu').should('be.visible');
    });

    it('Clicking user menu toggle shows dropdown', () => {
        cy.get('#bluehost-nav-popup-inner').should('not.be.visible');
        cy.get('.bluehost-nav-wrap-element.user-menu').as('button');
        cy.get('@button').should('be.visible');
        cy.get('@button').click();
        cy.get('#bluehost-nav-popup-inner').should('be.visible');
    });

    it('Dropdown: "Bluehost Account"', () => {
        cy.get('#bluehost-nav-popup-inner ul li a').eq(0).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/app');
    });

    it('Dropdown: "Billing"', () => {
        cy.get('#bluehost-nav-popup-inner ul li a').eq(0).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/account_center#billing');
    });

    it('Dropdown: "Products"', () => {
        cy.get('#bluehost-nav-popup-inner ul li a').eq(0).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/account_center#products');
    });

    it('Dropdown: "Security"', () => {
        cy.get('#bluehost-nav-popup-inner ul li a').eq(0).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', 'https://my.bluehost.com/hosting/account_center#security');
    });

    it('Dropdown: "Validation Token"', () => {
        cy.get('#bluehost-nav-popup-inner ul li a').eq(0).as('link');
        cy.get('@link').should('be.visible');
        cy.get('@link')
            .should('have.attr', 'href')
            .and('equal', '#');
    });

    xit('Clicking on "Validation Token" show you a token', () => {
        // TODO: Implement this functionality!
    });

    it('Navigate to Themes', () => {
        cy.get('#app-primary-navigation').contains('Themes').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/marketplace/themes');
    });

    it('Navigate to Plugins', () => {
        cy.get('#app-primary-navigation').contains('Plugins').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/marketplace/plugins');
    });

    it('Navigate to Services', () => {
        cy.get('#app-primary-navigation').contains('Services').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/marketplace/services');
    });

    it('Navigate to Staging', () => {
        cy.get('#app-primary-navigation').contains('Staging').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/tools/staging');
    });

    it('Navigate to Settings', () => {
        cy.get('#app-primary-navigation').contains('Settings').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/settings');
    });

    it('Navigate to home', () => {
        cy.get('#app-primary-navigation').contains('Home').click();
        cy.url().should('include', '/wp-admin/admin.php?page=bluehost#/home');
    });

});