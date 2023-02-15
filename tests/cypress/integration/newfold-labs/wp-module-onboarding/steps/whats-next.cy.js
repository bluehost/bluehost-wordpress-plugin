describe('What Next Page', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/what-next');
        cy.wait(5000);
    });

    it('Check to make sure drawer opens', () => {
        cy.get('.nfd-onboarding-drawer__toggle')
            .should('be.visible')
            .click();
        cy.get('.nfd-onboarding-drawer__panel-inner')
            .scrollIntoView()
            .should('be.visible');
        cy.get('.nfd-onboarding-drawer__toggle')
            .click();
    });

    it('Check drawer is visible and clickable and continue flow', () => {
        cy.get('.nfd-onboarding-drawer__toggle')
            .should('be.visible')
            .click();
        cy.get('.nfd-onboarding-etw__trigger')
            .should('be.visible')
            .click();
        cy.get('.components-modal__screen-overlay').should('be.visible');
        cy.get('.nfd-onboarding-etw__buttons > .is-secondary').click();
        cy.get('.components-modal__screen-overlay').should('not.exist');
    });

    it('Check drawer is visible and clickable and cancel', () => {
        cy.get('.nfd-onboarding-drawer__toggle')
            .should('be.visible')
        cy.get('.nfd-onboarding-etw__trigger')
            .should('be.visible')
            .click();
        cy.get('.components-modal__screen-overlay').should('be.visible');
        cy.get('.components-modal__header > button').click();
        cy.get('.components-modal__screen-overlay').should('not.exist');
    });

    it('Check if whatnext card is visible', () => {
        cy.get('.whatnext-card').should('be.visible');
    });

    it('Hovering over overview tab panel and asserting the tab data', () => {
        cy.contains('button', 'WHATS NEXT').trigger('mouseover')
            cy.get('.tab-text').should('contain', 'Add content, organize your menu and launch.');
        cy.contains('button', 'HELP & RESOURCES').trigger('mouseover')
            cy.get('.tab-text').should('contain', "Next step or next level, we're your partner.");
        cy.contains('button', 'HIRE OUR EXPERTS').trigger('mouseover')
            cy.get('.tab-text').should('contain', 'Make our great people your people.');
    });

    it('Check if main heading and sub heading shows up', () => {
        cy.get('.nfd-step-card-heading').should('be.visible');
        cy.get('.nfd-step-card-subheading').should('be.visible');
    });

    it('Check navigation back is not visible', () => {
        cy.get('.navigation-buttons_back').should('not.exist');
    });

    it('Check if complete setup button is visible', () => {
        cy.contains('button', 'Complete Setup').should('be.visible');
    });

    it('Check Learn more (i) drawer is opening and Technical support buttons are clickable', () => {
        cy.get('.nfd-onboarding-sidebar-learn-more__menu-button')
            .should('be.visible')
            .click();
        cy.get('.nfd-onboarding-sidebar-learn-more--support-link')
            .should('be.visible');
        cy.contains('button', 'Hire Our Full-Service Creative Studio')
            .should('be.visible');
    });

    it('Check Finish button is visible and finish the setup', () => {
        cy.contains('button', 'Finish')
            .should('be.visible')
            .click();
        cy.wait(1000);
        cy.url().should('not.contain', '/wp-setup/step/what-next');
    });

    after(() => {
        cy.clearCustomerData();
    });
});
