// <reference types="Cypress" />

describe( 'Step Ecommerce Tax Information', function () {
	before( () => {
		// cy.setCustomerData();
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/tax'
		);
		// cy.injectAxe();
		cy.wait( 5000 );
	} );

	// it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y();
	// });

	it( 'Checks if Drawer opened.', () => {
		cy.get( '.nfd-onboarding-drawer__panel-inner' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Checks active link in the drawer is Tax Info.', () => {
		cy.get( ':nth-child(2) > .nfd-onboarding-drawer__panel-menu-link' )
			.should( 'have.class', 'active' )
			.and( 'have.attr', 'href' )
			.and( 'include', '#/ecommerce/step/tax' );
	} );

	it( 'Closes the Drawer and checks if closed.', () => {
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
			'.nfd-onboarding-sidebar-learn-more__ecommerce-tax-info'
		).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__header > button' ).click();
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );

	it( 'Checks if Heading and Subheading are present.', () => {
		cy.get( '.nfd-step-card-heading' ).should( 'be.visible' );
		cy.get( '.nfd-step-card-subheading' ).should( 'be.visible' );
	} );

	it( 'Checks if Continue Setup is disabled.', () => {
		cy.get( '.nfd-nav-card-button' ).should( 'be.disabled' );
	} );

	it( 'Checks if there are the correct number of tax preference radio controls.', () => {
		cy.get( '.components-radio-control__option' ).should(
			'have.length',
			3
		);
	} );

	it( 'Checks if all the tax preference radio control buttons are enabled and clickable.', () => {
		let radioCount = 0;
		const className = '[type="radio"]';
		const arr = cy.get( className );
		arr.each( () => {
			cy.get( className )
				.eq( radioCount )
				.click( { force: true } )
				.should( 'not.be.disabled' )
				.should( 'be.checked' );
			radioCount += 1;
		} );
	} );

	it( 'Checks existence of Need Help Tag.', () => {
		cy.get( '.nfd-card-need-help-tag' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Checks existence of Need Help URL.', () => {
		cy.get( '.nfd-card-need-help-tag > a' ).should( 'have.attr', 'href' );
	} );

	it( 'Goes to the next step on clicking navigation Next.', () => {
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should( 'not.include', '#/ecommerce/step/tax' );
		cy.go( 'back' );
	} );

	// after( () => {
	// 	cy.clearCustomerData();
	// } );
} );
