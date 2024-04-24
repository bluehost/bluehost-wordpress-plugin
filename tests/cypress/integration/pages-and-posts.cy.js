describe( 'Pages & Posts', function () {
	let NewfoldRuntime;

	before( () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/pages-and-posts'
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
			.contains( 'Pages & Posts' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'site pages Exists', () => {
		cy.get( '.wppbh-app-site-page' )
			.findByText( 'Site Pages' )
			.should( 'exist' );
		cy.get( '.wppbh-app-site-page' )
			.find( 'a[href="edit.php?post_type=page"]' )
			.click();
		cy.url().should( 'include', 'edit.php?post_type=page' );
		cy.go( 'back' );

		cy.get( '.wppbh-app-site-page' )
			.find( 'a[href="post-new.php?post_type=page"] Button' )
			.click();
		cy.url().should( 'include', 'post-new.php?post_type=page' );
		cy.go( 'back' );
	} );

	it( 'Blog posts Exists', () => {
		cy.get( '.wppbh-app-blog-posts' )
			.findByText( 'Blog Posts' )
			.should( 'exist' );
		cy.get( '.wppbh-app-blog-posts' ).find( 'a[href="edit.php"]' ).click();
		cy.url().should( 'include', 'edit.php' );
		cy.go( 'back' );

		cy.get( '.wppbh-app-blog-posts' )
			.get( 'a[href="post-new.php"] Button' )
			.click();
		cy.url().should( 'include', 'post-new.php' );
		cy.go( 'back' );
	} );

	it( 'Bookings & Appointments Exists', () => {
		if (
			NewfoldRuntime.isYithBookingActive &&
			NewfoldRuntime.isWoocommerceActive
		) {
			cy.get( '.wppbh-app-bookings' )
				.findByText( 'Bookings & Appointments' )
				.should( 'exist' );
			cy.get( '.wppbh-app-bookings' )
				.find(
					'a[href="edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1"]'
				)
				.first()
				.click();
			cy.url().should(
				'include',
				'edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1'
			);
			cy.go( 'back' );

			cy.get( '.wppbh-app-bookings' )
				.find(
					'a[href="edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1"] Button'
				)
				.last()
				.click();
			cy.url().should(
				'include',
				'edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1'
			);
			cy.go( 'back' );
		} else {
			cy.findByText( 'Bookings & Appointments' ).should( 'not.exist' );
		}
	} );

	it( 'Products Exists', () => {
		if ( NewfoldRuntime.isWoocommerceActive ) {
			cy.get( '.wppbh-app-products' )
				.findByText( 'Products' )
				.should( 'exist' );
			cy.get( '.wppbh-app-products' )
				.find( 'a[href="edit.php?post_type=product"]' )
				.click();
			cy.url().should( 'include', 'edit.php?post_type=product' );
			cy.go( 'back' );

			cy.get( '.wppbh-app-products' )
				.find( 'a[href="post-new.php?post_type=product"] Button' )
				.click();
			cy.url().should( 'include', 'post-new.php?post_type=product' );
			cy.go( 'back' );
		} else {
			cy.findByText( 'Products' ).should( 'not.exist' );
		}
	} );
} );
