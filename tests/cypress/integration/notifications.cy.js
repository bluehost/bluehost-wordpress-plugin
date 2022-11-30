// <reference types="Cypress" />
const marketplace = require('../fixtures/notifications.json');

describe('Notifications', function () {

	before(() => {
		cy.server();
		cy.intercept({
			method: 'GET',
			url: '**newfold-notifications**'
		}, {
			fixture: 'notifications'
		}).as('notifications');
		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.injectAxe();
        // cy.exec('npx wp-env run cli wp transient delete newfold_notifications');
	});

	it('Is Accessible', () => {
		cy.wait(1000);
		cy.checkA11y('.newfold-notifications-wrapper');
	});

	it('Container Exists in plugin app', () => {
        cy.get('.newfold-notifications-wrapper').should('have.length', 1);
	});

	it('Test notification displays plugin app', () => {
        cy.get('.newfold-notifications-wrapper #notification-test-4')
            .should('be.visible')
			.should('have.attr', 'data-id')
			.and('equal', 'test-4');
        
        cy.get('.newfold-notifications-wrapper #notification-test-4')
            .contains('Here is a plugin notice it should display everywhere');
	});

	it('Container Exists in wp-admin', () => {
		cy.visit('/wp-admin/index.php');
		cy.wait(1000);
        cy.get('.newfold-notifications-wrapper').should('have.length', 1);
	});

	// notification renders on specified page
    // notification renders on multiple pages with pages set to `all`
    // notification renders in specified app page
    // notification renders in all app for `all`
    // expired notification should not show
    // search notifications render

    // no notifications display when there are none

    // click events triggered
    // dismiss events triggered

    // notification is dismissed when close button is clicked
    // dismiss is persistant on page reload


});
