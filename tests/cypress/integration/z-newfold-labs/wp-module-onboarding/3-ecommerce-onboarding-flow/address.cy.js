// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'Step Ecommerce Address/Store Details', function () {
	before( () => {
		cy.wait( 10000 );
		cy.exec('npx wp-env run cli wp option delete nfd_module_onboarding_flow');
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/address'
		);
		cy.wait( 8000 );
	} );

	it( 'Check Drawer Activity', () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/address'
		);
		cy.wait( 8000 );
		DrawerActivityForMenu(
			'Onboarding Menu',
			':nth-child(1)',
			'Street Address'
		);
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__ecommerce-address', 'Street Address' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Checks if Heading and Subheading are present', () => {
		CheckCardHeadingSubheading();
	} );

	it( 'Checks if all the inputs are enabled', () => {
		cy.get( 'select[name="country"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.select( 'US' );
		cy.get( 'input[name="woocommerce_store_address"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.clear()
			.type( '5335 Gate Pkwy' );
		cy.get( 'input[name="woocommerce_store_city"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.clear()
			.type( 'Jacksonville' );
		cy.get( 'select[name="state"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.select( 'FL' );
		cy.get( 'input[name="woocommerce_store_postcode"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.clear()
			.type( '32256' );
		cy.get( 'input[name="woocommerce_email_from_address"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.clear()
			.type( 'test123@gmail.com' );
		cy.get( 'select[name="woocommerce_currency"]' )
			.should( 'be.visible' )
			.and( 'not.be.disabled' )
			.select( 'USD' );
	} );

	it( 'Checks if there are the correct number of countries', () => {
		cy.get( 'select[name="country"]' )
			.find( 'option' )
			.should( 'have.length', 224 );
	} );

	it( 'Populates the correct number of states for a country', () => {
		cy.get( 'select[name="country"]' ).select( 'US' );
		cy.get( 'select[name="state"]' )
			.find( 'option' )
			.should( 'have.length', 55 );
	} );

	it( 'Checks if there are the correct number of currencies', () => {
		cy.get( 'select[name="woocommerce_currency"]' )
			.find( 'option' )
			.should( 'have.length', 163 );
	} );

	it( 'Checks existence of Need Help Tag', () => {
		cy.get( '.nfd-card-need-help-tag' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Checks existence of Need Help URL', () => {
		cy.get( '.nfd-card-need-help-tag > a' ).should( 'have.attr', 'href' );
	} );

	it( 'Checks if Continue Setup exists and is enabled', () => {
		cy.get( '.nfd-nav-card-button' )
			.scrollIntoView()
			.should( 'be.visible' )
			.and( 'not.be.disabled' );
	} );

	it( 'Goes to next step on Continue Setup', () => {
		cy.get( '.nfd-nav-card-button' ).scrollIntoView().click();
		cy.url().should( 'not.include', '#/ecommerce/step/address' );
		cy.go( 'back' );
	} );
} );
