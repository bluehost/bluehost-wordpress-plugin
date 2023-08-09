// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'Step Ecommerce Products Info', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/products'
		);
		cy.wait( 5000 );
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu(
			'Onboarding Menu',
			':nth-child(2)',
			'Product Info',
			false
		);
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__ecommerce-products', 'Products Info' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Checks if Heading and Subheading are present', () => {
		CheckCardHeadingSubheading();
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
} );
