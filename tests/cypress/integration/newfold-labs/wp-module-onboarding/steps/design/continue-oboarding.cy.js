describe('Theme change from wp dashboard and continue onboarding flow', function () {

    before(() => {
        cy.setCustomerData();
        cy.exec('npx wp-env run cli wp theme activate yith-wonder');
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/menu');
        // cy.injectAxe();
    })

    it('Change the theme from dashboard and then click on continue to continue', () =>{
        cy.exec('npx wp-env run cli wp theme activate twentytwentyone');
        cy.get('.nfd-onboarding-drawer__panel-menu-link').eq(3).click();  // to click on Site Page Layout
        cy.get('.components-modal__content', { timeout : 40000 })
            .should('be.visible');
        cy.contains('button', 'Continue').click();
    });

    it('Check the Heading title of Site Page', ()=>{
        cy.get('.nfd-main-heading__title', {timeout : 5000}).should('contain', 'You have ideas, we have page templates');
    })

    it('Change the theme from dashboard and then click on X to continue', () =>{
        cy.exec('npx wp-env run cli wp theme activate twentytwentyone');
        cy.get('.nfd-onboarding-drawer__panel-menu-link').eq(2).click();  // to click on Home Page Menu Layout
        cy.get('.components-modal__content', { timeout : 40000 })
            .should('be.visible');
        cy.get('.components-modal__header > .components-button').click();
    });

    it('Check the Heading title of HomePage Menu', ()=>{
        cy.get('.nfd-main-heading__title', {timeout : 5000}).should('contain', 'There’s no place like a great home page');
    });

    it('Change the theme from dashboard and then click on esc from keyboard to continue', () =>{
        cy.exec('npx wp-env run cli wp theme activate twentytwentyone');
        cy.get('.nfd-onboarding-drawer__panel-menu-link').eq(0).click();  // to click on theme style menu
        cy.get('.components-modal__content', { timeout : 40000 })
            .should('be.visible');
        cy.get('.components-modal__content').type('{esc}');
    });

    it('Check the Heading title of HomePage Menu', ()=>{
        cy.get('.nfd-main-heading__title', {timeout : 5000}).should('contain', 'Lets tailor your theme for the perfect fit');
    });

    after(() => {
        cy.clearCustomerData();
    });
})

