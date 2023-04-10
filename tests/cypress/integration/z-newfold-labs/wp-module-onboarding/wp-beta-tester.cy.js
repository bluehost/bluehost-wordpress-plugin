// <reference types="Cypress" />

describe( 'WP beta tester for Beta/RC WP version upgrade', function () {
	before( () => {
		cy.visit(
			'wp-admin/plugins.php'
		);
	} );

    it('Add WordPress Beta Tester Plugin',() => {
        cy.get('.page-title-action').should('have.text', 'Add New').click();
        cy.url().should('include', 'plugin-install.php');
        cy.get('.wp-filter-search', {timeout:2000}).type('wp beta tester');
        cy.wait(4000);
        cy.get('.install-now', {timeout:6000}).eq(0).click();
        cy.get('.activate-now', {timeout:16000}).click();
        cy.url().should('include', '?plugin_status=all');
    });

    it('WP upgrade Bleeding edge', () =>{
        cy.get('.wp-menu-name').contains('Tools').click();
        cy.contains('Beta Testing').click();
        cy.url().should('include', '?page=wp-beta-tester');
        cy.get('input[name="wp-beta-tester"][id="update-stream-bleeding-nightlies"][value="development"]').click();
        cy.get('input[name="wp-beta-tester-beta-rc"][id="update-stream-beta"][value="beta"]', {timeout:2000}).click();
        cy.get('.button-primary').click();
        cy.contains('upgrade now', {timeout:4000}).click();
    });

    it('Upgrade to latest WP RC version if available', () =>{
        cy.wait(1000);
        cy.url().should('include', 'wp-admin/update-core.php');
        cy.get('.response').invoke('text').then((text) => {
            if (text === 'An updated version of WordPress is available.') {
                cy.get('input[type="submit"][name="upgrade"][id="upgrade"]').should('be.visible').click();
                Cypress.config('pageLoadTimeout', 180000);
                cy.url().should('include','about.php?updated');
            } else {
                return;
            }
            });
    });
	
} );
