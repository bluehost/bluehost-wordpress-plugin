<?php
$search = ( isset( $_GET['search'] ) ) ? sanitize_title_for_query( $_GET['search'] ) : '';
$query = array(
	'item_type' => 'all',
	'query'     => $search,
	'category'  => 'wordpress',
	'size'      => 50,
	'order'     => 'score',
);
$response = mm_api_cache( add_query_arg( $query, 'https://api.mojomarketplace.com/api/v2/search' ) );

if ( ! is_wp_error( $response ) ) {
	$body = json_decode( $response['body'] );
	$items = $body->items;
	$type = 'search';
?>
<div id="mojo-wrapper">
	<?php mm_require( MM_BASE_DIR . 'pages/header.php' ); ?>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<ol class="breadcrumb search">
								<li>Search Results for: </li>
								<li class="active"><?php echo ucwords( $search ); ?></li>
							</ol>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="list-group">
					<?php

					foreach ( $items as $item ) {
						if ( '0' == $item->prices->single_domain_license ) { continue; }
						//TODO: this should be a whitelist not a blacklist
						if ( 'Drupal' == $item->category || 'Joomla' == $item->category ) { continue; }
						?>
						<div class="list-group-item theme-item">
							<div class="row">
								<div class="col-xs-12 col-sm-4 col-md-5">
									<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item->id ), admin_url( 'admin.php' ) ) ); ?>">
										<img class="img-responsive" src="<?php echo $item->images->preview_url; ?>" alt="image description" width="367" height="205">
									</a>
								</div>
								<div class="col-xs-12 col-sm-5 col-md-5">
									<div class="description-box">
										<h2><?php echo apply_filters( 'the_title', $item->name ); ?></h2>
										<?php if ( isset( $item->short_description ) ) { echo $item->short_description; } ?>
										<p><?php echo '<strong>Type</strong>: ' . $item->type; ?></p>
										<p><?php echo '<strong>Category</strong>: ' . $item->category; ?></p>
										<?php mm_stars( $item->rating, $item->sales_count ); ?>
									</div>
								</div>
								<div class="col-xs-12 col-sm-3 col-md-2">
									<div class="text-center info-box">
										<div class="price">
											<span class="currency">USD</span>
											<span class="price-number">$<span><?php echo number_format( $item->prices->single_domain_license ); ?></span></span>
										</div>
										<div class="btn-group-vertical" role="group">
											<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item->id ), admin_url( 'admin.php' ) ) ); ?>" class="btn btn-primary btn-lg">Details</a>
											<a href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_search' ) ); ?>" class="btn btn-success btn-lg">Buy Now</a>
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
		</div>
	</main>
</div>
	<?php
}