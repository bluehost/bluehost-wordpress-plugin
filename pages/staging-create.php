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
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-5">
							<h1>What&#8217;s a staging site?</h1>
							<br/>
							<p style="font-size: 18px;">A staging site allows you to make and save changes without your public site being affected.</p>
							<p style="font-size: 18px;">Once you&#8217;ve perfected your site in the staging environment you can deploy it to production so everyone can see your changes.</p>
							<br/><br/><br/>
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_create" data-interim="staging-create">Create Staging Site</button>
						</div>
						<div class="col-xs-12 col-sm-6 col-sm-offset-1">
							<img class="img-responsive" src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/staging-diagram.jpg' ); ?>" />
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
