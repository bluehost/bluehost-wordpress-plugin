// <reference types="Cypress" />

describe('Home Page', function () {
	let NewfoldRuntime;

	before(() => {
		cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/home');
		cy.window().its('NewfoldRuntime').then(data => {
			NewfoldRuntime = data;
		});
		cy.injectAxe();
	});

	it('Site Info Exists', () => {
		cy
			.get('.wppbh-app-site-info').contains('h3', NewfoldRuntime.site.title)
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.wppbh-app-body');
	});

	it('Welcome Section Exists', () => {
		cy
			.get('.nfd-app-section-container').contains('h2', 'Home')
			.scrollIntoView()
			.should('be.visible');
	});

	it.skip('Additional Features Section Exists', () => {
		cy
			.get('.nfd-app-section-container').contains('h2', 'Additional Features')
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
