// <reference types="Cypress" />

describe('Navigation', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=blueprint');
		cy.injectAxe();
		
	});

	it('Logo Links to home', () => {
		cy.get('.wppb-logo-wrap').click();
		cy.wait(500);
		cy.hash().should('eq', '#/home');
	});
	
	it('Admin Subnav properly highlights', () => {
		cy
			.get('#adminmenu #toplevel_page_blueprint')
			.should('have.class', 'wp-has-current-submenu');
		cy
			.get('#adminmenu #toplevel_page_blueprint ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /home/);
	});

	// test main nav
	it('Main nav links properly navigates', () => {
		cy
			.get('.link-Marketplace').
			should('not.have.class', 'active');
		cy.get('.link-Marketplace').click();
		cy.wait(500);
		cy.hash().should('eq', '#/marketplace');
		cy
			.get('.link-Marketplace')
			.should('have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_blueprint ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /marketplace/);

		cy.get('.link-Performance').click();
		cy.wait(500);
		cy.hash().should('eq', '#/performance');
		cy
			.get('.link-Performance')
			.should('have.class', 'active');
		cy
			.get('.link-Marketplace')
			.should('not.have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_blueprint ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /performance/);

		cy.get('.link-Settings').click();
		cy.wait(500);
		cy.hash().should('eq', '#/settings');
		cy
			.get('#adminmenu #toplevel_page_blueprint ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /settings/);
	});

	it('Utility nav links properly navigates', () => {
		cy
			.get('.utility-link-Performance')
			.should('not.have.class', 'active');
		cy
			.get('.utility-link-Performance').click();
		cy.wait(500);
		cy.hash().should('eq', '#/performance');
		cy
			.get('.utility-link-Performance')
			.should('have.class', 'active');

		cy
			.get('.utility-link-Settings').click();
		cy.wait(500);
		cy.hash().should('eq', '#/settings');
		cy
			.get('.utility-link-Settings')
			.should('have.class', 'active');
		cy
			.get('.utility-link-Performance')
			.should('not.have.class', 'active');

		cy
			.get('.utility-link-Help').click();
		cy.wait(500);
		cy.hash().should('eq', '#/help');
		cy
			.get('.utility-link-Help')
			.should('have.class', 'active');
		cy
			.get('.utility-link-Settings')
			.should('not.have.class', 'active');
	});

	it('Mobile nav links dispaly for mobile', () => {
		cy
			.get('.mobile-toggle')
			.should('not.exist');

		cy.viewport('iphone-x');
		cy
			.get('.mobile-toggle')
			.should('be.visible');
	});

	it('Mobile nav links properly navigates', () => {
		cy.get('.mobile-link-Home').should('not.exist');
		cy.viewport('iphone-x');
		cy.get('.mobile-toggle').click();
		cy.wait(500);
		cy.get('.mobile-link-Home').should('be.visible');
		cy.get('button[aria-label="Close"]').should('be.visible')
		cy.get('button[aria-label="Close"]').click();
		cy.get('.mobile-link-Home').should('not.exist');
	});
});
