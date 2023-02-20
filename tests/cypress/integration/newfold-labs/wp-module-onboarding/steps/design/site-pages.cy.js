// <reference types="Cypress" />

describe( 'Site Pages', function () {
	before( () => {
		// cy.exec('npx wp-env run cli wp theme activate yith-wonder');
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/site-pages'
		);
		// cy.injectAxe();
	} );

	it( 'Is Accessible', () => {
		cy.wait( 10000 );
		// cy.checkA11y();
	} );

	it( 'Check if Header and Subheader shows up', () => {
		cy.get( '.nfd-main-heading__title' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-main-heading__subtitle' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Check if Drawer toggles', () => {
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
		cy.get( '.nfd-onboarding-sidebar__panel' ).should( 'not.be.visible' );
	} );

	it( 'Check if Site Pages Templates exist and are selectable', () => {
		let previewCount = 0;
		const className = '.site-pages__list__item';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className )
				.eq( previewCount )
				.find( '.components-checkbox-control' )
				.find( 'label' )
				.click();
			previewCount += 1;
		} );
	} );
} );
