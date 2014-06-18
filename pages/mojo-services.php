<?php
$wordpress_services = array(
	'53078bcc-bf48-44e3-b131-4a870a141528',
	'53078b6f-9af4-4c66-9ce7-77a00a140b28',
	'530697a6-92cc-4329-9cdd-21e40a140b28',
	'530788ba-c450-45eb-b154-47ce0a141528',
	'530782e3-1388-4e6a-a8ac-6f7b0a140b28',
	'532c8ae2-5c38-4636-8c69-15550a141528',
	'532c8ae2-5c38-4636-8c69-15550a141528',
	'53078511-1974-470c-8ed5-43500a141528',
	'530786ea-27b8-4f1b-bc94-46650a141528',
	'530783b3-d4d8-4823-ad1e-70310a140b28'
);
$api_args = array(
	'mojo-platform' 	=> 'all',
	'mojo-type' 		=> '',
	'mojo-items' 		=> 'popular-services'
);
$result = mm_api( $api_args, array( 'count' => '' ) );
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
		//prevent non wordpress services from showing until the api supports subcategories
		if( in_array( $item->id, $wordpress_services ) ) {
		?>
		<div class="service" tabindex="0">
			<div class="service-screenshot">
				<a target="_blank" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_image_click' ) ); ?>">
					<img class="mojo-thumbnail" alt="<?php echo $item->name; ?>" src="<?php echo $item->images->preview_url; ?>">
				</a>
			</div>
			<h3 class="service-name"><?php echo $item->name; ?></h3>
			<div class="mojo-service-actions">
				<form class="buy_now" method="POST" target="_blank" action="<?php echo mm_build_link( "https://www.mojomarketplace.com/cart", array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_buy_now_button' ) ); ?>" class="buy_now <?php echo 'item_' . $api_args['mojo-items'] . '_buy_now_' . mm_title_to_slug( $item->name ) ;?>">
					<input type="hidden" name="data[CartItem][item_id]" value="<?php echo $item->id; ?>"/>
					<input class="mm-btn-primary" type="submit" value="Buy Now"/>
				</form>

				<a target="_blank" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_details_button' ) ); ?>" class="button button-secondary">Details</a>
				<div class="price">$<?php echo $item->prices->single_domain_license; ?></div>
			</div>
		</div>
		<?php
		} else {
			echo $item->id;
		}
	}
}
?>
	</div>
</div>