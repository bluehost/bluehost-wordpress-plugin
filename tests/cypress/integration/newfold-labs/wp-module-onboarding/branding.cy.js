// <reference types="Cypress" />

describe('Branding', function () {

	before(() => {

		// TODO: Remove this call to WP-CLI when the plugin is updated to use the plugin ID from the container.
		//cy.exec('npx wp-env run cli wp option set mm_brand BlueHost')

		cy.setCustomerData()

		cy.visit('wp-admin/index.php?page=nfd-onboarding&flow=ecommerce')
		cy.injectAxe()
	})

	it('Is Accessible', () => {
		cy.checkA11y('#nfd-onboarding')
	})

	it('Starts at the welcome screen', () => {
		cy.url({timeout: 20000}).should('include', '#/wp-setup/step/get-started/welcome')
	})

	it('Has Bluehost branding', () => {

		// This class name dictates the branding.
		cy.get('body').should('have.class', 'nfd-brand-bluehost')

		// Ensure that the Bluehost logo is showing
		cy.get('[aria-label="Toggle Navigation"]')
			.as('navToggle')
			.should('be.visible')

		cy.get('@navToggle')
			.find('div')
			.then(($el) => {
				const el = $el.get(0);
				const win = el.ownerDocument.defaultView;
				expect(win.getComputedStyle(el).backgroundImage).to.equal('url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIyMjMuNjI2IDIyMy41OCA1Mi43NDkgNTIuODQxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gMjI4Ljg0IDIyOC44MDQgTCAyNDAuNjUzIDIyOC44MDQgTCAyNDAuNjUzIDI0MC42MjcgTCAyMjguODQgMjQwLjYyNyBMIDIyOC44NCAyMjguODA0IFogTSAyNDQuMDg4IDIyOC44MDQgTCAyNTUuOTExIDIyOC44MDQgTCAyNTUuOTExIDI0MC42MjcgTCAyNDQuMDg4IDI0MC42MjcgTCAyNDQuMDg4IDIyOC44MDQgWiBNIDI1OS4zMzggMjI4LjgwNCBMIDI3MS4xNjEgMjI4LjgwNCBMIDI3MS4xNjEgMjQwLjYyNyBMIDI1OS4zMzggMjQwLjYyNyBMIDI1OS4zMzggMjI4LjgwNCBaIE0gMjI4Ljg0IDI0NC4wOSBMIDI0MC42NTMgMjQ0LjA5IEwgMjQwLjY1MyAyNTUuOTEzIEwgMjI4Ljg0IDI1NS45MTMgTCAyMjguODQgMjQ0LjA5IFogTSAyNDQuMDg4IDI0NC4wOSBMIDI1NS45MTEgMjQ0LjA5IEwgMjU1LjkxMSAyNTUuOTEzIEwgMjQ0LjA4OCAyNTUuOTEzIEwgMjQ0LjA4OCAyNDQuMDkgWiBNIDI1OS4zMzggMjQ0LjA5IEwgMjcxLjE2MSAyNDQuMDkgTCAyNzEuMTYxIDI1NS45MTMgTCAyNTkuMzM4IDI1NS45MTMgTCAyNTkuMzM4IDI0NC4wOSBaIE0gMjI4Ljg0IDI1OS4zNzcgTCAyNDAuNjUzIDI1OS4zNzcgTCAyNDAuNjUzIDI3MS4xOTggTCAyMjguODQgMjcxLjE5OCBMIDIyOC44NCAyNTkuMzc3IFogTSAyNDQuMDg4IDI1OS4zNzcgTCAyNTUuOTExIDI1OS4zNzcgTCAyNTUuOTExIDI3MS4xOTggTCAyNDQuMDg4IDI3MS4xOTggTCAyNDQuMDg4IDI1OS4zNzcgWiBNIDI1OS4zMzggMjU5LjM3NyBMIDI3MS4xNjEgMjU5LjM3NyBMIDI3MS4xNjEgMjcxLjE5OCBMIDI1OS4zMzggMjcxLjE5OCBMIDI1OS4zMzggMjU5LjM3NyBaIiBzdHlsZT0iIi8+Cjwvc3ZnPg==")');
			})

		// Ensure that the background is blue.
		cy.get('.nfd-onboarding-layout')
			.should('be.visible')
			.should('have.css', 'background-color', 'rgb(53, 117, 211)')

		// Ensure that the "Next" button is blue.
		cy.findByRole('button', {name: 'Next'})
			.should('be.visible')
			.should('have.css', 'background-color', 'rgb(53, 117, 211)')

		// Ensure that the "Exit to WordPress" button is blue.
		cy.findByRole('button', {name: 'Exit to WordPress'})
			.should('be.visible')
			.should('have.css', 'color', 'rgb(53, 117, 211)')
			.should('have.css', 'border-color', 'rgb(53, 117, 211)')

		// Ensure that the "Start Setup" button is blue.
		cy.findByRole('button', {name: 'Start Setup'})
			.should('be.visible')
			.should('have.css', 'background-color', 'rgb(28, 92, 186)')
	})

	after(() => {
		// Reset this data so that it does not affect the behaviour of other tests.
		cy.clearCustomerData()
	})

})
