// <reference types="Cypress" />

describe( 'My Products', function () {
	let NewfoldRuntime;

	before( () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/products'
		);
		cy.window()
			.its( 'NewfoldRuntime' )
			.then( ( data ) => {
				NewfoldRuntime = data;
			} );
		cy.injectAxe();
	} );

	it( 'My Products Exists', () => {
		cy.get( '.wppbh-products' )
			.contains( 'My Products' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Products Section Renders Correctly', () => {
		cy.intercept( 'POST', '/wp-json/newfold-data/v1/customer/products', {
			fixture: 'products.json',
		} );
		cy.reload();
		cy.get( '.wppbh-products-data-section' )
			.contains( 'Products & Services' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );
} );
