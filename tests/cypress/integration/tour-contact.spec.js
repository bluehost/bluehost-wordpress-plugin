// <reference types="Cypress" />

describe('Tour: Contact Page Content', function () {

	before(() => {
		cy.deletePages();
		cy.wait(500);
		cy.visit('/wp-admin/post-new.php?dcpage=contact&dcsrc=plugin');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.get('.shepherd-content', {timeout: 15000}).contains('h3', 'Create a Contact Page with Bluehost');
		cy.get('.step-bluehost-logo img').scrollIntoView().should('be.visible');
		cy.get('.shepherd-header .shepherd-cancel-icon').scrollIntoView()
			.should('be.visible')
			.contains('×');
		cy.get('[data-shepherd-step-id="intro"]').should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(1000);
		cy.checkA11y('.shepherd-content');
	});

	it('Has valid calls to action', () => {
		cy.get('.components-button.is-primary.shepherd-button').scrollIntoView()
			.should('be.visible')
			.contains('Get Started');
		cy.get('.components-button.is-secondary.shepherd-button').scrollIntoView()
			.should('be.visible')
			.contains('Exit');
	});

	it('Tour Step: Get Started', () => {
		cy.get('[data-shepherd-step-id="intro"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="intro"]').should('not.be.visible');
		cy.get('[data-shepherd-step-id="starter"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'We\'ve got the basics covered');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Next');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: Starter', () => {
		cy.get('[data-shepherd-step-id="starter"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="show-wpforms-link"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'Read responses, change form fields');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Next');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: Link', () => {
		cy.get('[data-shepherd-step-id="show-wpforms-link"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="show-wpforms-menu"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'All the form tools you need');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Next');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: Menu', () => {
		cy.get('[data-shepherd-step-id="show-wpforms-menu"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="final-polish"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'Don\'t forget to test');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Got it');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: Complete', () => {
		cy.get('[data-shepherd-step-id="final-polish"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('.shepherd-modal-is-visible').should('not.exist');
		cy.get('.newfold-tour-relauncher')
			.scrollIntoView()
			.should('be.visible')
			.contains('Reopen Tour');
	});

	it('Tour Reopens', () => {
		cy.get('.newfold-tour-relauncher').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="intro"]').should('be.visible');
	});

	it('Tour Nav arrows', () => {
		cy.get('body').type('{rightarrow}');
		cy.wait(500);
		cy.get('[data-shepherd-step-id="starter"]').should('be.visible');

		cy.get('body').type('{leftarrow}');
		cy.wait(500);
		cy.get('[data-shepherd-step-id="intro"]').should('be.visible');

	});

	it('Tour Escapes', () => {
		cy.get('body').type('{esc}');
		cy.wait(500);
		cy.get('.shepherd-modal-is-visible').should('not.exist');
	});

	it('Has Default Content', () => {
		cy.get('[data-type="core/paragraph"]').scrollIntoView()
			.should('exist')
			.contains('Please fill out the form below and we\'ll be in touch.');
		cy.get('[data-type="wpforms/form-selector"]').scrollIntoView()
			.should('exist')
			.contains('Name');
	});

});
