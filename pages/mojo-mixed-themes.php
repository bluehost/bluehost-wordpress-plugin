<?php
if ( ! defined( 'WPINC' ) ) { die; }

$free_themes = mm_api_cache( 'https://api.wordpress.org/themes/info/1.1/?action=query_themes&request[author]=automattic&request[browse]=popular' );
$free_themes = wp_remote_retrieve_body( $free_themes );
if ( $free_themes = json_decode( $free_themes, true ) ) {
	if ( isset( $free_themes['themes'] ) ) {
		$free_themes = $free_themes['themes'];
		shuffle( $free_themes );
	}
}
$paid_themes = mm_api_cache( 'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=popular' );
$paid_themes = wp_remote_retrieve_body( $paid_themes );
if ( $paid_themes = json_decode( $paid_themes, true ) ) {
	if ( isset( $paid_themes['items'] ) ) {
		$paid_themes = $paid_themes['items'];
		shuffle( $paid_themes );
	}
}

$free_themes = array_slice( $free_themes, 0, 15 );
$paid_themes = array_slice( $paid_themes, 0, 15 );
$themes = array_merge( $free_themes, $paid_themes );
shuffle( $themes );

?>
<style>
.mm-mixed-item {
	margin: 5px 0 20px;
	max-height: 224px;
}
.mm-filter-actions{
	margin: 0 0 10px 0;
}
.mm-mixed-item .mm-img-wrap{
	border: 1px solid #ccc;
	border-bottom: 0px;
	max-height: 175px;
	overflow: hidden;
	position: relative;
}
.mm-mixed-item img{
	max-width: 100%;
}
.mm-mixed-item h4{
	display: inline;
}
.mm-mixed-item .mm-action-wrap{
	padding: 10px 0;
	margin-bottom: 10px;
	border: 1px solid #ccc;
	border-top: 0px;
	min-height: 50px;
}
.mm-mixed-item .mm-action-wrap .mm-action-btns{
	text-align: right;
}
.mm-mixed-item  .mm-img-wrap:hover .item-actions-hover {
	z-index: 10;
	background: rgba(0, 0, 0, 0) linear-gradient(90deg, rgba( 45, 110, 180, 0.7 ), rgba( 0, 150, 190, 0.7 ) ) repeat scroll 0 0;
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    text-align:center;
}
.mm-mixed-item  .mm-img-wrap:hover .item-actions-hover .btn {
	display: block;
	margin-top: 30px;
}
</style>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header/header.php' );
?>

	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="row mm-filter-actions text-right">
						<a href="#" class="btn btn-success btn-sm" data-view="all">All</a>
						<a href="#" class="btn btn-primary btn-sm" data-view="premium">Premium</a>
						<a href="#" class="btn btn-primary btn-sm" data-view="free">Free</a>
					</div>
					<div class="row">
						<?php
						foreach ( $themes as $theme ) {
							if ( isset( $theme['images'] ) ) {
								$demo = add_query_arg( array( 'page' => 'mojo-theme-preview', 'id' => $theme['id'], 'items' => 'mixed-themes' ), admin_url( 'admin.php' ) );
								echo '
								<div class="col-xs-12 col-sm-4 mm-mixed-premium-item">
									<div class="mm-mixed-item">
										<div class="mm-img-wrap">
											<img src="' . $theme['images']['preview_url'] . '" />
											<div class="item-actions-hover">
												<a href="' . $demo . '" class="btn btn-primary btn-md">Demo</a>
												<br/>
												<a href="' . add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'single-item', 'item_id' => $theme['id'] ), admin_url( 'admin.php' ) ) . '" class="btn btn-primary btn-md">Details</a>
											</div>
										</div>
										<div class="mm-action-wrap">
											<div class="col-xs-12 col-sm-5">
												<h4>' . mm_truncate_name( $theme['name'] ) . '</h4>
											</div>
											<div class="col-xs-12 col-sm-7 mm-action-btns">
												<a href="' . mm_build_link( add_query_arg( array( 'item_id' => $theme['id'] ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_mixed_grid' ) ) . '" class="btn btn-success btn-sm mm_buy_now" data-id="' . $theme['id'] . '" data-price="' . number_format( $theme['prices']['single_domain_license'] ) . '" data-view="themes_mixed">Buy Now</a>
											</div>
										</div>
									</div>
								</div>';
							} else {
								echo '
								<div class="col-xs-12 col-sm-4 mm-mixed-free-item">
									<div class="mm-mixed-item">
										<div class="mm-img-wrap">
											<img src="' . $theme['screenshot_url'] . '" />
											<div class="item-actions-hover">
												<a href="' . $theme['preview_url'] . '" target="_blank" class="btn btn-primary btn-md">Demo</a>
												<br/>
												<a href="' . add_query_arg( array( 'theme' => $theme['slug'] ), admin_url( 'theme-install.php' ) ) . '" class="btn btn-primary btn-md">Details</a>
											</div>
										</div>
										<div class="mm-action-wrap">
											<div class="col-xs-12 col-sm-5">
												<h4>' . mm_truncate_name( $theme['name'] ) . '</h4>
											</div>
											<div class="col-xs-12 col-sm-7 mm-action-btns">
												<a href="#" class="btn btn-success btn-sm free-theme-install" data-slug="' . $theme['slug'] . '">Install</a>
											</div>
										</div>
									</div>
								</div>';
							}
						}
						?>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
