// <reference types="Cypress" />

describe('Coming Soon', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
		cy.injectAxe();
		
	});

	it('Coming Soon Toggle Exists', () => {

		cy.get('#wp-toolbar #wp-admin-bar-site-status')
			.contains('span', 'Live')
			.should('be.visible');

		cy.get('.wppbh-app-settings-coming-soon').contains('h3', 'Maintenance Mode')
			.scrollIntoView()
			.should('be.visible');
		
		cy.get('.wppbh-app-settings-coming-soon').contains('label', 'Coming soon')
			.scrollIntoView()
			.should('be.visible');

		cy.get('[data-id="coming-soon-toggle"]').should('have.attr', 'aria-checked').and('include', 'false');
		cy.get('[data-id="coming-soon-toggle"]').click();
		cy.wait(100);
		cy.get('[data-id="coming-soon-toggle"]').should('have.attr', 'aria-checked').and('include', 'true');
		cy.get('.yst-notifications').contains('.yst-notification', 'Coming soon').should('be.visible');
		
		// Protip was removed in redesign, should reimplement
		// cy
		// 	.get('.coming-soon-protip .accordion-summary')
		// 	.contains('p', 'Pro Tip')
		// 	.should('be.visible');
		// cy.get('.coming-soon-protip').should('not.have.attr', 'open');
		// cy.get('.coming-soon-protip summary').click();
		// cy.wait(100);
		// cy.get('.coming-soon-protip').should('have.attr', 'open');
	});

	it('Displays Coming Soon in Site Status Admin Toolbar', () => {
		cy.get('#wp-toolbar #wp-admin-bar-site-status')
			.contains('span', 'Coming Soon')
			.should('be.visible');
	});

	it('Has Coming Soon Section on Home', () => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.get('.wppbh-home .wppb-app-section-content').first()
			.scrollIntoView()
			.contains('h1', 'Ready to go live?')
			.should('be.visible');

		cy.get('.wppbh-home .wppb-app-section-content')
			.contains('a.yst-button', 'Preview your').first()
			.should('exist');

		cy.get('.wppbh-home .wppb-app-section-content').first()
			.contains('button', 'Launch your')
			.should('exist');
		
	});

	it('Displays admin coming soon notice', () => {
		cy.visit('/wp-admin/index.php');
		cy.get('.notice-warning')
			.contains('p', 'coming')
			.should('be.visible');
	});

	it('Displays Coming Soon on Frontend', () => {
		cy.logout();
		cy.visit('/');
		cy.get('body')
			.contains('h1', 'Coming')
			.should('be.visible');
	});

	it('Launching launches site', () => {
		cy.login(Cypress.env('wpUsername'), Cypress.env('wpPassword'));
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
		cy.get('[data-id="coming-soon-toggle"]').should('have.attr', 'aria-checked').and('include', 'true');
		
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');

		cy.get('.wppbh-home .wppb-app-section-content').first()
			.contains('button', 'Launch your')
			.click();
		cy.wait(100);
		
		cy.get('.wppbh-home .wppb-app-section-content').first()
			.contains('button', 'Launch your')
			.should('not.exist');

		cy.logout();
		cy.visit('/');
		cy.get('body')
			.contains('h1', 'Coming soon')
			.should('not.exist');

		cy.login(Cypress.env('wpUsername'), Cypress.env('wpPassword'));
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
	})
});
