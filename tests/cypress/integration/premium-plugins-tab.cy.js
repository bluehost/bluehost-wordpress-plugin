// <reference types="Cypress" />

describe('Plugins Premium Tab', () => {

	before(() => {
		cy.intercept({
			method: 'GET',
			url: /newfold-marketplace(\/|%2F)v1(\/|%2F)marketplace/
		}, {
			fixture: 'products',
            delay: 1000
		}).as('products');
        cy.visit('/wp-admin/plugin-install.php?tab=premium-marketplace');
		cy.wait('@products');
	});

    it('Premium tab exist', () => {
        cy.get('.wrap')
            .find('.nfd-premium-plugins-marketplace')
            .contains('Unlock the full potential of your WordPress website with premium plugins')
            .should('be.visible');
    });

    it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(1000);
		cy.checkA11y('.nfd-premium-plugins-marketplace');
	});

    it('Should have products', () => {
        cy.get('#the-list')
            .children('.plugin-card')
            .should('be.visible')
    });

    it('Product should display thumbnail', () => {
        cy.get('.plugin-card:first-of-type')
            .find('.nfd-plugin-card-thumbnail img')
            .scrollIntoView()
            .should('be.visible')
            .should('have.attr', 'src')
    })

    it('Product should have a name', () => {
        cy.get('.plugin-card:first-of-type')
            .find('.nfd-plugin-card-title h3')
            .invoke('text')
            .should('not.be.empty')
    });

    it('Product should have description', () => {
        cy.get('.plugin-card:first-of-type')
            .find('.nfd-plugin-card-desc p')
            .invoke('text')
            .should('not.be.empty')
    })

    it('Product should have actions', () => {
        // primary action
        cy.get('.plugin-card:first-of-type')
            .find('.nfd-plugin-card-actions a:first-of-type')
            .scrollIntoView()
            .should('be.visible')
            .should('have.attr', 'href')

        // secondary action
        cy.get('.plugin-card:first-of-type')
            .find('.nfd-plugin-card-actions a:last-of-type')
            .scrollIntoView()
            .should('be.visible')
            .should('have.text', 'More Details')
            .should('have.attr', 'href')

    })

})
