<?php
$request_url = 'http://www.mojomarketplace.com/api/v2/items';
$query = http_build_query( array( 'type' => 'plugins', 'category' => 'wordpress' ) );
$request_url .= '?' . $query;
$key = md5( $request_url );
if ( false === ( $transient = get_transient( 'mm_api_calls' ) ) || ! isset( $transient[ $key ] ) ) {
	$transient[ $key ] = wp_remote_get( $request_url );
	if ( ! is_wp_error( $transient[ $key ] ) ) {
		set_transient( 'mm_api_calls', $transient, DAY_IN_SECONDS );
	}
}
$plugins = $transient[ $key ];
?>
<div class="wrap">
	<h2><?php echo apply_filters( 'mm_before_page_title', "" ); ?> MOJO Marketplace - Plugins <a class="add-new-h2" target="_blank" href="<?php echo mm_build_link( 'https://www.mojomarketplace.com/plugins/wordpress', array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'browse_all_plugins_button' ), 'browse_all_plugins' ); ?>">Browse All Plugins &rarr;</a></h2>
<?php
if ( ! isset( $transient[ $key ] ) ) {
	echo "<div class='error'><p>Unable to fetch plugins. The API may be down. Please try again later.</p></div>";
} else {
	?>
	<div class="plugins plugin-browser">
	<?php
	$items = json_decode( $plugins['body'] );
	$items = $items->items;
	foreach ( $items as $item ) {
		$item->name = apply_filters( 'mm_item_name', $item->name );
		?>
		<div class="plugin" tabindex="0">
			<div class="plugin-screenshot">
				<a target="_blank" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_image_click' ) ); ?>">
					<img class="mojo-thumbnail" alt="<?php esc_attr_e( $item->name ); ?>" src="<?php echo esc_url( $item->images->preview_url ); ?>">
				</a>
			</div>
			<h3 class="plugin-name"><?php esc_html_e( $item->name ); ?></h3>
			<div class="mojo-plugin-actions">
				<form class="buy_now" method="POST" target="_blank" action="<?php echo mm_build_link( "https://www.mojomarketplace.com/cart", array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_buy_now_button' ) ); ?>" class="buy_now <?php echo 'item_' . $api_args['mojo-items'] . '_buy_now_' . mm_title_to_slug( $item->name ) ;?>">
					<input type="hidden" name="data[CartItem][item_id]" value="<?php esc_attr_e( $item->id ); ?>"/>
					<input class="mm-btn-primary" type="submit" value="Buy Now"/>
				</form>

				<a target="_blank" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_details_button' ) ); ?>" class="button button-secondary">Details</a>
				<div class="price">$<?php esc_html_e( $item->prices->single_domain_license ); ?></div>
			</div>
		</div>
		<?php
	}
}
?>
	</div>
</div>