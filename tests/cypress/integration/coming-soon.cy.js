// <reference types="Cypress" />

describe('Coming Soon', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=blueprint#/settings');
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
	});

	it('Has Coming Soon Section on Home', () => {
		cy.visit('/wp-admin/admin.php?page=blueprint#/home');
		cy
			.get('.wppb-section-coming-soon')
			.scrollIntoView()
			.contains('h3', 'Coming Soon')
			.should('be.visible');

	});

	it.skip('Has Coming Soon in Admin Toolbar', () => {
		cy.reload();

		// This is currently overridden by the ecom module
		// cy
		// 	.get('#wp-toolbar #wp-admin-bar-blueprint-coming_soon')
		// 	.contains('div', 'Coming Soon Active')
		// 	.should('be.visible');
	});

	it('Home Coming Soon Section Launches', () => {
		cy.get('.wppb-section-coming-soon button.is-primary').click();
		cy.wait(500);
		// This is currently overridden by the ecom module
		// cy
		// 	.get('#wp-toolbar #wp-admin-bar-blueprint-coming_soon')
		// 	.contains('div', 'Coming Soon Active')
		// 	.should('not.be.visible');

		cy
			.get('.wppb-section-coming-soon')
			.scrollIntoView()
			.contains('h3', 'Site Launched')
			.should('be.visible');

		cy.get('.wppb-section-coming-soon button.is-secondary').click();

		
		cy
			.get('.wppb-section-coming-soon')
			.scrollIntoView()
			.contains('h3', 'Coming Soon')
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
		cy.logout();
		cy.visit('/');
		cy
			.get('body')
			.contains('h1', 'Coming')
			.should('be.visible');
	});

	it('Launching launches site', () => {
		cy.login(Cypress.env('wpUsername'), Cypress.env('wpPassword'));
		cy.visit('/wp-admin/admin.php?page=blueprint#/settings');
		cy.get('.coming-soon-toggle input[type="checkbox"]').should('be.checked');

		cy.visit('/wp-admin/admin.php?page=blueprint#/home');
		cy
			.get('.wppb-section-coming-soon')
			.scrollIntoView()
			.contains('h3', 'Coming Soon')
			.should('be.visible');

		cy.get('.wppb-section-coming-soon button.is-primary').click();
		cy.get('.wppb-section-coming-soon button.is-link').click(); //dismiss

		cy
			.get('.wppb-section-coming-soon')
			.should('not.exist');

		cy.logout();
		cy.visit('/');
		cy
			.get('body')
			.contains('h1', 'Coming soon')
			.should('not.exist');

		cy.login(Cypress.env('wpUsername'), Cypress.env('wpPassword'));
		cy.visit('/wp-admin/admin.php?page=blueprint#/settings');
	})
});
