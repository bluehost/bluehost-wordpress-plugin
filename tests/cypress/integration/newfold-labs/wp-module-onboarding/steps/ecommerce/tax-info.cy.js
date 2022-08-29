// <reference types="Cypress" />

describe('Step Ecommerce Tax Information', function () {
    before(() => {
        cy.setCustomerData();
        cy.visit(
            'wp-admin/?page=nfd-onboarding&flow=ecommerce#/ecommerce/step/tax'
        );
        // cy.injectAxe();
        cy.wait(2000);
    });

    // it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y();
	// });

    it('Checks if Drawer opened', () => {
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('be.visible');
    });

    it('Checks Active Link is Tax Info', () => {
        cy.get(':nth-child(2) > .nfd-onboarding-drawer__panel-menu-link')
            .should('have.class', 'active')
            .and('have.attr', 'href')
            .and('include', '#/ecommerce/step/tax')
    });

    it('Closes the Drawer and checks if closed', () => {
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('not.be.visible');
    });

    it('Checks if Heading and Subheading are present', () => {
        cy.get('.nfd-step-card-heading').should('be.visible');
        cy.get('.nfd-step-card-subheading').should('be.visible');
    });

    it('Checks if input is disabled', () => {
        cy.get('.nfd-nav-card-button')
        .should('be.disabled');
    });

    it('Checks if there are the correct number of radio controls', () => {
        cy.get('.components-radio-control__option')
        .should('have.length', 3);
    })

    it('Checks if all the radio control buttons are enabled', () => {
        cy.get('.components-radio-control__option')
        .each(($radioControl) => {
            cy.wrap($radioControl).find('input').should('not.be.disabled');
        });
    });

    it('Checks if the clicked radio control button is selected', () => {
        cy.get('.components-radio-control__option')
        .each(($radioControl) => {
            cy.wrap($radioControl).find('label').click();
            cy.wrap($radioControl).find('input').should('be.checked');
        });
    });

    it('Checks existence of Need Help Tag', () => {
        cy.get('.nfd-card-need-help-tag').scrollIntoView().should('be.visible');
    });

    it("Checks existence of Need Help URL", () => {
        cy.get('.nfd-card-need-help-tag > a').should('have.attr', 'href');
    });

    it('Goes to the next step on clicking navigation Next', () => {
        cy.get('.navigation-buttons_next').click();
        cy.url().should('not.include', '#/ecommerce/step/tax');
        cy.go('back');
    });

    it('Goes to the previous step on clicking navigation Back', () => {
        cy.get('.navigation-buttons_back').click();
        cy.url().should('not.include', '#/ecommerce/step/tax');
        cy.go('back');
    });

    it('Goes to next step on Continue Setup', () => {
        cy.get('.nfd-nav-card-button').click();
        cy.url().should('not.include', '#/ecommerce/step/tax');
        cy.go('back');
    });

    after(() => {
        cy.clearCustomerData();
    });

});
