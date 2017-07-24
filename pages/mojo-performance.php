<?php
if ( ! defined( 'WPINC' ) ) { die; }
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header/header.php' );
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

if ( file_exists( WP_CONTENT_DIR . '/mu-plugins/endurance-php-edge.php' ) ) {
	$defaults['php_edge'] = 'enabled';
}
$php_edge_settings = get_option( 'mm_php_edge_settings', '56' );

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
								<img style="margin: 5px; padding-right: 10px;" class="pull-left" src="<?php echo MM_BASE_URL; ?>images/pagecache.svg" />
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

		<?php /* if ( get_option( 'mm_brand' ) == 'BlueHost' ) { ?>
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>PHP Version</li>
							</ol>
						</div>
					</div>
				</div>

				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<p>PHP is the programing language that WordPress is written in. It is what takes all the dynamic content in your admin and builds the pages that becomes your website.</p>
						</div>
						<div class="col-xs-12 col-sm-4 php-settings">
							<label class="top-4 radio-inline">
								<input type="radio" name="php_level" value="56" <?php checked( '56', $php_edge_settings, true ); ?>/>
								<span>PHP 5.6</span>
							</label>
							<p style="padding-top: 15px;">
								<img style="margin: 5px; padding-right: 10px; height:50px;" class="pull-left" src="<?php echo MM_BASE_URL; ?>/images/php-56.svg" />
								PHP 5.6 is the default version of PHP on most servers. This is because it has extremely high compatibility with WordPress plugins and themes.
							</p>

						</div>
						<div class="col-xs-12 col-sm-4 php-settings">
							<label class="top-4 radio-inline">
								<input type="radio" name="php_level" value="70" <?php checked( '70', $php_edge_settings, true ); ?>/>
								<span>PHP 7</span>
							</label>
							<p style="padding-top: 15px;">
								<img style="margin: 5px; padding-right: 10px; height:50px;" class="pull-left" src="<?php echo MM_BASE_URL; ?>/images/php-7.svg" />
								PHP 7 is the version that changed the game when it comes to WordPress. PHP 7 has cut load times in half on some sites and makes more efficient use of your server resources.
							</p>

						</div>
						<div class="col-xs-12 col-sm-4 php-settings">
							<label class="top-4 radio-inline">
								<input type="radio" name="php_level" value="edge" <?php checked( 'edge', $php_edge_settings, true ); ?>/>
								<span>PHP Edge</span>
							</label>
							<p style="padding-top: 15px;">
								<img style="margin: 5px; padding-right: 10px; height:50px;" class="pull-left" src="<?php echo MM_BASE_URL; ?>/images/php-edge.svg" />
								PHP Edge is the latest and greatest version of PHP. This will allow your site to benefit from the incremental gains but also increases the chance of incompatible code.
							</p>

						</div>
					</div>
				</div>
			</div>
		</div>
		<?php }  this feature is unusable due to ea4. Leaving the code until we are able to use it. */?>

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

	$( 'input[type=radio][name=php_level]' ).change( function() {
		var php_data = {
			'action'         : 'mm_php_edge',
			'php_level'    : this.value
		}
		$.post( ajaxurl, php_data, function( php_response ) {
			try {
				response = JSON.parse( php_response );
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
