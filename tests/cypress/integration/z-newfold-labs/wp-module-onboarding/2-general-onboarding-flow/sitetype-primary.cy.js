// <reference types="Cypress" />
import { CheckDrawerDisabled } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'Get Started Site Type Primary', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding#/wp-setup/step/get-started/site-primary'
		);
		cy.wait( 3000 );
	} );

	it( 'Check if the Suppressed Drawer does not open on clicking Toggle Button', () => {
		CheckDrawerDisabled();
	} );

	it( 'Check if Header and Subheader shows up', () => {
		CheckCardHeadingSubheading( true );
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__get-started-site-secondary', 'Site Type' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Check different Categories exist and is selectable', () => {
		let categoryCount = 0;
		const className = '.nfd-card-pri-category';
		cy.get( className ).should( 'be.visible' );
		const arr = cy.get( className );
		arr.each( () => {
			cy.get( className )
				.eq( categoryCount )
				.click()
				.should( 'have.class', 'chosenPrimaryCategory' );
			categoryCount += 1;
		} );
	} );

	it( 'Check if input box exists and is editable', () => {
		let categoryCount = 0;
		const className = '.nfd-card-pri-category';
		cy.get( className ).should( 'be.visible' );
		cy.get( '.nfd-setup-primary-custom__tellus-input' )
			.scrollIntoView()
			.should( 'be.visible' )
			.type( 'Not Business' );
		const arr = cy.get( className );
		arr.each( () => {
			cy.get( className )
				.eq( categoryCount )
				.should( 'not.have.class', 'chosenPrimaryCategory' );
			categoryCount += 1;
		} );
	} );

	it( 'Check selecting Category resets input box', () => {
		cy.get( '.nfd-card-pri-category-wrapper span' ).first().click();
		cy.get( '.nfd-setup-primary-custom__tellus-input' )
			.scrollIntoView()
			.should( 'be.visible' )
			.should( 'be.empty' );
	} );

	it( 'Check existence of Need Help Tag', () => {
		cy.get( '.nfd-card-need-help-tag' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Check existence of Need Help URL', () => {
		cy.get( '.nfd-card-need-help-tag > a' ).should( 'have.attr', 'href' );
	} );

	it( 'Go to the next step on clicking navigation Next', () => {
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/get-started/site-primary'
		);
		cy.go( 'back' );
	} );

	it( 'Go to the previous step on clicking navigation Back', () => {
		cy.get( '.navigation-buttons_back' ).click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/get-started/site-primary'
		);
		cy.go( 'back' );
	} );

	it( 'Go to next step on Continue Setup', () => {
		cy.get( '.nfd-nav-card-button' ).click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/get-started/site-primary'
		);
		cy.go( 'back' );
	} );
} );
