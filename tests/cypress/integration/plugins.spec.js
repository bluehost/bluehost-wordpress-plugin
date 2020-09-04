// <reference types="Cypress" />

import 'cypress-axe';

const plugins = require('../fixtures/plugins.json');
const {_} = Cypress;

const fn = {
	decodeHtml(html) {
		const textarea = document.createElement('textarea');
		textarea.innerHTML = html;
		return textarea.value;
	},
	getCard(index) {
		const item = plugins.items[index];
		return {
			backgroundImageUrl: item.images.preview_url,
			buttonText: 'View Details',
			id: item.id,
			linkText: 'Buy Now',
			linkUrl: item.buy_url,
			price: item.prices.single_domain_license,
			title: item.name,
		};
	},
	validateCard(selector, cardIndex) {
		selector.within(() => {
			cy.contains('.product-card__title', this.decodeHtml(this.getCard(cardIndex).title));
		});
	},
	validateCards(collection = [...Array(12).keys()]) {
		collection.forEach((item, index) => {
			let cardIndex = typeof item === 'number' ? item : _.indexOf(plugins.items, _.find(plugins.items, {name: item}));
			this.validateCard(cy.get('.product-card').eq(index), cardIndex);
		})
	}
};

describe('Plugins Page', function () {

	before(() => {
		cy.server();
		cy.route('GET', '**/mojo/v1/plugins?count=1000*', 'fx:plugins').as('plugins');
		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace/plugins');
		cy.wait('@plugins');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.contains('h2', 'Premium Plugins');
	});

	it('Is Accessible', () => {
		cy.wait(1000);
		cy.checkA11y('.router-section');
	});

	it('BWAProductGrid has 12 items', () => {
		cy.get('.product-card').should('have.length', 12);
	});

	it('Product cards render correctly', () => {
		cy.get('.product-card').first().should('be.visible');
		cy.get('.product-card').first().within(() => {
			const {backgroundImageUrl, buttonText, linkText, linkUrl, price, title} = fn.getCard(0);
			cy.get('.product-card__image').should('be.visible');
			cy.get('.product-card__image').should('have.css', 'background-image', `url("${ backgroundImageUrl }")`);
			cy.contains('.product-card__title', title);
			cy.contains('.product-card__price', price);
			cy.get('.product-card__action-group').within(() => {
				cy.contains('button', buttonText);
				cy.contains('a', linkText);
				cy.get('a').should('have.attr', 'href').and('include', linkUrl);
			});
		});
	});

	it('Search field exists', () => {
		cy.get('.search-box').should('be.visible');
		cy.get('.search-box').within(() => {
			cy.get('.search-box__label').should('be.visible');
			cy.contains('.search-box__label', 'Search');
		});
	});

	it('Search works', () => {
		cy.get('input[type="search"]').type('WooCommerce{enter}');
		cy.get('.product-card').should('have.length', 12);
		fn.validateCards([
			'Xero Integrate Your WooCommerce WordPress Plugin',
			'WooCommerce Bookings Developed by WooCommerce',
			'SW Product Bundles WooCommerce Bundled Product WordPress Plugin',
		]);
	});

	it('Search with no results works', () => {
		cy.get('input[type="search"]').clear().type('blahblahblah{enter}');
		cy.contains('.bluehost-no-results h2', 'No results found');
		cy.get('.pagination').should('have.length', 0);
	});

	it('Clearing search works', () => {
		cy.get('input[type="search"]').clear().type('{enter}');
		cy.get('.product-card').should('have.length', 12);
	});

	it('Sort field exists', () => {
		cy.get('.dropdown').should('be.visible');
		cy.get('.dropdown').within(() => {
			cy.get('.dropdown__label').should('be.visible');
			cy.contains('.dropdown__label', 'Sort By');
		});
	});

	it('Sort by Popular', () => {
		// Select a different option first so React will update when we filter by popular
		cy.get('.dropdown__item').eq(1).click({force: true});
		cy.wait(100);
		cy.get('.dropdown__item').eq(0).click({force: true}); // Popular
		cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
	});

	it('Sort by Price (High to Low)', () => {
		cy.get('.dropdown__item').eq(1).click({force: true}); // Price (High to Low)
		cy.validateProductCardOrder('WooCommerce Bookings Developed by WooCommerce', 0);
		cy.get('.pagination').first().find('[aria-label="Last"]').click();
		cy.validateProductCardOrder('Image Gallery WordPress Image Gallery', 0);
	});

	it('Sort by Price (Low to High)', () => {
		cy.get('.dropdown__item').eq(2).click({force: true}); // Price (Low to High)
		cy.get('.product-card__price').eq(0).should;
		cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
		cy.get('.pagination').first().find('[aria-label="Last"]').click();
		cy.validateProductCardOrder('UPS Shipping Method for WooCommerce', 0);
	});

	it('Sort by Date Added', () => {
		cy.get('.dropdown__item').eq(3).click({force: true}); // Date Added
		cy.validateProductCardOrder('Reinvestment WP Reinvestment Calculator for WordPress', 0);
	});

	it.skip('Filter by favorites when no favorites are set', () => {
		cy.get('.dropdown__item').eq(4).click({force: true}); // Favorites
		cy.contains('.bluehost-no-results h2', "You don't have any favorites yet.");
		cy.get('.pagination').should('have.length', 0);
	});

	it.skip('Filter by favorites when favorites are set', () => {
		cy.get('.dropdown__item').eq(0).click({force: true}); // Popular

		// Select favorites
		cy.get('.product-card__favorite').eq(0).click({force: true});
		cy.get('.product-card__favorite').eq(2).click({force: true});
		cy.get('.product-card__favorite').eq(3).click({force: true});

		cy.get('.dropdown__item').eq(4).click({force: true}); // Favorites
		cy.get('.pagination').should('have.length', 0);
		cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
		cy.validateProductCardOrder('Product Vendors Plugin for WordPress', 1);
		cy.validateProductCardOrder('Gwolle GB Add-On Adds Functions to Your Guestbook', 2);
	});

	it.skip('Pagination exists', () => {
		// Reset so subsequent tests don't fail
		cy.get('.dropdown__item').eq(0).click({force: true}); // Popular

		cy.get('.pagination').should('have.length', 2);
	});

	it.skip('Pagination: Numeric navigation works', () => {
		cy.get('.pagination > .pagination__item').eq(1).find('button').click();
		cy.validateProductCardOrder('Social Share Wordpress Social Media', 0);
	});

	it.skip('Pagination: Previous button works', () => {
		cy.get('.pagination').first().find('[aria-label="Previous"]').click();
		cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
	});

	it.skip('Pagination: Next button works', () => {
		cy.get('.pagination').first().find('[aria-label="Next"]').click();
		cy.validateProductCardOrder('Product Add-Ons Developed by WooCommerce', 0);
	});

	it.skip('Pagination: First button works', () => {
		cy.get('.pagination').first().find('[aria-label="First"]').click();
		cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
	});

	it.skip('Pagination: Last button works', () => {
		cy.get('.pagination').first().find('[aria-label="Last"]').click();
		cy.validateProductCardOrder('Responsive Gallery WordPress BWAProductGrid Gallery', 0);
	});

});
