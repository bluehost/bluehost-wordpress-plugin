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
		cy.intercept(
			'POST',
			'/index.php?rest_route=%2Fnewfold-data%2Fv1%2Fcustomer%2Fproducts&_locale=user',
			{
				fixture: 'products.json',
			}
		);
		cy.reload();
		cy.get( '.wppbh-products-data-section' )
			.contains( 'Products & Services' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Products Section Renders Correctly for No products response', () => {
		cy.intercept(
			'POST',
			'/index.php?rest_route=%2Fnewfold-data%2Fv1%2Fcustomer%2Fproducts&_locale=user',
			[]
		);
		cy.reload();
		cy.get( '.wppbh-products' )
			.contains( 'Sorry, no products. Please, try again later.' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Products Section Renders Correctly for Empty response', () => {
		cy.intercept(
			'POST',
			'/index.php?rest_route=%2Fnewfold-data%2Fv1%2Fcustomer%2Fproducts&_locale=user',
			{}
		);
		cy.reload();
		cy.get( '.wppbh-products' )
			.contains(
				'Oops, there was an error loading products, please try again later.'
			)
			.scrollIntoView()
			.should( 'be.visible' );
	} );
} );
