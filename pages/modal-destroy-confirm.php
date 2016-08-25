<div class="container">
	<div class="panel panel-default">
		<div class="panel-heading">
			<div class="row">
				<div class="col-xs-12 col-sm-12">
					<ol class="breadcrumb">
						<li>Destroy Staging</li>
					</ol>
				</div>
			</div>
		</div>
		<div class="panel-body">
			<div class="row">
				<div class="col-xs-12 col-sm-12 text-center">
					<img src="<?php echo esc_url( MM_ASSETS_URL . 'img/destroy-staging.png' ); ?>" />
					<p style="font-size: 18px;">Are you sure you want to destroy staging?</p>
					<p>Any changes that are in your staging environment and not deployed will be lost.</p>
					<button class="btn btn-primary btn-lg mm-close-modal" >Cancel</button>
					<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_destroy">Yes, I am finished</button>
				</div>
			</div>
		</div>
	</div>
</div>