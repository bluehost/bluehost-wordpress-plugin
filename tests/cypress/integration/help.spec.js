// <reference types="Cypress" />

describe('Help Page', function () {

	before(() => {
		cy.visit('/wp-admin/admin.php?page=bluehost#/help');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy
			.findByRole('heading', {name: 'From DIY to full-service help', level: 2})
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(1000);
		cy.checkA11y('.bwa-route-contents');
	});

	it('Has chat button', () => {
		cy.get('.section-intro').findByRole('link', {name: 'Chat with us'}).as('link');
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', 'https://helpchat.bluehost.com/');
	});

	it('Has Blue Sky Call to Action', () => {
		cy.findByRole('link', {name: 'Get Blue Sky'}).as('link');
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', '#/marketplace/services/blue-sky');
	});

	it('Has "Full-Service Website" Call to Action', () => {
		cy.findByTestId('full-service').as('link');
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', 'https://www.bluehost.com/solutions/full-service')
			.and('contain', '#full-service');
	});

	it('Has "SEO Services" Call to Action', () => {
		cy.findByTestId('seo-services').as('link');
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', 'https://www.bluehost.com/solutions/full-service')
			.and('contain', '#seo-services');
	});

	it('Has "Request a Consulatation" Call to Action', () => {
		cy.findByRole('link', {name: 'Request a consultation'}).as('link');
		cy.get('@link').scrollIntoView().should('be.visible');
		cy.get('@link').should('have.attr', 'href')
			.and('contain', 'https://www.bluehost.com/solutions/full-service')
			.and('contain', '#request-form');
	});

	describe('Resource Search', () => {

		it('Exists', () => {
			cy.get('.section-resources').scrollIntoView().should('be.visible');
		});

		it('Has Search Field', () => {
			cy.findByLabelText('Search').as('search');
			cy.get('@search').scrollIntoView().should('be.visible');
		});

		it('Has Search Filters', () => {
			cy.get('input[type="radio"][value="Websites"]')
				.closest('label')
				.scrollIntoView()
				.should('be.visible')
				.should('have.class', '--is-active');

			cy.get('input[type="radio"][value="Marketing"]')
				.closest('label')
				.scrollIntoView()
				.should('be.visible');

			cy.get('input[type="radio"][value="Business"]')
				.closest('label')
				.scrollIntoView()
				.should('be.visible');
		});

		it('Has Results', () => {
			cy.get('.resource-card').should('have.length', 6);
		});

		it('Can filter', () => {

			cy.get('input[type="radio"][value="Websites"]').closest('label').as('websites');
			cy.get('input[type="radio"][value="Marketing"]').closest('label').as('marketing');
			cy.get('input[type="radio"][value="Business"]').closest('label').as('business');

			cy.get('.resource-card')
				.first()
				.find('.resource-card__title')
				.invoke('text')
				.then(
					(text) => {
						cy.get('@marketing').click();
						cy.get('.resource-card')
							.first()
							.find('.resource-card__title')
							.should('not.contain', text);
					}
				);

			cy.get('.resource-card')
				.first()
				.find('.resource-card__title')
				.invoke('text')
				.then(
					(text) => {
						cy.get('@business').click();
						cy.get('.resource-card')
							.first()
							.find('.resource-card__title')
							.should('not.contain', text);
					}
				);

		});

		it('Can search', () => {
			cy.findByLabelText('Search').type('How to Start a Blog and Publish Your Post{enter}');
			cy.get('.resource-card')
				.should('have.length', 1);
		});

		it('Has "Visit Resource Center" link', () => {
			cy.findByRole('link', {name: 'Visit resource center'})
				.scrollIntoView()
				.should('be.visible')
				.should('have.attr', 'href')
				.and('contain', 'https://www.bluehost.com/resources/')
		});

	});

	describe('Footer', () => {

		it('Has "Call us for help" call to action', () => {
			cy.get('.help-footer')
				.findByRole('link', {name: '888-401-4678'})
				.scrollIntoView()
				.should('be.visible')
				.should('have.attr', 'href')
				.and('contain', 'tel:8884014678');
		});

		it('Has "Chat with us" call to action', () => {
			cy.get('.help-footer')
				.findByRole('link', {name: 'Chat with us'})
				.scrollIntoView()
				.should('be.visible')
				.should('have.attr', 'href')
				.and('contain', 'https://helpchat.bluehost.com/');
		});

	});


});
