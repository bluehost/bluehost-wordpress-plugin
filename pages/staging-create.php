<?php
if ( ! defined( 'WPINC' ) ) { die; }
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header-small.php' );
?>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-6">
							<h1>What's a staging site?</h1>
							<p>A staging site allows you to make and save changes without your public site being affected.</p>
							<p>Once you've perfected your site in the staging environment you can deploy it to production so everyone can see your changes.</p>
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_create">Create Staging Site</button>
						</div>
						<div class="col-xs-12 col-sm-6">Giant Image Here</div>
					</div>
				</div>
			</div>
			<br style="clear: both"/><span class="alignright powered"><a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com' ); ?>"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo MM_ASSETS_URL . 'img/logo-dark.svg'; ?>"></a></span>
		</div>
	</main>

</div>

<script type="text/javascript">
jQuery( document ).ready( function ( $ ) {
	$( '.staging-action' ).click( function( ) {
		$( this ).append( ' <img class="staging-action-loader" src="https://api.mojomarketplace.com/mojo-plugin-assets/img/loader.svg"/>' );
		$( '.staging-action' ).prop( 'disabled', true );
		var data = {
			'action': $( this ).data( 'staging-action' )
		};
		$.post( ajaxurl, data, function( response ) {
			console.log( response );

			try {
				response = JSON.parse( response );
			} catch (e) {
				response = {status:"error", message:"Invalid JSON response."};
			}

			console.log( response );

			if ( typeof response.status == 'undefined' ) {
				response = {status:"error", message:"Unable to make the request."};
			}

			if ( response.status == 'error' && typeof response.message !== 'undefined' ) {
				alert( response.message );
			}

			if ( typeof response.new_tab !== 'undefined' ) {
				var new_tab = window.open( response.new_tab, '_blank' );
				new_tab.focus();
			}

			if ( typeof response.reload !== 'undefined' && response.reload == 'true' ) {
				window.location = window.location;
			}

			if ( response.status == 'success' && typeof response.message !== 'undefined' ) {
				console.log( response.message );
			}

			$( '.staging-action' ).prop( 'disabled',false );
			$( '.staging-action-loader' ).remove();
		} );

	} );
} );
</script>
