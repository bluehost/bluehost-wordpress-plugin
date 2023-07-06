const semver = require( 'semver' );
describe( 'Onboarding Phase 2 Flow', () => {
	before( () => {
		cy.setCustomerData();
		cy.exec( 'npx wp-env run cli wp option set mm_brand BlueHost' );
		cy.exec(
			'npx wp-env run cli wp option set permalink_structure /%postname%/'
		);
		cy.visit( 'wp-admin/index.php?page=nfd-onboarding&flow=ecommerce', {
			timeout: 10000,
		} );
	} );

	after( () => {
		// Reset this data so that it does not affect the behaviour of other tests.
		cy.clearCustomerData();
	} );

	it( 'Tests Onboarding Phase 2 Flow', () => {
		if ( semver.satisfies( Cypress.env( 'wpSemverVersion' ), '>=6.1.0' ) ) {
			cy.intercept( { method: 'GET', url: '**settings**' } ).as(
				'getSettings'
			);
			cy.intercept( { method: 'GET', url: '**patterns**' } ).as(
				'getPatterns'
			);
			cy.intercept( { method: 'GET', url: '**variations**' } ).as(
				'getVariations'
			);
			cy.intercept( { method: 'GET', url: '**site-features**' } ).as(
				'getSiteFeatures'
			);
			cy.intercept( { method: 'POST', url: '**site-features**' } ).as(
				'setSiteFeatures'
			);
			cy.intercept( { method: 'POST', url: '**complete**' } ).as(
				'completeFlow'
			);

			// Click `learn more` circle i button to open panel
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button',
				{ timeout: 30000 }
			)
				.should( 'exist' )
				.click();

			// check that the `1-1 expert` button is in place
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__sidebar > div > div > div > div.nfd-onboarding-sidebar-learn-more__get-started-welcome > div.nfd-onboarding-sidebar-learn-more--help-panel__links > button.components-button.nfd-onboarding-button--blue.is-primary',
				{ timeout: 30000 }
			).should( 'exist' );

			// check that the `hire our team` button is in place
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__sidebar > div > div > div > div.nfd-onboarding-sidebar-learn-more__get-started-welcome > div.nfd-onboarding-sidebar-learn-more--help-panel__links > button.components-button.nfd-onboarding-button--white'
			).should( 'exist' );

			// check that the `tech support` link exists
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__sidebar > div > div > div > div.nfd-onboarding-sidebar-learn-more__get-started-welcome > div.nfd-onboarding-sidebar-learn-more--help-panel__links > a'
			).should( 'exist' );

			// click the `learn more` circle i button again to close panel.
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
			).click();

			// click the learn more cirle i button again to open panel
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
			).click();

			// click the panel x button to close the panel
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button'
			).click();

			// click `Next` button
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button'
			).click();

			// Click `Back` button
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_back.is-secondary'
			).click();

			// Click start setup button
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div > button'
			).click();

			// Click radio `never used it`
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div > div.animate__fade-in--disabled > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.components-radio-control > div > div > div:nth-child(1) > label'
			).click();

			// click radio `used it some`
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div > div.animate__fade-in--disabled > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.components-radio-control > div > div > div:nth-child(2) > label'
			).click();

			// click radio `I'm an expert`
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div > div.animate__fade-in--disabled > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.components-radio-control > div > div > div:nth-child(3) > label'
			).click();

			// Check that need help link exists
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div > div.nfd-card-need-help-tag > a'
			).should( 'exist' );

			// click `continue setup` button
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div > button'
			)
				.should( 'exist' )
				.click();

			// click first category
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div.animate__fade-in--disabled > div.nfd-setup-secondary-categories > div.subCategoriesSection > div:nth-child(1)',
				{ timeout: 30000 }
			)
				.should( 'exist' )
				.click();

			// select last category
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div.animate__fade-in--disabled > div.nfd-setup-secondary-categories > div.subCategoriesSection > div:nth-child(10)'
			).click();

			// click input
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div.animate__fade-in--disabled > div.nfd-setup-secondary-categories > div.nfd-setup-primary-custom > input'
			).click();

			// type `hello`
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div.animate__fade-in--disabled > div.nfd-setup-secondary-categories > div.nfd-setup-primary-custom > input'
			).type( 'Hello' );

			// deselect last category
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > div.animate__fade-in--disabled > div.nfd-setup-secondary-categories > div.subCategoriesSection > div:nth-child(10)'
			).click();

			// click `continue setup` button
			cy.get(
				'#nfd-onboarding > div > div.nfd-interface-interface-skeleton__editor > div.nfd-interface-interface-skeleton__body > div.nfd-interface-interface-skeleton__content > main > div > div > div > button'
			)
				.should( 'exist' )
				.click();
		}
	} );
} );
