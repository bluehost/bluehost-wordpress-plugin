<div class="wrap">
	<h2>MOJO Marketplace - Themes <a class="add-new-h2" target="_blank" href="<?php echo mm_build_link( 'http://mojomarketplace.com/themes/wordpress', array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'browse_all_themes_button' ) ); ?>">Browse All Themes &rarr;</a></h2>
		<a href="admin.php?page=mojo-themes&items=popular">Popular</a> | <a href="admin.php?page=mojo-themes&items=recent">Recent</a>
		<div class="clear"></div>
	<?php
	$api_args = array();
	$api_query = array();
	if( isset( $_GET['items'] ) && $_GET['items'] == 'recent' ) {
		$api_args['mojo-items'] = 'recent';
	} else {
		$api_args['mojo-items'] = 'popular';
	}
	if( isset( $_GET['seller'] ) ) {
		$api_query['seller'] = esc_attr( $_GET['seller'] );
	}

	$request = mm_api( $api_args, $api_query );

	if( is_wp_error( $request ) ) {
		echo "<div class='error'><p>Unable to fetch themes. Check your server allows use of wp_remote_get.</p></div>";
	} else {
		$items = json_decode( $request['body'] );
		foreach ( $items as $item ) {
			$item->name = apply_filters( 'mm_item_name', $item->name );
		?>
		<div class="available-theme installable-theme">
			<a title="Details : <?php echo $item->name; ?>" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_thumbnail', 'TB_iframe' => 'true', 'width' => '1200', 'height' => '800' ) ); ?>" class="screenshot install-theme-preview thickbox" style="height: 180px;">
				<img class="mojo-thumbnail" src="<?php echo $item->images->thumbnail_url; ?>">
			</a>
			<h3><?php echo $item->name; ?></h3>
			<div class="theme-author">By <a target="_blank" href="<?php echo mm_build_link( $item->seller_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_seller_link' ) ); ?>"><?php echo $item->seller_name; ?></a></div>
			<div class="action-links">
				<ul>
					<li>
						<form method="POST" target="_blank" action="<?php echo mm_build_link( "https://www.mojomarketplace.com/cart", array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_buy_now_button' ) ); ?>">
						<input type="hidden" name="data[CartItem][item_id]" value="<?php echo $item->id; ?>"/>
						<input class="mm-btn-primary" type="submit" value="Buy Now"/>
						</form>
					</li>
					<li>
						<a target="_blank" title="Demo : <?php echo $item->name; ?>" href="<?php echo mm_build_link( $item->demo_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_view_demo_link', 'TB_iframe' => 'true', 'width' => '1200', 'height' => '800' ) ); ?>" class="install-theme-preview thickbox">View Demo</a>
					</li>
					<li>
						<a target="_blank" title="Details : <?php echo $item->name; ?>" href="<?php echo mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_view_details_link', 'TB_iframe' => 'true', 'width' => '1200', 'height' => '800'  ) ); ?>" class="thickbox">Details</a>
					</li>
					<li><div class="price">$<?php echo $item->prices->single_domain_license; ?></div></li>
				</ul>
			</div>
			
		</div>
		<?php
		}
	}
	?>
</div>