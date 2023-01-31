// <reference types="Cypress" />

describe('Blue Sky Product Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/marketplace/services/blue-sky');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.get('.section-logo svg').scrollIntoView().should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(1500);
		cy.checkA11y('.bwa-route-contents');
	});

	it('Has valid calls to action', () => {
		cy.findAllByRole('link', {name: '844-211-8705'})
			.each(($el) => {
				cy.wrap($el)
					.scrollIntoView()
					.should('be.visible')
					.should('have.attr', 'href')
					.and('contain', 'tel:8442118705');
			});
	});

	it('Shows correct phone number', () => {
		cy.get('.call-to-action__title strong').contains('844-211-8705')
	});

});
