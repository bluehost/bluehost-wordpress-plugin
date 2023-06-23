describe( 'Theme change from wp dashboard and continue onboarding flow', function () {
	before( () => {
		cy.exec( 'npx wp-env run cli wp theme activate twentytwentyone' );
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/menu'
		);
	} );

	it( 'Click on exit to wordpress and go on to homepage', () => {
		cy.get( '.components-modal__content', { timeout: 40000 } ).should(
			'be.visible'
		);
		cy.contains( 'button', 'Exit to WordPress' ).click();
		cy.url( { timeout: 12000 } ).should( 'contain', '#/home' );
	} );

	it( 'Change the theme from dashboard and then click on continue to continue', () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/menu'
		);
		cy.get( '.components-modal__content', { timeout: 40000 } ).should(
			'be.visible'
		);
		cy.contains( 'button', 'Continue' ).click();
	} );

	it( 'Check the Heading title of theme style', () => {
		cy.get( '.nfd-main-heading__title', { timeout: 5000 } ).should(
			'contain',
			'Lets tailor your theme for the perfect fit'
		);
	} );

	it( 'Change the theme from dashboard and then click on X to continue', () => {
		cy.exec( 'npx wp-env run cli wp theme activate twentytwentyone' );
		cy.get( '.nfd-onboarding-drawer__panel-menu-link' ).eq( 2 ).click(); // to click on Home Page Menu Layout
		cy.get( '.components-modal__content', { timeout: 40000 } ).should(
			'be.visible'
		);
		cy.get( '.components-modal__header > .components-button' ).click();
	} );

	it( 'Check the Heading title of HomePage Menu', () => {
		cy.get( '.nfd-main-heading__title', { timeout: 5000 } ).should(
			'contain',
			'There’s no place like a great home page'
		);
	} );

	it( 'Change the theme from dashboard and then click on esc from keyboard to continue', () => {
		cy.exec( 'npx wp-env run cli wp theme activate twentytwentyone' );
		cy.get( '.nfd-onboarding-drawer__panel-menu-link' ).eq( 3 ).click(); // to click on Page Layout
		cy.get( '.components-modal__content', { timeout: 40000 } ).should(
			'be.visible'
		);
		cy.get( '.components-modal__content' ).type( '{esc}' );
	} );

	it( 'Check the Heading title of Page Layout', () => {
		cy.get( '.nfd-main-heading__title', { timeout: 5000 } ).should(
			'contain',
			'You have ideas, we have page templates'
		);
	} );
} );
