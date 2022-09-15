// <reference types="Cypress" />

describe('Basic Info Page', function () {

    before(() => {
        cy.setCustomerData();
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/basic-info');
        // cy.injectAxe();
    });

    // it('Is Accessible', () => {
	// 	cy.wait(500);
	// 	cy.checkA11y();
	// });

    it('Check if Drawer opened', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
    });
	
    it('Checks if Basic Info is the current Active Selection in the Drawer', () => {
        cy.get(':nth-child(3) > .nfd-onboarding-drawer__panel-menu-link')
            .should('have.class', 'active')
            .and('have.attr', 'href')
            .and('include', '#/wp-setup/step/basic-info')
    });

    it('Close the Drawer and check if closed', () => {
        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('not.be.visible');
    });

    it('Check if Header and Subheader shows up', () => {
        cy.get('.nfd-main-heading__title').should('be.visible');
        cy.get('.nfd-main-heading__subtitle').should('be.visible');
    });

    it('Enter a Title and then Check if it reflects elsewhere', () => {
        const title = 'Hello WordPress';
        var titleBox = cy.get(':nth-child(1) > label > .nfd-input__field');
        if(titleBox.should('exist')){
            titleBox.scrollIntoView();
            titleBox.clear();
            cy.wait(1000);
            titleBox.type(title);

            // Check if Mini Preview Tab has the Title
            cy.get('.browser-row-title_bar_main-text').contains(title);
            // Check if Mini Preview Webpage Search result has the Title
            cy.get('.browser-content_top-row-name').contains(title);
        }
    });

    it('Enter a Desc and then Check if it reflects elsewhere', () => {
        const desc = 'Welcome to WordPress';
        var descBox = cy.get(':nth-child(2) > label > .nfd-input__field');
        if ( descBox.should('exist') ) {
            descBox.scrollIntoView();
            descBox.clear();
            cy.wait(1000);
            descBox.type(desc);

            // Check if Mini Preview Webpage Search result has the Desc
            cy.get('.browser-content_desc').contains(desc);
        }
    });

    it('Check if Social Media Accordion Toggles', () => {

        cy.get(':nth-child(7) > .social-form__label > .social-form__label_name').should('exist').should('not.be.visible');
           
        // Open Social Media Accordion
        cy.get('.social-form__top-row_icon').click();
        cy.get(':nth-child(7) > .social-form__label > .social-form__label_name').should('exist')
            .scrollIntoView().should('be.visible');

    });

    it('Check if Social Media URL checks are done', () => {

        const invalidURL = 'htt';
        const validURL = 'https://www.facebook.com';
        
        // Facebook Social Media Component
        var socialTest = cy.get('#facebook');
        
        if (socialTest.should('exist') ) {
            socialTest.clear();
            cy.get('[style="background-image: var(--facebook-colored-icon);"]').should('not.exist');

            socialTest.type(invalidURL);

            // The URL Checker runs on a debounce
            // Shows the message to the User in case of Invalid URL
            cy.get('.Tooltip-Wrapper', { timeout: 3000 }).should('exist');

            socialTest.clear();
            socialTest.type(validURL);
            cy.get('.Tooltip-Wrapper', { timeout: 3000 }).should('not.exist');
            cy.get('[style="background-image: var(--facebook-colored-icon);"]').should('exist');

            // Close Social Media Accordion
            cy.get('.social-form__top-row_icon').click();

        }
    });

    it('Check if Image gets Uploaded', () => {

        var sampleLogo = 'tests/cypress/fixtures/bluehost-logo.png';
        
        if (cy.get('.image-uploader_window-reset-btn').should('exist').contains('UPLOAD')) {

            cy.get('.image-uploader_window-logo-icon-selected').should('not.exist');

            // Upload the Image into the Upload Section
            cy.get('.image-uploader_window-select-btn', { timeout: 10000 } ).scrollIntoView().should('exist')
                .selectFile(sampleLogo, { force: true }).then(() => {
                    cy.wait(1000);
                    // Check if the image got uploaded
                    cy.get('.image-uploader_window-logo-icon-selected').should('exist');
                    cy.get('.image-uploader_window-reset-btn').should('exist').scrollIntoView().contains('RESET');
                });
        }

    });

    it('Check if Final Redirect works', () => {

        if (cy.get('.navigation-buttons_finish').should('exist')) {
            cy.get('.navigation-buttons_finish').click();
            
            var correctURL = Cypress.config().baseUrl + '/wp-admin/index.php?page=bluehost#/store';
            cy.url({ timeout: 8000 }).should('eq', correctURL);
        }
    });

    after(() => {
     cy.clearCustomerData();
    });

});
