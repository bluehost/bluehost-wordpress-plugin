// <reference types="Cypress" />
const notificationsfixture = [
    {
        "id": "test-1",
        "locations": [
            {
                "context": Cypress.env('pluginId') + "-plugin",
                "pages": "#/settings"
            }
        ],
        "expiration": 2748863456503,
        "content": "<div class=\"newfold-notice notice notice-success\" style=\"position:relative;\"><p>Notice should only display on plugin app settings page<button type=\"button\" data-action=\"close\" class=\"notice-dismiss\"><span class=\"screen-reader-text\">Dismiss this notice.</span></button><\/p><\/div>"
    },
    {
        "id": "test-2",
        "locations": [
            {
                "context": Cypress.env('pluginId') + "-plugin",
                "pages": [
                    "#/home/onboarding",
                    "#/home"
                ]
            }
        ],
        "expiration": 2749860279240,
        "content": "<div class=\"newfold-notice notice notice-error\" style=\"position:relative;\"><p>Here is a plugin notice it should display on home and onboarding screens only! <button type=\"button\" data-action=\"close\" class=\"notice-dismiss\"><span class=\"screen-reader-text\">Dismiss this notice.</span></button><\/p><\/div>"
    },
    {
        "id": "test-3",
        "locations": [
            {
                "context": Cypress.env('pluginId') + "-plugin",
                "pages": [
                    "#/marketplace"
                ]
            }
        ],
        "expiration": 2749860279240,
        "content": "<div class=\"newfold-notice notice notice-info\" style=\"position:relative;\"><p>Here is a plugin notice it should display on marketplace themes screen only! <button type=\"button\" data-action=\"close\" class=\"notice-dismiss\"><span class=\"screen-reader-text\">Dismiss this notice.</span></button><\/p><\/div>"
    },
    {
        "id": "test-4",
        "locations": [
            {
                "context": Cypress.env('pluginId') + "-plugin",
                "pages": "all"
            },
            {
                "context": "wp-admin-notice",
                "pages": "all"
            }
        ],
        "expiration": 2749860279240,
        "content": "<div class=\"newfold-notice notice notice-warning\" style=\"position:relative;\"><p>Here is a notice it should display everywhere in the app and in wp-admin! <button type=\"button\" data-action=\"close\" class=\"notice-dismiss\"><span class=\"screen-reader-text\">Dismiss this notice.</span></button><\/p><\/div>"
    },
    {
        "id": "test-expired",
        "locations": [
            {
                "context": Cypress.env('pluginId') + "-plugin",
                "pages": "all"
            }
        ],
        "expiration": 1649860279240,
        "content": "<div class=\"newfold-notice notice notice-error\" style=\"position:relative;\"><p>Here is an expired notice it should never display anywhere even though it has location `all` <button type=\"button\" data-action=\"close\" class=\"notice-dismiss\"><span class=\"screen-reader-text\">Dismiss this notice.</span></button><\/p><\/div>"
    }
];

describe('Notifications', () => {
	let appClass = '.' + Cypress.env('appId');

	before(() => {

		cy.intercept({
			method: 'GET',
			url: '**newfold-notifications**'
		}, notificationsfixture ).as('getnotifications');

		cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/home', {timeout: 30000});
		cy.wait('@getnotifications');
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

		// cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/settings');
		cy.get( appClass + '-app-navitem-Settings').click();
		cy.wait(500);

        cy.get('.newfold-notifications-wrapper #notification-test-1')
			.scrollIntoView()
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
			method: 'DELETE',
			url: /newfold-notifications(\/|%2F)v1(\/|%2F)notifications/
		}, {
			body: {"id":"test-2"}
		}).as('notificationDismiss');

		cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') + '#/home');

        cy.get('.newfold-notifications-wrapper #notification-test-2')
			.scrollIntoView()
            .should('be.visible')
			.should('have.attr', 'data-id')
			.and('equal', 'test-2');
        	
		cy.get('.newfold-notifications-wrapper #notification-test-2')
			.should('be.visible');
        cy.get('.newfold-notifications-wrapper #notification-test-2')
            .contains('display on home and onboarding screens');
		

		cy.get('#notification-test-2 button.notice-dismiss[data-action="close"]').click();		
		// cy.wait('@notificationDismiss');
		cy.wait(2000);
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