<?php

// phpcs:disable WordPress.WhiteSpace.PrecisionAlignment.Found

/**
 * Callback for the `mojoitem` shortcode.
 *
 * @param array $atts Shortcode attributes.
 *
 * @return string
 */
function mojo_item_shortcode( $atts ) {
	global $use_mm_styles;
	$use_mm_styles = true;
	$defaults      = array(
		'platform' => 'wordpress',
		'type'     => 'themes',
		'item'     => 'recent',
		'quantity' => 1,
		'aff'      => ( defined( 'MMAFF' ) ) ? MMAFF : '',
		'seller'   => '',
	);
	$atts          = wp_parse_args( $atts, $defaults );

	$args    = array(
		'mojo-platform' => $atts['platform'],
		'mojo-type'     => $atts['type'],
		'mojo-items'    => $atts['item'],
	);
	$content = "<div class='mojo-items-wrap'>";

	$response = mojo_api(
		$args,
		array(
			'count'  => $atts['quantity'],
			'seller' => $atts['seller'],
		)
	);
	if ( ! is_wp_error( $response ) ) {
		$items = json_decode( $response['body'] );
		foreach ( $items as $item ) {
			$item->name = apply_filters( 'mm_item_name', $item->name );
			$content    .= '
		<article class="item">
			<div class="box">
				<div class="item-photo">
					<a target="_blank" class="screenshot" href="' . mojo_build_link(
					$item->page_url,
					array(
						'utm_medium'  => 'plugin_shortcode',
						'utm_content' => 'item_thumbnail',
						'r'           => $atts['aff'],
					)
				) . '">
						<img width="68" height="68" alt="' . $item->name . '" src="' . $item->images->square_thumbnail_url . '">
					</a>
				</div>

				<div class="item-title">
					<h3 class="title">
						<a target="_blank" href="' . mojo_build_link(
							   $item->page_url,
							   array(
								   'utm_medium'  => 'plugin_shortcode',
								   'utm_content' => 'item_title_link',
								   'r'           => $atts['aff'],
							   )
						   ) . '">' . $item->name . '</a>
					</h3>

					<h5 class="author">
						<a target="_blank" href="' . mojo_build_link(
							   $item->seller_url,
							   array(
								   'utm_medium'  => 'plugin_shortcode',
								   'utm_content' => 'item_seller_link',
								   'r'           => $atts['aff'],
							   )
						   ) . '">' . $item->seller_name . '</a>
					</h5>
				</div>

				<div class="item-details-actions">
					<div class="price">$' . $item->prices->single_domain_license . '</div>

					<div class="sales">
						<span class="num">( ' . $item->sales_count . ' Sales )</span>
					</div>

					<div class="add-to-cart">
						<form accept-charset="utf-8" method="post" id="CartItemRouteForm" target="_blank" enctype="multipart-data" action="' . mojo_build_link(
							   'https://www.mojomarketplace.com/cart',
							   array(
								   'utm_medium'  => 'plugin_shortcode',
								   'utm_content' => 'item_add_to_cart_button',
							   )
						   ) . '">
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
	$content .= '</div>';

	return $content;
}

add_shortcode( 'mojoitem', 'mojo_item_shortcode' );
