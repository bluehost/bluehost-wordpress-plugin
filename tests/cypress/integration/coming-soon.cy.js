// <reference types="Cypress" />

describe('Coming Soon Page', () => {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
	});

	it('Coming Soon Toggle Works', () => {

		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').should('be.checked');
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').click();
		cy.wait(10000);
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').should('not.be.checked');

		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').check();
		cy.wait(10000);
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').should('be.checked');
		
	});

	it('Has Coming Soon in Admin Toolbar', () => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
		cy
			.get('#wp-toolbar')
			.contains('#nfd-site-status-text', 'Coming Soon')
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
		cy.injectAxe()
		cy.wait(500);
		cy.checkA11y('body');
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
