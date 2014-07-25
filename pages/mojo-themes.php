<div class="wrap">
	<h2><?php echo apply_filters( 'mm_before_page_title', "" ); ?> MOJO Marketplace - Themes <a class="add-new-h2" target="_blank" href="<?php echo mm_build_link( 'http://mojomarketplace.com/themes/wordpress', array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'browse_all_themes_button' ), 'browse_all_themes' ); ?>">Browse All Themes &rarr;</a></h2>

	<?php
	$api_args = array();
	$api_query = array();
	
	$accepted_categories = array(
		'popular',
		'recent',
		'responsive',
		'business',
		'ecommerce',
		'photography',
		'real-estate',
		'restaurant'
	);
	$accepted_categories = array_unique( apply_filters( 'mm_themes_accepted_categories', $accepted_categories ) );

	if( isset( $_GET['items'] )  && in_array( $_GET['items'], $accepted_categories ) ) {
		$api_args['mojo-items'] = $_GET['items'];
	} else {
		$api_args['mojo-items'] = $accepted_categories[0];
	}

	global $wp_version;
	if( version_compare( $wp_version, '3.9.9' ) >= 0 ) {
		echo '<div class="wp-filter theme-navigation">';
		echo '<ul class="wp-filter-links">';
		foreach ( $accepted_categories as $category ) {
			if( $api_args['mojo-items'] == $category ) {
				$current = 'current';
			} else {
				$current = '';
			}
			echo '<li>';
			echo '<a data-sort="' . $category . '" class="wp-filter-link theme-section ' . $current . '" href="admin.php?page=mojo-themes&amp;items=' . $category . '" style="text-decoration: none;">' . mm_slug_to_title( $category ). '</a>';
			echo '</li>';
		}
		echo '| <a  class="theme-section wp-filter-link" href="admin.php?page=mojo-services">Services</a>';
		echo '</div>';
	} else {
		echo '<div class="theme-navigation">';
		foreach ( $accepted_categories as $category ) {
			if( $api_args['mojo-items'] == $category ) {
				$current = 'current';
			} else {
				$current = '';
			}
			echo '<a data-sort="' . $category . '" class="theme-section ' . $current . '" href="admin.php?page=mojo-themes&amp;items=' . $category . '" style="text-decoration: none;">' . mm_slug_to_title( $category ). '</a>';
			
		}
		echo '| <a  class="theme-section" href="admin.php?page=mojo-services">Services</a>';
		echo '</div>';
	}
	?>
	<div class='themes theme-browser'>
	<?php

	if( isset( $_GET['seller'] ) ) {
		$api_query['seller'] = esc_attr( $_GET['seller'] );
	}
	
	if( in_array( $api_args['mojo-items'], array( 'recent', 'popular' ) ) ) {
		$request = mm_api( $api_args, $api_query );
	} else {
		//switch API to category_items
		$cat_args = array(
			'mojo-platform' 	=> 'wordpress',
			'mojo-type' 		=> $api_args['mojo-items'],
			'mojo-items' 		=> 'category_items'
		);
		$request = mm_api( $cat_args );
	}
	

	if( is_wp_error( $request ) ) {
		echo "<div class='error'><p>Unable to fetch themes. The API may be down. Please try again later.</p></div>";
	} else {
		$items = json_decode( $request['body'] );
		
		foreach ( $items as $item ) {
			$item->name = apply_filters( 'mm_item_name', $item->name );
			if( $wp_version < '3.9' ) {
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
			} else {
				?>
				<div class="theme" tabindex="0" aria-describedby="responsive-action responsive-name">
			
					<div class="theme-screenshot">
						<a href="admin.php?page=mojo-theme-preview&amp;id=<?php echo $item->id; ?>&amp;items=<?php echo $api_args['mojo-items']; ?>">
							<img class="mojo-thumbnail" alt="<?php echo $item->name; ?>" src="<?php echo $item->images->preview_url; ?>">
						</a>
					</div>
			
					<div class="theme-author">By <a target="_blank" href="<?php echo mm_build_link( $item->seller_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_seller_link' ) ); ?>"><?php echo $item->seller_name; ?></a></div>
					<h3 class="theme-name"><?php echo $item->name; ?></h3>

					<div class="mojo-theme-actions">
						<form class="buy_now" method="POST" target="_blank" action="<?php echo mm_build_link( "https://www.mojomarketplace.com/cart", array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_buy_now_button' ) ); ?>" class="buy_now <?php echo 'item_' . $api_args['mojo-items'] . '_buy_now_' . mm_title_to_slug( $item->name ) ;?>">
						<input type="hidden" name="data[CartItem][item_id]" value="<?php echo $item->id; ?>"/>
						<input class="mm-btn-primary" type="submit" value="Buy Now"/>
						</form>
							
						<a href="admin.php?page=mojo-theme-preview&amp;id=<?php echo $item->id; ?>&amp;items=<?php echo $api_args['mojo-items']; ?>" class="button button-secondary install-theme-preview">Preview</a>
						<div class="price">$<?php echo $item->prices->single_domain_license; ?></div>
					</div>
				</div>
				<?php
			}
		}
	}
	?>
	</div>
</div>