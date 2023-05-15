// <reference types="Cypress" />

describe('Marketplace Page', function () {

	before(() => {
		cy.intercept({
			method: 'GET',
			url: /newfold-marketplace(\/|%2F)v1(\/|%2F)marketplace/
		}, {
			fixture: 'products'
		}).as('products');
		cy.visit('/wp-admin/admin.php?page=blueprint#/marketplace');
		cy.wait('@products');
	});

	it('Exists', () => {
		cy.contains('button', 'Featured');
	});

	it('Is Accessible', () => {
		cy.injectAxe();
		cy.wait(1000);
		cy.checkA11y('.wppb-app-body');
	});

	it('Product grid has 4 items', () => {
		cy.get('.marketplace-item').should('have.length', 4);
	});

	it('First product card renders correctly', () => {
		cy.get('#marketplace-item-1fc92f8a-bb9f-47c8-9808-aab9c82d6bf2').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Learn More'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', 'https://www.web.com/websites/website-design-services');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header')
				.contains('Web Design Services')
				.should('be.visible');
			cy.get('.components-card__media').should('be.visible');
			cy.get('.components-card__header .price').should('not.exist');
		});
	});

	it('Second product card render correctly', () => {
		cy.get('#marketplace-item-2a1dadb5-f58d-4ae4-a26b-27efb09136eb').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Buy Now'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', 'https://www.mojomarketplace.com/cart?item_id=5377b431-d8a8-431b-a711-50c10a141528');

		cy.get('@card').first().within(() => {
			cy.get('.components-card__header')
				.contains('Highend')
				.should('be.visible');
			cy.get('.components-card__media').should('be.visible');
			cy.get('.components-card__header .price')
				.contains('$59.00')
				.should('be.visible');
		});
	});
	
	it('CTA links have target=_blank', () => {
		cy.get('#marketplace-item-1fc92f8a-bb9f-47c8-9808-aab9c82d6bf2').as('card');

		cy.get('@card')
			.findByRole('link', {name: 'Learn More'})
			.scrollIntoView()
			.should('have.attr', 'target')
			.and('include', '_blank');
	});

	it('Category Tab Filters properly', () => {
		
		cy.get('.newfold-marketplace-tab-services').click();
		cy.get('.marketplace-item').should('have.length', 12);
		cy.get('#marketplace-item-1fc92f8a-bb9f-47c8-9808-aab9c82d6bf2 h2')
			.scrollIntoView()
			.should('be.visible')
			.should('have.text', 'Web Design Services');
		
			cy.get('.newfold-marketplace-tab-seo').click();
		cy.get('.marketplace-item').should('have.length', 6);
		cy.get('#marketplace-item-a1ff70f1-9670-4e25-a0e1-a068d3e43a45 h2')
			.scrollIntoView()
			.should('be.visible')
			.should('have.text', 'Yoast Premium');
	});

	it('Load more button loads more products', () => {
		cy.get('.newfold-marketplace-tab-services').click();
		cy.wait(300);

		cy.get('.marketplace-item').should('have.length', 12);
		cy.contains('button', 'Load More');
		cy.get('.marketplace-list button')
			.scrollIntoView()
			.click();
		cy.wait(300);

		cy.get('.marketplace-item').should('have.length', 14);
	});

	it('Category tabs update path', () => {
		cy.get('.newfold-marketplace-tab-services').click();
		cy.location().should((loc) => {
			expect(loc.hash).to.eq('#/marketplace/services')
		});
	});

	// CTB Not supported yet
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
