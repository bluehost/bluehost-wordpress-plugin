// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../../wp-module-support/drawer.cy';
import { CheckHeadingSubheading } from '../../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../../wp-module-support/sidebar.cy';

describe( 'Theme Styles Menu and Preview', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/menu'
		);
		cy.wait( 5000 );
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu(
			'Onboarding Menu',
			':nth-child(1)',
			'Theme Styles'
		);
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__design-theme-styles-menu', 'Theme Styles' );
		CheckIllustrationPanel();
		CheckInfoPanel( 2 );
		CheckHelpPanelLinks();
	} );

	it( 'Checks if Heading and Subheading are present', () => {
		CheckHeadingSubheading();
	} );

	it( 'Check if Default Theme variations exists in Menu', () => {
		let previewCount = 0;
		const className = '.theme-styles-menu__list__item';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className.concat( '__title-bar' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			cy.get( className.concat( '__live-preview-container' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );

	it( 'Check if Theme is selected and switches to Preview page', () => {
		cy.get(
			':nth-child(2) > .theme-styles-menu__list__item__live-preview-container'
		)
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/design/theme-styles/menu'
		);
		cy.get( ':nth-child(1) > .theme-styles-preview__title-bar' ).should(
			'be.visible'
		);
		cy.get( '.theme-styles-preview > div:nth-child(3)' ).should(
			'be.visible'
		);
	} );

	it( 'Check if Theme List is Visible in the Drawer', () => {
		let previewCount = 0;
		const className = '.theme-styles-preview--drawer__list__item';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className.concat( '__title-bar' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			cy.get( className.concat( '__live-preview-container' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );

	it( 'Check for the selected theme in Drawer', () => {
		cy.get( '.nfd-onboarding-drawer__panel-back' )
			.scrollIntoView()
			.should( 'be.visible' )
			.should( 'have.text', 'Design' );
		const className =
			':nth-child(2) > .theme-styles-preview--drawer__list__item__title-bar';
		cy.get( className );
		cy.get( className + ' > .live-preview-selected-check' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Check/uncheck Colors and Font Checkbox', () => {
		cy.get( '[type=checkbox]' ).click().should( 'be.checked' );
		cy.get( '[type=checkbox]' ).click().should( 'not.be.checked' );
	} );

	it( 'Check for selected Theme in preview when navigated back to Menu page', () => {
		cy.get( '.navigation-buttons_back' ).click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/design/theme-styles/preview'
		);
		const className =
			':nth-child(2) > .theme-styles-menu__list__item__title-bar';
		cy.get( className );
		cy.get( className + ' > .live-preview-selected-check' ).should(
			'be.visible'
		);
	} );
} );
