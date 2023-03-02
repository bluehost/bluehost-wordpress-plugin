// <reference types="Cypress" />

export const GetCardHeading = ( question = false ) => {
	cy.get( '.nfd-step-card-heading' ).should( 'be.visible' );
	if ( question ) {
		cy.get( '.nfd-step-card-subheading-other' ).should( 'be.visible' );
		cy.get( '.nfd-step-card-question' ).should( 'be.visible' );
	} else {
		cy.get( '.nfd-step-card-subheading' ).should( 'be.visible' );
	}
};

export const CheckHeadingSubheading = () => {
	cy.get( '.nfd-main-heading__title' ).should( 'be.visible' );
	cy.get( '.nfd-main-heading__subtitle' ).should( 'be.visible' );
};
