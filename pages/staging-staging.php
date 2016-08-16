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
							<button class="btn btn-primary btn-lg staging-action" data-staging-action="mm_sso_production">Go To Production Site</button>
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
						<div class="col-xs-12 col-sm-6 col-sm-offset-3  text-center">
							<h2>Deploy Staging To Production</h2>
							<br/>
							<img src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/staging-to-production.png' ); ?>" />
							<br/>
							<p>Ready to make your changes live? These options will push the changes you've made on staging up to your produciton site.</p>
						</div>
					</div>
					<br/>
					<div class="row">
						<div class="col-xs-12 col-sm-4 text-center">
							<div style="height: 150px;">
								<img src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/files.png' ); ?>" />
							</div>
							<button class="btn btn-success btn-lg mm-modal" data-mm-modal="deploy-files">Deploy Files Only</button>
							<br/>
							<p>This will only upload the files you&#8217;ve changed (ie. html or css files). It will not upload any changes you've made to your staging database.</p>
						</div>
						<div class="col-xs-12 col-sm-4 text-center">
							<div style="height: 150px;">
								<img src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/files-db.png' ); ?>" />
							</div>
							<button class="btn btn-success btn-lg mm-modal" data-mm-modal="deploy-files-database">Deploy Files &amp; Database</button>
							<br/>
							<p>Deploy all changes you&#8217;ve made to the file system and database of your website.</p>
						</div>
						<div class="col-xs-12 col-sm-4 text-center">
							<div style="height: 150px;">
								<img src="<?php echo esc_url( MM_BASE_URL . 'tmp/img/database.png' ); ?>" />
							</div>
							<button class="btn btn-success btn-lg mm-modal" data-mm-modal="deploy-database">Deploy Database Only</button>
							<br/>
							<p>Only upload changes you&#8217;ve made to the database on your staging server. For example, adding a new blog post to your website is a database change.</p>
						</div>
					</div>
				</div>
			</div>

			<?php
			$revisions = mm_cl( 'revisions' );
			$revisions = explode( ';', $revisions );
			if ( is_array( $revisions ) ) {
			?>
			<div class="panel panel-default">
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
						<div class="col-xs-12 col-sm-4 text-right">
							<button class="btn btn-primary btn-lg staging-action" data-staging-action="mm_save_state">Add Restoration Point</button>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<table class="table">
								<tr><th>Message</th><th>Date</th><th>&nbsp;</th></tr>
								<tr id="staging-revisions-loader"><td colspan="3" class="text-center"><img src="<?php echo MM_BASE_URL . 'tmp/img/loader-balls.svg';?>"/></td></tr>
							</table>
						</div>
					</div>
				</div>
			</div>
			<?php
			}
			?>
		</div>
	</main>
</div>

<script type="text/javascript">
function mm_load_revisions() {
	jQuery( document ).ready( function ( $ ) {
		$( '.staging-revision' ).remove();
		$( '#staging-revisions-loader' ).fadeIn();
		var revisions_data = {
			'action': 'mm_revisions'
		}
		$.post( ajaxurl, revisions_data, function( revisions ) {
			$( '#staging-revisions-loader' ).fadeOut( 'slow', function() {
				$( '#staging-revisions-loader' ).after( revisions );
				$( '.staging-revision' ).fadeIn( 'slow' );
			} );
		} );
	} );
}
jQuery( document ).ready( function ( $ ) {
	$( '#staging-revisions-loader img' ).ready( function() {
		mm_load_revisions();
	} );
	$( 'body' ).on( 'click', '.mm-close-modal', function() {
		$( '#mm-modal-wrap' ).fadeOut('slow', function() {
			$( '#mm-modal-wrap' ).remove();
		} );
	} );
	$( 'body' ).on( 'click', '.mm-modal', function () {
		if ( typeof $( this ).data( 'mm-modal' ) !== 'undefined' ) {
			var modal_data = {
				'action': 'mm_modal',
				'template': $( this ).data( 'mm-modal' )
			}
			$.post( ajaxurl, modal_data, function( modal_content ) {
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
			console.log( response );

			try {
				response = JSON.parse( response );
			} catch (e) {
				response = {status:"error", message:"Invalid JSON response."};
			}

			if ( typeof response.callback !== 'undefined' ) {
				window[ response.callback ]();
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
