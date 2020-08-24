<?php

global $theme;

$item_id = sanitize_title_for_query( $_GET['id'] ); // phpcs:ignore WordPress.Security.NonceVerification
$api_url = 'https://api.mojomarketplace.com/api/v2/items/' . $item_id;
$items   = ( isset( $_GET['items'] ) ) ? esc_attr( $_GET['items'] ) : ''; // phpcs:ignore WordPress.Security.NonceVerification
$theme   = bh_api_cache( $api_url );

$other_viewed = bh_api_cache(
	add_query_arg(
		array(
			'category' => 'wordpress',
			'type'     => 'themes',
			'order'    => 'random',
			'count'    => 4,
		),
		'https://api.mojomarketplace.com/api/v2/items'
	)
);

if ( is_wp_error( $theme ) ) {
	?>
	<div class="error">
		<p>
			<?php esc_html_e( 'Unable to load theme preview.', 'bluehost-wordpress-plugin' ); ?>
			<a href="<?php echo esc_url( admin_url( 'admin.php?page=bluehost#/marketplace/themes' ) ); ?>"><?php esc_html_e( 'Return to themes', 'bluehost-wordpress-plugin' ); ?></a>.
		</p>
	</div>
	<?php
} else {
	$theme = json_decode( $theme['body'] );
	$theme = $theme->items[0];
	?>
	<div class="wrap">
		<?php
		$theme->name = apply_filters( 'mm_item_name', $theme->name );
		?>
		<div class="wp-full-overlay expanded" id="theme-installer" style="display: block;">
			<div class="wp-full-overlay-sidebar">
				<div class="wp-full-overlay-header">
					<a href="javascript:close()" class="theme-preview-close">
						<span class="pull-right dashicons dashicons-no-alt"></span>
					</a>
				</div>
				<div class="wp-full-overlay-sidebar-content">
					<img
						class="theme-preview-logo"
						src="<?php echo esc_url( MOJO_ASSETS_URL . 'img/logo-preview-bluehost.svg' ); ?>"
					/>
					<div class="install-theme-info">
						<h3 class="theme-name"><?php echo esc_html( $theme->name ); ?></h3>
						<br/>
						<?php mojo_stars( $theme->rating, $theme->sales_count ); ?>
						<div class="theme-details text-center">
							<div role="group" class="btn-group-horizontal">
								<a class="button components-button bluehost is-default"
								   href="<?php echo esc_url( admin_url( 'admin.php?page=bluehost#/marketplace/product/' . $item_id ) ); ?>">
									<?php esc_html_e( 'Details', 'bluehost-wordpress-plugin' ); ?>
								</a>
								<a class="button components-button bluehost is-primary"
								   href="<?php echo esc_url( bluehost_generate_mojo_buy_url( $item_id ) ); ?>">
									<?php esc_html_e( 'Buy Now', 'bluehost-wordpress-plugin' ); ?>
								</a>
							</div>
							<br/>
							<div class="price">
								<span
									class="price-number">$<span><?php echo number_format( $theme->prices->single_domain_license ); ?></span></span>
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
								for ( $i = 0; $i < 3; $i ++ ) {
									if ( $other_items[ $i ]->id === $theme->id ) {
										unset( $other_items[ $i ] );
										$other_items = array_values( $other_items );
									}
									?>
									<div class="col-md-4">
										<a data-preview="<?php echo esc_attr( $other_items[ $i ]->images->preview_url ); ?>"
										   class="theme-preview-other-link"
										   href="<?php echo esc_url( add_query_arg( array( 'id' => $other_items[ $i ]->id ) ) ); ?>">
											<img
												class="theme-preview-other-themes"
												src="<?php echo esc_url( $other_items[ $i ]->images->square_thumbnail_url ); ?>"
											/>
										</a>
									</div>
									<?php
								}
								?>
								<div id="preview-screenshot">
									<img src=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wp-full-overlay-main">
				<?php
				$iframe_src = mojo_build_link(
					$theme->demo_url,
					array(
						'utm_medium'  => 'plugin_admin',
						'utm_content' => 'preview_view_demo',
					)
				);
				?>
				<iframe src="<?php echo esc_url( $iframe_src ); ?>"></iframe>
			</div>
		</div>
		<script type="text/javascript">
			jQuery(document).ready(function ($) {
				$('a.theme-preview-other-link').hover(function () {
					$('#preview-screenshot img').attr('src', $(this).data('preview'));
					$('#preview-screenshot').fadeIn();
				});
				$('a.theme-preview-other-link').mouseleave(function () {
					$('#preview-screenshot img').attr('src', '');
					$('#preview-screenshot').hide();
				});
			});
		</script>
	</div>
	<?php
}
