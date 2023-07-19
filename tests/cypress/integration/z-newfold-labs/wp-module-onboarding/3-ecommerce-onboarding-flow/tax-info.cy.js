// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'Step Ecommerce Tax Information', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/tax'
		);
		cy.wait( 5000 );
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu( 'Onboarding Menu', ':nth-child(2)', 'Tax Info', false );
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__ecommerce-tax-info', 'Tax Info' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Checks if Heading and Subheading are present.', () => {
		CheckCardHeadingSubheading();
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
} );
