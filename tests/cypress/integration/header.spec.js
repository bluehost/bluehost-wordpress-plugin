// <reference types="Cypress" />

describe('App Header', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.get('.bluehost-header').should('exist');
	});

	it('Is Accessible', () => {
		cy.checkA11y('.bluehost-header');
	});

	it('Bluehost logo is visible', () => {
		cy.findByRole('heading', {name: 'Bluehost', level: 1}).should('be.visible');
		cy.findByTitle('Bluehost Logo').should('be.visible');
	});

	it('Bluehost logo links to home page', () => {
		cy.findByRole('link', {name: 'Bluehost'}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', '/wp-admin/admin.php?page=bluehost#/home');
	});

	it('Help icon is visible', () => {
		cy.findByRole('link', {name: 'Help'}).should('be.visible');
	});

	it('Help icon links to help on Bluerock', () => {
		cy
			.findByRole('link', {name: 'Help'})
			.should('have.attr', 'href', 'https://my.bluehost.com/hosting/help');
	});

	it('User menu icon is visible', () => {
		cy.findByTestId('desktop-dropdown-toggle').should('be.visible');
	});

	it('Clicking user menu icon shows dropdown', () => {
		cy.findByTestId('desktop-dropdown-content').should('not.be.visible');
		cy.findByTestId('desktop-dropdown-toggle').click();
		cy.findByTestId('desktop-dropdown-content').should('be.visible');
	});

	it('Dropdown: "Bluehost Account"', () => {
		cy.findByRole('link', {name: 'Bluehost Account'}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href', 'https://my.bluehost.com/hosting/app');
	});

	it('Dropdown: "Billing"', () => {
		cy.findByRole('link', {name: 'Billing'}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href', 'https://my.bluehost.com/hosting/account_center#billing');
	});

	it('Dropdown: "Products"', () => {
		cy.findByRole('link', {name: 'Products'}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href', 'https://my.bluehost.com/hosting/account_center#products');
	});

	it('Dropdown: "Security"', () => {
		cy.findByRole('link', {name: 'Security'}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href', 'https://my.bluehost.com/hosting/account_center#security');
	});

	it('Dropdown: "Validation Token"', () => {
		cy.findByRole('link', {name: 'Validation Token'}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href', 'https://my.bluehost.com/cgi/token');
	});

	it('Navigate to Themes', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Themes'}).click();
		cy.wait(100);
		cy.url().should('include', '#/marketplace/themes');
	});

	it('Navigate to Plugins', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Plugins'}).click();
		cy.wait(100);
		cy.url().should('include', '#/marketplace/plugins');
	});

	it('Navigate to Services', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Services'}).click();
		cy.wait(100);
		cy.url().should('include', '#/marketplace/services');
	});

	it('Navigate to Staging', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Staging'}).click();
		cy.wait(100);
		cy.url().should('include', '#/tools/staging');
	});

	it('Navigate to Settings', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Settings'}).click();
		cy.wait(100);
		cy.url().should('include', '#/settings');
	});

	it('Navigate to Home', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Home'}).click();
		cy.wait(100);
		cy.url().should('include', '#/home');
	});

})
;
