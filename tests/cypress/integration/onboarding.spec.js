// <reference types="Cypress" />

describe('Onboarding', function () {

	before(() => {

		// Make sure install date is within the last 30 days
		cy.exec(`npx wp-env run cli wp option set bh_plugin_install_date ${ Cypress.moment().format('X') }`);

		// Make sure we are in coming soon mode
		cy.exec('npx wp-env run cli wp option set mm_coming_soon true');

		cy.visit('/wp-admin/admin.php?page=bluehost#/home');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.findByRole('heading', {name: 'Welcome to your WordPress site', level: 2}).scrollIntoView().should('be.visible');
		cy.findByText('Not sure how to get started? Here are a few options we recommend.').scrollIntoView().should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(200);
		cy.checkA11y('.router-section');
	});

	it('Start with a page or post', () => {
		cy.findByText('Start with a page or post').scrollIntoView().should('be.visible');

		cy.findByRole('link', {name: 'Add a blog post'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', '/wp-admin/post-new.php');

		cy.findByRole('link', {name: 'Add a page'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', '/wp-admin/post-new.php?post_type=page');
	});

	it('Make it look just right', () => {
		cy.findByText('Make it look just right').scrollIntoView().should('be.visible');

		cy.findByRole('link', {name: 'Browse themes'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', '/wp-admin/admin.php?page=bluehost#/marketplace/themes');

		cy.findByRole('link', {name: 'Customize your site'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', '/wp-admin/customize.php');
	});

	it('Get ready to launch', () => {
		cy.findByText('Get ready to launch').scrollIntoView().should('be.visible');

		cy.findByRole('link', {name: 'website pre-publishing'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/help/article/website-publish-checklist');

		cy.findByRole('button', {name: 'Launch your site'}).scrollIntoView().should('be.visible');
	});

	it('How-to\'s & next steps', () => {
		cy.findByRole('heading', {name: 'How-to\'s & next steps', level: 3}).scrollIntoView().should('be.visible');

		cy.findByRole('link', {name: 'How to use WordPress plugins'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/blog/how-to-use-wordpress-plugins/');

		cy.findByRole('link', {name: 'The two essential plugins you need'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/blog/the-two-essential-plugins-you-need-for-your-wordpress-site/');

		cy.findByRole('link', {name: 'Steps for adding a store to your site with WooCommerce'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/blog/how-to-use-woocommerce/');

		cy.findByRole('link', {name: 'The five best WooCommerce WordPress themes'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/blog/the-five-best-woocommerce-wordpress-themes/');

		cy.findByRole('link', {name: 'Our BlueSky experts are here to help you every step of the way'}).as('link')
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('include', 'https://www.bluehost.com/blue-sky');
	});

	it('Site is not launched', () => {
		cy.findByText('Coming Soon Active').should('be.visible');
	});

	it('Site can be launched', () => {
		cy.server();
		cy.route('POST', '**/bluehost/v1/settings*').as('updateSettings');
		cy.findByRole('button', {name: 'Launch your site'}).scrollIntoView().click();
		cy.wait('@updateSettings');

		cy.findByText('Awesome! Your site is live.').scrollIntoView().should('be.visible');

		cy.findByRole('button', {name: 'Restore Coming Soon'}).scrollIntoView().should('be.visible');

		cy.findByText('Coming Soon Active').should('not.be.visible');
	});

	it('Site can be unlaunched', () => {
		cy.server();
		cy.route('POST', '**/bluehost/v1/settings*').as('updateSettings');
		cy.findByRole('button', {name: 'Restore Coming Soon'}).scrollIntoView().click();
		cy.wait('@updateSettings');

		cy.findByText('Get ready to launch').scrollIntoView().should('be.visible');
		cy.findByRole('button', {name: 'Launch your site'}).scrollIntoView().should('be.visible');
	});

});
