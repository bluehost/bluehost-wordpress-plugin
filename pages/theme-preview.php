<?php
global $theme;
global $title;

$item_id = sanitize_title_for_query( $_GET['id'] );
$api_url = 'https://api.mojomarketplace.com/api/v2/items/' . $item_id;
$items = ( isset( $_GET['items'] ) ) ? esc_attr( $_GET['items'] ): '';
$theme = mm_api_cache( $api_url );

$other_viewed = mm_api_cache( add_query_arg( array( 'category' => 'wordpress', 'type' => 'themes', 'order' => 'random', 'count' => 4 ), 'https://api.mojomarketplace.com/api/v2/items' ) );

if ( is_wp_error( $theme ) ) {
	echo "<div class='error'><p>Unable to load theme preview. <a href='admin.php?page=mojo-themes&items=" . esc_attr( $_GET['items'] ) . "'>Return to themes</a></p></div>";
} else {
	$theme = json_decode( $theme['body'] );
	$theme = $theme->items[0];
?>
<div class="wrap <?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
	$theme->name = apply_filters( 'mm_item_name', $theme->name );
	?>
	<div class="wp-full-overlay expanded" id="theme-installer" style="display: block;">
		<div class="wp-full-overlay-sidebar">
			<div class="wp-full-overlay-header">
				<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => esc_attr( $items ) ), admin_url( 'admin.php' ) ) ); ?>" class="theme-preview-close">
					<span class="pull-right dashicons dashicons-no-alt"></span>
				</a>
			</div>
			<div class="wp-full-overlay-sidebar-content">
				<img class="theme-preview-logo" src="<?php echo mm_brand( MM_ASSETS_URL . 'img/logo-preview-%s.svg' ); ?>" />
				<div class="install-theme-info">
					<h3 class="theme-name"><?php esc_html_e( $theme->name ); ?></h3>
					<br/>
					<?php mm_stars( $theme->rating, $theme->sales_count ); ?>
					<div class="theme-details text-center">
						<div role="group" class="btn-group-horizontal">
							<a class="btn btn-default" href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item_id ), admin_url( 'admin.php' ) ) ); ?>">Details</a>
							<a class="btn btn-success mm_buy_now" href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item_id ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_preview' ) ); ?>">Buy Now</a>
						</div>
						<br/>
						<div class="price">
							<span class="price-number">$<span><?php echo number_format( $theme->prices->single_domain_license ); ?></span></span>
							<br/>
							<span class="currency">USD</span>
						</div>
						<div>
						<?php echo esc_html( $theme->short_description ); ?>
						</div>
					</div>
					<div class="theme-related text-center">
						<div class="row">
						<?php
						if ( ! is_wp_error( $other_viewed ) ) {
							?>
							<h5>Other People Also Viewed</h5>
							<?php
							$other_items = json_decode( $other_viewed['body'] );
							$other_items = $other_items->items;
						}
						for ( $i = 0;  $i < 3;  $i++ ) {
							if ( $other_items[ $i ]->id == $theme->id ) {
								unset( $other_items[ $i ] );
								$other_items = array_values( $other_items );
							}
							?>
							<div class="col-md-4"><a data-preview="<?php echo $other_items[ $i ]->images->preview_url;?>" class="theme-preview-other-link" href="<?php echo add_query_arg( array( 'id' => $other_items[ $i ]->id ) );?>"><img class="theme-preview-other-themes" src="<?php echo $other_items[ $i ]->images->square_thumbnail_url;?>"/></a></div>
							<?php
						}
						?>
							<div id="preview-screenshot">
									<img src="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wp-full-overlay-main">
			<iframe src="<?php echo mm_build_link( $theme->demo_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'preview_view_demo' ) ); ?>"></iframe>
		</div>
	</div>
	<script type="text/javascript">
	jQuery( document ).ready( function( $ ) {
		$( 'a.theme-preview-other-link' ).hover( function() {
			$( '#preview-screenshot img' ).attr( 'src', $( this ).data( 'preview' ) );
			$( '#preview-screenshot' ).fadeIn();
		} );
		$( 'a.theme-preview-other-link' ).mouseleave( function() {
			$( '#preview-screenshot img' ).attr( 'src', '' );
			$( '#preview-screenshot' ).hide();
		} );
	} );
	</script>
</div>
	<?php
	$title = 'Demo : ' . $theme->name;
}
