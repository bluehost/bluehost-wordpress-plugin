// <reference types="Cypress" />

describe('Tour: Home Page', function () {

	before(() => {
		cy.deletePages();
		cy.wait(500);
		cy.visit('/wp-admin/post-new.php?dcpage=home&dcsrc=plugin');
		cy.injectAxe();
	});


	it('Exists', () => {
		cy.get('.shepherd-content', {timeout: 10000}).contains('h3', 'Create a Home Page with Bluehost');
		cy.get('.step-bluehost-logo img').scrollIntoView().should('be.visible');
		cy.get('.shepherd-header .shepherd-cancel-icon').scrollIntoView()
			.should('be.visible')
			.contains('×');
		cy.get('[data-shepherd-step-id="intro"]').should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(1500);
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
		cy.get('[data-shepherd-step-id="header"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'Our formula for successful Home Page headers');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Next');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: Prompt', () => {
		cy.get('[data-shepherd-step-id="header"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="prompt"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'For this next section, help us understand your primary goal');
		cy.get('[data-shepherd-step-id="prompt"] .components-button.is-secondary.shepherd-button').first()
			.should('be.visible')
			.contains('Mostly selling');
		cy.get('[data-shepherd-step-id="prompt"] .components-button.is-secondary.shepherd-button').last()
			.should('be.visible')
			.contains('Mostly sharing');
	});

	it('Tour Step: Mostly Sharing', () => {
		cy.get('[data-shepherd-step-id="prompt"] .components-button.is-secondary.shepherd-button').last().click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="mostly-sharing"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'Great, let\'s tell your story');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Next');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: CTA', () => {
		cy.get('[data-shepherd-step-id="mostly-sharing"] .components-button.is-primary.shepherd-button').click();
		cy.wait(500);
		cy.get('[data-shepherd-step-id="finish-cta"]').should('be.visible');
		cy.get('.shepherd-content').contains('h3', 'Guide users to your primary goal with a \'Call-to-Action\' button');
		cy.get('.components-button.is-primary.shepherd-button')
			.should('be.visible')
			.contains('Get Started');
		cy.get('.components-button.is-secondary.shepherd-button')
			.should('be.visible')
			.contains('Back');
	});

	it('Tour Step: Complete', () => {
		cy.get('[data-shepherd-step-id="finish-cta"] .components-button.is-primary.shepherd-button').click();
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
		cy.get('[data-shepherd-step-id="header"]').should('be.visible');

		cy.get('body').type('{leftarrow}');
		cy.wait(500);
		cy.get('[data-shepherd-step-id="intro"]').should('be.visible');

	});

	it('Tour Escapes', () => {
		cy.get('body').type('{esc}');
		cy.wait(500);
		cy.get('.shepherd-modal-is-visible').should('not.exist');
	});

	it('Has Home Default Content', () => {
		cy.get('[data-type="core/heading"]').first().scrollIntoView()
			.should('be.visible')
			.contains('Name/Company Name');
	});

});
