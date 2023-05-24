// <reference types="Cypress" />

describe('Home Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.injectAxe();
		
	});

	it('Header Exists', () => {
		cy
			.get('.wppbh-header').contains('h2', 'Bluehost')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.wppbh-app-body');
	});

	it('Web Content Section Exists', () => {
		cy
			.get('.wppbh-section-home-content').contains('h3', 'Content')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Settings Section Exists', () => {
		cy
			.get('.wppbh-section-home-settings').contains('h3', 'Settings')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Hosting Section Exists', () => {
		cy
			.get('.wppbh-section-home-hosting').contains('h3', 'Hosting')
			.scrollIntoView()
			.should('be.visible');
	});

});
