// <reference types="Cypress" />

export const CheckIntroPanel = ( sidebarStep, headingText ) => {
	const prefixSidebarStep = '.nfd-onboarding-sidebar-learn-more';
	cy.get( '.nfd-onboarding-header__end > .components-button' )
		.click()
		.and( 'have.class', 'is-pressed' );
	cy.get( prefixSidebarStep.concat( sidebarStep ) ).should( 'be.visible' );
	const heading = prefixSidebarStep.concat( '--step-intro-panel__container' );
	cy.get( heading.concat( '__icon' ) ).should( 'be.visible' );
	cy.get( heading.concat( '__text__heading' ) )
		.should( 'be.visible' )
		.should( 'have.text', headingText );
	cy.get( heading.concat( '__text__heading' ) ).should( 'be.visible' );
};

export const CheckIllustrationPanel = (
	headingTag = '--illustration-panel'
) => {
	const heading = '.nfd-onboarding-sidebar-learn-more'.concat( headingTag );
	cy.get( heading.concat( '__container' ) ).should( 'be.visible' );
	cy.get( heading.concat( '__container > div' ) )
		.should( 'be.visible' )
		.should( 'have.css', 'background-image' );
};

export const CheckInfoPanel = ( infoCount = 1 ) => {
	cy.get( '.nfd-onboarding-sidebar-learn-more--info-panel' ).should(
		'be.visible'
	);
	const infoTag =
		'.nfd-onboarding-sidebar-learn-more--heading-with-description';
	cy.get( infoTag.concat( '__heading' ) )
		.should( 'be.visible' )
		.should( 'have.length', infoCount );
	cy.get( infoTag.concat( '__description' ) )
		.should( 'be.visible' )
		.should( 'have.length', infoCount );
};

export const CheckHelpPanelLinks = (
	blueButton = false,
	whiteButtonText = 'Hire Our Full-Service Creative Studio',
	supportLinkText = 'Technical Support'
) => {
	cy.get( '.nfd-onboarding-sidebar-learn-more--help-panel__links' )
		.scrollIntoView()
		.should( 'be.visible' );
	if ( blueButton ) {
		cy.get( '.nfd-onboarding-button--blue' )
			.should( 'have.text', '1-1 Expert Solutions & Coaching' )
			.should( 'have.attr', 'type' )
			.and( 'match', /button/ );
	}
	cy.get( '.nfd-onboarding-button--white' )
		.should( 'have.text', whiteButtonText )
		.should( 'have.attr', 'type' )
		.and( 'match', /button/ );
	cy.get( '.nfd-onboarding-sidebar-learn-more--help-panel__links > a' )
		.should( 'exist' )
		.should( 'have.text', supportLinkText )
		.should( 'have.attr', 'href' );
	cy.get( '.nfd-onboarding-header__end > .components-button' )
		.click()
		.and( 'not.have.class', 'is-pressed' );
};
