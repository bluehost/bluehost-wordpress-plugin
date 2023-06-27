// <reference types="Cypress" />

describe( 'Sidebar', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding#/wp-setup/step/get-started/welcome'
		);
	} );

	it( 'Open sidebar and close with X', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'have.class', 'is-pressed' );
		cy.get( '.nfd-onboarding-sidebar-learn-more' ).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__header > button' ).click();
		cy.get( '.nfd-onboarding-sidebar-learn-more' ).should( 'not.exist' );
	} );

	it( 'Open sidebar and close with `i`', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'have.class', 'is-pressed' );
		cy.get( '.nfd-onboarding-sidebar-learn-more' ).should( 'be.visible' );
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'not.have.class', 'is-pressed' );
		cy.get( '.nfd-onboarding-sidebar-learn-more' ).should( 'not.exist' );
	} );

	it( 'Navigate pages and check if sidebar is open', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' ).click();
		cy.get( '.components-panel__header' )
			.should( 'be.visible' )
			.should( 'have.text', 'Learn More' );
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should( 'not.include', '#/wp-setup/step/get-started/welcome' );
		cy.get( '.components-panel__header' ).should( 'be.visible' );
	} );

	it( 'Navigate pages and check if sidebar is closed', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' ).click();
		cy.get( '.components-panel__header' ).should( 'not.exist' );
		cy.go( 'back' );
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );
} );
