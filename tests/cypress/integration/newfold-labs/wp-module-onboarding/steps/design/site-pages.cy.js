// <reference types="Cypress" />
import { DrawerActivityForMenu } from "../../wp-module-support/drawer.cy";
import { GetHeadingTitle } from "../../wp-module-support/header.cy";
import { CheckHelpPanelLinks, CheckIllustrationPanel, CheckInfoPanel, CheckIntroPanel } from '../../wp-module-support/sidebar.cy';

describe( 'Site Pages', function () {
	before( () => {
		// cy.exec('npx wp-env run cli wp theme activate yith-wonder');
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/site-pages'
		);
		// cy.injectAxe();
	} );

	it( 'Is Accessible', () => {
		cy.wait( 10000 );
		// cy.checkA11y();
	} );

	it( 'Check if Header and Subheader shows up', () => {
		GetHeadingTitle();
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu('Onboarding Menu', ':nth-child(4)', 'Page Layouts');
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel('.nfd-onboarding-sidebar-learn-more__site-pages', 'Pages');
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
