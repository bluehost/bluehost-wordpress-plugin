// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import 'cypress-axe';
import './commands';

Cypress.on('window:before:load', (win) => {
	// See https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
	delete win.fetch
});

Cypress.Cookies.defaults({
	preserve: /wp|wordpress/, // Cypress 5.0+
	//whitelist: /wp|wordpress/, // Cypress <5.0
});

before(() => {
	cy.login(Cypress.env('wpUsername'), Cypress.env('wpPassword'));
});
