// <reference types="Cypress" />

import 'cypress-axe';

const products = [
    {
        type: 'Plugins',
        id: '565f5981-f638-4d4c-9ea8-1c320a141f39',
        title: 'WooCommerce Bookings Developed by WooCommerce',
        price: 249,
        salesCount: 105,
        dateCreated: 'December 2, 2015',
        dateUpdated: 'January 31, 2019',
        imageUrl: 'https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-565f5981-f638-4d4c-9ea8-1c320a141f39-46gew.jpg',
        buyUrl: 'https://www.mojomarketplace.com/cart?item_id=565f5981-f638-4d4c-9ea8-1c320a141f39&#038;utm_source=mojo_wp_plugin&#038;utm_campaign=mojo_wp_plugin&#038;utm_medium=plugin_admin&#038;utm_content=buy_now_preview&#038;theme=bluehost',
    },
    {
        type: 'Services',
        id: '53078bcc-bf48-44e3-b131-4a870a141528',
        title: 'Install Your WordPress Theme',
        price: 49,
        salesCount: '37,078',
        dateCreated: 'February 21, 2014',
        dateUpdated: 'January 6, 2017',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/marketplace-images-production/items/WP-Theme-Installation-1.jpg',
        buyUrl: 'https://www.mojomarketplace.com/cart?item_id=53078bcc-bf48-44e3-b131-4a870a141528&#038;utm_source=mojo_wp_plugin&#038;utm_campaign=mojo_wp_plugin&#038;utm_medium=plugin_admin&#038;utm_content=buy_now_preview&#038;theme=bluehost',
    }
];

products.forEach(function (product) {

    describe(`${product.type} Details Page`, function () {

        it('Exists', () => {
            cy.visit(`/wp-admin/admin.php?page=bluehost#/marketplace/product/${product.id}`);
            cy.injectAxe();
            cy.contains('.product-details__header h1', `Premium ${product.type}`);
        });

        it('Is Accessible', () => {
            cy.checkA11y('.app-page');
        });

        it('Shows breadcrumbs', () => {
            cy.get('.product-details__breadcrumbs').should('be.visible');
            cy.contains('.product-details__breadcrumbs', product.title);
        });

        it('Has correct root breadcrumb', () => {
            cy.contains('.product-details__breadcrumbs-root', `Premium ${product.type}`);
        });

        it('Shows product title', () => {
            cy.contains('.product-details__title', product.title).should('be.visible');
        });

        it('Shows product image', () => {
            cy.get('.product-details__image img').as('image');
            cy.get('@image').should('be.visible');
            cy.get('@image').should('have.attr', 'src').and('equal', product.imageUrl);
        });

        it('Shows product description', () => {
            cy.get('.product-details__description').should('not.be.empty');
        });

        it('Shows product price', () => {
            cy.contains('.product-details__pricing-panel-price', product.price).should('be.visible');
        });

        it('Shows "Buy Now" button', () => {
            cy.get('.product-details__pricing-panel-call-to-action.is-button.is-primary').as('button');
            cy.get('@button').contains('Buy Now').should('be.visible');
            cy.get('@button').should('have.attr', 'href').and('equal', product.buyUrl);
        });

        it('Shows product terms', () => {
            cy.contains('.product-details__pricing-panel-terms', 'One Time Fee').should('be.visible');
        });

        it('Shows info panel', () => {
            cy.contains('.product-details__info-panel-title', 'Item Information');
        });

        it('Shows date created', () => {
            cy.contains('.product-details__info-panel-created', product.dateCreated);
        });

        it('Shows date updated', () => {
            cy.contains('.product-details__info-panel-updated', product.dateUpdated);
        });

        it('Shows sales count', () => {
            cy.contains('.product-details__info-panel-sales', product.salesCount);
        });

    });

});