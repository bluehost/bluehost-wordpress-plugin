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
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>Staging Environment</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
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
							<button class="btn btn-primary btn-lg staging-action" data-staging-action="mm_sso_production">Go To Production Site</button>
						</div>
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
								<li>Deployment Options</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-sm-offset-3">
							<h2>Deploy Staging To Production</h2>
							giant image
							<p>Ready to make your changes live? These options will push the changes you've made on staging up to your produciton site.</p>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-4">
							giant image
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_deploy_files">Deploy Files Only</button>
							<p>This will only upload the files you've changed (ie. html or css files). It will not upload any changes you've made to your staging database.</p>
						</div>
						<div class="col-xs-12 col-sm-4">
							giant image
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_deploy_files_db">Deploy Files &amp; Database</button>
							<p>Deploy all changes you've made to the file system and database of your website.</p>
						</div>
						<div class="col-xs-12 col-sm-4">
							giant image
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_deploy_db">Deploy Database Only</button>
							<p>Only upload changes you've made to the database on your staging server. For example, adding a new blog post to your website is a database change.</p>
						</div>
					</div>
				</div>
			</div>

			<?php /*<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>Restoration Options</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<p>Save the current staging environment or restore a previously saved staging environement.</p>
						</div>
						<div class="col-xs-12 col-sm-4">
							<a class="staging-action" data-staging-action="mm_save_state" href="#">Add Restoration Point</a>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<table class="table">
								<tr><th>Name</th><th>Creation Date</th><th>&nbsp;</th></tr>
								<?php
								// For each restoration point we need to add a record.
								?>
							</table>
						</div>
					</div>

					<a class="staging-action" data-staging-action="mm_restore_state" href="#">Restore</a>
				</div>
			</div> */ ?>
			<br style="clear: both"/><span class="alignright powered"><a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com' ); ?>"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo MM_ASSETS_URL . 'img/logo-dark.svg'; ?>"></a></span>
		</div>
	</main>
</div>

<script type="text/javascript">
jQuery( document ).ready( function ( $ ) {
	$( '.staging-action' ).click( function() {
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
