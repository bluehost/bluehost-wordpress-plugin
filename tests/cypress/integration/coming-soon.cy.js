// <reference types="Cypress" />

describe('Coming Soon Page', () => {

	before(() => {
		// Make sure coming soon is active to start
		cy.exec('npx wp-env run cli wp option set nfd_coming_soon true');

		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
	});

	it('Coming Soon Toggle Works', () => {
		cy.intercept('POST', /bluehost(\/|%2F)v1(\/|%2F)settings/).as('update');
		// verify coming soon is checked when active
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').should('have.attr', 'aria-checked', 'true');
		
		// verify coming soon unchecks properly
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').uncheck();
		cy.wait('@update', {timeout: 10000});
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').should('have.attr', 'aria-checked', 'false');
	
		// verify coming soon checks again properly
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').check();
		cy.wait('@update', {timeout: 10000});
		cy.get('.onoffswitch__checkbox[aria-label="Coming Soon Page"]').should('have.attr', 'aria-checked', 'true');
		
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

	// Also need to check when coming soon is disabled
	// - that site loads properly
	// - that admin notice does not display

});
