// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../wp-module-support/drawer.cy';
import { CheckCardHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'What Next Page', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/what-next'
		);
		cy.wait( 5000 );
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu(
			'Exit to WordPress',
			':nth-child(6)',
			'What Next',
			false
		);
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__what-next', 'What’s Next' );
		CheckIllustrationPanel( '__what-next' );
		CheckInfoPanel( 2 );
		CheckHelpPanelLinks();
	} );

	it( 'Check if whatnext card is visible', () => {
		cy.get( '.whatnext-card' ).should( 'be.visible' );
	} );

	it( 'Hovering over overview tab panel and asserting the tab data', () => {
		cy.contains( 'button', 'WHATS NEXT' ).trigger( 'mouseover' );
		cy.get( '.tab-text' ).should(
			'contain',
			'Add content, organize your menu and launch.'
		);
		cy.contains( 'button', 'HELP & RESOURCES' ).trigger( 'mouseover' );
		cy.get( '.tab-text' ).should(
			'contain',
			"Next step or next level, we're your partner."
		);
		cy.contains( 'button', 'HIRE OUR EXPERTS' ).trigger( 'mouseover' );
		cy.get( '.tab-text' ).should(
			'contain',
			'Make our great people your people.'
		);
	} );

	it( 'Check if main heading and sub heading shows up', () => {
		CheckCardHeadingSubheading();
	} );

	it( 'Check navigation back is not visible', () => {
		cy.get( '.navigation-buttons_back' ).should( 'not.exist' );
	} );

	it( 'Check if complete setup button is visible', () => {
		cy.contains( 'button', 'Complete Setup' ).should( 'be.visible' );
	} );

	it( 'Check Finish button is visible and finish the setup', () => {
		cy.contains( 'button', 'Finish' ).should( 'be.visible' ).click();
		cy.wait( 1000 );
		cy.url().should( 'not.contain', '/wp-setup/step/what-next' );
	} );
} );
