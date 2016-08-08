<?php
if ( ! defined( 'WPINC' ) ) { die; }
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header-small.php' );
?>
<style type="text/css">
#mm-message {
	position: fixed;
	bottom:0;
	left:0;
	right:0;
	margin: 0 auto;
	min-width: 320px;
	max-width: 500px;
	padding: 10px 30px;
	background-color: rgba( 0, 0, 0, 0.7);
	color: #fff;
	text-align: center;
}
</style>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<?php
					if ( isset( $_GET['staging-created'] ) || get_transient( 'mm_fresh_staging' ) ) {
						delete_transient( 'mm_fresh_staging' );
					?>
					<div class="row">
						<style type="text/css">
							#staging-success .checkmark {
							  width: 150px;
							  margin: 0 auto;
							  padding-top: 40px;
							}

							#staging-success .path {
							  stroke-dasharray: 1000;
							  stroke-dashoffset: 0;
							  animation: dash 3s ease-in-out;
							  -webkit-animation: dash 3s ease-in-out;
							}

							#staging-success .spin {
							  animation: spin 3s;
							  -webkit-animation: spin 3s;
							  transform-origin: 50% 50%;
							  -webkit-transform-origin: 50% 50%;
							}

							@-webkit-keyframes dash {
							 0% {
							   stroke-dashoffset: 1000;
							 }
							 100% {
							   stroke-dashoffset: 0;
							 }
							}

							@keyframes dash {
							 0% {
							   stroke-dashoffset: 1000;
							 }
							 100% {
							   stroke-dashoffset: 0;
							 }
							}

							@-webkit-keyframes spin {
							  0% {
							    -webkit-transform: rotate(0deg);
							  }
							  100% {
							    -webkit-transform: rotate(360deg);
							  }
							}

							@keyframes spin {
							  0% {
							    -webkit-transform: rotate(0deg);
							  }
							  100% {
							    -webkit-transform: rotate(360deg);
							  }
							}

							@-webkit-keyframes text {
							  0% {
							    opacity: 0; }
							  100% {
							    opacity: 1;
							  }

							@keyframes text {
							  0% {
							    opacity: 0; }
							  100% {
							    opacity: 1;
							  }
							}
						</style>
						<div id="staging-success" class="col-xs-12 col-sm-12 text-center">
							<div class="checkmark">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
									<path class="path" fill="none" stroke="#8ad332 " stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
								c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
								c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/>
									<circle class="path" fill="none" stroke="#8bd331 " stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
									<polyline class="path" fill="none" stroke="#8ad332 " stroke-width="7" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8
								74.1,108.4 48.2,86.4 "/>
									<circle class="spin" fill="none" stroke="#8ad332 " stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>
								</svg>
							</div>
							<h1>Your staging environment is ready!</h1>
						</div>
					</div>
					<?php } ?>
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>Production Environment</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<p>Below are the details of your staging environment.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<?php
							$config = get_option( 'staging_config' );
							?>
							<table class="table table-bordered">

								<?php
								if ( isset( $config['staging_url'] ) ) {
									echo '<tr><td>Staging URL:</td><td><a href="' . esc_url( $config['staging_url'] ) . '" target="_blank">' . $config['staging_url'] . '</a></td></tr>';
								}
								if ( isset( $config['staging_dir'] ) ) {
									echo '<tr><td>Staging Directory:</td><td>' . $config['staging_dir'] . '</td></tr>';
								}
								if ( isset( $config['creation_date'] ) ) {
									echo '<tr><td>Creation Date:</td><td>' . $config['creation_date'] . '</td></tr>';
								}
								?>

							</table>
						</div>
						<div class="col-xs-12 col-sm-4">
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_sso_staging">Go To Staging Site</button>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<p>Ready to deploy your changes? Go to your staging site and deploy from the administration panel.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>Staging Options</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-6 text-center">
							<h2>Clone Production To Staging</h2>
							<div style="height: 150px;">
								<img src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/production-to-staging.png' ); ?>" />
							</div>
							<p>Copy your current production site and your settings to your staging environment.</p>
							<button class="btn btn-primary btn-lg staging-action" data-staging-action="mm_clone">Clone</button>
						</div>
						<div class="col-xs-12 col-sm-6 text-center">
							<h2>Destroy Staging Environment</h2>
							<div style="height: 150px;">
								<img src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/destroy-staging.png' ); ?>" />
							</div>
							<p>Need to start fresh? This will completely remove your current staging environment.</p>
							<button class="btn btn-primary btn-lg staging-action" data-staging-action="mm_destroy">Destroy Staging</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<script type="text/javascript">
