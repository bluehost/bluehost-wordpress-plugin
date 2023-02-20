describe( 'Header menu Page', function () {
	before( () => {
		// cy.exec('npx wp-env run cli wp theme activate yith-wonder');
		// cy.setCustomerData();
		cy.visit(
			'wp-admin/?page=nfd-onboarding&flow=ecommerce#/wp-setup/step/design/header-menu'
		);
		cy.wait( 10000 );
	} );

	it( 'Check to make sure drawer is opening and closing', () => {
		cy.get( '.nfd-onboarding-drawer__toggle' ).should( 'be.visible' );
		cy.get( '.theme-header-menu-preview--drawer' )
			.scrollIntoView()
			.should( 'be.visible' );
		cy.get( '.nfd-onboarding-drawer__toggle' ).click();
		cy.get( '.theme-header-menu-preview--drawer' )
			.scrollIntoView()
			.should( 'not.be.visible' );
		cy.get( '.nfd-onboarding-drawer__toggle' ).click();
	} );

	it( 'Check to make sure design button is visble', () => {
		cy.contains( 'button', 'Design' ).should( 'be.visible' );
	} );

	it( 'Check Learn more (i) drawer is opening and Technical support buttons are clickable', () => {
		cy.get( '.nfd-onboarding-sidebar-learn-more__menu-button' )
			.should( 'be.visible' )
			.click();
		cy.get( '.nfd-onboarding-sidebar-learn-more--support-link' ).should(
			'be.visible'
		);
		cy.contains( 'button', 'Hire Our Full-Service Creative Studio' ).should(
			'be.visible'
		);
	} );

	it( 'Check to make sure different design is selected', () => {
		let previewCount = 0;
		const classname = '.theme-header-menu-preview--drawer__list__item';
		const arr = cy.get( classname );
		arr.each( () => {
			cy.get( classname ).eq( previewCount ).click();
			cy.get( classname )
				.eq( previewCount )
				.find( classname.concat( '__title-bar--selected' ) )
				.should( 'be.visible' );
			previewCount += 1;
		} );
	} );

	it( 'Check navigation back button is visible and go one step back', () => {
		cy.get( '.navigation-buttons_back' ).should( 'be.visible' ).click();
		cy.wait( 3000 );
		cy.url().should( 'not.contain', '/wp-setup/step/design/header-menu' );
		cy.go( 'back' );
		cy.wait( 3000 );
	} );

	it( 'Check if Navigation Next button is visible and go one step next', () => {
		cy.get( '.navigation-buttons_next' ).should( 'be.visible' ).click();
		cy.wait( 1000 );
		cy.url().should( 'not.contain', '/wp-setup/step/design/header-menu' );
	} );

	// after(() => {
	//     cy.clearCustomerData();
	// });
} );
