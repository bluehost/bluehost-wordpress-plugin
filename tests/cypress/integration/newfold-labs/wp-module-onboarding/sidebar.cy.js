// <reference types="Cypress" />

describe( 'Sidebar', function () {
	before( () => {
		// cy.setCustomerData();
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/get-started/welcome'
		);
		// cy.injectAxe();
	} );

	it( 'Check to make sure sidebar opens, content is in place', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'have.class', 'is-pressed' );
		cy.get(
			'.nfd-onboarding-sidebar-learn-more__get-started-welcome'
		).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more--step-intro-panel' ).should(
			'be.visible'
		);
		cy.get(
			'.nfd-onboarding-sidebar-learn-more--illustration-panel__container'
		).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more--info-panel' ).should(
			'be.visible'
		);
		cy.get( '.nfd-onboarding-sidebar-learn-more--help-panel__links' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Check for three help panel links in sidebar of welcome page and close sidebar with X', () => {
		cy.get( '.nfd-onboarding-button--blue' )
			.should( 'have.attr', 'type' )
			.and( 'match', /button/ );
		cy.get( '.nfd-onboarding-button--white' )
			.should( 'have.attr', 'type' )
			.and( 'match', /button/ );
		cy.get( '.nfd-onboarding-sidebar-learn-more--help-panel__links > a' )
			.should( 'exist' )
			.should( 'have.attr', 'href' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__header > button' ).click();
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );

	it( 'Navigate pages and check if sidebar is open', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' ).click();
		cy.get( '.components-panel__header' ).should( 'be.visible' );
		cy.get( '.navigation-buttons_next' ).click();
		cy.url().should( 'not.include', '#/wp-setup/step/get-started/welcome' );
		cy.get( '.components-panel__header' ).should( 'be.visible' );
	} );

	it( 'Check for two help panel links in sidebar of other pages and close it with `i` icon', () => {
		cy.get( '.nfd-onboarding-sidebar-learn-more--help-panel__links' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-onboarding-button--blue' ).should( 'not.exist' );
		cy.get( '.nfd-onboarding-button--white' )
			.should( 'have.attr', 'type' )
			.and( 'match', /button/ );
		cy.get( '.nfd-onboarding-sidebar-learn-more--help-panel__links > a' )
			.should( 'exist' )
			.should( 'have.attr', 'href' );
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'not.have.class', 'is-pressed' );
	} );

	it( 'Navigate pages and check if sidebar is closed', () => {
		cy.get( '.components-panel__header' ).should( 'not.exist' );		
		cy.go( 'back' );
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );

	// after( () => {
	// 	cy.clearCustomerData();
	// } );
} );
