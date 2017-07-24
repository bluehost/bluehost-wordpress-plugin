<?php
$args = array(
	'headers' => array(
		'AuthType' => 'Token',
		'x-api'    => get_transient( '_mm_session_token' ),
	),
);
$api_url = add_query_arg( array('type' => 'all' ), 'https://api.mojomarketplace.com/api/v2/user_purchased_items' );
$response = wp_remote_get( $api_url, $args );
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
	<?php

	require_once( MM_BASE_DIR . 'pages/header/header.php' );

	if ( ! is_wp_error( $response ) && $purchases = json_decode( $response['body'] ) ) {
		$items = $purchases->items;
	?>
	<div class="container">
		<?php mm_partner_offers( 'purchases-banner-top' ); ?>
	</div>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>My Purchases</li>
							</ol>
						</div>
					</div>
				</div>
				<?php if ( isset( $_GET['thank-you'] ) ) { ?>
				<div class="panel-body">
					<h1>Thank You for your recent purchase!</h1>
					<p>Success! Your most recent transaction went through without a hitch. If you do not see your item, please give it at least five minutes to appear. As always, if you have any issues we can help with, please don't hesitate to <a href="https://www.mojomarketplace.com/contact" target="_blank">contact our friendly support crew</a>.</p>
				</div>
				<?php } ?>
				<div class="panel-body">
					<div class="list-group">
					<?php
						foreach ( $items as $item ) {
							mm_record_transaction( $item );
							?>
						<div class="list-group-item theme-item">
							<div class="row">
								<div class="col-xs-12 col-sm-4 col-md-4">
									<img class="img-responsive" src="<?php echo $item->images->preview_url; ?>" alt="image description" width="367" height="205">
								</div>
								<div class="col-xs-12 col-sm-5 col-md-5">
									<div class="description-box">
										<h2><?php echo $item->name; ?></h2>
										<?php if ( isset( $item->short_description ) ) { echo $item->short_description; } ?>
										<p><?php if ( isset( $item->tags ) ) { echo '<strong>Tags: </strong>' . substr( $item->tags, 0, 120 ) . '&hellip;'; } ?></p>
										<?php mm_stars( $item->rating, $item->sales_count ); ?>
									</div>
								</div>
								<div class="col-xs-12 col-sm-3 col-md-3">
									<div class="text-center info-box">
										<?php if ( false === $item->is_service ) { ?>
										<div class="btn-group-vertical" role="group">
											<div class="dropdown">
												<button class="btn btn-success btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
													Assets
													<span class="caret"></span>
												</button>
												<ul class="dropdown-menu">
													<?php
													foreach ( $item->downloads as $download => $file ) {
														$name = mm_slug_to_title( str_replace( array( 'file', '_' ), ' ', $download ) );
														?>
														<li><a href="<?php echo $file; ?>"><?php echo esc_html( $name );?></a></li>
														<?php
													}
													?>
												</ul>
											</div>
										</div>
										<?php } else { ?>
											<h4>Service Provider</h4>
											<?php
											echo '<div>' . get_avatar( $item->service_provider->email, 60 ) . '</div>';
											echo '<p>' . $item->service_provider->first_name . '</p>';
											if ( property_exists( $item, 'service_details' ) ) {
												$start_service_link = 'https://www.mojomarketplace.com/redirect-login';
												$start_service_params = array(
													'token' => get_transient( '_mm_session_token' ),
													'url'   => 'https://www.mojomarketplace.com/account/credentials/' . $item->id . '/' . $item->service_details->id,
												);
												$start_service_link = add_query_arg( $start_service_params, $start_service_link );
											} else {
												$start_service_link = add_query_arg( array( 'ticket_form_id' => '66029' ), 'https://mojosupport.zendesk.com/hc/en-us/requests/new' );
											}

											?>
											<a href="<?php echo esc_url( $start_service_link ); ?>" class="btn btn-success btn-lg" target="_blank" style="display:inline-block;">Start Service</a>
										<?php } ?>

									</div>
								</div>
							</div>
						</div>
						<?php
						}
					?>
					</div>
				</div>
			</div>
			<?php mm_partner_offers( 'purchases-banner-bottom' ); ?>
			<br style="clear: both"/><span class="alignright powered"><a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com' ); ?>"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo MM_ASSETS_URL . 'img/logo-dark.svg'; ?>"></a></span>
		</div>
	</main>

<?php
	} else {
		mm_require( MM_BASE_DIR . 'pages/api-unavailable.php' );
	}
?>
</div>
