// <reference types="Cypress" />

describe( 'Branding', function () {
	before( () => {
		// cy.setCustomerData();
		cy.visit( 'wp-admin/index.php?page=nfd-onboarding&flow=ecommerce' );
		// cy.injectAxe();
	} );

	// it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y();
	// });

	it( 'Has brand specific CSS.', () => {
		cy.exec( 'npx wp-env run cli wp option set mm_brand BlueHost' );
		cy.reload();
		cy.get( 'body' ).should( 'have.class', 'nfd-brand-bluehost' );
		cy.get( '.is-bg-primary' ).should( 'have.css', 'background-color', 'rgb(53,117,211)' ).should('have.css', 'color', 'rgb(255,255,255)');
		cy.get( '.nfd-step-card-subheading' ).should( 'contain', 'Bluehost' );
	} );

	it( 'Has Newfold CSS when mm_brand has an empty value', () => {
		const emptyString = JSON.stringify( '' );
		cy.exec(
			`npx wp-env run cli wp option update mm_brand '${ emptyString }'`
		);
		cy.reload();
		cy.get( 'body' ).should( 'have.class', 'nfd-brand-newfold' );
		cy.get( '.is-bg-primary' ).should( 'have.css', 'background-color', 'rgb(221,82,40)' ).should('have.css', 'color', 'rgb(242,242,242)');
		cy.get( '.nfd-step-card-subheading' ).should( 'contain', 'undefined' );
	} );

	it( 'Has Newfold CSS when mm_brand does not exist.', () => {
		cy.exec( 'npx wp-env run cli wp option delete mm_brand' );
		cy.reload();
		cy.get( 'body' ).should( 'have.class', 'nfd-brand-newfold' );
		cy.get( '.is-bg-primary' ).should( 'have.css', 'background-color', 'rgb(221,82,40)' ).should('have.css', 'color', 'rgb(242,242,242)');
		cy.get( '.nfd-step-card-subheading' ).should( 'contain', 'undefined' );
	} );

	after( () => {
		// Reset this data so that it does not affect the behaviour of other tests.
		cy.exec( 'npx wp-env run cli wp option set mm_brand BlueHost' );
		// cy.clearCustomerData();
	} );
} );
