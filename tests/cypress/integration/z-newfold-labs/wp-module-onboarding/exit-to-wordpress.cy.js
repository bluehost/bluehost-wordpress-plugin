// <reference types="Cypress" />

describe( 'Exit to WordPress', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/basic-info'
		);
	} );

	it( 'Go to the Page where the Drawer contains Exit to WordPress Button', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).click();
		cy.get( '.components-modal__content' ).should( 'be.visible' );
	} );

	it( 'Check if heading and paragraph content exists', () => {
		cy.get( 'h1.components-modal__header-heading' ).should( 'be.visible' );
		cy.get( '.components-modal__content > p' ).should( 'be.visible' );
	} );

	it( "Stay on Onboarding Page when 'X'/Continue is clicked", () => {
		cy.url().then( ( currUrl ) => {
			// When 'X' is clicked
			cy.get( '.components-modal__header > .components-button' ).click();
			cy.url().should( 'equal', currUrl );

			// When 'Continue' is clicked
			cy.get( '.nfd-onboarding-etw__trigger' ).click();
			cy.get( '.nfd-onboarding-etw__buttons > .is-secondary' ).click();
			cy.url().should( 'equal', currUrl );
		} );
	} );

	it( 'Exit to WordPress Page', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).click();
		cy.get( '.nfd-onboarding-etw__buttons > .is-primary' ).click();
		cy.url( { timeout: 12000 } ).should( 'contain', 'bluehost' );
	} );

	after( () => {
		cy.clearCustomerData();
	} );
} );
