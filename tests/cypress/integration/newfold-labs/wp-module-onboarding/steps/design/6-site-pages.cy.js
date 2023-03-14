// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../../wp-module-support/drawer.cy';
import { CheckHeadingSubheading } from '../../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../../wp-module-support/sidebar.cy';

describe( 'Site Pages', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/site-pages'
		);
		cy.wait( 10000 );
	} );

	it( 'Check if Header and Subheader shows up', () => {
		CheckHeadingSubheading();
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu(
			'Onboarding Menu',
			':nth-child(4)',
			'Page Layouts'
		);
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__site-pages', 'Pages' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Check if Site Pages Templates exist and are selectable', () => {
		let previewCount = 0;
		const className = '.site-pages__list__item';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className )
				.eq( previewCount )
				.find( '.components-checkbox-control' )
				.find( 'label' )
				.click();
			previewCount += 1;
		} );
	} );
} );
