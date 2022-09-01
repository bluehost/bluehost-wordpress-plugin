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

const customerData = require('../fixtures/customerData.json');

Cypress.Commands.add('login', () => {

	const username = Cypress.env('wpUsername');
	const password = Cypress.env('wpPassword');

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
<<<<<<< HEAD
    // Double stringify to escape quotes in the wp-cli command
    cy.exec(
        `npx wp-env run cli wp option update bh_cdata_guapi '${JSON.stringify(
            JSON.stringify(customerData)
        )}'`
    );
});

Cypress.Commands.add('clearCustomerData', () => {
    cy.exec('npx wp-env run cli wp option delete bh_cdata_guapi');
    cy.exec('npx wp-env run cli wp transient delete bh_cdata');
=======
	// TODO: Replace this CLI command with direct manipulation of the Redux store.
	//cy.exec(`npx wp-env run cli wp option update bh_cdata_guapi '${JSON.stringify(customerData)}'`);
});

Cypress.Commands.add('clearCustomerData', () => {
	// TODO: Replace this CLI command with direct manipulation of the Redux store.
	//cy.exec('npx wp-env run cli wp option delete bh_cdata_guapi');
	//cy.exec('npx wp-env run cli wp transient delete bh_cdata');
>>>>>>> 524f5c908572c4675c2c36a479a28c925b912ed4
});
