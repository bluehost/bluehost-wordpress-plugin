// <reference types="Cypress" />

describe('Performance Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/performance');
		cy.injectAxe();
		
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.wppbh-app-body');
	});

	it('Has Cache Settings', () => {
		cy
			.get('.cache-options')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Has Clear Cache Settings', () => {
		cy
			.get('.clear-cache')
			.scrollIntoView()
			.should('be.visible');
	});

	// this is no longer connected
	it.skip('Clear Cache Disabled when Cache is Disabled', () => {

		cy
			.get('input[type="radio"]#cache-level-0').check();

		cy.wait(500);

		cy
			.get('.clear-cache-button')
			.scrollIntoView()
			.should('have.class', 'disabled');

		cy.get('input[type="radio"]#cache-level-1').check();

		cy
			.get('.clear-cache-button')
			.scrollIntoView()
			.should('not.have.class', 'disabled');
		
		cy
			.get('.edit-site-notices .components-snackbar__content')
			.contains('div', 'Cache')
			.should('be.visible');
	});

	// this is no longer in place
	it.skip('Settings Callout Navigates to Settings Page', () => {
		cy.hash().should('eq', '#/performance');
		cy.get('a.callout-link-settings').click();
		cy.wait(500);
		cy.hash().should('eq', '#/settings');
		cy.get('a.callout-link-performance').click();
		cy.wait(500);
		cy.hash().should('eq', '#/performance');
		cy
			.get('.card-cache-settings')
			.should('be.visible');
	});

	// can't test clear cache without endurance page cache being installed
	// how to do in cypress env?
	// it('Clear Cache Button Functions', () => {
	// 	cy
	// 		.get('.card-clear-cache button')
	// 		.click();

	// 	cy
	// 		.get('.edit-site-notices .components-snackbar__content')
	// 		.contains('div', 'Cache cleared')
	// 		.should('be.visible');
	// });

});
