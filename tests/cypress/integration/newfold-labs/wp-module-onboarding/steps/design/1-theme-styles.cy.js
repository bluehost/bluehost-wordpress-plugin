// <reference types="Cypress" />

describe( 'Theme Styles Menu and Preview', function () {
	before( () => {
		// cy.setCustomerData();
		cy.exec( 'npx wp-env run cli wp theme activate yith-wonder' );
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/theme-styles/menu'
		);
		cy.wait( 5000 );
		// cy.injectAxe();
	} );

	it( 'Checks if Drawer opened', () => {
		cy.get( '.nfd-onboarding-drawer__panel-inner' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Checks Active Link in the drawer is Theme Styles', () => {
		cy.get( '.nfd-onboarding-drawer__panel-back' )
			.should( 'be.visible' )
			.should( 'have.text', 'Onboarding Menu' );
		cy.get( ':nth-child(1) > .nfd-onboarding-drawer__panel-menu-link' )
			.should( 'have.class', 'active' )
			.should( 'have.text', 'Theme Styles' )
			.and( 'have.attr', 'href' )
			.and( 'include', '#/wp-setup/step/design/theme-styles/menu' );
	} );

	it( 'Closes the Drawer and checks if closed', () => {
		cy.get( '.nfd-onboarding-drawer__toggle > .components-button' ).click();
		cy.get( '.nfd-onboarding-drawer__panel-inner' )
			.scrollIntoView()
			.should( 'not.be.visible' );
	} );

	it( 'Check to make sure sidebar opens, content is in place and close sidebar with X', () => {
		cy.get( '.nfd-onboarding-header__end > .components-button' )
			.click()
			.and( 'have.class', 'is-pressed' );
		cy.get(
			'.nfd-onboarding-sidebar-learn-more__design-theme-styles-menu'
		).should( 'be.visible' );
		cy.get( '.nfd-onboarding-sidebar-learn-more__header > button' ).click();
		cy.get( '.components-panel__header' ).should( 'not.exist' );
	} );

	it( 'Checks if Heading and Subheading are present', () => {
		cy.get( '.nfd-main-heading__title' ).should( 'be.visible' );
		cy.get( '.nfd-main-heading__subtitle' ).should( 'be.visible' );
	} );

	it( 'Check if Default Theme variations exists in Menu', () => {
		let previewCount = 0;
		const className = '.theme-styles-menu__list__item';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className.concat( '__title-bar' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			cy.get( className.concat( '__live-preview-container' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );

	it( 'Check if Theme is selected and switches to Preview page', () => {
		cy.get(
			':nth-child(2) > .theme-styles-menu__list__item__live-preview-container'
		)
			.scrollIntoView()
			.should( 'be.visible' )
			.click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/design/theme-styles/menu'
		);
		cy.get( ':nth-child(1) > .theme-styles-preview__title-bar' ).should(
			'be.visible'
		);
		cy.get( '.theme-styles-preview > div:nth-child(3)' ).should( 'be.visible' );
	} );

	it( 'Check if Theme List is Visible in the Drawer', () => {
		let previewCount = 0;
		const className = '.theme-styles-preview--drawer__list__item';
		const arr = cy.get( className );

		arr.each( () => {
			cy.get( className.concat( '__title-bar' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			cy.get( className.concat( '__live-preview-container' ) )
				.eq( previewCount )
				.scrollIntoView()
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );

	it( 'Check for the selected theme in Drawer', () => {
		cy.get( '.nfd-onboarding-drawer__panel-back' )
			.scrollIntoView()
			.should( 'be.visible' )
			.should( 'have.text', 'Design' );
		const className =
			':nth-child(2) > .theme-styles-preview--drawer__list__item__title-bar';
		cy.get( className );
		cy.get( className + ' > .live-preview-selected-check' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Check/uncheck Colors and Font Checkbox', () => {
		cy.get( '[type=checkbox]' ).click().should( 'be.checked' );
		cy.get( '[type=checkbox]' ).click().should( 'not.be.checked' );
	} );

	it( 'Check for selected Theme in preview when navigated back to Menu page', () => {
		cy.get( '.navigation-buttons_back' ).click();
		cy.url().should(
			'not.include',
			'#/wp-setup/step/design/theme-styles/preview'
		);
		const className =
			':nth-child(2) > .theme-styles-menu__list__item__title-bar';
		cy.get( className );
		cy.get( className + ' > .live-preview-selected-check' ).should(
			'be.visible'
		);
	} );

	// after(() => {
	//     cy.clearCustomerData();
	// });
} );
