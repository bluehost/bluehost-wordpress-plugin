// <reference types="Cypress" />

describe( 'Site Features', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/site-features'
		);
		// cy.injectAxe();
	} );

	it( 'Is Accessible', () => {
		cy.wait( 10000 );
		// cy.checkA11y();
	} );

	it( 'Check if Header and Subheader shows up', () => {
		cy.get( '.nfd-main-heading__title' ).should( 'be.visible' );
		cy.get( '.nfd-main-heading__subtitle' ).should( 'be.visible' );
	} );

	it( 'Check if Drawer toggles', () => {
		cy.get( '.nfd-onboarding-drawer__toggle > .components-button' ).click();
		cy.get( '.nfd-onboarding-drawer__panel-site-title-container' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-onboarding-drawer__toggle > .components-button' ).click();
	} );

	it( 'Check if Sidebar toggles', () => {
		cy.get( '.nfd-onboarding-sidebar-learn-more__menu-button' ).click();
		cy.get( '.nfd-onboarding-sidebar__panel' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__menu-button' ).click();
		cy.get( '.nfd-onboarding-sidebar__panel' )
			.scrollIntoView()
			.should( 'not.be.visible' );
	} );

	it( 'Check if Site Features list exists and select them', () => {
		let previewCount = 0;
		const className = '.checkbox-item ';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className )
				.eq( previewCount )
				.find( '.components-base-control' )
				.find( 'input' )
				.scrollIntoView()
				.click();
			previewCount += 1;
		} );
	} );
} );
