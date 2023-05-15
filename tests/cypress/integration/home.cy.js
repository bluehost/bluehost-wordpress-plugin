// <reference types="Cypress" />

describe('Home Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=blueprint#/home');
		cy.injectAxe();
		
	});

	it('Header Exists', () => {
		cy
			.get('.wppb-header').contains('h2', 'Blueprint')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.wppb-app-body');
	});

	it('Web Content Section Exists', () => {
		cy
			.get('.wppb-section-home-content').contains('h3', 'Content')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Settings Section Exists', () => {
		cy
			.get('.wppb-section-home-settings').contains('h3', 'Settings')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Hosting Section Exists', () => {
		cy
			.get('.wppb-section-home-hosting').contains('h3', 'Hosting')
			.scrollIntoView()
			.should('be.visible');
	});

});
