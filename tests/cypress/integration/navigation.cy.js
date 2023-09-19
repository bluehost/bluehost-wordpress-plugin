// <reference types="Cypress" />

describe('Navigation', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=' + Cypress.env('pluginId') );
		cy.injectAxe();
		
	});

	it('Logo Links to home', () => {
		cy.get('.wppbh-logo-wrap').click();
		cy.wait(500);
		cy.hash().should('eq', '#/home');
	});
	
	it('Admin Subnav properly highlights', () => {
		cy
			.get('#adminmenu #toplevel_page_bluehost')
			.should('have.class', 'wp-has-current-submenu');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /home/);
	});

	// test main nav
	it('Main nav links properly navigates', () => {
		cy
			.get('.wppbh-app-navitem-Marketplace').
			should('not.have.class', 'active');
		cy.get('.wppbh-app-navitem-Marketplace').click();
		cy.wait(500);
		cy.hash().should('eq', '#/marketplace');
		cy
			.get('.wppbh-app-navitem-Marketplace')
			.should('have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /marketplace/);

		cy.get('.wppbh-app-navitem-Performance').click();
		cy.wait(500);
		cy.hash().should('eq', '#/performance');
		cy
			.get('.wppbh-app-navitem-Performance')
			.should('have.class', 'active');
		cy
			.get('.wppbh-app-navitem-Marketplace')
			.should('not.have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /performance/);

		cy.get('.wppbh-app-navitem-Settings').click();
		cy.wait(500);
		cy.hash().should('eq', '#/settings');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /settings/);
	});
	
	it('Subnav links properly navigates', () => {

		cy
			.get('.wppbh-app-navitem-Marketplace')
			.scrollIntoView()
			.should('not.have.class', 'active');
		cy.get('.wppbh-app-navitem-Marketplace').click();

		cy.wait(500);
		cy.hash().should('eq', '#/marketplace');
		cy
			.get('.wppbh-app-navitem-Marketplace')
			.should('have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /marketplace/);

		cy.get('.wppbh-app-subnavitem-Services').click();
		cy.wait(500);
		cy.hash().should('eq', '#/marketplace/services');
		cy
			.get('.wppbh-app-subnavitem-Services')
			.should('have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /marketplace/);
		cy
			.get('.wppbh-app-navitem-Marketplace')
			.should('have.class', 'active');
		

		cy.get('.wppbh-app-subnavitem-SEO').click();
		cy.wait(500);
		cy.hash().should('eq', '#/marketplace/seo');
		cy
			.get('.wppbh-app-subnavitem-SEO')
			.should('have.class', 'active');
		cy
			.get('.wppbh-app-subnavitem-Services')
			.should('not.have.class', 'active');
		cy
			.get('#adminmenu #toplevel_page_bluehost ul.wp-submenu li.current a')
			.should('have.attr', 'href')
			.and('match', /marketplace/);
		cy
			.get('.wppbh-app-navitem-Marketplace')
			.should('have.class', 'active');
			
		cy.get('.wppbh-app-navitem-Performance').click();
			cy.wait(500);
		cy
			.get('.wppbh-app-subnavitem-Services')
			.should('not.have.class', 'active');
		cy
			.get('.wppbh-app-subnavitem-SEO')
			.should('not.have.class', 'active');
		cy
			.get('.wppbh-app-navitem-Marketplace')
			.should('not.have.class', 'active');
	});

	// utility nav is no more, leaving this in place un case we bring it back anytime soon.
	it.skip('Utility nav links properly navigates', () => {
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

	// no mobile nav, but should probably add
	it.skip('Mobile nav links dispaly for mobile', () => {
		cy
			.get('.mobile-toggle')
			.should('not.exist');

		cy.viewport('iphone-x');
		cy
			.get('.mobile-toggle')
			.should('be.visible');
	});

	it.skip('Mobile nav links properly navigates', () => {
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
