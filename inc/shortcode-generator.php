<?php

function mm_add_button( $icons ) {
	$img = MM_BASE_URL . "img/mojo-icon-22.png";
	$id = 'mm_sg_container';
	$title = '';
	if( isset( $_SERVER['PHP_SELF'] ) && strpos( $_SERVER['PHP_SELF'], 'post.php' ) || 
		isset( $_SERVER['SCRIPT_NAME'] ) && strpos( $_SERVER['SCRIPT_NAME'], 'post.php' ) ) {
		$icons .= "<a class='thickbox button' title='" . $title . "' href='#TB_inline?width=640&inlineId=" . $id . "'><img style='position:relative; bottom: 2px;' src='" . $img . "' /> Shortcodes</a>";
	} 
	return $icons;
}
add_action( 'media_buttons_context', 'mm_add_button' );

function mm_add_inline_popup_content() {
?>
<div id="mm_sg_container" style="display:none;">
	<div class="mm_sg_header">
		<img style="margin: 0 auto;" src="<?php echo MM_BASE_URL . "img/mojo-sg-header.png"; ?>" />
		
	</div>
	<form id="mojo-sg-form">
		<p>I would like to display
			<select name="mojo-sg-quantity" class="mojo-sg-quantity" style="width:40px;">
				<?php
				for ( $i = 1; $i <= apply_filters( 'mm_sg_max_qty_themes', 10 ); $i++ ) { 
					?>
				<option value='<?php echo $i; ?>' <?php selected( apply_filters( 'mm_sg_default_qty_themes', 3 ), $i, true ); ?>><?php echo $i; ?></option>
					<?php
				}
				?>
			</select>
			<select name="mojo-sg-platform" class="mojo-sg-platform">
				<option value='wordpress' selected>WordPress</option>
				<option value='joomla'>Joomla</option>
				<option value='drupal'>Drupal</option>
				<option value='magento'>Magento</option>
				<option value='prestashop'>PrestaShop</option>
			</select>

			<select name="mojo-sg-type" class="mojo-sg-type">
				<option value='themes' selected>Themes</option>
				<option value='plugins'>Plugins</option>
			</select>
			<br/>and I want them to be the most 
			<select name="mojo-sg-items" class="mojo-sg-items">
				<option value='popular' selected>Popular</option>
				<option value='recent'>Recent</option>
			</select> items.
		</p>
			<hr/>
		<p>
			Want a specific seller?
			<input type="text" name="mojo-sg-seller" class="mojo-sg-seller" />
		<br/>
			Would you like to add your affiliate id?
			<input type="text" name="mojo-sg-aff" class="mojo-sg-aff" />
		</p>

		<br/>
		<br/>
		<input class="mm-btn-primary" type="submit" value="Insert Into Content" />
	</form>
</div>
<?php
}
add_action( 'admin_footer-post-new.php', 'mm_add_inline_popup_content' );
add_action( 'admin_footer-page-new.php', 'mm_add_inline_popup_content' );
add_action( 'admin_footer-post.php', 'mm_add_inline_popup_content' );
add_action( 'admin_footer-page.php', 'mm_add_inline_popup_content' );
add_action( 'admin_footer-widgets.php', 'mm_add_inline_popup_content' );


function mm_sg_js() {
	?>
<script type="text/javascript">
jQuery( document ).ready( function() {
	function mm_build_shortcode() {
		var platform = jQuery( '.mojo-sg-platform' ).val(); 
		var type = jQuery( '.mojo-sg-type' ).val(); 
		var item = jQuery( '.mojo-sg-items' ).val(); 
		var quantity = jQuery( '.mojo-sg-quantity' ).val(); 
		var aff = jQuery( '.mojo-sg-aff' ).val(); 
		var seller = jQuery( '.mojo-sg-seller' ).val();
		return "[mojoitem platform='" + platform + "' type='" + type + "' item='" + item + "' quantity='" + quantity + "' seller='" + seller + "' aff='" + aff + "']";
	}
	
	jQuery( '#mojo-sg-form' ).submit( function( e ) {       
		e.preventDefault();
		var shortcode = mm_build_shortcode();
		window.parent.send_to_editor( shortcode );
		//Close window
		parent.tb_remove();
	} );
} );
</script>
	<?php
}
add_action( 'admin_footer-post-new.php', 'mm_sg_js' );
add_action( 'admin_footer-page-new.php', 'mm_sg_js' );
add_action( 'admin_footer-post.php', 'mm_sg_js' );
add_action( 'admin_footer-page.php', 'mm_sg_js' );
add_action( 'admin_footer-widgets.php', 'mm_sg_js' );

function mm_item_shortcode( $atts ) {
	global $use_mm_styles;
	$use_mm_styles = true;
	$defaults = array(
		'platform' 		=> 'wordpress',
		'type' 			=> 'themes',
		'item'	 		=> 'recent',
		'quantity'		=> 1,
		'aff'			=> ( defined( 'MMAFF' ) ) ? MMAFF : "",
		'seller'		=> ''
	);
	$atts = wp_parse_args( $atts, $defaults );

	$args = array(
		'mojo-platform' 	=> $atts['platform'],
		'mojo-type' 		=> $atts['type'],
		'mojo-items' 		=> $atts['item'],
	);
	$content = "<div class='mojo-items-wrap'>";

	$response = mm_api( $args, array( 'count' => $atts['quantity'], 'seller' => $atts['seller'] ) );
	if( ! is_wp_error( $response ) ) {
		$items = json_decode( $response['body'] );
		foreach ( $items as $item ) {
			$item->name = apply_filters( 'mm_item_name', $item->name );
			$content .= '
		<article class="item">
			<div class="box">
				<div class="item-photo">
					<a target="_blank" class="screenshot" href="' . mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_shortcode', 'utm_content' => 'item_thumbnail', 'r' => $atts['aff'] ) ) . '">
						<img width="68" height="68" alt="' . $item->name . '" src="' . $item->images->square_thumbnail_url . '">
					</a>		
				</div>

				<div class="item-title">
					<h3 class="title">
						<a target="_blank" href="' . mm_build_link( $item->page_url, array( 'utm_medium' => 'plugin_shorcode', 'utm_content' => 'item_title_link', 'r' => $atts['aff'] ) ) . '">' . $item->name . '</a>
					</h3>

					<h5 class="author">
						<a target="_blank" href="' . mm_build_link( $item->seller_url, array( 'utm_medium' => 'plugin_shortcode', 'utm_content' => 'item_seller_link', 'r' => $atts['aff'] ) ) . '">' . $item->seller_name . '</a>
					</h5>
				</div>

				<div class="item-details-actions">
					<div class="price">$' . $item->prices->single_domain_license . '</div>

					<div class="sales">
						<span class="num">( ' . $item->sales_count . ' Sales )</span>
					</div>

					<div class="add-to-cart">
						<form accept-charset="utf-8" method="post" id="CartItemRouteForm" target="_blank" enctype="multipart-data" action="' . mm_build_link( 'http://mojomarketplace.com/cart', array( 'utm_medium' => 'plugin_shorcode', 'utm_content' => 'item_add_to_cart_button' ) ) . '">
							<input type="hidden" id="CartItemItemId" value="' . $item->id . '" name="data[CartItem][item_id]">
							<button class="mm-btn-primary" type="submit">Add to Cart</button>
						</form>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</article>
		';
		}
	}
	$content .= "</div>";
	return $content;
}
add_shortcode( 'mojoitem', 'mm_item_shortcode' );
