<?php
/*
 This file handles all checkout functionality in the plugin.
 	https://api.mojomarketplace.com/api/v2/create_order
 	Headers
		x-api: 57210ca8-2df4-4085-9f78-39e40a141f3a
		X-API-WEB-APP: QuickInstall
	Payload
		{
		    "items": [
		        {
		            "id": "51935f65-7458-470e-a5eb-11c40a140b1e",
		            "license": "single_domain_license",
		            "amount_paid": 55.90
		        }
		    ],
		    "send_receipt": true,
		    "affiliate_name": "gwarner-qswfXfEzGn",
		    "redirect_to": "http://localhost:3001/#/thank-you"
		}
*/

/*function mm_default_buy_now_button( $details, $button = 'Buy Now', $utm ) {
	return '<a href="' . mm_build_link( add_query_arg( array( 'item_id' => $details['item_id'] ), 'https://www.mojomarketplace.com/cart' ), $utm ) . '" class="btn btn-success btn-lg" data-price="' . number_format( $details['item_price'] ) . '" data-view="' . $details['item_view'] . '">' . $button . '</a>';
}
add_filter( 'mm_buy_now', 'mm_default_buy_now_button', '10', 3 );

function mm_paypal_buy_now_button() {

}
add_filter( 'mm_buy_now', 'mm_paypal_buy_now_button', '10', 5 );*/

function mm_buy_now_js() {
	?>
	<script type="text/javascript">
	jQuery( document ).ready( function ( $ ) {
		$( '.mm_buy_now' ).each(function( i ) {
			var mm_href = $( this ).attr( 'href' );
			$( this ).removeAttr( 'href' );
			$( this ).data( 'checkout', mm_href );
		} );
		$( '.mm_buy_now' ).click( function ( item ) {
			item.preventDefault;
			$( this ).append( ' <img src="images/wpspin_light.gif"/>' );
			var data = {
				'action': 'mm_buy_now',
				'id': $( this ).data( 'id' ),
				'price': $( this ).data( 'price' )
			};
			var item = this;
			jQuery.post( ajaxurl, data, function( response ) {
				var order = JSON.parse( response );
				if ( order.status == 'success' ) {
					window.location = order.billing_response.redirectTo;
				} else {
					window.location = $( item ).data( 'checkout' );
				}
			} );
		} );
	} );
	</script>
	<?php
}
add_action( 'admin_footer', 'mm_buy_now_js' );

function mm_buy_now() {
	$args = array(
		'headers' => array(
			'x-api'         => '57210ca8-2df4-4085-9f78-39e40a141f3a',
			'X-API-WEB-APP' => 'QuickInstall',
		),
		'body' => '{
			"items": [
				{
					"id": "' . $_POST['id'] . '",
					"license": "single_domain_license",
					"amount_paid": ' . $_POST['price'] . '
				}
			],
			"send_receipt": true,
			"affiliate_name": "' . get_option( 'mm_master_aff', '' ) . '",
			"redirect_to": "' . admin_url( 'admin.php?page=mojo-thank-you' ) . '"
		}',
	);
	$response = wp_remote_post( 'https://api.mojomarketplace.com/api/v2/create_order', $args );
	if ( ! is_wp_error( $response ) && isset( $response['body'] ) ) {
		$order = json_decode( $response['body'] );
		$order->status = 'success';
		$order->billing_response = json_decode( '{"redirectTo": "https://sandbox.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sale%40mojomarketplace.com&item_name=Mojoness+Purchase&amount=' . $_POST['price'] . '&currency_code=USD&return=http%3A%2F%2Fmojo.v%2Fthank-you&item_number=55315178-b4f8-4e3a-9614-34614219cb1b&custom=550737b8-51ec-4636-a599-1cce4219cb1b"}' );
		echo json_encode( $order );
	} else {
		echo '{"status":"error","error":"Unable to process order."}';
	}
	die;
}
add_action( 'wp_ajax_mm_buy_now', 'mm_buy_now' );

function _mm_login(){
	if ( isset( $_GET['mm-login'] ) ) {
		$args = array(
			'Authorization' => 'Basic TWlrZUhhbnNlbk1lOlU2c2Iyb2NvRnM2VEhyelVOcFoy',
			'AuthType'      => 'Token',
			'x-api-host-id' => 'b711c79a-0c17-11e2-8b3b-0030483370c8',
		);
		$response = wp_remote_get( 'https://staging.mojomarketplace.com/api/v2/login', $args );
		var_dump( $response );
		die;
	}
}
add_action( 'admin_init', '_mm_login' );
