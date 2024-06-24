// <reference types="Cypress" />

describe( 'Home Page', function () {
	let NewfoldRuntime;

	before( () => {
		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/home'
		);
		cy.window()
			.its( 'NewfoldRuntime' )
			.then( ( data ) => {
				NewfoldRuntime = data;
			} );
		cy.injectAxe();
	} );

	it( 'Site Info Exists', () => {
		cy.get( '.wppbh-app-site-info' )
			.contains( 'h3', NewfoldRuntime.site.title )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Is Accessible', () => {
		cy.wait( 500 );
		cy.checkA11y( '.wppbh-app-body' );
	} );

	it( 'Welcome Section Exists', () => {
		cy.get( '.nfd-app-section-container' )
			.contains( 'h2', 'Home' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it.skip( 'Additional Features Section Exists', () => {
		cy.get( '.nfd-app-section-container' )
			.contains( 'h2', 'Additional Features' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Account Section Exists', () => {
		cy.get( '.wppbh-account-help-section' )
			.contains( 'h1', 'Bluehost Account' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Help Section Exists', () => {
		cy.get( '.wppbh-account-help-section' )
			.contains( 'h1', 'Need some help?' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Webinars Section Exists', () => {
		cy.intercept(
			'https://cdn.hiive.space/resources/bluehost-webinars.json',
			{ fixture: 'webinars.json' }
		);
		cy.reload();
		cy.get( '.wppbh-webinars-banner-section' )
			.contains( 'h2', 'Build your brand with WordPress' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Webinars Section Renders Correctly', () => {
		// Title
		cy.get( '.wppbh-webinars-banner-section' )
			.contains( 'h2', 'Build your brand with WordPress' )
			.scrollIntoView()
			.should( 'be.visible' );

		// Description
		cy.get( '.wppbh-webinars-banner-section p:first-of-type' )
			.contains(
				'Join us for a free webinar on how to build your brand with WordPress.'
			)
			.scrollIntoView()
			.should( 'be.visible' );

		// Topics
		cy.get( '.wppbh-webinars-banner-section h3' )
			.contains( 'Topics:' )
			.scrollIntoView()
			.should( 'be.visible' );

		// Date
		cy.get( '.wppbh-webinars-banner-section' )
			.contains( 'August 31, 2040' )
			.scrollIntoView()
			.should( 'be.visible' );

		// Time
		cy.get( '.wppbh-webinars-banner-section' )
			.contains( '1pm - 2pm EST' )
			.scrollIntoView()
			.should( 'be.visible' );

		// CTA
		cy.get( '.wppbh-webinars-banner-section a:first-of-type' )
			.contains( 'Register Now' )
			.scrollIntoView()
			.should( 'be.visible' )
			.should( 'have.attr', 'href' )
			.and(
				'include',
				'https://www.bluehost.com/blog/events/next-event-post'
			);
	} );

	it( "Webinars Section Doesn't Render When Active Propety is False", () => {
		cy.intercept(
			'https://cdn.hiive.space/resources/bluehost-webinars.json',
			{ fixture: 'webinars-inactive.json' }
		);
		cy.reload();
		cy.get( '.wppbh-webinars-banner-section' ).should( 'not.exist' );
	} );

	it( "Webinars Section Doesn't Render Items Are in the Past", () => {
		cy.intercept(
			'https://cdn.hiive.space/resources/bluehost-webinars.json',
			{ fixture: 'webinars-past.json' }
		);
		cy.reload();
		cy.get( '.wppbh-webinars-banner-section' ).should( 'not.exist' );
	} );
} );
