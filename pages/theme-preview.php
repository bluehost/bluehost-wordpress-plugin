<?php
//get item info by id
$api_args = array(
	'mojo-platform' 	=> esc_attr( $_GET['id'] ),
	'mojo-type' 		=> '',
	'mojo-items' 		=> 'details'
);
global $theme;
$theme = mm_api( $api_args, array( 'count' => '' ) );
if( is_array( $theme ) ) {
	$theme = json_decode( $theme['body'] );
}
?>
<div class="wrap">
<?php
if( ! is_object( $theme ) || is_a( $theme, 'WP_Error' ) ) {
	echo "<div class='error'><p>Unable to load theme preview. <a href='admin.php?page=mojo-themes&items=" . esc_attr( $_GET['items'] ) . "'>Return to themes</a></p></div>";
} else {
	$theme = $theme->item_1;
	$theme->name = apply_filters( 'mm_item_name', $theme->name );
	?>
		<div class="wp-full-overlay expanded" id="theme-installer" style="display: block;">
			<div class="wp-full-overlay-sidebar">
				<div class="wp-full-overlay-header">
					<a class="close-full-overlay button-secondary" href="admin.php?page=mojo-themes&amp;items=<?php esc_attr_e( $_GET['items'] ); ?>">Close</a>
					<?php
					if( ! isset( $_GET['details'] ) ) {
						?>
						<a class="button-secondary" href="admin.php?page=mojo-theme-preview&amp;id=<?php esc_attr_e( $_GET['id'] ); ?>&amp;items=<?php esc_attr_e( $_GET['items'] ); ?>&amp;details=true">Details</a>
						<?php
					} else {
						?>
						<a class="button-secondary" href="admin.php?page=mojo-theme-preview&amp;id=<?php esc_attr_e( $_GET['id'] ); ?>&amp;items=<?php esc_attr_e( $_GET['items'] ); ?>">Demo</a>
						<?php
					}
					?>
					<form style="display: inline-block; float: right;line-height: 0;" method="POST" action="<?php echo mm_build_link( "https://www.mojomarketplace.com/cart", array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'preview_' . esc_attr( $_GET['items'] ) . '_buy_now_button' ) ); ?>">
						<input type="hidden" name="data[CartItem][item_id]" value="<?php esc_attr_e( $theme->id ); ?>" />
						<input class="mm-btn-primary" type="submit" value="Buy Now" />
					</form>
				</div>
				<div class="wp-full-overlay-sidebar-content">
					<div class="install-theme-info">
						<h3 class="theme-name"><?php esc_html_e( $theme->name ); ?></h3>
						<span class="theme-by">By <a target="_blank" href="<?php echo mm_build_link( $theme->seller_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'preview_' . esc_attr( $_GET['items'] ) . '_seller_link' ) ); ?>"><?php echo $theme->seller_name; ?></a></span>

						<img alt="" src="<?php esc_attr_e( $theme->images->square_thumbnail_url ); ?>" class="theme-screenshot">

						<div class="theme-details">
							<div class="theme-version">Version: <?php esc_html_e( $theme->version ); ?></div>
							<div class="theme-updated">Updated: <?php esc_html_e( $theme->modified ); ?></div>
							<div class="theme-sales">Sales: <?php esc_html_e( $theme->sales_count ); ?></div>
							<!--<div class="theme-description"></div>-->
						</div>
					</div>
				</div>
			</div>
			<div class="wp-full-overlay-main">
				<?php 
				if( ! isset( $_GET['details'] ) ) {
					?>
					<iframe src="<?php echo mm_build_link( $theme->demo_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'preview_' . esc_attr( $_GET['items'] ) . '_view_demo' ) ); ?>"></iframe>
					<?php
				} else {
					?>
					<iframe src="<?php echo mm_build_link( $theme->page_url, array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'preview_' . esc_attr( $_GET['items'] ) . '_view_details' ) ); ?>"></iframe>
					<?php
				}
				?>
			</div>
		</div>
	<?php
	} 
	?>
</div>

<?php 
global $title;
if( empty( $title ) ) { 
	if( isset( $_GET['details'] ) ) {
		$title = "Details : " . $theme->name;
	} else {
		$title = "Demo : " . $theme->name;
	}
} 