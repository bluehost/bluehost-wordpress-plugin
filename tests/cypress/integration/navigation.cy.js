// <reference types="Cypress" />

describe( 'Navigation', function () {
	before( () => {
		cy.visit( '/wp-admin/admin.php?page=' + Cypress.env( 'pluginId' ) );
	} );

	it( "Admin submenu shouldn't exist inside app", () => {
		cy.get( '#adminmenu #toplevel_page_bluehost ul.wp-submenu' ).should(
			'not.exist'
		);
	} );

	it( 'Logo Links to home', () => {
		cy.get( '.wppbh-logo-wrap' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/home' );
	} );

	// test main nav
	it( 'Main nav links properly navigates', () => {
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'not.have.class',
			'active'
		);
		cy.get( '.wppbh-app-navitem-Marketplace' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/marketplace' );
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'have.class',
			'active'
		);

		cy.get( '.wppbh-app-navitem-Performance' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/performance' );
		cy.get( '.wppbh-app-navitem-Performance' ).should(
			'have.class',
			'active'
		);
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'not.have.class',
			'active'
		);

		cy.get( '.wppbh-app-navitem-Settings' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/settings' );
	} );

	it( 'Subnav links properly navigates', () => {
		cy.get( '.wppbh-app-navitem-Marketplace' )
			.scrollIntoView()
			.should( 'not.have.class', 'active' );
		cy.get( '.wppbh-app-navitem-Marketplace' ).click();

		cy.wait( 500 );
		cy.hash().should( 'eq', '#/marketplace' );
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'have.class',
			'active'
		);

		cy.get( '.wppbh-app-subnavitem-Services' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/marketplace/services' );
		cy.get( '.wppbh-app-subnavitem-Services' ).should(
			'have.class',
			'active'
		);
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'have.class',
			'active'
		);

		cy.get( '.wppbh-app-subnavitem-SEO' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/marketplace/seo' );
		cy.get( '.wppbh-app-subnavitem-SEO' ).should( 'have.class', 'active' );
		cy.get( '.wppbh-app-subnavitem-Services' ).should(
			'not.have.class',
			'active'
		);
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'have.class',
			'active'
		);

		cy.get( '.wppbh-app-navitem-Performance' ).click();
		cy.wait( 500 );
		cy.get( '.wppbh-app-subnavitem-Services' ).should(
			'not.have.class',
			'active'
		);
		cy.get( '.wppbh-app-subnavitem-SEO' ).should(
			'not.have.class',
			'active'
		);
		cy.get( '.wppbh-app-navitem-Marketplace' ).should(
			'not.have.class',
			'active'
		);
	} );

	it( 'Admin submenu exist outside the app', () => {
		cy.visit( '/wp-admin/index.php' );
		cy.get( '#adminmenu #toplevel_page_bluehost ul.wp-submenu' ).should(
			'exist'
		);
		cy.get(
			'#adminmenu #toplevel_page_bluehost ul.wp-submenu li a[href="admin.php?page=bluehost#/home"]'
		).should( 'exist' );
		cy.get(
			'#adminmenu #toplevel_page_bluehost ul.wp-submenu li a[href="admin.php?page=bluehost#/marketplace"]'
		).should( 'exist' );
		cy.get(
			'#adminmenu #toplevel_page_bluehost ul.wp-submenu li a[href="admin.php?page=bluehost#/settings"]'
		).should( 'exist' );
	} );

	// utility nav is no more, leaving this in place un case we bring it back anytime soon.
	it.skip( 'Utility nav links properly navigates', () => {
		cy.get( '.utility-link-Performance' ).should(
			'not.have.class',
			'active'
		);
		cy.get( '.utility-link-Performance' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/performance' );
		cy.get( '.utility-link-Performance' ).should( 'have.class', 'active' );

		cy.get( '.utility-link-Settings' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/settings' );
		cy.get( '.utility-link-Settings' ).should( 'have.class', 'active' );
		cy.get( '.utility-link-Performance' ).should(
			'not.have.class',
			'active'
		);

		cy.get( '.utility-link-Help' ).click();
		cy.wait( 500 );
		cy.hash().should( 'eq', '#/help' );
		cy.get( '.utility-link-Help' ).should( 'have.class', 'active' );
		cy.get( '.utility-link-Settings' ).should( 'not.have.class', 'active' );
	} );

	// no mobile nav, but should probably add
	it.skip( 'Mobile nav links dispaly for mobile', () => {
		cy.get( '.mobile-toggle' ).should( 'not.exist' );

		cy.viewport( 'iphone-x' );
		cy.get( '.mobile-toggle' ).should( 'be.visible' );
	} );

	it.skip( 'Mobile nav links properly navigates', () => {
		cy.get( '.mobile-link-Home' ).should( 'not.exist' );
		cy.viewport( 'iphone-x' );
		cy.get( '.mobile-toggle' ).click();
		cy.wait( 500 );
		cy.get( '.mobile-link-Home' ).should( 'be.visible' );
		cy.get( 'button[aria-label="Close"]' ).should( 'be.visible' );
		cy.get( 'button[aria-label="Close"]' ).click();
		cy.get( '.mobile-link-Home' ).should( 'not.exist' );
	} );
} );
