// <reference types="Cypress" />
import { CheckDrawerDisabled } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'Start Setup WP Experience Page', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/experience'
		);
	} );

	it( 'Check if the Suppressed Drawer does not open on clicking Toggle Button', () => {
		CheckDrawerDisabled();
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel(
			'__get-started-wp-experience',
			'WordPress Experience'
		);
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Check if Headers Load', () => {
		CheckCardHeadingSubheading( true );
	} );

	it( 'Check if `store` appears in heading', () => {
		cy.get('.nfd-step-card-heading')
			.should('be.visible')
			.contains('store');
	} );

	it( 'Check if Radio Options load', () => {
		cy.get( '.components-radio-control__option' )
			.should( 'exist' )
			.and( 'be.visible' )
			.and( 'have.length', 3 );
	} );

	it( 'Check if Continue Setup Button is Disabled when none of the options are checked', () => {
		cy.get( '.nfd-card-button' ).should( 'be.disabled' );
		cy.url().should( 'contain', 'get-started/experience' );
	} );

	it( 'Checks if all the Radio Buttons are Enabled and Highlighted when clicked', () => {
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

	it( 'Checks if Continue Setup Button is Enabled after the Radio Button is Checked.', () => {
		cy.get( '[type=radio]:checked' ).should(
			'have.css',
			'background-color',
			'rgb(53, 117, 211)'
		);
		cy.get( '.nfd-card-button' ).should( 'not.be.disabled' ).click();
		cy.url().should( 'not.contain', 'get-started/experience' );
		cy.go( 'back' );
	} );

	it( 'Navigation Buttons Landing on expected pages', () => {
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should( 'not.include', '/get-started/experience' );
		cy.go( 'back' );

		cy.get( '.navigation-buttons_back' ).click();
		cy.url().should( 'not.include', '/get-started/experience' );
		cy.go( 'back' );
	} );

	it( 'Check Need Help Tag and Hire Experts URL', () => {
		cy.get( '.nfd-card-need-help-tag' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-card-need-help-tag > a' )
			.should( 'exist' )
			.should( 'have.attr', 'href' );
	} );
} );
