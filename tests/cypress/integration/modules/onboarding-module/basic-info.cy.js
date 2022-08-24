// <reference types="Cypress" />

describe('Basic Info Page', function () {

    before(() => {
        cy.visit('wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/basic-info');
        cy.injectAxe(); 
        cy.wait(5000);
    });

    it('Check if Drawer opened', () => {
        cy.get('.nfd-onboarding-drawer__panel-site-title-container').scrollIntoView().should('be.visible');
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
        const title = 'Hello Allen';
        var titleBox = cy.get(':nth-child(1) > label > .nfd-input__field');
        if(titleBox.should('exist')){
            titleBox.clear();
            titleBox.type(title);

            // Check if Mini Preview Tab has the Title
            cy.get('.browser-row-title_bar_main-text').contains(title);
            // Check if Mini Preview Webpage Search result has the Title
            cy.get('.browser-content_top-row-name').contains(title);
        }
    });

    it('Enter a Desc and then Check if it reflects elsewhere', () => {
        const desc = 'Hey this is the desc';
        var descBox = cy.get(':nth-child(2) > label > .nfd-input__field');
        if ( descBox.should('exist') ) {
            descBox.clear();
            descBox.type(desc);

            // Check if Mini Preview Webpage Search result has the Desc
            cy.get('.browser-content_desc').contains(desc);
        }
    });

    it('Check if Social Media Accordion Toggles', () => {

        cy.get(':nth-child(7) > .social-form__label > .social-form__label_name').should('exist').should('not.be.visible');
           
        // Open Social Media Accordion
        cy.get('.social-form__top-row_icon').click();
        cy.get(':nth-child(7) > .social-form__label > .social-form__label_name').should('exist').scrollIntoView().should('be.visible');

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
            cy.wait(1500);
            // Shows the message to the User in case of Invalid URL
            cy.get('.Tooltip-Wrapper').should('exist');

            socialTest.clear();
            socialTest.type(validURL);
            cy.wait(1500);
            cy.get('.Tooltip-Wrapper').should('not.exist');
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
            cy.get('.image-uploader_window-select-btn').scrollIntoView().should('exist').selectFile(sampleLogo, { force: true });
            cy.wait(4000);

            // Check if the image got uploaded
            cy.get('.image-uploader_window-logo-icon-selected').should('exist');
            cy.get('.image-uploader_window-reset-btn').should('exist').scrollIntoView().contains('RESET');

        }

    });

    it('Check if Data gets Saved', () => {
        // Adding Wait so as to let the API Requests complete
        cy.get('.navigation-buttons_back').should('exist').scrollIntoView().click();
        cy.wait(4000);
        cy.get('.navigation-buttons_next').should('exist').scrollIntoView().click();
        cy.wait(4000);

        cy.get('.nfd-onboarding-drawer__toggle > .components-button').click();
        cy.get(':nth-child(1) > label > .nfd-input__field').should('exist').contains('Hello Allen');
        cy.get(':nth-child(2) > label > .nfd-input__field').should('exist').contains('Hey this is the desc');
        cy.get('.image-uploader_window-reset-btn').should('exist').scrollIntoView().contains('RESET');
        cy.get('[style="background-image: var(--facebook-colored-icon);"]').should('exist');
    });

});