<script type="text/javascript">
jQuery( document ).ready( function ( $ ) {

	<?php
	if ( isset( $_GET['type'] ) && in_array( $_GET['type'], array( 'free', 'premium' ) ) ) {
		echo '$( \'.mm-filter-actions a\' ).addClass( \'btn-primary\' );';
		if ( 'premium' == $_GET['type'] ) {
			?>
			$( '.mm-mixed-free-item' ).hide();
			$( '.mm-mixed-premium-item' ).show();
			$( '.mm-filter-actions a[data-view="premium"]' ).removeClass( 'btn-primary' );
			$( '.mm-filter-actions a[data-view="premium"]' ).addClass( 'btn-success' );
			<?php
		} else {
			?>
			$( '.mm-mixed-free-item' ).show();
			$( '.mm-mixed-premium-item' ).hide();
			$( '.mm-filter-actions a[data-view="free"]' ).removeClass( 'btn-primary' );
			$( '.mm-filter-actions a[data-view="free"]' ).addClass( 'btn-success' );
			<?php
		}
	}
	?>

	$( '.mm-filter-actions a' ).click( function() {
		$( '.mm-filter-actions a' ).attr( 'class', 'btn btn-sm' );
		$( '.mm-filter-actions a' ).addClass( 'btn-primary' );
		$( this ).removeClass( 'btn-primary' );
		$( this ).addClass( 'btn-success' );
		if ( $( this ).data( 'view' ) == 'all' ) {
			$( '.mm-mixed-free-item' ).show();
			$( '.mm-mixed-premium-item' ).show();
		}
		if ( $( this ).data( 'view' ) == 'free' ) {
			$( '.mm-mixed-free-item' ).show();
			$( '.mm-mixed-premium-item' ).hide();
		}
		if ( $( this ).data( 'view' ) == 'premium' ) {
			$( '.mm-mixed-free-item' ).hide();
			$( '.mm-mixed-premium-item' ).show();
		}
	} );

	$( '.free-theme-install' ).click( function () {
		$( this ).append( ' <img class="install-spinner" src="https://api.mojomarketplace.com/mojo-plugin-assets/img/loader.svg"/>' );
		var data = {
			'action': 'install-theme',
			'slug': $(this).data( 'slug' ),
			'_ajax_nonce' : '<?php echo wp_create_nonce( 'updates' ); ?>'
		};

		$.post( ajaxurl, data, function( theme ) {
			if( theme.success == true ) {
				window.location = theme.data.customizeUrl;
			} else {
				$( '#mojo-wrapper' ).append( '<div id="mm-message" class="mm-error" style="display:none;">Unable to Install Theme</div>' );
				$( '#mm-message' ).fadeIn( 'slow', function() {
					setTimeout( function() {
						$( '#mm-message' ).fadeOut( 'fast', function() {
							$( '#mm-message' ).remove();
						} );
					}, 8000 );
				} );
				$( '.install-spinner' ).hide();
			}
		} );
	} );
} );
</script>
