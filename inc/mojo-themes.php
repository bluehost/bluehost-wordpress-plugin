<?php

/**
 * Generate a purchase URL for a Mojo product.
 *
 * @param string $id Product ID.
 *
 * @return string
 */
function bluehost_generate_mojo_buy_url( $id ) {
	return mojo_build_link(
		add_query_arg( array( 'item_id' => $id ), 'https://www.mojomarketplace.com/cart' ),
		array(
			'utm_medium'  => 'plugin_admin',
			'utm_content' => 'buy_now_preview',
		)
	);
}

/**
 * Add theme buttons.
 */
function bluehost_add_theme_button() {
	if ( ! isset( $_GET['page'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		?>
		<script type="text/javascript">
			jQuery(document).ready(function ($) {
				$('.page-title-action').html('WordPress.org Themes');
				$('.page-title-action').before('<a class="add-new-h2" href="admin.php?page=bluehost#/marketplace/themes">Premium Themes</a>');
				$('.page-title-action:nth-of-type(2)').after('<a class="add-new-h2" href="theme-install.php?upload">Upload</a>');
			});
		</script>
		<?php
	}
}

add_action( 'admin_head-themes.php', 'bluehost_add_theme_button' );

/**
 * Add premium link.
 */
function bluehost_add_premium_link() {
	?>
	<script type="text/javascript">
		jQuery(document).ready(function ($) {
			$('.wp-filter .filter-links li:last-of-type').after('<li><a style="text-decoration: none;" onclick="location.href=\'admin.php?page=bluehost#/marketplace/themes\'">Premium</a></li>');
		});
	</script>
	<?php
}

add_action( 'admin_head-theme-install.php', 'bluehost_add_premium_link' );

/**
 * Add theme page.
 */
function bluehost_add_theme_page() {
	add_theme_page( 'Premium Themes', 'Premium Themes', 'install_themes', 'bluehost-themes', '__return_false' );
}

add_action( 'admin_menu', 'bluehost_add_theme_page' );

add_action(
	'current_screen',
	function ( WP_Screen $screen ) {
		if ( 'appearance_page_bluehost-themes' === $screen->id ) {
			wp_safe_redirect( 'admin.php?page=bluehost#/marketplace/themes' );
			exit;
		}
	}
);

// Help the theme authors with the capital P ;)
add_filter( 'mm_item_name', 'capital_P_dangit' );
