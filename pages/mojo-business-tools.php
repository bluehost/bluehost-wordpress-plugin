<?php
$query = array(
	'type'  => 'business-tools',
	'count'     => 20,
	'direction' => ( isset( $_GET['direction'] ) ) ? $_GET['direction'] : '',
);
if ( isset( $_GET['paged'] ) && is_numeric( $_GET['paged'] ) ) {
	$query['page'] = (int) $_GET['paged'];
} else {
	$query['page'] = 1;
}

$query = array_filter( $query );
$api_url = add_query_arg( $query, 'https://api.mojomarketplace.com/api/v2/items' );

$response = mm_api_cache( $api_url );
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
	<?php
	mm_require( MM_BASE_DIR . 'pages/header.php' );
	if ( ! is_wp_error( $response ) ) {
		$api = json_decode( $response['body'] );
		$items = $api->items;
	?>
	<div class="container">
		<?php
		mm_partner_offers( 'business-tools-banner-top' );
		mm_pagination( $api->page, $api->pageCount );
		?>
	</div>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-12">
							<ol class="breadcrumb">
								<li>Business Tools</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="list-group">
					<?php
					foreach ( $items as $item ) {
						?>
						<div class="list-group-item theme-item">
							<div class="row">
								<div class="col-xs-12 col-sm-4 col-md-5">
									<a href="<?php echo mm_build_link( $item->page_url, array( 'utm_content' => 'preview_image_list' ) ); ?>">
										<img class="img-responsive" src="<?php echo esc_url( $item->images->preview_url ); ?>" alt="image description" width="367" height="205">
									</a>
								</div>
								<div class="col-xs-12 col-sm-5 col-md-5">
									<div class="description-box">
										<h2><a href="<?php echo mm_build_link( $item->page_url, array( 'utm_content' => 'title_list' ) ); ?>"><?php echo apply_filters( 'mm_item_name', $item->name ); ?></a></h2>
										<?php if ( isset( $item->short_description ) ) { echo $item->short_description; } ?>
									</div>
								</div>
								<div class="col-xs-12 col-sm-3 col-md-2">
									<div class="text-center info-box">
										<div class="btn-group-vertical" role="group">
											<a href="<?php echo mm_build_link( $item->page_url, array( 'utm_content' => 'learn_more_list' ) ); ?>" target="_blank" class="btn btn-primary btn-lg">Learn More</a>
											<a href="<?php echo mm_build_link( $item->page_url, array( 'utm_content' => 'get_started_list' ) ); ?>" target="_blank" class="btn btn-success btn-lg" data-id="<?php echo $item->id; ?>" data-view="business_tools_list">Get Started</a>
										</div>
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
			<?php
			mm_partner_offers( 'business-tools-banner-bottom' );
			mm_pagination( $api->page, $api->pageCount );
			?>
			<br style="clear: both"/><span class="alignright powered"><a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com' ); ?>"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo MM_ASSETS_URL . 'img/logo-dark.svg'; ?>"></a></span>
		</div>
	</main>

	<?php
	} else {
		mm_require( MM_BASE_DIR . 'pages/api-unavailable.php' );
	}
?>
</div>
