// <reference types="Cypress" />
const pluginNotificationsFixture = require( '../fixtures/plugin-notifications.json' );
const pluginProductsFixture = require( '../fixtures/plugin-products.json' );

describe( 'Help Page', function () {
	before( () => {
		cy.intercept(
			{
				method: 'GET',
				url: /newfold-marketplace(\/|%2F)v1(\/|%2F)marketplace/,
			},
			pluginProductsFixture
		).as( 'pluginProductsFixture' );
		cy.intercept(
			{
				method: 'GET',
				url: /newfold-notifications(\/|%2F)v1(\/|%2F)notifications/,
			},
			pluginNotificationsFixture
		).as( 'pluginNotificationsFixture' );
		cy.visit(
			'/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) + '#/help',
			{ timeout: 30000 }
		);
		cy.injectAxe();
	} );

	it( 'Is Accessible', () => {
		cy.checkA11y( '.wppbh-app-body' );
	} );

	it( 'Phone Card Exists', () => {
		cy.get( '.card-help-phone' )
			.contains( 'h3', 'Phone' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Chat Card Exists', () => {
		cy.get( '.card-help-chat' )
			.contains( 'h3', 'Chat' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Tweet Card Exists', () => {
		cy.get( '.card-help-twitter' )
			.contains( 'h3', 'Tweet' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Youtube Card Exists', () => {
		cy.get( '.card-help-youtube' )
			.contains( 'h3', 'YouTube' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Online Support Card Exists', () => {
		cy.get( '.card-help-kb' )
			.contains( 'h3', 'Knowledge Base' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Resources Card Exists', () => {
		cy.get( '.card-help-resources' )
			.contains( 'h3', 'Resources' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Events Card Exists', () => {
		cy.get( '.card-help-events' )
			.contains( 'h3', 'Events and Webinars' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Website Card Exists', () => {
		cy.get( '.card-help-website' )
			.contains( 'h3', 'Bluehost Website' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );
} );
