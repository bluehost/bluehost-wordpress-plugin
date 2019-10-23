// <reference types="Cypress" />

import 'cypress-axe';

describe('Staging Page', function () {

    before(() => {
        cy.visit('/wp-admin/admin.php?page=bluehost#/tools/staging').wait(500);
        cy.injectAxe();
    });

    it('Exists', () => {
        cy.contains('h1', 'Staging');
    });

    it('Is Accessible', () => {
        cy.checkA11y('.app-page');
    });

});