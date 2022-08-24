// <reference types="Cypress" />

describe('Basic Info Page', function () {

    before(() => {
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/basic-info');
        cy.injectAxe(); 
        cy.wait(3000);
    });

    it('Check if Drawer opened', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
    });

    it('Close the Drawer and check if closed', () => {
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('not.be.visible');
    });

    it('Check if Header and Subheader loads up', () => {
        cy.get('.nfd-main-heading__title').should('exist');
        cy.get('.nfd-main-heading__subtitle').should('exist');
    });

    it('Check if a Title Field Exists', () => {
        var inputBox = cy.get(':nth-child(1) > label > .nfd-input__field');
        if(inputBox.should('exist')){
            inputBox.type('Hello Allen');

            cy.get('.browser-content_top-row-name').contains('Hello Allen')
        }
    });
});