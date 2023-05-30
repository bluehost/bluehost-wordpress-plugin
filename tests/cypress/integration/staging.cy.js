// <reference types="Cypress" />

describe('Staging Page', function () {

	before(() => {
		cy.intercept({
			method: 'GET',
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging/
		}, {
			fixture: 'stagingInit'
		}).as('stagingInit');
		cy.visit('/wp-admin/admin.php?page=bluehost#/staging');
		cy.wait('@stagingInit');
	});

	it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(500);
		cy.checkA11y('.wppbh-app-body');
	});

	it('Displays in Production Environment Properly', () => {
		cy.get('.wppbh-app-staging-prod')
			.scrollIntoView()
			.should('be.visible');


        cy.get('#wppbh-production-toggle')
            .should('be.checked');
        cy.get('.wppbh-app-staging-prod')
            .contains('h3', 'Production site')
            .should('be.visible');
        cy.get('.wppbh-app-staging-prod')
            .contains('label[for="wppbh-production-toggle"]', 'Currently editing')
            .should('be.visible');
        
        cy.get('.wppbh-app-staging-staging')
            .contains('h3', 'Staging site')
            .should('be.visible');
        cy.get('.wppbh-app-staging-staging')
            .contains('label[for="wppbh-staging-toggle"]', 'Not currently editing')
            .should('be.visible');
        cy.get('#wppbh-staging-toggle')
            .should('not.be.checked');
        cy.get('.wppbh-app-staging-staging')
            .contains('div', 'https://localhost:8882/staging/1234').should('be.visible');
        cy.get('.wppbh-app-staging-staging')
            .contains('div', 'May 30, 2023').should('be.visible');
        
        
        cy.get('#staging-clone-button')
            .should('not.be.disabled');
        cy.get('#staging-delete-button')
            .should('not.be.disabled');
        cy.get('#staging-deploy-button')
            .should('be.disabled');
	});

    it('Errors as expected', () => {
        cy.get('#staging-clone-button').click();
        cy.get('.yst-modal')
            .contains('h1', 'Confirm Clone Action')
            .should('be.visible');
        cy.get('.yst-modal .yst-button--primary')
            .contains('Clone')
            .should('be.visible').click();
        cy.wait(100);

        cy.get('.yst-notifications')
            .contains('p', 'Error')
            .should('be.visible');
    });

    it('Clone Works', () => {
        cy.intercept({
			method: 'POST',
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging(\/|%2F)clone/
		}, {
			fixture: 'stagingClone'
		}).as('stagingClone');

        cy.get('#staging-clone-button').click();
        cy.get('.yst-modal')
            .contains('h1', 'Confirm Clone Action')
            .should('be.visible');
        cy.get('.yst-modal .yst-button--primary')
            .contains('Clone')
            .should('be.visible')
            .click();

        cy.wait('@stagingClone');

        cy.get('.yst-notifications')
            .contains('p', 'Cloned to Staging')
            .should('be.visible');
    });

    it('Delete Works', () => {
        cy.intercept({
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging/
		}, {
			fixture: 'stagingDelete'
		}).as('stagingDelete');

        cy.get('#staging-delete-button').click();
        cy.get('.yst-modal')
            .contains('h1', 'Confirm Delete')
            .should('be.visible');
        cy.get('.yst-modal .yst-button--primary')
            .contains('Delete')
            .should('be.visible')
            .click();

        cy.wait('@stagingDelete');

        cy.get('.yst-notifications')
            .contains('p', 'Deleted Staging')
            .should('be.visible');
        
        cy.get('.wppbh-app-staging-staging')
            .contains('h3', 'Staging site')
            .should('be.visible');
        cy.get('.wppbh-app-staging-staging')
            .contains('label[for="wppbh-staging-toggle"]', 'Not currently editing')
            .should('not.exist');
        cy.get('.wppbh-app-staging-staging')
            .contains('div', 'https://localhost:8882/staging/1234')
            .should('not.exist');
        cy.get('.wppbh-app-staging-staging')
            .contains('div', "You don't have a staging site yet")
            .should('be.visible');
        cy.get('#staging-create-button')
            .should('be.visible')
            .should('not.be.disabled');

    });

    it('Create Works', () => {
        cy.intercept({
			method: 'POST',
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging/
		}, {
			fixture: 'stagingCreate',
            delay: 1000,
		}).as('stagingCreate');

        cy.get('.wppbh-app-staging-staging')
            .contains('div', "You don't have a staging site yet")
            .should('be.visible');

        cy.get('#staging-create-button')
            .should('be.visible')
            .click();
        cy.wait(100);
        
        cy.get('.wppbh-page')
            .should('have.class', 'is-thinking');
        cy.wait('@stagingCreate');

        cy.get('.wppbh-page')
            .should('not.have.class', 'is-thinking');

        cy.get('.wppbh-app-staging-staging')
            .contains('h3', 'Staging site')
            .should('be.visible');
        cy.get('.wppbh-app-staging-staging')
            .contains('label[for="wppbh-staging-toggle"]', 'Not currently editing')
            .should('be.visible');
        cy.get('.wppbh-app-staging-staging')
            .contains('div', 'https://localhost:8882/staging/1234')
            .should('be.visible');

    });

    it('Switch Works', () => {
        cy.intercept({
			method: 'GET',
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging(\/|%2F)switch-to&env=staging/
		}, {
			fixture: 'stagingSwitch',
            delay: 500,
		}).as('stagingSwitch');
        
        cy.get('#wppbh-production-toggle')
            .should('be.checked');
        cy.get('#wppbh-staging-toggle')
            .should('not.be.checked');
        cy.get('#wppbh-staging-toggle')
            .click();
        cy.get('.yst-modal')
            .contains('h1', 'Switch to Staging')
            .should('be.visible');
        cy.get('.yst-modal .yst-button--error')
            .contains('Cancel')
            .should('be.visible')
            .click();
        cy.get('.yst-modal h1')
            .should('not.exist');
        cy.get('#wppbh-production-toggle')
            .should('be.checked');
        cy.get('#wppbh-staging-toggle')
            .should('not.be.checked');
        
        cy.get('#wppbh-staging-toggle')
            .click();
        cy.get('.yst-modal .yst-button--primary')
            .contains('Switch')
            .should('be.visible')
            .click();

        cy.get('.yst-notifications')
            .contains('p', 'Working...')
            .should('be.visible');

        cy.wait('@stagingSwitch');

        cy.get('.yst-notifications')
            .contains('p', 'Reloading')
            .should('be.visible');

        // actual reload cancelled by fixture containing a load_page value of `#`
    });
});

