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
						<div class="col-xs-12 col-sm-5">
							<h1>What&#8217;s a staging site?</h1>
							<br/>
							<p style="font-size: 18px;">A staging site allows you to make and save changes without your public site being affected.</p>
							<p style="font-size: 18px;">Once you&#8217;ve perfected your site in the staging environment you can deploy it to production so everyone can see your changes.</p>
							<br/><br/><br/>
							<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_create" data-interim="staging-create">Create Staging Site</button>
						</div>
						<div class="col-xs-12 col-sm-6 col-sm-offset-1">
							<img class="img-responsive" src="<?php echo esc_url( MM_ASSETS_URL . 'img/staging-diagram.jpg' ); ?>" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<script type="text/javascript" src="https://api.mojomarketplace.com/mojo-plugin-assets/js/staging.js"></script>
