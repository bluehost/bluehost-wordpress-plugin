// <reference types="Cypress" />
// Define at the top of the spec file or just import it
function terminalLog(violations) {
    cy.task(
        'log',
        `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    // pluck specific keys to keep the table readable
    const violationData = violations.map(
        ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )
    console.log('table', violationData);
    cy.task('table', violationData)
}

describe('Homepage Styles Page', function () {

    before(() => {
        // cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/homepage-menu');
        cy.injectAxe();
    });

    it('Is Accessible', () => {
    	cy.wait(5000);
        cy.checkA11y(null, null, terminalLog);
    });

    it('Check if Header and Subheader shows up', () => {
        cy.get('.nfd-main-heading__title').should('be.visible');
        cy.get('.nfd-main-heading__subtitle').should('be.visible');
    });

    it('Check if Drawer toggles', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
    });

    it('Check if Sidebar toggles', () => {
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
        cy.get('.nfd-onboarding-sidebar__panel').scrollIntoView().should('be.visible');
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button').click();
    });

    it('Check if Homepage Styles exist and are selectable', () => {
        let classname = '.homepage_preview__list';

        cy.get(classname)
        .find(classname.concat('__item'))
        .each(($homepage) => {
            cy.wrap($homepage).find(classname.concat('__item__live-preview-container')).click();
            cy.wrap($homepage).find(classname.concat('__item__title-bar--selected')).should('be.visible');
        });
    });

    after(() => {
        // cy.clearCustomerData();
    });

});
