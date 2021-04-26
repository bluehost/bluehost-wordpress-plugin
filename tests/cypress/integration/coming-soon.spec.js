// <reference types="Cypress" />

describe('Coming Soon Page', function () {

	before(() => {
		cy.exec('npx wp-env run cli wp option set mm_coming_soon true');
		cy.logout();
		cy.visit('/');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy
			.findByRole('heading', {name: 'Coming Soon!', level: 2})
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(500);
		cy.checkA11y();
	});

	it('Has admin login button', () => {
		cy
			.findByRole('link', {name: 'Admin Login'})
			.scrollIntoView()
			.should('be.visible')
			.should('have.attr', 'href')
			.and('include', '/wp-login.php');
	});

});
