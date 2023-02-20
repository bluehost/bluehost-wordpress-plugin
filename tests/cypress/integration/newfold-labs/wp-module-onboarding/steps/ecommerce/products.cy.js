// <reference types="Cypress" />

describe( 'Step Ecommerce Products Info', function () {
	before( () => {
		// cy.setCustomerData();
		cy.exec( 'npx wp-env run cli wp plugin activate woocommerce' );
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/products'
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

	it( 'Checks Active Link in the drawer is Product Info.', () => {
		cy.get( ':nth-child(3) > .nfd-onboarding-drawer__panel-menu-link' )
			.should( 'have.class', 'active' )
			.and( 'have.attr', 'href' )
			.and( 'include', '#/ecommerce/step/products' );
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
			'.nfd-onboarding-sidebar-learn-more__ecommerce-products'
		).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__header > button' ).click();
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );

	it( 'Checks if Heading and Subheading are present', () => {
		cy.get( '.nfd-step-card-heading' ).should( 'be.visible' );
		cy.get( '.nfd-step-card-subheading' ).should( 'be.visible' );
	} );

	it( 'Checks if there are the correct number of product checkboxes.', () => {
		cy.get( '.nfd-product-step-options' )
			.find( '.components-checkbox-control' )
			.should( 'have.length', 8 );
	} );

	it( 'Checks if there are the correct number of product count radio controls.', () => {
		cy.get( '.step-product-numbers' )
			.find( '.components-radio-control__option' )
			.should( 'have.length', 5 );
	} );

	it( 'Checks if all the product checkboxes are enabled.', () => {
		cy.get( '.nfd-product-step-options' )
			.find( '.components-checkbox-control' )
			.each( ( $checkBox ) => {
				expect( $checkBox ).not.be.disabled;
			} );
	} );

	it( 'Checks if all the product count radio controls are enabled and checked.', () => {
		let radioCount = 0;
		const className = '.components-radio-control__option';
		const arr = cy.get( className );
		arr.each( () => {
			cy.get( '[type="radio"]' )
				.eq( radioCount )
				.click( { force: true } )
				.should( 'not.be.disabled' )
				.should( 'be.checked' );
			radioCount += 1;
		} );
	} );

	it( 'Checks if all the product checkboxes can be checked.', () => {
		let checkboxCount = 0;
		const className = '.components-checkbox-control__input-container';
		const arr = cy.get( className );
		arr.each( () => {
			cy.get( className ).eq( checkboxCount ).click();
			cy.get( '[type=checkbox]' )
				.eq( checkboxCount )
				.should( 'be.checked' );
			cy.get( className ).eq( checkboxCount ).click();
			cy.get( '[type=checkbox]' )
				.eq( checkboxCount )
				.should( 'not.be.checked' );
			checkboxCount += 1;
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

	it( 'Goes to next step on Continue Setup.', () => {
		cy.get( '.nfd-nav-card-button' ).click();
		cy.url().should( 'not.include', '#/ecommerce/step/products' );
		cy.go( 'back' );
	} );

	// after( () => {
	// 	cy.clearCustomerData();
	// } );
} );
