// <reference types="Cypress" />

describe('Click to buy', function () {

	beforeEach(() => {

		cy.intercept({
			method: 'GET',
			url: /bluehost(\/|%2F)v1(\/|%2F)ctb/,
		},{
			fixture: 'ctbGET'
		}).as('ctbGET');

		cy.intercept({
			method: 'POST',
			url: /bluehost(\/|%2F)v1(\/|%2F)ctb/,
		}, {
			fixture: 'ctbPOST'
		}).as('ctbPOST');

		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace/plugins/yoast-seo-premium');

	});

	it('Button has CTB Attributes', () => {
		cy.get('[data-action="load-nfd-ctb"]')
			.scrollIntoView()
			.should('exist')
			.should('be.visible')
			.should('have.attr', 'data-ctb-id')
			.and('equal', '57d6a568-783c-45e2-a388-847cff155897');
	});

	it('CTB modal is functional', () => {
		cy.get('body').should('not.have.class', 'noscroll');

		cy.get('[data-action="load-nfd-ctb"]')
			.scrollIntoView()
			.click();
		// wait for intercept with data
		cy.wait('@ctbGET');

		// check body for noscroll class
		cy.get('body').should('have.class', 'noscroll');

		// check for modal should be.visible
		cy.get('#nfd-ctb-container').should('exist');
		cy.get('.ctb-modal-content')
			.scrollIntoView()
			.should('be.visible');

		//verify ctb content
		cy.get('.ctb-modal-content .nfd-ctb-modal-product-header')
			.contains('Yoast SEO Premium');

		cy.get('.ctb-modal-content .nfd-ctb-modal-product-price')
			.contains('$');
		
		cy.get('.ctb-modal-content .nfd-ctb-modal-cc-notice strong')
			.contains('0009');

		// check for cancel button
		cy.get('button[data-a11y-dialog-destroy]')
			.scrollIntoView()
			.should('be.visible');

		// check that cancel button closes modal
		cy.get('button[data-a11y-dialog-destroy]').click();
		cy.wait(200);

		// confirm modal is closed
		cy.get('body').should('not.have.class', 'noscroll');
		cy.get('#nfd-ctb-container').should('have.attr', 'aria-hidden').and('equal', 'true');
		cy.get('.ctb-modal-content').should('not.be.visible');

		// reopen
		cy.get('[data-action="load-nfd-ctb"]').click();
		cy.wait(100);
		cy.get('.ctb-modal-content')
			.scrollIntoView()
			.should('be.visible');

		// confirm modal closes when overlay is clicked
		cy.get('#nfd-ctb-container .ctb-modal-overlay').click({force:true});
		cy.wait(100);
		cy.get('.ctb-modal-content').should('not.be.visible');
	});

	it('CTB purchase functions properly', () => {
		// click CTB (again)
		cy.get('[data-action="load-nfd-ctb"]').click();

		// check for buy button
		cy.get('[data-action="purchase-ctb"]')
			.scrollIntoView()
			.should('exist')
			.should('be.visible')
			.should('have.attr', 'data-ctb-id')
			.and('equal', '57d6a568-783c-45e2-a388-847cff155897');

		// check that buy button hits POST endpoint - intercept
		cy.get('[data-action="purchase-ctb"]').click();
		cy.wait('@ctbPOST');

		// displays success
		cy.get('.ctb-modal-content .nfd-ctb-modal-success')
			.scrollIntoView()
			.should('be.visible');

		// success content displays
		cy.get('.ctb-modal-content .nfd-ctb-modal-success')
			.contains('Your Payment Was Successful!');

		cy.get('.ctb-modal-content .nfd-ctb-modal-success-item-left')
			.contains('Yoast SEO Premium');

		cy.get('.ctb-modal-content .nfd-ctb-modal-success-item-right')
			.contains('$');

		cy.get('.ctb-modal-content .nfd-ctb-modal-success-item-right')
			.contains('0009');

		// confirm modal closes when overlay is clicked
		cy.get('#nfd-ctb-container .ctb-modal-overlay').click({force:true});
		cy.wait(100);
		cy.get('.ctb-modal-content').should('not.be.visible');
	});

});
