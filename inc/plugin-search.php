<?php

function mm_add_plugin_search_patterns( $patterns ) {
	$patterns['/woo/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/commerce/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/shop/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/store/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/checkout/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/credit/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/sell/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/analytics/i'] = array( 'name' => 'Google Analytics', 'url' => 'https://www.mojomarketplace.com/item/add-google-analytics-to-your-wordpress-site' );
	$patterns['/stats/i'] = array( 'name' => 'Google Analytics', 'url' => 'https://www.mojomarketplace.com/item/add-google-analytics-to-your-wordpress-site' );
	$patterns['/sitemap/i'] = array( 'name' => 'Sitemap', 'url' => 'https://www.mojomarketplace.com/item/add-an-seo-friendly-sitemap-to-your-wordpress-site' );
	$patterns['/seo/i'] = array( 'name' => 'SEO Sitemap', 'url' => 'https://www.mojomarketplace.com/item/add-an-seo-friendly-sitemap-to-your-wordpress-site' );
	$patterns['/buddypress/i'] = array( 'name' => 'BuddyPress', 'url' => 'https://www.mojomarketplace.com/item/install-and-setup-buddypress-wordpress-plugin' );
	$patterns['/bbpress/i'] = array( 'name' => 'bbPress', 'url' => 'https://www.mojomarketplace.com/item/install-and-setup-bbpress-wordpress-plugin' );
	$patterns['/bb press/i'] = array( 'name' => 'bbPress', 'url' => 'https://www.mojomarketplace.com/item/install-and-setup-bbpress-wordpress-plugin' );
	$patterns['/contact/i'] = array( 'name' => 'Contact Forms', 'url' => 'https://www.mojomarketplace.com/item/create-a-wordpress-contact-form' );
	$patterns['/form/i'] = array( 'name' => 'Contact Forms', 'url' => 'https://www.mojomarketplace.com/item/create-a-wordpress-contact-form' );
	$patterns['/map/i'] = array( 'name' => 'Google Maps', 'url' => 'https://www.mojomarketplace.com/item/add-a-google-map-to-my-wordpress-site' );
	$patterns['/locat/i'] = array( 'name' => 'Google Maps', 'url' => 'https://www.mojomarketplace.com/item/add-a-google-map-to-my-wordpress-site' );
	$patterns['/secur/i'] = array( 'name' => 'Securing Your WordPress Site', 'url' => 'https://www.mojomarketplace.com/item/make-my-wordpress-site-secure' );
	$patterns['/hack/i'] = array( 'name' => 'Securing Your WordPress Site', 'url' => 'https://www.mojomarketplace.com/item/make-my-wordpress-site-secure' );
	$patterns['/fence/i'] = array( 'name' => 'Securing Your WordPress Site', 'url' => 'https://www.mojomarketplace.com/item/make-my-wordpress-site-secure' );
	return $patterns;
}
add_filter( 'mm_plugin_search_patterns', 'mm_add_plugin_search_patterns' );

function mm_check_plugin_search_value( $search ) {
	$patterns = apply_filters( 'mm_plugin_search_patterns', array() );
	foreach ( $patterns as $pattern => $plugin ) {
		if( preg_match( $pattern, $search ) ) {
			return $plugin;
		}
	}
	return false;
}

function mm_plugin_search_notice() {
	if( isset( $_GET['s'] )  && $plugin = mm_check_plugin_search_value( $_GET['s'] ) ) {
		$link = mm_build_link( $plugin['url'], array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'plugin_search' ) );
		?>
		<div class="updated">
			<p>Did you know? MOJO Marketplace has a <a target="_blank" href="<?php echo $link; ?>">service</a> for <a target="_blank" href="<?php echo $link; ?>"><?php echo $plugin['name']; ?></a></p>
		</div>
		<?php
	}
}

function mm_plugin_search_offer() {
	if( isset( $_GET['s'] ) ) {
		add_action( 'admin_notices', 'mm_plugin_search_notice' );
	}
}
add_action( 'admin_head-plugin-install.php', 'mm_plugin_search_offer' );