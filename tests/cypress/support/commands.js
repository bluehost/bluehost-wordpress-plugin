// <reference types="Cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

// const customerData = require('../fixtures/customerData.json');

Cypress.Commands.add('login', (username, password) => {
	cy
		.getCookies()
		.then(cookies => {
			let hasMatch = false;
			cookies.forEach((cookie) => {
				if (cookie.name.substr(0, 20) === 'wordpress_logged_in_') {
					hasMatch = true;
				}
			});
			if (!hasMatch) {
				cy.visit('/wp-login.php').wait(1000);
				cy.get('#user_login').type(username);
				cy.get('#user_pass').type(`${ password }{enter}`);
			}
		});
});

Cypress.Commands.add('logout', () => {
	cy
		.getCookies()
		.then(
			cookies => {
				cookies.forEach(
					cookie => {
						cy.clearCookie(cookie.name);
					}
				)
			}
		);
});

Cypress.Commands.add('deletePages', () => {
	cy.visit('/wp-admin/edit.php?post_type=page').wait(1000);
	cy.get('body').then(($body) => {
		// synchronously ask for the body's text
		// and do something based on whether it includes
		// another string
		if ($body.text().includes('No pages found.')) {
			// nothing needed
		} else {
			cy.get('#cb-select-all-1').check();
			cy.get('#bulk-action-selector-top').select('trash');
			cy.get('#doaction').click();
			cy.wait(2000);
			cy.get('.subsubsub .trash').click();
			cy.wait(2000);
			cy.get('#delete_all').click();

		}
	});

});

Cypress.Commands.add('setCustomerData', () => {
	let cdata = JSON.stringify(
		{
			"customer": {
				"customer_id": "1234567890",
				"signup_date": "2022-08-18T15:30:00.000Z"
			},
			"plan": {
				"subtype": "wc_standard"
			}
		  }
	).replaceAll(',', '\\,');
	cy.exec(`npx wp-env run cli wp option update bh_cdata_guapi '${ cdata }'`);
});

Cypress.Commands.add('clearCustomerData', () => {
	cy.exec('npx wp-env run cli wp option delete bh_cdata bh_cdata_guapi');
});
