// <reference types="Cypress" />

describe('Settings Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
		
	});

	it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(500);
		cy.checkA11y('.wppbh-app-body');
	});

	it('Has Coming Soon', () => {
		cy
			.get('.wppbh-app-settings-coming-soon')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Has Auto Updates Settings', () => {
		cy
			.get('.wppbh-app-settings-update')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Has Content Settings', () => {
		cy
			.get('.wppbh-app-settings-content')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Has Comments Settings', () => {
		cy
			.get('.wppbh-app-settings-comments')
			.scrollIntoView()
			.should('be.visible');
	});

	// this everything toggle is no longer present, we should add it back
	it('Everything Auto Update Toggle Works', () => {
		// cy.get('.autoupdate-all-toggle input[type="checkbox"]').check();
		// cy.get('.autoupdate-all-toggle input[type="checkbox"]').should('be.checked');
		// cy.get('.autoupdate-core-toggle input[type="checkbox"]').should('not.exist');
		// cy.get('.autoupdate-plugin-toggle input[type="checkbox"]').should('not.exist');
		// cy.get('.autoupdate-theme-toggle input[type="checkbox"]').should('not.exist');

		// cy.get('.autoupdate-all-toggle input[type="checkbox"]').uncheck();
		// cy.get('.autoupdate-core-toggle input[type="checkbox"]').should('not.be.disabled').should('be.checked');
		// cy.get('.autoupdate-plugin-toggle input[type="checkbox"]').should('not.be.disabled').should('be.checked');
		// cy.get('.autoupdate-theme-toggle input[type="checkbox"]').should('not.be.disabled').should('be.checked');
		
		cy.get('[data-id="autoupdate-core-toggle"]').should('have.attr', 'aria-checked').and('include', 'true');
		cy.get('[data-id="autoupdate-core-toggle"]').click();
		cy.wait(100);
		cy.get('[data-id="autoupdate-core-toggle"]').should('have.attr', 'aria-checked').and('include', 'false');
		cy.get('[data-id="autoupdate-core-toggle"]').click();
		// cy.get('.autoupdate-all-toggle input[type="checkbox"]').should('not.be.checked');
		// cy
		// 	.get('.wppbh-app-snackbar')
		// 	.contains('.components-snackbar__content', 'update')
		// 	.should('be.visible');

		cy.get('[data-id="autoupdate-plugins-toggle"]').should('have.attr', 'aria-checked').and('include', 'true');
		cy.get('[data-id="autoupdate-plugins-toggle"]').click();
		cy.wait(100);
		cy.get('[data-id="autoupdate-plugins-toggle"]').should('have.attr', 'aria-checked').and('include', 'false');
		cy.get('[data-id="autoupdate-plugins-toggle"]').click();
		// cy.get('.autoupdate-all-toggle input[type="checkbox"]').should('not.be.checked');

		// cy.get('.autoupdate-plugin-toggle input[type="checkbox"]').check();
		// cy.get('.autoupdate-core-toggle input[type="checkbox"]').check();
		// cy.wait(100);
		// cy.get('.autoupdate-all-toggle input[type="checkbox"]').should('be.checked');
		// cy
		// 	.get('.wppbh-app-snackbar')
		// 	.contains('.components-snackbar__content', 'update')
		// 	.should('be.visible');

	});

	it('Content Settings Work', () => {
		cy.get('.content-revisions-select select').select('20');
		cy.get('.content-revisions-select select').select('1');
		cy
			.get('.content-revisions-select label')
			.scrollIntoView()
			.contains('strong', '1')
			.should('be.visible');
		cy
			.get('.content-revisions-setting .components-base-control__help')
			.should('be.visible');

		cy.get('.content-revisions-select select').select('40');
		cy.get('.content-revisions-select label').contains('span', '40').should('be.visible');
		cy.wait(100);
		cy
			.get('.wppbh-app-snackbar')
			.contains('.components-snackbar__content', 'revision')
			.should('be.visible');
	});

	it('Comment Settings Work', () => {
		cy.get('[data-id="disable-comments-toggle"]').should('have.attr', 'aria-checked').and('include', 'true');
		cy.get('[data-id="disable-comments-toggle"]').click();
		cy.wait(100);
		cy.get('[data-id="disable-comments-toggle"]').should('have.attr', 'aria-checked').and('include', 'false');

		cy.get('.close-comments-days-select select').should('be.disabled');
		
		cy.get('[data-id="disable-comments-toggle"]').click();
		cy.wait(100);

		cy.get('[data-id=".close-comments-days-select"]').should('not.be.disabled');
		cy.get('[data-id=".close-comments-days-select"]').click();
		cy.get('.yst-select__options.yst-opacity-100 .yst-select__option').first().click();
		
		
		cy.get('[data-id=".close-comments-days-select"]').contains('span', '1').should('be.visible');

		// cy.get('.comments-per-page-select select').select('10');
		// cy.get('.comments-per-page-select label').contains('span', '10').should('be.visible');
		// cy.wait(100);
		// cy
		// 	.get('.wppbh-app-snackbar')
		// 	.contains('.components-snackbar__content', 'Comments')
		// 	.should('be.visible');

	});

});
