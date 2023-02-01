// <reference types="Cypress" />

describe('Page', () => {

	before(() => {
		cy.login();
		cy.visit('/wp-admin/site-health.php?tab=debug');
	})

	it('Is running the correct WP version', () => {

		cy.get('#health-check-accordion-block-wp-core').prev().click();
		cy.get('#health-check-accordion-block-wp-core').find('tr').first().find('td').last().contains(new RegExp(`^${Cypress.env('wpVersion')}`));

	})

	it('Is running the correct PHP versions', () => {

		cy.get('#health-check-accordion-block-wp-server').prev().click();
		cy.get('#health-check-accordion-block-wp-server').find('tr').eq(2).find('td').last().contains(Cypress.env('phpVersion'));

	})

})
