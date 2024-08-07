describe( 'Pages & Posts', { testIsolation: true }, function () {

	beforeEach( () => {
		cy.visit(
			'/wp-admin/admin.php?page=' +
				Cypress.env( 'pluginId' ) +
				'#/pages-and-posts',
			{
				onLoad() {
					cy.window().then( ( win ) => {
						win.NewfoldRuntime.isYithBookingActive = true;
						win.NewfoldRuntime.isWoocommerceActive = true;
					} );
				},
			}
		);
	} );

	it( 'Is Accessible', () => {
		cy.injectAxe();
		cy.wait( 100 );
		cy.checkA11y( '.wppbh-app-body' );
	} );

	it( 'Pages & Posts Exists', () => {
		cy.get( '.wppbh-app-pagesAndPosts-page' )
			.contains( 'Pages & Posts' )
			.scrollIntoView()
			.should( 'be.visible' );
	} );

	it( 'Site Pages Exists', () => {
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
		cy.get( '.wppbh-app-bookings' )
			.findByText( 'Bookings & Appointments' )
			.should( 'exist' );
		cy.get( '.wppbh-app-bookings' )
			.find(
				'a[href="edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1"]'
			)
			.first()
			.should( 'exist' );

		cy.get( '.wppbh-app-bookings' )
			.find(
				'a[href="edit.php?post_type=yith_booking&yith-plugin-fw-panel-skip-redirect=1"] Button'
			)
			.last()
			.should( 'exist' );
	} );

	it( 'Products Exists', () => {
		cy.get( '.wppbh-app-products' )
			.findByText( 'Products' )
			.should( 'exist' );
		cy.get( '.wppbh-app-products' )
			.find( 'a[href="edit.php?post_type=product"]' )
			.should( 'exist' );

		cy.get( '.wppbh-app-products' )
			.find( 'a[href="post-new.php?post_type=product"] Button' )
			.should( 'exist' );
	} );

	it( 'Products and Booking does not load if Yith and Woo are not active', () => {
		// clears edited NewfoldRuntime values
		cy.reload();
		cy.findByText( 'Products' ).should( 'not.exist' );
		cy.findByText( 'Bookings & Appointments' ).should( 'not.exist' );
	});
} );
