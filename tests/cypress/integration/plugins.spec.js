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
        cy.route('GET', '/wp-json/mojo/v1/plugins?count=1000&_locale=user', 'fx:plugins').as('plugins');
        cy.visit({
            url: '/wp-admin/admin.php?page=bluehost#/marketplace/plugins',
            onBeforeLoad(win) {
                // See https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
                delete win.fetch;
            }
        });
        cy.wait('@plugins');
        cy.injectAxe();
    });

    it('Exists', () => {
        cy.contains('h2', 'Premium Plugins');
    });

    it('Is Accessible', () => {
        cy.checkA11y('.app-page');
    });

    it('BWAProductGrid has 12 items', () => {
        cy.get('.product-card').should('have.length', 12);
    });

    it('Product cards render correctly', () => {
        cy.get('.product-card').first().should('be.visible');
        cy.get('.product-card').first().within(() => {
            const {backgroundImageUrl, buttonText, linkText, linkUrl, price, title} = fn.getCard(0);
            cy.get('.product-card__image').should('be.visible');
            cy.get('.product-card__image').should('have.css', 'background-image', `url("${backgroundImageUrl}")`);
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
        fn.validateCards();
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
        cy.get('.dropdown__item').eq(0).click({force: true}); // Popular
        fn.validateCards(); // Popular is the default order
    });

    it('Sort by Price (High to Low)', () => {
        cy.get('.dropdown__item').eq(1).click({force: true}); // Price (High to Low)
        fn.validateCards([
            'WooCommerce Bookings Developed by WooCommerce',
            'Software Add-on Developed by WooCommerce',
            'Table Rate Shipping  Shipping Module',
        ]);
        cy.get('.pagination').first().find('[aria-label="Last"]').click();
        fn.validateCards([
            'Image Gallery WordPress Image Gallery',
            'Instagram feed Show latest Instagram photos in a simple way',
            'Gwolle GB Add-On Adds Functions to Your Guestbook',
        ]);
    });

    it('Sort by Price (Low to High)', () => {
        cy.get('.dropdown__item').eq(2).click({force: true}); // Price (Low to High)
        cy.get('.product-card__price').eq(0).should;
        fn.validateCards([
            'Constant Contact Forms For WordPress',
            'Translate Website Localization &amp; Translation',
            'Amazon Pay WooCommerce Plugin',
        ]);
        cy.get('.pagination').first().find('[aria-label="Last"]').click();
        fn.validateCards([
            'UPS Shipping Method for WooCommerce',
            'FedEx Shipping Method for WooCommerce',
            'Tetrabyblos Astrology WordPress Plugin',
        ]);
    });

    it('Sort by Date Added', () => {
        cy.get('.dropdown__item').eq(3).click({force: true}); // Date Added
        fn.validateCards([
            'Reinvestment WP Reinvestment Calculator for WordPress',
            'Animated Live Wall Animated Live Wall Wordpress Plugin',
            'Subscriptions Convert visitors into email subscribers',
        ]);
    });

    it('Filter by favorites when no favorites are set', () => {
        cy.get('.dropdown__item').eq(4).click({force: true}); // Favorites
        cy.contains('.bluehost-no-results h2', "You don't have any favorites yet.");
        cy.get('.pagination').should('have.length', 0);
    });

    it('Filter by favorites when favorites are set', () => {
        cy.get('.dropdown__item').eq(0).click({force: true}); // Popular

        // Select favorites
        cy.get('.product-card__favorite').eq(0).click({force: true});
        cy.get('.product-card__favorite').eq(2).click({force: true});
        cy.get('.product-card__favorite').eq(3).click({force: true});

        cy.get('.dropdown__item').eq(4).click({force: true}); // Favorites
        cy.get('.pagination').should('have.length', 0);
        fn.validateCards([
            'Constant Contact Forms For WordPress',
            'Product Vendors Plugin for WordPress',
            'Gwolle GB Add-On Adds Functions to Your Guestbook',
        ]);

        // Reset so subsequent tests don't fail
        cy.get('.dropdown__item').eq(0).click({force: true}); // Popular
    });

    it('Pagination exists', () => {
        cy.get('.pagination').should('have.length', 2);
    });

    it('Pagination: Numeric navigation works', () => {
        cy.get('.pagination > .pagination__item').eq(1).find('button').click();
        fn.validateCards(['Product Add-Ons Developed by WooCommerce']);
    });

    it('Pagination: Previous button works', () => {
        cy.get('.pagination').first().find('[aria-label="Previous"]').click();
        fn.validateCards(['Constant Contact Forms For WordPress']);
    });

    it('Pagination: Next button works', () => {
        cy.get('.pagination').first().find('[aria-label="Next"]').click();
        fn.validateCards(['Product Add-Ons Developed by WooCommerce']);
    });

    it('Pagination: First button works', () => {
        cy.get('.pagination').first().find('[aria-label="First"]').click();
        fn.validateCards(['Constant Contact Forms For WordPress']);
    });

    it('Pagination: Last button works', () => {
        cy.get('.pagination').first().find('[aria-label="Last"]').click();
        fn.validateCards(['Responsive Gallery WordPress BWAProductGrid Gallery']);
    });

});
