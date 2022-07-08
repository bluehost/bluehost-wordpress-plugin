// <reference types="Cypress" />

describe('Tour: About Page', function () {

	before(() => {
        cy.deletePages();
    	cy.wait(500);
		cy.visit('/wp-admin/post-new.php?dcpage=about&dcsrc=plugin');
        cy.wait(2000);
		cy.injectAxe();
	});

    it('Exists', () => {
        cy.get('.shepherd-content').contains('h3', 'Create an About Page with Bluehost');
        cy.get('.step-bluehost-logo img').scrollIntoView().should('be.visible');
        cy.get('.shepherd-header .shepherd-cancel-icon').scrollIntoView()
            .should('be.visible')
            .contains('×');
        cy.get('[data-shepherd-step-id="intro"]').should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y('.shepherd-content');
	});

    it('Has valid calls to action', () => {
        cy.get('.components-button.is-primary.shepherd-button').scrollIntoView()
            .should('be.visible')
            .contains('Get Started');
        cy.get('.components-button.is-secondary.shepherd-button').scrollIntoView()
            .should('be.visible')
            .contains('Exit');
    });

    it('Tour Escapes', () =>{
        cy.get('body').type('{esc}');
        cy.wait(500);
        cy.get('.shepherd-modal-is-visible').should('not.exist');
    });

    it('Dismiss Tour Notice', () =>{
        cy.get('.components-button.components-notice__dismiss.has-icon').first().click();
        cy.wait(100);
        cy.get('.newfold-tour-relauncher')
            .should('not.exist')
        cy.get('.shepherd-modal-is-visible').should('not.exist');
    });

    it('Has About Default Content', () => {
        cy.get('[data-type="core/paragraph"]').first().scrollIntoView()
            .should('exist')
            .contains('Welcome');
    });

    it('Has highlighted placeholder text', () => {
        cy.get('#nf-1')
            .should('exist')
            .contains('organization name')
            .should('have.css', 'background-color', 'rgb(53, 117, 211)'); // bluehost blue

    });

    it('Removes highlight when changing placeholder text', () => {
        cy.get('.interface-interface-skeleton__content').scrollTo('top');
        cy.get('#nf-1').type('{backspace}{backspace}{backspace}{backspace}time');
        cy.wait(100);
        cy.get('#nf-1').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    });

    it('Removes highlight on caret enter', () => {
        cy.get('#nf-2')
            .should('exist')
            .contains('topic/product')
            .should('have.css', 'background-color', 'rgb(53, 117, 211)')
            .should('have.css', 'color', 'rgb(255, 255, 255)');
        
        cy.get('#nf-1')
            .type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}');
        cy.wait(500);
        cy.get('#nf-2')
            .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
            .should('have.css', 'color', 'rgb(0, 0, 0)');
    });

    it('Finds unedited placeholder text on pre-publish', () => {
        cy.get('.newfold-default-content-validation')
            .should('not.exist');

        cy.get('.components-button.editor-post-publish-button__button').click();
        cy.wait(100);

        cy.get('.newfold-default-content-validation')
            .should('have.class', 'is-opened')
            .should('be.visible');

        cy.get('.newfold-default-content-validation .components-notice.is-warning')
            .should('be.visible')
            .contains('We found 10 placeholders still on this page.');
    });

    it('Updated placeholder span is removed', () => {
        cy.get('#nf-1').should('not.exist');
    });

});
