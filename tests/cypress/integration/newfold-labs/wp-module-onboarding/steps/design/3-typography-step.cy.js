// <reference types="Cypress" />
import { DrawerActivityForSubMenu } from '../../wp-module-support/drawer.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../../wp-module-support/sidebar.cy';

describe( 'Typography Step Test', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/preview'
		);
	} );

	it( 'Navigate to Typography Step', () => {
		cy.wait( 10000 );
		// Have to select the Preview Step Checkbox to activate Colors and Typgoraphy
		cy.get( '.navigation-buttons_next' ).click();
		cy.get( '.navigation-buttons_next' ).click();
		cy.wait( 10000 );
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForSubMenu(
			'Design',
			'.theme-fonts--drawer',
			'.font-palette',
			12
		);
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__design-typography', 'Typography' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Check if Default Typography variations exists and are selectable', () => {
		let previewCount = 0;
		const className = '.font-palette ';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className ).eq( previewCount ).click();
			cy.get( '.font-palette-selected' )
				.scrollIntoView()
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );
} );
