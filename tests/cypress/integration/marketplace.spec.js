// <reference types="Cypress" />
const marketplace = require('../fixtures/marketplace.json');

describe('Marketplace Page', function () {

	before(() => {
		cy.server();
		cy.route('GET', '**/newfold-marketplace/v1/marketplace**', 'fx:marketplace').as('marketplace');
		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace');
		cy.wait('@marketplace');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.contains('button', 'Everything');
	});

	it('Is Accessible', () => {
		cy.wait(1000);
		cy.checkA11y('.bwa-route-contents');
	});

	it('Product grid has 2 items', () => {
		cy.get('.marketplace-item').should('have.length', 2);
	});

	it('Product cards render correctly', () => {
		cy.get('.marketplace-item-81288755-c7cf-4408-bc2f-8ac67020ba01').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Add to my Account'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/blue-sky');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header').should('be.visible');
			cy.get('.components-card__media').should('be.visible');
		});
	});

	it('Product CTB cards render correctly', () => {
		cy.get('.marketplace-item-ec14a614-8672-4094-8310-cb0b1eb0f176').as('card');

		cy.get('@card')
			.findByRole('button', {name: 'Buy Now'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'data-action')
			.and('include', 'load-nfd-ctb');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header').should('be.visible');
			cy.get('.components-card__media').should('be.visible');
		});
	});

	// it('Category Tab Filters properly', () => {
	// 	cy.get('#tab-panel-0-Services').click();
	// 	cy.wait(100);
	// 	cy.get('.marketplace-item').should('have.length', 1);

	// 	cy.get('.marketplace-item-81288755-c7cf-4408-bc2f-8ac67020ba01 h3')
	// 		.scrollIntoView()
	// 		.should('be.visible')
	// 		.should('have.text', 'Bluesky');
		
	// 	cy.get('#tab-panel-0-Security').click();
	// 		cy.wait(100);
	// 		cy.get('.marketplace-item').should('have.length', 1);
	
	// 	cy.get('.marketplace-item-ec14a614-8672-4094-8310-cb0b1eb0f176 h3')
	// 		.scrollIntoView()
	// 		.should('be.visible')
	// 		.should('have.text', 'SSL');
	// });

	// load more works
	// secondary cta
	// price
	// categories properly set up into tabs
	// cta target = _blank

});
