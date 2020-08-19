// <reference types="Cypress" />

import 'cypress-axe';

const themes = require('../fixtures/themes.json');
const {_} = Cypress;

const fn = {
    decodeHtml(html) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = html;
        return textarea.value;
    },
    getCard(index) {
        const item = themes.items[index];
        return {
            backgroundImageUrl: item.images.preview_url,
            id: item.id,
            defaultLinkText: 'Preview',
            defaultLinkUrl: `/wp-admin/admin.php?page=mojo-theme-preview&id=${item.id}`,
            price: item.prices.single_domain_license,
            primaryLinkText: 'Buy Now',
            primaryLinkUrl: item.buy_url,
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
            let cardIndex = typeof item === 'number' ? item : _.indexOf(themes.items, _.find(themes.items, {name: item}));
            this.validateCard(cy.get('.product-card').eq(index), cardIndex);
        })
    }
};

describe('Themes Page', function () {

    before(() => {
        cy.server();
        cy.route('GET', '/wp-json/mojo/v1/themes?count=1000&_locale=user', 'fx:themes').as('themes');
        cy.visit({
            url: '/wp-admin/admin.php?page=bluehost#/marketplace/themes',
            onBeforeLoad(win) {
                // See https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
                delete win.fetch;
            }
        });
        cy.wait('@themes');
        cy.injectAxe();
    });

    it('Exists', () => {
        cy.contains('h2', 'Premium Themes');
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
            const {
                backgroundImageUrl,
                defaultLinkText,
                defaultLinkUrl,
                price,
                primaryLinkText,
                primaryLinkUrl,
                title
            } = fn.getCard(0);
            cy.get('.product-card__image').should('be.visible');
            cy.get('.product-card__image').should('have.css', 'background-image', `url("${backgroundImageUrl}")`);
            cy.contains('.product-card__title', title);
            cy.contains('.product-card__price', price);
            cy.get('.product-card__action-group').within(() => {
                cy.get('a').first().contains(defaultLinkText);
                cy.get('a').first().should('have.attr', 'href').and('include', defaultLinkUrl);
                cy.get('a').eq(1).contains(primaryLinkText);
                cy.get('a').eq(1).should('have.attr', 'href').and('include', primaryLinkUrl);
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
            'Nectar A Responsive WordPress Theme',
            'Everline Wedding WordPress Theme',
            'Henry WooCommerce WordPress Theme',
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
            'eLumine  The Best Theme for LearnDash',
            'Alder Beautiful OnePage WordPress Theme',
            'Bolden A Podcast Network WordPress Theme',
        ]);
    });

    it('Sort by Price (Low to High)', () => {
        cy.get('.dropdown__item').eq(2).click({force: true}); // Price (Low to High)
        cy.get('.product-card__price').eq(0).should;
        fn.validateCards([
            'TickTock – Under Construction/Coming soon WordPress Theme',
            'The Core Multi-Purpose WordPress Theme',
            'Zephyr A Beautiful WordPress Blog Theme'
        ]);
    });

    it('Sort by Date Added', () => {
        cy.get('.dropdown__item').eq(3).click({force: true}); // Date Added
        fn.validateCards([
            'Insura Business WordPress Theme',
            'Maflo WordPress Portfolio and Blog',
            'Logisco Transportation and Logistics WordPress Theme',
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
            'Highend Ultimate Multi-Purpose WordPress Theme',
            'Daisy Blog WordPress Theme',
            'Birch A Responsive WordPress Theme',
        ]);
    });

    it('Sort by Popular', () => {
        cy.get('.dropdown__item').eq(0).click({force: true}); // Popular
        fn.validateCards([
            'Highend Ultimate Multi-Purpose WordPress Theme',
            'Creativo 7 Responsive Multipurpose WordPress Theme',
            'Daisy Blog WordPress Theme',
        ]);
    });

    it('Pagination exists', () => {
        cy.get('.pagination').should('have.length', 2);
    });

    it('Pagination: Numeric navigation works', () => {
        cy.get('.pagination > .pagination__item').eq(1).find('button').click();
        fn.validateCards(['Creatica Creative Multi-Purpose WordPress Theme']);
    });

    it('Pagination: Previous button works', () => {
        cy.get('.pagination').first().find('[aria-label="Previous"]').click();
        fn.validateCards(['Highend Ultimate Multi-Purpose WordPress Theme']);
    });

    it('Pagination: Next button works', () => {
        cy.get('.pagination').first().find('[aria-label="Next"]').click();
        fn.validateCards(['Creatica Creative Multi-Purpose WordPress Theme']);
    });

    it('Pagination: First button works', () => {
        cy.get('.pagination').first().find('[aria-label="First"]').click();
        fn.validateCards(['Highend Ultimate Multi-Purpose WordPress Theme']);
    });

    it('Pagination: Last button works', () => {
        cy.get('.pagination').first().find('[aria-label="Last"]').click();
        fn.validateCards(['TreeBeard Nature WordPress Theme']);
    });

});
