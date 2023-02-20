// <reference types="Cypress" />

describe( 'Get Started Welcome Page', function () {
	before( () => {
		// cy.setCustomerData();
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/welcome'
		);
		// cy.injectAxe();
	} );

	// it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y('.site-type-card');
	// });

	it( 'Change tab and check', () => {
		let tabCount = 0;
		const className = '#tab-panel-0-tab';
		const arr = cy.get( '.components-tab-panel__tabs > button' );
		arr.each( () => {
			cy.get( className.concat( tabCount + 1 ) )
				.trigger( 'mouseover' )
				.should( 'be.visible' );
			cy.get( className.concat( tabCount + 1 ).concat( '-view' ) ).should(
				'be.visible'
			);
			tabCount += 1;
		} );
	} );

	it( 'Check Exit to Wordpress button is visible and clickable and continue flow', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).should( 'be.visible' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'be.visible' );
		cy.get( '.nfd-onboarding-etw__buttons > .is-secondary' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'not.exist' );
	} );

	it( 'Check Exit to Wordpress button is visible and clickable and cancel', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).should( 'be.visible' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'be.visible' );
		cy.get( '.components-modal__header > button' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'not.exist' );
	} );

	it( 'Check if Drawer is closed', () => {
		cy.get( '.nfd-onboarding-drawer__panel-inner' ).should(
			'not.be.visible'
		);
	} );

	it( 'Check to make sure drawer does not open', () => {
		cy.get( '.nfd-onboarding-drawer__toggle > .components-button' ).click();
		cy.get( '.nfd-onboarding-drawer__panel-inner' )
			.scrollIntoView()
			.should( 'not.be.visible' );
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar with X', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'have.class', 'is-pressed' );
		cy.get(
			'.nfd-onboarding-sidebar-learn-more__get-started-welcome'
		).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__header > button' ).click();
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );

	it( 'Check if welcome card is visible', () => {
		cy.get( '.welcome-card' ).should( 'be.visible' );
	} );

	it( 'Check if main heading and sub heading shows up', () => {
		cy.get( '.nfd-step-card-heading' ).should( 'be.visible' );
		cy.get( '.nfd-step-card-subheading' ).should( 'be.visible' );
	} );

	it( 'Check for brandname in sub heading', () => {
		cy.exec( 'npx wp-env run cli wp option set mm_brand BlueHost' );
		cy.reload();
		cy.get( '.nfd-step-card-subheading' ).should( 'contain', 'Bluehost' );
	} );

	it( 'Check navigation back is not visible', () => {
		cy.get( '.navigation-buttons_back' ).should( 'not.exist' );
	} );

	it( 'Check if next step loads on clicking navigation next', () => {
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should( 'not.include', '#/wp-setup/step/get-started/welcome' );
		cy.go( 'back' );
	} );

	it( 'Check Exit to Wordpress button is visible and clickable and exit flow', () => {
		cy.get( '.nfd-onboarding-etw__trigger' ).should( 'be.visible' ).click();
		cy.get( '.components-modal__screen-overlay' ).should( 'be.visible' );
		cy.get( '.nfd-onboarding-etw__buttons > .is-primary' ).click();
		cy.url().should( 'not.contain', '#/wp-setup/step/get-started/welcome' );
	} );

	// after( () => {
	// 	cy.clearCustomerData();
	// } );
} );
