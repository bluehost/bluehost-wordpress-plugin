// <reference types="Cypress" />
const marketplace = require('../fixtures/products.json');

describe('Marketplace Page', function () {

	before(() => {
		cy.server();
		cy.intercept({
			method: 'GET',
			url: '**newfold-marketplace/v1/marketplace**'
		}, {
			fixture: 'products'
		}).as('marketplace');
		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.contains('button', 'Featured');
	});

	it('Is Accessible', () => {
		cy.wait(1000);
		cy.checkA11y('.bwa-route-contents');
	});

	it('Product grid has 6 items', () => {
		cy.get('.marketplace-item').should('have.length', 6);
	});

	it('First product card renders correctly', () => {
		cy.get('#marketplace-item-7beee5ae-2e91-4282-9930-15ada43fc738').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Buy Now'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', 'marketplace/product/i/yoast');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header')
				.contains('Yoast')
				.should('be.visible');
			cy.get('.components-card__media').should('be.visible');
			cy.get('.components-card__header .price')
				.contains('$')
				.should('exist');
		});
	});

	it('Second product card render correctly', () => {
		cy.get('#marketplace-item-8a7f19b7-21f2-4be2-a764-33b4d4760bb9').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Buy Now'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', 'marketplace/product/i/jetpack');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header')
				.contains('Jetpack')
				.should('be.visible');
			cy.get('.components-card__media').should('be.visible');
			cy.get('.components-card__header .price')
				.contains('$4.99')
				.should('be.visible');
		});
	});

	it('CTA links have target=_blank', () => {
		cy.get('#marketplace-item-7beee5ae-2e91-4282-9930-15ada43fc738').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Buy Now'})
			.scrollIntoView()
			.should('have.attr', 'target')
			.and('include', '_blank');
	});

	// Not enough products in fixture to require load more button.
	it.skip('Load more button loads more products', () => {
		cy.get('.marketplace-item').should('have.length', 12);

		cy.contains('button', 'Load More');

		cy.get('.marketplaceList button')
			.scrollIntoView()
			.click();

		cy.get('.marketplace-item').should('have.length', 18);
	});

	it('Category Tab Filters properly', () => {
		cy.findByRole('tab', {name: 'Services'}).click();
		cy.get('.marketplace-item').should('have.length', 11);

		cy.get('#marketplace-item-0fd107dc-cfcc-4380-86ef-89a9ce01e443 h2')
			.scrollIntoView()
			.should('be.visible')
			.should('have.text', 'Full Service');

		cy.findByRole('tab', {name: 'SEO'}).click();
		cy.get('.marketplace-item').should('have.length', 5);

		cy.get('#marketplace-item-7beee5ae-2e91-4282-9930-15ada43fc738 h2')
			.scrollIntoView()
			.should('be.visible')
			.should('have.text', 'Yoast Premium');
	});

	it('Category tabs update path', () => {
		cy.findByRole('tab', {name: 'Services'}).click();
		cy.location().should((loc) => {
			expect(loc.hash).to.eq('#/marketplace/services')
		});
	});

	// CTB Not included yet.
	it.skip('Product CTB cards render correctly', () => {
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

});
