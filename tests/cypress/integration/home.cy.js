// <reference types="Cypress" />

describe('Home Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.injectAxe();
		
	});

	it('Site Info Exists', () => {
		cy
			.get('.wppbh-app-site-info').contains('h3', 'bluehost-wordpress-plugin')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.wppbh-app-body');
	});

	it('Welcome Section Exists', () => {
		cy
			.get('.wppb-app-section-container').contains('h2', 'Home')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Additional Features Section Exists', () => {
		cy
			.get('.wppb-app-section-container').contains('h2', 'Additional Features')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Account Section Exists', () => {
		cy
			.get('.wppbh-account-help-section').contains('h1', 'Bluehost Account')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Help Section Exists', () => {
		cy
			.get('.wppbh-account-help-section').contains('h1', 'Need some help?')
			.scrollIntoView()
			.should('be.visible');
	});

});
