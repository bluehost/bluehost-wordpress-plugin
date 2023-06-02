// <reference types="Cypress" />

describe('Notifications', () => {

	before(() => {

		cy.intercept({
			method: 'GET',
			url: '**newfold-notifications**'
		}, {
			fixture: 'notifications.json'
		}).as('notifications');

		cy.visit('/wp-admin/admin.php?page=bluehost#/home', {timeout: 30000});
		cy.wait('@notifications');
	});

	it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(1000);
		cy.checkA11y('.newfold-notifications-wrapper');
	});

	it('Container Exists in plugin app', () => {
        cy.get('.newfold-notifications-wrapper').should('have.length', 1);
	});

    // notification renders in all app for `all`
	it('Test notification displays in plugin app with `all`', () => {
        cy.get('.newfold-notifications-wrapper #notification-test-4')
            .should('be.visible')
			.should('have.attr', 'data-id')
			.and('equal', 'test-4');
        
        cy.get('.newfold-notifications-wrapper #notification-test-4')
            .contains('it should display everywhere');
	});

	// notification renders only on specified app page
	it('Test notification displays in plugin app for specific page (settings)', () => {

        cy.get('.newfold-notifications-wrapper #notification-test-1')
			.should('not.exist');

		// cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
		cy.get('.bwa-desktop-nav__item.settings').click();
		cy.wait(200);

        cy.get('.newfold-notifications-wrapper #notification-test-1')
            .should('be.visible')
			.should('have.attr', 'data-id')
			.and('equal', 'test-1');
        
        cy.get('.newfold-notifications-wrapper #notification-test-1')
            .contains('display on plugin app settings page');
	});

    // expired notification should not show
	it('Test expired notification does not display in plugin app', () => {
        cy.get('.newfold-notifications-wrapper #notification-test-expired')
			.should('not.exist');
	});

    // dismiss events triggered
	it('Dismissing notification removes it from the page', () => {
		cy.intercept({
			method: 'POST',
			url: '**newfold-notifications**'
		}, {
			body: {"id":"test-2"},
			delay: 1000,
		}).as('notificationDismiss');

		cy.visit('/wp-admin/admin.php?page=bluehost#/home');

        cy.get('.newfold-notifications-wrapper #notification-test-2')
            .should('be.visible')
			.should('have.attr', 'data-id')
			.and('equal', 'test-2');
        
        cy.get('.newfold-notifications-wrapper #notification-test-2')
            .contains('display on home and onboarding screens');

		cy.get('#notification-test-2 .notice-dismiss').click( {force: true } );
		cy.get('.newfold-notifications-wrapper #notification-test-2')
			.should('have.class', 'is-dismissed');
		
		cy.get('.newfold-notifications-wrapper #notification-test-2')
			.should('not.be.visible');
		
		cy.wait('@notificationDismiss');
		cy.wait(100);
		cy.get('.newfold-notifications-wrapper #notification-test-2')
			.should('not.exist');
		
	});

	// these can be updated later on, but currently the wp-admin tests are not loaded via the api
	// so we can't intercept with test notifications
	it('Container Exists in wp-admin', () => {
		cy.visit('/wp-admin/index.php');
		cy.wait(1000);
        cy.get('.newfold-notifications-wrapper').should('have.length', 1);
	});

    // click events triggered
    // plugin search notifications render properly

});