describe('Staging Page - Staging environmant', function () {

	before(() => {
		cy.intercept({
			method: 'GET',
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging/
		}, {
			fixture: 'stagingStaging'
		}).as('stagingStaging');
		cy.visit('/wp-admin/admin.php?page=bluehost#/staging');
		cy.wait('@stagingStaging');
	});

    it('Displays staging environemnt properly', () => {

        cy.get('#wppbh-production-toggle')
            .should('not.be.checked');
        cy.get('.wppbh-app-staging-prod')
            .contains('h3', 'Production site')
            .should('be.visible');
        cy.get('.wppbh-app-staging-prod')
            .contains('label[for="wppbh-production-toggle"]', 'Not currently editing')
            .should('be.visible');
        
        cy.get('#wppbh-staging-toggle')
            .should('be.checked');
        cy.get('.wppbh-app-staging-staging')
            .contains('h3', 'Staging site')
            .should('be.visible');
        cy.get('.wppbh-app-staging-staging')
            .contains('label[for="wppbh-staging-toggle"]', 'Currently editing')
            .should('be.visible');
        
        cy.get('#staging-clone-button')
            .should('be.disabled');
        cy.get('#staging-delete-button')
            .should('be.disabled');
        cy.get('#staging-deploy-button')
            .should('not.be.disabled');
    });

    it('Deploy Works', () => {
        cy.intercept({
			method: 'POST',
			url: /newfold-staging(\/|%2F)v1(\/|%2F)staging(\/|%2F)deploy/
		}, {
			fixture: 'stagingDeploy',
            delay: 500,
		}).as('stagingDeploy');

        cy.get('#staging-deploy-button').click();
        cy.get('.yst-modal')
            .contains('h1', 'Confirm Deployment')
            .should('be.visible');
        cy.get('.yst-modal .yst-button--error')
            .contains('Cancel')
            .should('be.visible');
        cy.get('.yst-modal .yst-button--primary')
            .contains('Deploy')
            .should('be.visible')
            .click();

        cy.get('.yst-notifications')
            .contains('p', 'Working...')
            .should('be.visible');

        cy.wait('@stagingDeploy');


        cy.get('.yst-notifications')
            .contains('p', 'Deployed')
            .should('be.visible');

    });

});