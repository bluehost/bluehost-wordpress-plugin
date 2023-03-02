describe( 'Theme change from wp dashboard and continue onboarding flow', function () {
	before( () => {
		cy.setCustomerData();
		// cy.exec('npx wp-env run cli wp theme activate yith-wonder');
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/menu'
		);
		// cy.injectAxe();
	} );

	it( 'Change the theme from dashboard and then click on esc to continue', () => {
		cy.exec( 'npx wp-env run cli wp theme activate twentytwentyone' );
		cy.get( '.nfd-onboarding-drawer__panel-menu-link' ).eq( 3 ).click(); // to click on Site Page Layout
		cy.get( '.components-modal__content', { timeout: 40000 } ).should(
			'be.visible'
		);
		cy.contains( 'button', 'Continue' )
			.should( 'be.visible' )
			.should( 'be.enabled' );
		cy.get( '.components-modal__header > .components-button' )
			.should( 'be.visible' )
			.should( 'be.enabled' );
		cy.get( '.components-modal__content' ).type( '{esc}' );
	} );

	it( 'Check the Heading title of Site Page', () => {
		cy.get( '.nfd-main-heading__title', { timeout: 5000 } ).should(
			'contain',
			'You have ideas, we have page templates'
		);
	} );

	after( () => {
		cy.clearCustomerData();
	} );
} );
