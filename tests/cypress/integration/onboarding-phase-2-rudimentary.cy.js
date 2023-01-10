describe( 'Onboarding Phase 2 Flow', () => {
	before( () => {
		cy.setCustomerData();
		cy.exec( 'npx wp-env run cli wp option set mm_brand BlueHost' );
		cy.exec( 'npx wp-env run cli wp theme activate yith-wonder' );
		cy.visit( 'wp-admin/index.php?page=nfd-onboarding&flow=ecommerce' );
		cy.wait( 5000 );
	} );

	it( 'Tests Onboarding Phase 2 Flow', () => {
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
		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg > path'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.nfd-onboarding-sidebar-learn-more__get-started-welcome > div.nfd-onboarding-sidebar-learn-more--help-panel__links > button.components-button.nfd-onboarding-button--blue.is-primary'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.nfd-onboarding-sidebar-learn-more__get-started-welcome > div.nfd-onboarding-sidebar-learn-more--help-panel__links > button.components-button.nfd-onboarding-button--white'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.nfd-onboarding-sidebar-learn-more__get-started-welcome > div.nfd-onboarding-sidebar-learn-more--help-panel__links > a'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_back.is-secondary > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(1) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(2) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(3) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.nfd-card-need-help-tag > a'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(1)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(2)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(3)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(4)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(5)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(6)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(7)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(8)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(9)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(10)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-primary-second > div > input'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-primary-second > div > input'
		).type( 'Hello' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.nfd-setup-secondary-categories > div.subCategoriesSection > span:nth-child(10)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.wait( 40000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > button'
		).click();

		cy.wait( 30000 );
		cy.wait( '@getSettings', { timeout: 10000 } );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(1) > select'
		).select( 'India' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(1) > select'
		).type( 'IN' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(2) > input[type=text]'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(2) > input[type=text]'
		).type( 'Testing' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(3) > div:nth-child(1) > input[type=text]'
		).type( 'Testing' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(3) > div:nth-child(2) > select'
		).select( 'Karnataka' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(3) > div:nth-child(3) > input[type=text]'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(3) > div:nth-child(3) > input[type=text]'
		).type( '560004' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(4) > input[type=email]'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(4) > input[type=email]'
		).type( 'arunshenoy99@gmail.com' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > div.store-address-form > div:nth-child(5) > select'
		).select( 'Indian rupee (INR) (₹)' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > form > button'
		).click();

		cy.wait( '@getSettings', { timeout: 10000 } );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.radio-control-tax-step.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(1) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.radio-control-tax-step.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(2) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.radio-control-tax-step.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(3) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg > path'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > ul > li:nth-child(2) > a'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > ul > li:nth-child(1) > a'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > ul > li:nth-child(3) > a > span'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > ul > li:nth-child(2) > a'
		).click();
		cy.wait( 5000 );

		cy.wait( '@getSettings', { timeout: 10000 } );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.radio-control-tax-step.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(2) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.components-base-control.nfd-onboarding-experience-step-tabs.components-radio-control__input.radio-control-tax-step.components-radio-control.css-qy3gpb.ej5x27r4 > div > div > div:nth-child(1) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > button'
		).click();

		cy.get( 'input[type="checkbox"]' ).check();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.nfd-product-step-options > div:nth-child(4) > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.step-product-numbers > div > div > div > div:nth-child(2) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.step-product-numbers > div > div > div > div:nth-child(1) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.step-product-numbers > div > div > div > div:nth-child(3) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.step-product-numbers > div > div > div > div:nth-child(4) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > div.step-product-numbers > div > div > div > div:nth-child(5) > label'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.wait( '@getSettings', { timeout: 10000 } );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > button'
		).click( { timeout: 10000, force: true } );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.basic-info > div.basic-info-form > div.basic-info-form__left > div:nth-child(1) > label > textarea'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.basic-info > div.basic-info-form > div.basic-info-form__left > div:nth-child(1) > label > textarea'
		).type( 'Onboarding v1' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.basic-info > div.basic-info-form > div.basic-info-form__left > div:nth-child(2) > label > textarea'
		).type( 'Generating tests for Onboarding v1' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.basic-info > div.basic-info-form > div.basic-info-form__left > div:nth-child(3) > div > div'
		).click();

		cy.get( '#facebook' ).click();

		cy.get( '#twitter' ).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.basic-info > div.basic-info-form > div.basic-info-form__left > div:nth-child(3) > div > div > div.social-form__top-row_icon.social-form__top-row_icon_opened'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.basic-info > div.basic-info-form > div.basic-info-form__right > div.image-uploader > div > div.image-uploader_window-reset > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary'
		).click();

		cy.wait( 40000 );

		cy.wait( '@getPatterns' );
		cy.wait( '@getVariations' );
		cy.wait( 2500 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.theme-styles-menu__list > div:nth-child(2) > div.theme-styles-menu__list__item__live-preview-container > div.theme-styles-menu__list__item__live-preview-container__overlay > svg'
		).click();

		cy.wait( 10000 );
		cy.wait( '@getPatterns', { timeout: 10000 } );
		cy.wait( '@getVariations' );
		cy.wait( 10000 );
		// Handle ResizeObserver loop limit exceeded warning in block preview due to fast resizing on cypress
		cy.on( 'uncaught:exception', ( err, runnable ) => {
			return false;
		} );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
		).click();

		cy.wait( 10000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get( '#inspector-checkbox-control-0' ).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary > svg'
		).click();

		cy.wait( 10000 );
		cy.wait( '@getPatterns', { timeout: 10000 } );
		cy.wait( '@getVariations' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(2)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(3)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(4) > div.color-palette__name'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(5) > div.color-palette__name'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(6)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(7) > div.color-palette__name'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(8) > div.color-palette__name'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(9) > div.color-palette__name'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(10)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(11)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(12) > div.color-palette__name'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > div.custom-palette__top > div.custom-palette__top-icon'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > div.custom-palette__below.custom-palette_acc_opened > div:nth-child(1)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > span > div > div > div.components-color-picker.css-1q2ctyk.ez9hsf41 > div.react-colorful > div.react-colorful__saturation > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > span > div > div > div.custom-palette__picker-close-icon'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > div.custom-palette__below.custom-palette_acc_opened > div:nth-child(2)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > span > div > div > div.components-color-picker.css-1q2ctyk.ez9hsf41 > div.react-colorful > div.react-colorful__saturation > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > span > div > div > div.custom-palette__picker-close-icon'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > div.custom-palette__below.custom-palette_acc_opened > div:nth-child(3)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > span > div > div > div.components-color-picker.css-1q2ctyk.ez9hsf41 > div.react-colorful > div.react-colorful__saturation > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div.custom-palette > span > div > div > div.custom-palette__picker-close-icon'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary'
		).click();

		cy.wait( 10000 );
		cy.wait( '@getPatterns', { timeout: 10000 } );
		cy.wait( '@getVariations' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(2)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(3)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(4)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(5) > div.font-palette__name > span:nth-child(2)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(6)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(7)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(9)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(8)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div:nth-child(11)'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > button'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > ul > li:nth-child(4) > a'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > ul > li:nth-child(3) > a'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary > svg'
		).click();

		cy.wait( 10000 );
		cy.wait( '@getPatterns', { timeout: 10000 } );
		cy.wait( '@getVariations' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div > div:nth-child(2) > div.theme-header-menu-preview--drawer__list__item__live-preview-container > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div > div:nth-child(3) > div.theme-header-menu-preview--drawer__list__item__live-preview-container > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__drawer > div.nfd-onboarding-drawer__panel.is-open > div > div.nfd-onboarding-drawer__panel-scroll-container > div > div > div > div > div:nth-child(4) > div.theme-header-menu-preview--drawer__list__item__live-preview-container > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary'
		).click();

		cy.wait( 10000 );
		cy.wait( '@getPatterns', { timeout: 10000 } );
		cy.wait( '@getVariations' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.homepage_preview__list > div:nth-child(3) > div.homepage_preview__list__item__live-preview-container > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.homepage_preview__list > div:nth-child(2) > div.homepage_preview__list__item__live-preview-container > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.homepage_preview__list > div:nth-child(4) > div.homepage_preview__list__item__live-preview-container > div > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg > path'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary > svg'
		).click();

		cy.wait( 10000 );
		cy.wait( '@getPatterns', { timeout: 10000 } );
		cy.wait( '@getVariations' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(2) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(2) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(4) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(4) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(3) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(3) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div.site-pages__list > div:nth-child(5) > div.site-pages__list__item__information > div > div.site-pages__list__item__information__title-question__question > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg > path'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary'
		).click();

		cy.wait( 5000 );
		cy.wait( '@getSiteFeatures', { timeout: 10000 } );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(2) > div:nth-child(3) > div > div > div.components-base-control.components-checkbox-control.checkbox-item-checkbox.css-qy3gpb.ej5x27r4 > div'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(1) > div:nth-child(1) > div > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(1) > div:nth-child(1) > div.checkbox-item.checkbox-item--selected.checkbox-item--shown > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(2) > div:nth-child(1) > div > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(1) > div:nth-child(3) > div > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(2) > div:nth-child(4) > div > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(2) > div:nth-child(4) > div.checkbox-item.checkbox-item--selected.checkbox-item--shown > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(2) > div:nth-child(5) > div > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div.checkbox-list > div:nth-child(2) > div:nth-child(5) > div.checkbox-item.checkbox-item--selected.checkbox-item--shown > div > div.checkbox-item__contents > div.checkbox-item__contents-help > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > div > div > button.components-button.navigation-buttons.navigation-buttons_next.is-primary'
		).click();

		cy.wait( '@completeFlow' );
		cy.wait( '@setSiteFeatures' );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__header > div > div.nfd-onboarding-header__end > button'
		).click();

		cy.wait( 4000 );

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__sidebar > div > div > div > div.components-panel__header > div > button > svg'
		).click();

		cy.get(
			'#nfd-onboarding > div > div.interface-interface-skeleton__editor > div.interface-interface-skeleton__body > div.interface-interface-skeleton__content > main > div > div > div > button'
		).click();
	} );

	after( () => {
		// Reset this data so that it does not affect the behaviour of other tests.
		cy.clearCustomerData();
	} );
} );
