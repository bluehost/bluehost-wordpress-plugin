// <reference types="Cypress" />

describe('Coming Soon Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
		cy.injectAxe();
	});

	it('Coming Soon Toggle Works', () => {

		cy.get('.coming-soon-toggle input[type="checkbox"]').uncheck();
		cy.get('.coming-soon-toggle input[type="checkbox"]').check();
		cy.wait(100);
		cy
			.get('.edit-site-notices .components-snackbar__content')
			.contains('div', 'Coming soon activated')
			.should('be.visible');

		cy
			.get('.coming-soon-protip .accordion-summary')
			.contains('p', 'Pro Tip')
			.should('be.visible');
		cy.get('.coming-soon-protip').should('not.have.attr', 'open');
		cy.get('.coming-soon-protip summary').click();
		cy.wait(100);
		cy.get('.coming-soon-protip').should('have.attr', 'open');
		cy.get('.coming-soon-protip .accordion-content').should('be.visible');
	});

	it('Has Coming Soon in Admin Toolbar', () => {
		cy.reload();
		cy
			.get('#wp-toolbar #wp-admin-bar-bluehost-coming_soon')
			.contains('div', 'Coming Soon Active')
			.should('be.visible');
	});

	it('Displays admin coming soon notice', () => {
		cy.visit('/wp-admin/index.php');
		cy
			.get('.notice-warning')
			.contains('p', 'coming')
			.should('be.visible');
	});

	it('Displays Coming Soon on Frontend', () => {
		cy.get('#wp-admin-bar-logout a').click({ force: true });
		cy.visit('/');
		cy
			.get('body')
			.contains('h2', 'Coming Soon')
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y();
	});

	it('Has admin login button', () => {
		cy
			.get('body')
			.contains('a', 'Admin Login')
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', '/wp-login.php');
	});

});
