<?php
$search = ( isset( $_GET['search'] ) ) ? sanitize_title_for_query( $_GET['search'] ) : '';
$query = array(
	'item_type' => ( isset( $_GET['item_type'] ) ) ? sanitize_title_for_query( $_GET['item_type'] ) : 'all',
	'query'     => $search,
	'category'  => 'wordpress',
	'size'      => 150,
	'order'     => 'score',
);
$response = mm_api_cache( add_query_arg( $query, 'https://api.mojomarketplace.com/api/v2/search' ) );

if ( ! is_wp_error( $response ) ) {
	$body = json_decode( $response['body'] );
	$items = $body->items;
	$type = 'search';
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
	<?php mm_require( MM_BASE_DIR . 'pages/header.php' ); ?>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<ol class="breadcrumb search">
								<li>Search Results for: </li>
								<li class="active"><?php echo esc_html( mm_slug_to_title( $search ) ); ?></li>
							</ol>
						</div>
						<div class="col-xs-12 col-sm-4">
							<form class="form-horizontal search-sort">
								<label for="sort_select" class="control-label">Filter By</label>
								<span class="fake-select">
									<select class="form-control input-sm" id="sort_select">
										<option value='all'<?php selected( 'all', $query['item_type'] ); ?>>Select</option>
										<option value='themes'<?php selected( 'themes', $query['item_type'] ); ?>>Themes</option>
										<option value='plugins'<?php selected( 'plugins', $query['item_type'] ); ?>>Plugins</option>
										<option value='services'<?php selected( 'services', $query['item_type'] ); ?>>Services</option>
										<option value='graphics'<?php selected( 'graphics', $query['item_type'] ); ?>>Graphics</option>
									</select>
								</span>
							</form>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="list-group">
					<?php

					$results = 0;
					foreach ( $items as $item ) {
						if ( '0' == $item->prices->single_domain_license ) { continue; }
						$whitelist = array( 'Logo','All','Business Cards', 'WordPress' );
						if ( ! in_array( $item->category, $whitelist ) ) { continue; }
						$results++;
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
										<h2><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item->id ), admin_url( 'admin.php' ) ) ); ?>"><?php echo apply_filters( 'mm_item_name', $item->name ); ?></a></h2>
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
											<a href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_search' ) ); ?>" class="btn btn-success btn-lg" data-price="<?php echo number_format( $item->prices->single_domain_license ); ?>" data-view="search_list">Buy Now</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<?php
					}
					if ( 0 === $results ) {
						?>
						<div class="col-xs-12 col-sm-4 col-md-5">
							<h3>No results for : <?php echo $search; ?></h3>
						</div>
						<?php
					}
					?>
					</div>
				</div>
				<br style="clear: both"/><span class="alignright powered"><a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com' ); ?>"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo MM_ASSETS_URL . 'img/logo-dark.svg'; ?>"></a></span>
			</div>
		</div>
	</main>
</div>
<script type="text/javascript">
jQuery( document ).ready( function( $ ) {
	$( '.search-sort #sort_select' ).change( function() {
		window.location.href = window.location.href + '&item_type=' + this.value;
	} );
} );
</script>
	<?php
}