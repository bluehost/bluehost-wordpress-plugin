// <reference types="Cypress" />
import { DrawerActivityForSubMenu } from '../../wp-module-support/drawer.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../../wp-module-support/sidebar.cy';

describe( 'Header menu Page', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/header-menu'
		);
		cy.wait( 10000 );
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForSubMenu(
			'Design',
			'.theme-header-menu-preview--drawer',
			'.theme-header-menu-preview--drawer__list__item',
			4
		);
	} );

	it( 'Check to make sure design button is visble', () => {
		cy.contains( 'button', 'Design' ).should( 'be.visible' );
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__design-header-menu', 'Header & Menu' );
		CheckIllustrationPanel();
		CheckInfoPanel( 2 );
		CheckHelpPanelLinks();
	} );

	it( 'Check to make sure different design is selected', () => {
		let previewCount = 0;
		const classname = '.theme-header-menu-preview--drawer__list__item';
		const arr = cy.get( classname );
		arr.each( () => {
			cy.get( classname ).eq( previewCount ).click();
			cy.get( classname )
				.eq( previewCount )
				.find( classname.concat( '__title-bar--selected' ) )
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );

	it( 'Check navigation back button is visible and go one step back', () => {
		cy.get( '.navigation-buttons_back' ).should( 'be.visible' ).click();
		cy.wait( 3000 );
		cy.url().should( 'not.contain', '/wp-setup/step/design/header-menu' );
		cy.go( 'back' );
		cy.wait( 3000 );
	} );

	it( 'Check if Navigation Next button is visible and go one step next', () => {
		cy.get( '.navigation-buttons_next' ).should( 'be.visible' ).click();
		cy.wait( 1000 );
		cy.url().should( 'not.contain', '/wp-setup/step/design/header-menu' );
	} );
} );
