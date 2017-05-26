<?php
if ( ! defined( 'WPINC' ) ) { die; }
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header/header.php' );
require_once( MM_BASE_DIR . 'inc/style_updates.css' );
$defaults = array(
	'page'    => 'disabled',
	'browser' => 'disabled',
	'object'  => 'disabled',
);
$cache_settings = get_option( 'mm_cache_settings' );
$cache_settings = wp_parse_args( $cache_settings, $defaults );
$cache_level = get_option( 'endurance_cache_level' );

if ( file_exists( WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php' ) ) {
	$cache_file_exists = true;
} else {
	$cache_file_exists = false;
	$cache_level = 0;
}

if ( false === $cache_level && true == $cache_file_exists ) {
	$cache_level = 2;
}
?>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<ol class="breadcrumb">
								<li>Performance</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							Caching
							<p style="padding-top: 15px;">
								<img style="margin: 5px; padding-right: 10px;" class="pull-left" src="<?php echo MM_BASE_URL; ?>tmp/pagecache.svg" />
								When a page or asset is eligible for caching, a copy of the file is stored where it can be easily and quickly retreived. This allows most of the things that cause a site to load slow to be skipped, giving your site visitors a faster and better experience while browsing your site.
							</p>
						</div>
						<div class="col-xs-12 col-sm-3 col-sm-offset-1">
							<p style="padding-top: 15px;">
							<?php
								$levels = array(
									0 => 'Off',
									1 => 'Assets Only',
									2 => 'Normal',
									3 => 'Advanced',
									4 => 'Agressive',
								);
								foreach ( $levels as $level => $label ) {
									echo '<label class="top-4 radio-inline"><input type="radio" name="cache_level" value="' . $level . '" ' . checked( $level, $cache_level, false ) . '/> ' . $label . '</label><br/>';
								}
							?>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
<script type="text/javascript">
jQuery( document ).ready( function( $ ) {
	$( 'input[type=radio][name=cache_level]' ).change( function() {
		var cache_data = {
			'action'         : 'mm_cache',
			'cache_level'    : this.value
		}
		$.post( ajaxurl, cache_data, function( cache_response ) {
			try {
				response = JSON.parse( cache_response );
			} catch (e) {
				response = {status:"error", message:"Invalid JSON response."};
			}

			if ( typeof response.message !== 'undefined' ) {
				$( '#mojo-wrapper' ).append( '<div id="mm-message" class="mm-' + response.status + '" style="display:none;">' + response.message + '</div>' );
				$( '#mm-message' ).fadeIn( 'slow', function() {
					setTimeout( function() {
						$( '#mm-message' ).fadeOut( 'fast', function() {
							$( '#mm-message' ).remove();
						} );
					}, 8000 );
				} );
			}

		} );
	} );
} );
</script>
