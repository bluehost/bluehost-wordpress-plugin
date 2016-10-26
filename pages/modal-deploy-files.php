<div class="container">
	<div class="panel panel-default">
		<div class="panel-heading">
			<div class="row">
				<div class="col-xs-12 col-sm-12">
					<ol class="breadcrumb">
						<li>Deploy Files To Production</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="panel-body">
			<div class="row">
				<div class="col-xs-12 col-sm-12 text-center">
					<img src="<?php echo esc_url( MM_ASSETS_URL . 'img/files.png' ); ?>" />
					<img src="<?php echo esc_url( MM_ASSETS_URL . 'img/to-production.png' ); ?>" />
					<p style="font-size: 18px;">Are you sure you want to deploy all the files to production?</p>
					<button class="btn btn-primary btn-lg mm-close-modal" >Cancel Deployment</button>
					<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_deploy_files">Yes! Let&#8217;s Deploy</button>
				</div>
			</div>
		</div>
	</div>
</div>