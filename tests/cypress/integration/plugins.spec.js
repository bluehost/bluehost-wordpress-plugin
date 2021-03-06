// <reference types="Cypress" />

const plugins = require('../fixtures/plugins.json');
const {_} = Cypress;

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
		cy.checkA11y('.bwa-route-contents');
	});

	it('Product grid has 12 items', () => {
		cy.get('.product-card').should('have.length', 12);
	});

	it('Product cards render correctly', () => {
		cy.get('.product-card').as('card');

		cy.get('@card')
			.findByRole('button', {name: 'View Details'})
			.scrollIntoView()
			.should('be.visible');

		cy.get('@card')
			.findByRole('link', {name: 'Buy Now'})
			.should('have.attr', 'href')
			.and('include', 'https://www.mojomarketplace.com/cart?item_id=');

		cy.get('@card').first().within(() => {
			const {backgroundImageUrl, price, title} = getCard(0);
			cy.root().scrollIntoView().should('be.visible');
			cy.get('.product-card__image').should('be.visible');
			cy.get('.product-card__image').should('have.css', 'background-image', `url("${ backgroundImageUrl }")`);
			cy.contains('.product-card__title', title);
			cy.contains('.product-card__price', price);
		});
	});

	describe('Search Plugins', () => {
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
	})

	describe('Sort & Filter Plugins', () => {
		it('Sort field exists', () => {
			cy.get('.dropdown').should('be.visible');
			cy.get('.dropdown').within(() => {
				cy.get('.dropdown__label').should('be.visible');
				cy.contains('.dropdown__label', 'Sort By');
			});
		});
	
		it('Sort by Price (High to Low)', () => {
			cy.get('.bluehost-marketplace__header-secondary .dropdown__trigger').click();
			cy.get('.bluehost-marketplace__header-secondary .dropdown__item').eq(1).click({force: true}); // Price (High to Low)
			cy.validateProductCardOrder('WooCommerce Bookings Developed by WooCommerce', 0);
		});
	
		it('Sort by Date Added', () => {
			cy.get('.bluehost-marketplace__header-secondary .dropdown__trigger').click();
			cy.get('.dropdown__item').eq(3).click({force: true}); // Date Added
			cy.validateProductCardOrder('Reinvestment WP Reinvestment Calculator for WordPress', 0);
		});
	
		it('Sort by Price (Low to High)', () => {
			cy.get('.bluehost-marketplace__header-secondary .dropdown__trigger').click();
			cy.get('.dropdown__item').eq(2).click({force: true}); // Price (Low to High)
			cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
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
		});
	
		it('Sort by Popular', () => {
			cy.get('.dropdown__item').eq(0).click({force: true}); // Popular
			cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
		});
	})

	describe('Plugin Pagination Operable', () => {
		it('Pagination exists', () => {
			cy.get('.pagination').should('have.length', 2);
		});
	
		it('Pagination: Numeric navigation works', () => {
			cy.get('.pagination').findByRole('button', {name: '2'}).click();
			cy.validateProductCardOrder('Social Share Wordpress Social Media', 0);
		});
	
		it('Pagination: Previous button works', () => {
			cy.get('.pagination').findByLabelText('Previous').click();
			cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
		});
	
		it('Pagination: Next button works', () => {
			cy.get('.pagination').findByLabelText('Next').click();
			cy.validateProductCardOrder('Product Add-Ons Developed by WooCommerce', 0);
		});
	
		it('Pagination: First button works', () => {
			cy.get('.pagination').findByLabelText('First').click();
			cy.validateProductCardOrder('Constant Contact Forms For WordPress', 0);
		});
	
		it('Pagination: Last button works', () => {
			cy.get('.pagination').findByLabelText('Last').click();
			cy.validateProductCardOrder('Responsive Gallery WordPress BWAProductGrid Gallery', 0);
		});
	})

});

//////////////////////
// Helper Functions //
//////////////////////

/**
 * Get a product card by index.
 *
 * @returns {object} The card details.
 */
function getCard(index) {
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
}
