// <reference types="Cypress" />
const marketplace = require('../fixtures/products.json');

describe('Marketplace Page', function () {

	before(() => {
		cy.server();
		cy.intercept({
			method: 'GET',
			url: '**/newfold-marketplace/v1/marketplace'
		}, {
			fixture: 'products.json'
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

	it('Product grid has 1 items', () => {
		cy.get('.marketplace-item').should('have.length', 1);
	});

	it('First product card renders correctly', () => {
		cy.get('#marketplace-item-81288755-c7cf-4408-bc2f-8ac67020ba01').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Add to my Account'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', 'marketplace/product/i/bluesky');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header')
				.contains('Blue')
				.should('be.visible');
			cy.get('.components-card__media').should('be.visible');
			cy.get('.components-card__header em.price')
				.contains('$')
				.should('exist');
		});
	});

	// it('Second product card render correctly', () => {
	// 	cy.get('#marketplace-item-2a2e9bd4-3738-4f78-bed0-b67d2fc039f6').as('card');

	// 	cy.get('@card')
	// 		.findByRole('link', {name: 'Learn More'})
	// 		.scrollIntoView()
	// 		.should('be.visible')
	// 		.should('have.attr', 'href')
	// 		.and('include', 'https://wpforms.com/');

	// 	cy.get('@card').first().within(() => {
	// 		cy.get('.components-card__header')
	// 			.contains('WPForms')
	// 			.should('be.visible');
	// 		cy.get('.components-card__media').should('be.visible');
	// 		cy.get('.components-card__header em.price')
	// 			.contains('$79.00')
	// 			.should('be.visible');
	// 	});
	// });
	
	// it('CTA links have target=_blank', () => {
	// 	cy.get('#marketplace-item-0fd107dc-cfcc-4380-86ef-89a9ce01e443').as('card');

	// 	cy.get('@card')
	// 		.findByRole('link', {name: 'Learn More'})
	// 		.scrollIntoView()
	// 		.should('have.attr', 'target')
	// 		.and('include', '_blank');
	// });

	// it('Load more button loads more products', () => {
	// 	cy.get('.marketplace-item').should('have.length', 12);

	// 	cy.contains('button', 'Load More');

	// 	cy.get('.marketplaceList button')
	// 		.scrollIntoView()
	// 		.click();

	// 	cy.wait(300);

	// 	cy.get('.marketplace-item').should('have.length', 18);
	// });

	// it('Category Tab Filters properly', () => {
	// 	cy.contains('button', 'Services');
	// 	cy.contains('button', 'SEO');

	// 	cy.get('#tab-panel-0-Services').click();
	// 	cy.wait(300);
	// 	cy.get('.marketplace-item').should('have.length', 6);

	// 	cy.get('#marketplace-item-0fd107dc-cfcc-4380-86ef-89a9ce01e443 h3')
	// 		.scrollIntoView()
	// 		.should('be.visible')
	// 		.should('have.text', 'Full Service');
		
	// 	cy.get('#tab-panel-0-SEO').click();
	// 	cy.wait(300);
	// 	cy.get('.marketplace-item').should('have.length', 1);
	
	// 	cy.get('#marketplace-item-7beee5ae-2e91-4282-9930-15ada43fc738 h3')
	// 		.scrollIntoView()
	// 		.should('be.visible')
	// 		.should('have.text', 'Yoast Premium');
	// });

	// CTB Not included yet
	// it('Product CTB cards render correctly', () => {
	// 	cy.get('.marketplace-item-ec14a614-8672-4094-8310-cb0b1eb0f176').as('card');

	// 	cy.get('@card')
	// 		.findByRole('button', {name: 'Buy Now'})
	// 		.scrollIntoView()
	// 		.should('be.visible')
	// 		.should('have.attr', 'data-action')
	// 		.and('include', 'load-nfd-ctb');

	// 	cy.get('@card').first().within(() => {
	// 		cy.get('.components-card__header').should('be.visible');
	// 		cy.get('.components-card__media').should('be.visible');
	// 	});
	// });

});
