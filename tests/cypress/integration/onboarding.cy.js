// <reference types="Cypress" />

describe('Onboarding', () => {

	before(() => {
		// Make sure we are in coming soon mode
		cy.exec('npx wp-env run cli wp option set nfd_coming_soon true');
		cy.wait(1500);
		cy.visit('/wp-admin/admin.php?page=bluehost#/home/onboarding');
	});

	it('Exists', () => {
		cy.findByRole('heading', {name: 'Welcome to your WordPress site!', level: 2}).scrollIntoView().should('be.visible');
		cy.get('.nf-onboarding__header-desc').scrollIntoView().should('be.visible');
	});

	it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(500);
		cy.checkA11y('.bwa-route-contents');
	});

	it('Has vertical tabs', () => {
		cy.get('#tab-panel-0-start-homepage').should('be.visible').and('have.text', 'Start with your homepage');
		cy.get('#tab-panel-0-add-contact').should('be.visible').and('have.text', 'Add contact page');
		cy.get('#tab-panel-0-add-about').should('be.visible').and('have.text', 'Add about page');
		cy.get('#tab-panel-0-add-more-content').should('be.visible').and('have.text', 'Add more content');
		cy.get('#tab-panel-0-look-right').should('be.visible').and('have.text', 'Make it look just right');
		cy.get('#tab-panel-0-launch').should('be.visible').and('have.text', 'Launch with confidence');
	})

	it('Homepage Tab', () => {
		cy.get('#tab-panel-0-start-homepage').click();

		cy.get('.nf-onboarding-base-step .illustration')
			.should('be.visible')
			.and('have.attr', 'alt', 'Person on lounge chair working on laptop.');

		cy.get('.nf-onboarding-base-step .components-button')
			.should('be.visible')
			.and('have.attr', 'href', 'post-new.php?dcpage=home&dcsrc=plugin')
			.and('have.text', 'Customize your homepage');
	})

	it('Contact Tab', () => {
		cy.get('#tab-panel-0-add-contact').click();

		cy.get('.nf-onboarding-base-step .illustration')
			.should('be.visible')
			.and('have.attr', 'alt', 'Person throwing paper airplanes.');

		cy.get('.nf-onboarding-base-step .components-button')
			.should('be.visible')
			.and('have.attr', 'href', 'post-new.php?dcpage=contact&dcsrc=plugin')
			.and('have.text', 'Add contact page');
	})

	it('About Tab', () => {
		cy.get('#tab-panel-0-add-about').click();

		cy.get('.nf-onboarding-base-step .illustration')
			.should('be.visible')
			.and('have.attr', 'alt', "People around monitor working and pointing.");

		cy.get('.nf-onboarding-base-step .components-button')
			.should('be.visible')
			.and('have.attr', 'href', 'post-new.php?dcpage=about&dcsrc=plugin')
			.and('have.text', 'Add about page');
	})

	it('More Content Tab', () => {
		cy.get('#tab-panel-0-add-more-content').click();

		cy.get('.nf-onboarding-base-step .illustration')
			.should('be.visible')
			.and('have.attr', 'alt', "Person on laptop surrounded by gears and leaves with growing ideas.");

		cy.get('.nf-onboarding-base-step .components-button.is-primary')
			.should('be.visible')
			.and('have.attr', 'href', 'post-new.php?post_type=page')
			.and('have.text', 'Add page');

		cy.get('.nf-onboarding-base-step .components-button.is-secondary')
			.should('be.visible')
			.and('have.attr', 'href', 'post-new.php')
			.and('have.text', 'Add post');
	})

	it('Look Right Tab', () => {
		cy.get('#tab-panel-0-look-right').click();

		cy.get('.nf-onboarding-base-step .illustration')
			.should('be.visible').and('have.attr', 'alt', "Designer working on a website");

		cy.get('.nf-onboarding-base-step .components-button')
			.should('be.visible')
			.and('have.text', 'Customize your site')
			.and('have.attr', 'href')
			.and('include', '/customize-site');
	})

	it('Launch Tab', () => {
		cy.get('#tab-panel-0-launch').click();
		cy.get('.nf-onboarding-base-step .illustration').should('be.visible').and('have.attr', 'alt', "Person on spaceship with laptop.");
	})

	it('Site launched', () => {
		cy.intercept('POST', /bluehost(\/|%2F)v1(\/|%2F)settings/).as('updateSettings');
		cy.findByRole('button', {name: 'Launch your site'}).scrollIntoView().click();
		cy.wait('@updateSettings', {timeout: 10000});
		cy.get('.nf-onboarding-base-step .illustration').should('be.visible').and('have.attr', 'alt', "People jumping and celebrating.");
	})

	it('Site can be unlaunched', () => {
		cy.intercept('POST', /bluehost(\/|%2F)v1(\/|%2F)settings/).as('updateSettings');
		cy.findByRole('button', {name: 'Restore Coming Soon'}).scrollIntoView().click();
		cy.wait('@updateSettings', {timeout: 10000});
		cy.get('.nf-onboarding-base-step .illustration').should('be.visible').and('have.attr', 'alt', "Person on spaceship with laptop.");
	})

	it('Account Card', () => {
		cy.get('.component-account-card h3.app-heading').should('be.visible').and('have.text', 'Bluehost Account');

		cy.get('.tab.account_link').should('be.visible');
		cy.get('.tab.account_link svg').should('be.visible');
		cy.get('.tab.account_link a p').should('have.text', 'Control Panel');

		cy.get('.tab.billing_link').should('be.visible');
		cy.get('.tab.billing_link svg').should('be.visible');
		cy.get('.tab.billing_link a p').should('have.text', 'Billing');

		cy.get('.tab.products_link').should('be.visible');
		cy.get('.tab.products_link svg').should('be.visible');
		cy.get('.tab.products_link a p').should('have.text', 'Products');

		cy.get('.tab.mail_link').should('be.visible');
		cy.get('.tab.mail_link svg').should('be.visible');
		cy.get('.tab.mail_link a p').should('have.text', 'Mail & Office');

		cy.get('.tab.security_link').should('be.visible');
		cy.get('.tab.security_link svg').should('be.visible');
		cy.get('.tab.security_link a p').should('have.text', 'Security');

		cy.get('.tab.validation_token_link').should('be.visible');
		cy.get('.tab.validation_token_link svg').should('be.visible');
		cy.get('.tab.validation_token_link a p').should('have.text', 'Validation Token');

	})

	it('Help Card', () => {
		cy.get('.component-help-card').scrollIntoView().should('be.visible');
		cy.get('.component-help-card h3.app-heading').should('be.visible').and('have.text', 'Need some help?');
		cy.get('.component-help-card .illustration').should('be.visible').and('have.attr', 'alt', 'Support agent on headset and chat');
		cy.get('.component-help-card h4.app-heading').should('be.visible').and('have.text', 'From DIY to full-service help');
		cy.get('.component-help-card .cta .components-button').should('be.visible').and('have.text', 'Help Me').and('have.attr', 'href', '#/card/help');
	})

});