jQuery( document ).ready( function ( $ ) {
	$( 'body' ).on( 'click', '.mm-close-modal', function() {
		$( '#mm-modal-wrap' ).fadeOut('slow', function() {
			$( '#mm-modal-wrap' ).remove();
		} );
	} );
	$( 'body' ).on( 'click', '.mm-modal', function () {
		if ( typeof $( this ).data( 'mm-modal' ) !== 'undefined' ) {
			var interim_data = {
				'action': 'mm_modal',
				'template': $( this ).data( 'mm-modal' )
			}
			$.post( ajaxurl, interim_data, function( modal_content ) {
				$( '#mojo-wrapper' ).append( modal_content );
				$( '#mm-modal-wrap' ).fadeIn( 'slow' );
			} );
		}
	} );
	$( 'body' ).on( 'click', '.staging-action', function() {
		if ( typeof $( this ).data( 'interim' ) !== 'undefined' ) {
			var interim_data = {
				'action': 'mm_interim',
				'template': $( this ).data( 'interim' )
			}
			$.post( ajaxurl, interim_data, function( interim_content ) {
				$( '#main' ).fadeOut( 'slow', function() {
					$('#main').html( interim_content );
					$('#main').fadeIn( 'slow' );
				} );
			} );
		}
		$( this ).append( ' <img class="staging-action-loader" src="https://api.mojomarketplace.com/mojo-plugin-assets/img/loader.svg"/>' );
		$( '.staging-action' ).prop( 'disabled', true );
		var data = {
			'action': $( this ).data( 'staging-action' )
		};
		$.post( ajaxurl, data, function( response ) {

			try {
				response = JSON.parse( response );
			} catch (e) {
				response = {status:"error", message:"Invalid JSON response."};
			}

			if ( typeof response.status == 'undefined' ) {
				response = {status:"error", message:"Unable to make the request."};
			}

			if ( response.status == 'error' && typeof response.message !== 'undefined' ) {
				$( '#mojo-wrapper' ).append( '<div id="mm-message" class="mm-error" style="display:none;">' + response.message + '</div>' );
				$( '#mm-message' ).fadeIn( 'slow', function() {
					setTimeout( function() {
						$( '#mm-message' ).fadeOut( 'fast', function() {
							$( '#mm-message' ).remove();
						} );
					}, 8000 );
				} );
			}

			if ( typeof response.new_tab !== 'undefined' ) {
				var new_tab = window.open( response.new_tab, '_blank' );
				new_tab.focus();
			}

			if ( typeof response.reload !== 'undefined' && response.reload == 'true' ) {
				window.location = window.location;
			}

			if ( response.status == 'success' && typeof response.message !== 'undefined' ) {
				$( '#mojo-wrapper' ).append( '<div id="mm-message" class="mm-success" style="display:none;">' + response.message + '</div>' );
				$( '#mm-message' ).fadeIn( 'slow', function() {
					setTimeout( function() {
						$( '#mm-message' ).fadeOut( 'fast', function() {
							$( '#mm-message' ).remove();
						} );
					}, 8000 );
				} );
			}
			$( '.staging-action' ).prop( 'disabled',false );
			$( '.staging-action-loader' ).remove();
			$( '#mm-modal-wrap' ).remove();
		} );
	} );
} );
</script>
