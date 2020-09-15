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
		fixture: 'fx:plugin-woo-bookings',
	},
	{
		type: 'Services',
		id: '54340b9a-8bb4-4418-bf37-618e0a140b28',
		title: 'WordPress Pro',
		price: 199,
		salesCount: '4,337',
		dateCreated: 'October 7, 2014',
		dateUpdated: 'January 6, 2017',
		imageUrl: 'https://marketplace-images-production.s3-us-west-2.amazonaws.com/vault/items/preview-54340b9a-8bb4-4418-bf37-618e0a140b28-1180x660-a36aq.jpg',
		fixture: 'fx:service-wordpress-pro',
	},
	{
		type: 'Themes',
		id: '5377b431-d8a8-431b-a711-50c10a141528',
		title: 'Highend Ultimate Multi-Purpose WordPress Theme',
		price: 59,
		salesCount: '37,677',
		dateCreated: 'May 17, 2014',
		dateUpdated: 'November 5, 2019',
		imageUrl: 'https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-5dc1aff5-9388-43fd-8d22-32390a14153a-jyM02.png',
		fixture: 'fx:theme-highend',
	}
];

products.forEach(function (product) {

	describe(`${ product.type } Details Page`, function () {

		it('Exists', () => {
			cy.server();
			cy.route('GET', `/**/mojo/v1/items?id=${ product.id }*`, product.fixture).as('product');
			cy.visit({
				url: `/wp-admin/admin.php?page=bluehost#/marketplace/product/${ product.id }`,
				onBeforeLoad: win => delete win.fetch
			});
			cy.wait('@product');
			cy.injectAxe();
			cy.contains('.page-product__header h1', `Premium ${ product.type }`);
		});

		it('Shows breadcrumbs', () => {
			cy.get('.page-product__breadcrumbs').should('be.visible');
			cy.contains('.page-product__breadcrumbs', product.title);
		});

		it('Has correct root breadcrumb', () => {
			cy.contains('.page-product__breadcrumbs-root', `Premium ${ product.type }`);
		});

		it('Shows product title', () => {
			cy.contains('.page-product__title', product.title).should('be.visible');
		});

		it('Shows product image', () => {
			cy.get('.page-product__image img').as('image');
			cy.get('@image').should('be.visible');
			cy.get('@image').should('have.attr', 'src').and('equal', product.imageUrl);
		});

		it('Shows product description', () => {
			cy.get('.page-product__description').should('not.be.empty');
		});

		it('Shows product price', () => {
			cy.contains('.page-product__pricing-panel-price', product.price).should('be.visible');
		});

		it('Shows "Buy Now" button', () => {
			cy.get('.page-product__pricing-panel-call-to-action.bluehost.components-button.is-primary').as('button');
			cy.get('@button').contains('Buy Now').should('be.visible');
			cy.get('@button').should('have.attr', 'href').and('equal', `https:\/\/www.mojomarketplace.com\/cart?item_id=${ product.id }&#038;utm_source=mojo_wp_plugin&#038;utm_campaign=mojo_wp_plugin&#038;utm_medium=plugin_admin&#038;utm_content=buy_now_preview&#038;theme=bluehost`);
		});

		it('Shows product terms', () => {
			cy.contains('.page-product__pricing-panel-terms', 'One Time Fee').should('be.visible');
		});

		it('Shows info panel', () => {
			cy.contains('.page-product__info-panel-title', 'Item Information');
		});

		it('Shows date created', () => {
			cy.contains('.page-product__info-panel-created', product.dateCreated);
		});

		it('Shows date updated', () => {
			cy.contains('.page-product__info-panel-updated', product.dateUpdated);
		});

		it('Shows sales count', () => {
			cy.contains('.page-product__info-panel-sales', product.salesCount);
		});

	});

});
