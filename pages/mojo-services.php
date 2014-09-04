<?php
$api_args = array(
	'mojo-platform' 	=> 'wordpress',
	'mojo-type' 		=> '',
	'mojo-items' 		=> 'popular-services'
);
$result = mm_api( $api_args, array( 'count' => '30' ) );
?>
<div class="wrap">
	<h2><?php echo apply_filters( 'mm_before_page_title', "" ); ?> MOJO Marketplace - Services <a class="add-new-h2" target="_blank" href="<?php echo mm_build_link( 'http://mojomarketplace.com/services/all/wordpress', array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'browse_all_services_button' ), 'browse_all_services' ); ?>">Browse All Services &rarr;</a></h2>
<?php
if( is_wp_error( $result ) ) {
	echo "<div class='error'><p>Unable to fetch services. The API may be down. Please try again later.</p></div>";
} else {
	?>
	<div class="services service-browser">
	<?php
	$items = json_decode( $result['body'] );

	foreach ( $items as $item ) {
		$item->name = apply_filters( 'mm_item_name', $item->name );
		?>
		<div class="service" tabindex="0">
			<div class="service-screenshot">
				<a target="_blank" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_image_click' ) ); ?>">
					<img class="mojo-thumbnail" alt="<?php esc_attr_e( $item->name ); ?>" src="<?php echo esc_url( $item->images->preview_url ); ?>">
				</a>
			</div>
			<h3 class="service-name"><?php esc_html_e( $item->name ); ?></h3>
			<div class="mojo-service-actions">
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