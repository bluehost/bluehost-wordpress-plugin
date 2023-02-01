// <reference types="Cypress" />

describe('App Header', () => {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
	});

	it('Exists', () => {
		cy.get('.bwa-common-header__brand').should('exist');
	});

	it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(1000);
		cy.checkA11y('.bwa-common-header__brand');
	});

	it('Bluehost logo is visible', () => {
		cy.get('h1').should('be.visible');
		cy.get('[title="Bluehost Logo"').should('be.visible');
	});

	it('Bluehost logo links to portal', () => {
		cy.get('[aria-label="Bluehost Logo linking to the Bluehost Control Panel"').as('link');
		cy.get('@link').should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', 'https://my.bluehost.com/hosting/app');
	});

	it('Help icon is visible', () => {
		cy.get('[data-testid="help-icon"]').should('be.visible');
	});

	it('User menu icon is visible', () => {
		cy.get('[data-testid="desktop-dropdown-toggle"]').should('be.visible');
	});

	describe('User Dropdown', () => {
		it('Clicking user menu icon shows dropdown', () => {
			cy.get('[data-testid="desktop-dropdown-content"]').should('not.exist');
			cy.get('[data-testid="desktop-dropdown-toggle"]').click();
			cy.get('[data-testid="desktop-dropdown-content"]').scrollIntoView().should('be.visible');
		});
	
		it('Dropdown: "Bluehost Account"', () => {
			cy.get('[data-testid="dropdown-account_link"]').as('link');
			cy.get('@link').should('be.visible');
			cy.get('@link').should('have.attr', 'href')
				.and('contains', 'https://my.bluehost.com/hosting/app');
		});
	
		it('Dropdown: "Billing"', () => {
			cy.get('[data-testid="dropdown-billing_link"]').as('link');
			cy.get('@link').should('be.visible');
			cy.get('@link').should('have.attr', 'href')
				.and('contains', 'https://my.bluehost.com/hosting/account_center')
				.and('contains', '#billing');
		});
	
		it('Dropdown: "Products"', () => {
			cy.get('[data-testid="dropdown-products_link"]').as('link');
			cy.get('@link').should('be.visible');
			cy.get('@link').should('have.attr', 'href')
				.and('contains', 'https://my.bluehost.com/hosting/account_center')
				.and('contains', '#products');
		});

		it('Dropdown: "Mail & Office"', () => {
			cy.get('[data-testid="dropdown-mail_link"]').as('link');
			cy.get('@link').should('be.visible');
			cy.get('@link').should('have.attr', 'href')
				.and('contains', 'https://my.bluehost.com/hosting/app')
				.and('contains', 'email-office');
		});
	
		it('Dropdown: "Security"', () => {
			cy.get('[data-testid="dropdown-security_link"]').as('link');
			cy.get('@link').should('be.visible');
			cy.get('@link').should('have.attr', 'href')
				.and('contains', 'https://my.bluehost.com/hosting/account_center')
				.and('contains', '#security');
		});
	
		it('Dropdown: "Validation Token"', () => {
			cy.get('[data-testid="dropdown-validation_token_link"]').as('link');
			cy.get('@link').should('be.visible');
			cy.get('@link').should('have.attr', 'href')
				.and('contains', 'https://my.bluehost.com/cgi/token');
		});
	})

	describe('Navigate to Top-Level Pages', () => {
		it('Navigate to Staging', () => {
			cy.get('[data-testid="desktop-nav"]').findByRole('link', {name: 'Staging'}).click();
			cy.wait(1100);
			cy.url().should('include', '#/tools/staging');
		});
	
		it('Navigate to Settings', () => {
			cy.get('[data-testid="desktop-nav"]').findByRole('link', {name: 'Settings'}).click();
			cy.wait(1100);
			cy.url().should('include', '#/settings');
		});
	
		it('Navigate to Help', () => {
			cy.get('[data-testid="desktop-nav"]').findByRole('link', {name: 'Help'}).click();
			cy.wait(1100);
			cy.url().should('include', '#/help');
		});
	
		it('Navigate to Home', () => {
			cy.get('[data-testid="desktop-nav"]').findByRole('link', {name: 'Home'}).click();
			cy.wait(1100);
			cy.url().should('include', '#/home');
		});
	})
})
;
