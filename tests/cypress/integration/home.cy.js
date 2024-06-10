// <reference types="Cypress" />
const webinarsFixture = require( '../fixtures/webinars.json' );
const webinarsPastFixture = require( '../fixtures/webinars-past.json' );
const webinarsInactiveFixture = require( '../fixtures/webinars-inactive.json' );

describe( 'Home Page', { testIsolation: true }, function () {
	let NewfoldRuntime;

	beforeEach( () => {
		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/home'
		);
		cy.window()
			.its( 'NewfoldRuntime' )
			.then( ( data ) => {
				NewfoldRuntime = data;
			} );
	} );

	it( 'Site Info Exists', () => {
		cy.get( '.wppbh-app-site-info' )
			.contains( 'h3', NewfoldRuntime.site.title )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Is Accessible', () => {
		cy.injectAxe();
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

	it( 'Webinars Section Exists and Renders Properly', () => {
		cy.intercept(
			{
				method: 'GET',
				url: 'https://cdn.hiive.space/resources/bluehost-webinars.json',
			},
			webinarsFixture
		).as( 'webinarsFixture' );
		cy.reload();
		cy.wait( '@webinarsFixture' );
		cy.get( '.wppbh-webinars-banner-section' )
			.contains(
				'h2',
				'FREE Monthly Webinar: Build your brand with WordPress'
			)
			.scrollIntoView()
			.should( 'be.visible' );

		// Title
		cy.get( '.wppbh-webinars-banner-section' )
			.contains(
				'h2',
				'FREE Monthly Webinar: Build your brand with WordPress'
			)
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
			{
				method: 'GET',
				url: 'https://cdn.hiive.space/resources/bluehost-webinars.json',
			},
			webinarsInactiveFixture
		).as( 'webinarsInactiveFixture' );
		cy.reload();
		cy.wait( '@webinarsInactiveFixture' );
		cy.get( '.wppbh-webinars-banner-section' ).should( 'not.exist' );
	} );

	it( "Webinars Section Doesn't Render Items Are in the Past", () => {
		cy.intercept(
			{
				method: 'GET',
				url: 'https://cdn.hiive.space/resources/bluehost-webinars.json',
			},
			webinarsPastFixture
		).as( 'webinarsPastFixture' );
		cy.reload();
		cy.wait( '@webinarsPastFixture' );
		cy.get( '.wppbh-webinars-banner-section' ).should( 'not.exist' );
	} );
} );
