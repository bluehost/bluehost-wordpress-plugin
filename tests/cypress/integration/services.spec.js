// <reference types="Cypress" />

const services = require('../fixtures/services.json');
const {_} = Cypress;

const fn = {
	decodeHtml(html) {
		const textarea = document.createElement('textarea');
		textarea.innerHTML = html;
		return textarea.value;
	},
	getCard(index) {
		const item = services.items[index];
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
			let cardIndex = typeof item === 'number' ? item : _.indexOf(services.items, _.find(services.items, {name: item}));
			this.validateCard(cy.get('.product-card').eq(index), cardIndex);
		})
	}
};

describe('Services Page', function () {

	before(() => {
		cy.server();
		cy.route('GET', '**/mojo/v1/services?category=&count=1000*', 'fx:services').as('services');
		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace/services');
		cy.wait('@services');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.contains('h2', 'Premium Services');
	});

	it('Is Accessible', () => {
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
		cy.get('.product-card').should('have.length', 3);
		fn.validateCards([
			'WooCommerce All In One',
			'WooCommerce Training for Beginners',
			'Integrate WooCommerce onto WordPress Site',
		]);
	});

	it('Search with no results works', () => {
		cy.get('input[type="search"]').clear().type('blahblahblah{enter}');
		cy.contains('.bluehost-no-results h2', 'No results found');
		cy.get('.pagination').should('have.length', 0);
	});

	it('Clearing search works', () => {
		cy.get('input[type="search"]').clear().type('{enter}');
		fn.validateCards();
	});

	it('Sort field exists', () => {
		cy.get('.dropdown').should('be.visible');
		cy.get('.dropdown').within(() => {
			cy.get('.dropdown__label').should('be.visible');
			cy.contains('.dropdown__label', 'Sort By');
		});
	});

	it('Sort by Price (High to Low)', () => {
		cy.get('.dropdown__item').eq(1).click({force: true}); // Price (High to Low)
		fn.validateCards([
			'WooCommerce All In One',
			'Blogger Starter Kit Everything You Need to Start Blogging Today',
			'WordPress All-In-One',
		]);
	});

	it('Sort by Price (Low to High)', () => {
		cy.get('.dropdown__item').eq(2).click({force: true}); // Price (Low to High)
		cy.get('.product-card__price').eq(0).should;
		fn.validateCards([
			'Install Your WordPress Theme',
			'Make My WordPress Site Secure',
			'Add Google Analytics to Your WordPress Site'
		]);
	});

	it('Sort by Date Added', () => {
		cy.get('.dropdown__item').eq(3).click({force: true}); // Date Added
		fn.validateCards([
			'Blogger Starter Kit Everything You Need to Start Blogging Today',
			'Install My WordPress Plugin',
			'Integrate PayPal into my WordPress Site',
		]);
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
		fn.validateCards([
			'Install Your WordPress Theme',
			'WordPress Starter',
			'WordPress Pro',
		]);
	});

	it.skip('Sort by Popular', () => {
		cy.get('.dropdown__item').eq(0).click({force: true}); // Popular
		cy.wait(200);
		cy.validateProductCardOrder('Install Your WordPress Theme', 0);
	});

	it('Pagination exists', () => {
		cy.get('.pagination').should('have.length', 2);
	});

	it.skip('Pagination: Numeric navigation works', () => {
		cy.get('.pagination > .pagination__item').eq(1).find('button').click();
		cy.validateProductCardOrder('WooCommerce All In One', 0);
	});

	it.skip('Pagination: Previous button works', () => {
		cy.get('.pagination').first().find('[aria-label="Previous"]').click();
		cy.validateProductCardOrder('Install Your WordPress Theme', 0);
	});

	it.skip('Pagination: Next button works', () => {
		cy.get('.pagination').first().find('[aria-label="Next"]').click();
		cy.validateProductCardOrder('WooCommerce All In One', 0);
	});

	it.skip('Pagination: First button works', () => {
		cy.get('.pagination').first().find('[aria-label="First"]').click();
		cy.validateProductCardOrder('Install Your WordPress Theme', 0);
	});

	it.skip('Pagination: Last button works', () => {
		cy.get('.pagination').first().find('[aria-label="Last"]').click();
		cy.validateProductCardOrder('WooCommerce All In One', 0);
	});

});
