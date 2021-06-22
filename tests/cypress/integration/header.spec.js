// <reference types="Cypress" />

describe('App Header', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.get('.bwa-common-header__brand').should('exist');
	});

	it('Is Accessible', () => {
		cy.checkA11y('.bwa-common-header__brand');
	});

	it('Bluehost logo is visible', () => {
		cy.findByRole('heading', {name: 'Bluehost', level: 1}).should('be.visible');
		cy.findByTitle('Bluehost Logo').should('be.visible');
	});

	it('Bluehost logo links to home page', () => {
		cy.findByRole('link', {name: "Bluehost Logo linking to the Bluehost Control Panel"}).as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', 'https://my.bluehost.com/hosting/app');
	});

	it('Help icon is visible', () => {
		cy.findByTestId('help-icon').should('be.visible');
	});

	it('User menu icon is visible', () => {
		cy.findByTestId('desktop-dropdown-toggle').should('be.visible');
	});

	it('Clicking user menu icon shows dropdown', () => {
		cy.findByTestId('desktop-dropdown-content').should('not.be.visible');
		cy.findByTestId('desktop-dropdown-toggle').click();
		cy.findByTestId('desktop-dropdown-content').scrollIntoView().should('be.visible');
	});

	it('Dropdown: "Bluehost Account"', () => {
		cy.findByTestId('dropdown-account_link').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contains', 'https://my.bluehost.com/hosting/app');
	});

	it('Dropdown: "Billing"', () => {
		cy.findByTestId('dropdown-billing_link').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contains', 'https://my.bluehost.com/hosting/account_center')
			.and('contains', '#billing');
	});

	it('Dropdown: "Products"', () => {
		cy.findByTestId('dropdown-products_link').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contains', 'https://my.bluehost.com/hosting/account_center')
			.and('contains', '#products');
	});

	it('Dropdown: "Mail & Office"', () => {
		cy.findByTestId('dropdown-mail_link').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contains', 'https://my.bluehost.com/hosting/app')
			.and('contains', 'email-office');
	});

	it('Dropdown: "Security"', () => {
		cy.findByTestId('dropdown-security_link').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contains', 'https://my.bluehost.com/hosting/account_center')
			.and('contains', '#security');
	});

	it('Dropdown: "Validation Token"', () => {
		cy.findByTestId('dropdown-validation_token_link').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contains', 'https://my.bluehost.com/cgi/token');
	});

	it('Navigate to Themes', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Themes'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/marketplace/themes');
	});

	it('Navigate to Plugins', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Plugins'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/marketplace/plugins');
	});

	it('Navigate to Services', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Services'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/marketplace/services');
	});

	it('Navigate to Staging', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Staging'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/tools/staging');
	});

	it('Navigate to Settings', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Settings'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/settings');
	});

	it('Navigate to Help', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Help'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/help');
	});

	it('Navigate to Home', () => {
		cy.findByTestId('desktop-nav').findByRole('link', {name: 'Home'}).click();
		cy.wait(1000);
		cy.url().should('include', '#/home');
	});

})
;
