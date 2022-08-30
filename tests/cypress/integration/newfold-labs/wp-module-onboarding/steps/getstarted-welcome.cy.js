// <reference types="Cypress" />

describe('Get Started Welcome Page', function () {

	before(() => {
		cy.setCustomerData()

		cy.visit('wp-admin/index.php?page=nfd-onboarding&flow=ecommerce')
		cy.injectAxe()
	})

	it('Starts at the welcome screen', () => {
		cy.url({timeout: 20000}).should('include', '#/wp-setup/step/get-started/welcome')
	})

	it('Is Accessible', () => {
		cy.checkA11y('#nfd-onboarding')
	})

	it('Drawer is closed and will not open', () => {

		cy.get('.nfd-onboarding-drawer__panel-inner').as('drawer')
		cy.get('[aria-label="Toggle Navigation"]').as('toggle')

		// Make sure drawer is closed
		cy.get('@drawer').should('not.be.visible')

		// Click the toggle button
		cy.get('@toggle').click()

		// Make sure the drawer does not open
		cy.get('@drawer').should('not.be.visible')
	})

	it('Check if welcome card is visible', () => {
		cy.get('.welcome-card').should('be.visible')
	})

	it('Check if main heading and sub heading shows up', () => {
		cy.get('.nfd-step-card-heading').should('be.visible')
		cy.get('.nfd-step-card-subheading').should('be.visible')
	})

	it('Change tab and check', () => {
		cy.get('#tab-panel-0-tab2').trigger('mouseover').should('be.visible')
		cy.get('#tab-panel-0-tab2-view').should('be.visible')
	})

	it('"Back" button does not exist', () => {
		cy.findByRole('button', {name: 'Back'}).should('not.exist')
	})

	it('"Next" button loads next screen on click', () => {
		cy.findByRole('button', {name: 'Next'}).click()
		cy.url().should('not.include', '#/wp-setup/step/get-started/welcome')
		cy.go('back')
	})

	it('"Exit to WordPress" button is visible and clickable and continue flow', () => {
		cy.findByRole('button', {name: 'Exit to WordPress'})
			.should('be.visible')
			.click()
		cy.get('.components-modal__screen-overlay').should('be.visible')
		cy.get('.nfd-onboarding-etw__buttons > .is-secondary').click()
		cy.get('.components-modal__screen-overlay').should('not.exist')
	})

	it('"Exit to WordPress" button is visible and clickable and cancel', () => {
		cy.findByRole('button', {name: 'Exit to WordPress'})
			.should('be.visible')
			.click()
		cy.get('.components-modal__screen-overlay').should('be.visible')
		cy.get('.components-modal__header > button').click()
		cy.get('.components-modal__screen-overlay').should('not.exist')
	})

	it('"Exit to Wordpress" button is visible and clickable and exit flow', () => {
		cy.findByRole('button', {name: 'Exit to WordPress'})
			.should('be.visible')
			.click()
		cy.get('.components-modal__screen-overlay').should('be.visible')
		cy.get('.nfd-onboarding-etw__buttons > .is-primary').click()
		cy.wait(3000)
		cy.url().should('not.contain', '#/wp-setup/step/get-started/welcome')
	})

	after(() => {
		cy.clearCustomerData()
	})
})
