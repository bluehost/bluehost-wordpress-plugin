describe( 'Pages & Posts', function () {
	let NewfoldRuntime;

	before( () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/pages&posts'
		);
		cy.window()
			.its( 'NewfoldRuntime' )
			.then( ( data ) => {
				NewfoldRuntime = data;
			} );
		cy.injectAxe();
	} );

	it( 'Pages & Posts Exists', () => {
		cy.get( '.wppbh-app-pagesAndPosts-page' )
			.contains( __( 'Pages & Posts', 'wp-plugin-bluehost' ) )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'site pages Exists', () => {
		cy.findByText( __( 'Site Pages', 'wp-plugin-bluehost' ) ).should(
			'exist'
		);
		cy.get( 'Card a[href="edit.php?post_type=page"]' ).click();
		cy.url().should( 'include', 'edit.php?post_type=page' );

		// Click on "Add New" button and verify action
		cy.get(
			'.sitePages a[href="post-new.php?post_type=page"] Button'
		).click();
		cy.url().should( 'include', 'post-new.php?post_type=page' );
	} );

	it( 'Blog posts Exists', () => {
		cy.findByText( __( 'Blog Posts', 'wp-plugin-bluehost' ) ).should(
			'exist'
		);
		cy.get( 'Card a[href="edit.php"]' ).click();
		cy.url().should( 'include', 'edit.php' );

		// Click on "Add New" button and verify action
		cy.get( 'Card a[href="post-new.php"] Button' ).click();
		cy.url().should( 'include', 'post-new.php' );
	} );

	it( 'Bookings & Appointments Exists', () => {
		if (
			NewfoldRuntime.isYithBookingActive &&
			NewfoldRuntime.isWoocommerceActive
		) {
			cy.findByText(
				__( 'Bookings & Appointments', 'wp-plugin-bluehost' )
			).should( 'exist' );
			cy.get(
				'Card a[href="edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1"]'
			).click();
			cy.url().should(
				'include',
				'edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1'
			);

			// Click on "Add New" button and verify action
			cy.get(
				'Card a[href="edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1"] Button'
			).click();
			cy.url().should(
				'include',
				'edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1'
			);
		} else {
			cy.findByText(
				__( 'Bookings & Appointments', 'wp-plugin-bluehost' )
			).should( 'not.exist' );
		}
	} );

	it( 'Products Exists', () => {
		if ( NewfoldRuntime.isWoocommerceActive ) {
			cy.findByText( __( 'Products', 'wp-plugin-bluehost' ) ).should(
				'exist'
			);
			cy.get( 'Card a[href="edit.php?post_type=product"]' ).click();
			cy.url().should( 'include', 'edit.php?post_type=product' );

			// Click on "Add New" button and verify action
			cy.get(
				'Card a[href="post-new.php?post_type=product"] Button'
			).click();
			cy.url().should( 'include', 'post-new.php?post_type=product' );
		} else {
			cy.findByText( __( 'Products', 'wp-plugin-bluehost' ) ).should(
				'not.exist'
			);
		}
	} );
} );
