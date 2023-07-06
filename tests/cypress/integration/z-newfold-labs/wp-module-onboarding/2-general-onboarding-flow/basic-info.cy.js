// <reference types="Cypress" />
import { DrawerActivityForMenu } from '../wp-module-support/drawer.cy';
import { CheckHeadingSubheading } from '../wp-module-support/header.cy';
import {
	CheckHelpPanelLinks,
	CheckIllustrationPanel,
	CheckInfoPanel,
	CheckIntroPanel,
} from '../wp-module-support/sidebar.cy';

describe( 'Basic Info Page', function () {
	before( () => {
		cy.visit(
			'wp-admin/?page=nfd-onboarding#/wp-setup/step/basic-info'
		);
	} );

	it( 'Check Drawer Activity', () => {
		DrawerActivityForMenu(
			'Exit to WordPress',
			':nth-child(3)',
			'Basic Info'
		);
	} );

	it( 'Check if Header and Subheader shows up', () => {
		CheckHeadingSubheading();
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar', () => {
		CheckIntroPanel( '__basic-info', 'Basic Info' );
		CheckIllustrationPanel();
		CheckInfoPanel();
		CheckHelpPanelLinks();
	} );

	it( 'Check if Header has text `website` in it', () => {
		cy.get( '.nfd-main-heading__title' )
			.should('be.visible')
			.contains('website');
	} );

	it( 'Enter a Title and then Check if it reflects elsewhere', () => {
		const title = 'Hello WordPress';
		const titleBox = cy.get( ':nth-child(1) > label > .nfd-input__field' );
		if ( titleBox.should( 'exist' ) ) {
			titleBox.scrollIntoView();
			titleBox.clear();
			cy.wait( 1000 );
			titleBox.type( title );

			// Check if Mini Preview Tab has the Title
			cy.get( '.browser-row-title_bar_main-text' ).contains( title );
			// Check if Mini Preview Webpage Search result has the Title
			cy.get( '.browser-content_top-row-name' ).contains( title );
		}
	} );

	it( 'Enter a Desc and then Check if it reflects elsewhere', () => {
		const desc = 'Welcome to WordPress';
		const descBox = cy.get( ':nth-child(2) > label > .nfd-input__field' );
		if ( descBox.should( 'exist' ) ) {
			descBox.scrollIntoView();
			descBox.clear();
			cy.wait( 1000 );
			descBox.type( desc );

			// Check if Mini Preview Webpage Search result has the Desc
			cy.get( '.browser-content_desc' ).contains( desc );
		}
	} );

	it( 'Check if Social Media Accordion Toggles', () => {
		cy.get(
			':nth-child(7) > .social-form__label > .social-form__label_name'
		)
			.should( 'exist' )
			.should( 'not.be.visible' );

		// Open Social Media Accordion
		cy.get( '.social-form__top-row_icon' ).click();
		cy.get(
			':nth-child(7) > .social-form__label > .social-form__label_name'
		)
			.should( 'exist' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Check if Social Media URL checks are done', () => {
		const invalidURL = 'htt';
		const validURL = 'https://www.facebook.com';

		// Facebook Social Media Component
		const socialTest = cy.get( '#facebook' );

		if ( socialTest.should( 'exist' ) ) {
			socialTest.clear();
			cy.get(
				'.browser-content_social_icon[style="background-image: var(--facebook-icon);"]'
			).should( 'have.css', 'opacity', '0.5' );

			socialTest.type( invalidURL );

			// The URL Checker runs on a debounce
			// Shows the message to the User in case of Invalid URL
			cy.get( '.Tooltip-Wrapper', { timeout: 3000 } ).should( 'exist' );
			cy.get(
				'.browser-content_social_icon[style="background-image: var(--facebook-icon);"]'
			).should( 'have.css', 'opacity', '0.75' );

			socialTest.clear();
			socialTest.type( validURL );
			cy.get( '.Tooltip-Wrapper', { timeout: 3000 } ).should(
				'not.exist'
			);
			cy.get(
				'.browser-content_social_icon[style="background-image: var(--facebook-icon);"]'
			).should( 'have.css', 'opacity', '1' );

			// Close Social Media Accordion
			cy.get( '.social-form__top-row_icon' ).click();
		}
	} );

	it( 'Check if Image gets Uploaded', () => {
		const sampleLogo = 'tests/cypress/fixtures/bluehost-logo.png';

		if (
			cy
				.get( '.image-uploader_window-reset-btn' )
				.should( 'exist' )
				.contains( 'UPLOAD' )
		) {
			cy.get( '.image-uploader_window-logo-icon-selected' ).should(
				'not.exist'
			);

			// Upload the Image into the Upload Section
			cy.get( '.image-uploader_window-select-btn', { timeout: 10000 } )
				.scrollIntoView()
				.should( 'exist' )
				.selectFile( sampleLogo, { force: true } )
				.then( () => {
					cy.wait( 1000 );
					// Check if the image got uploaded
					cy.get(
						'.image-uploader_window-logo-icon-selected'
					).should( 'exist' );
					cy.get( '.image-uploader_window-reset-btn' )
						.should( 'exist' )
						.scrollIntoView()
						.contains( 'RESET' );
				} );
		}
	} );
} );
