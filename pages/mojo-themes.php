<?php
$type = str_replace( 'mojo-', '', sanitize_title_for_query( wp_unslash( $_GET['page'] ) ) );
$query = array(
	'category'  => 'wordpress',
	'type'      => $type,
	'count'     => 20,
	'direction' => '',
);
$valid_user_args = array(
	'seller'    => true,
	'items'     => true,
	'count'     => true,
	'direction' => true,
);

$query['page'] = ( isset( $_GET['paged'] ) && is_numeric( $_GET['paged'] ) ) ? $_GET['paged'] : '';
$query['order'] = ( isset( $_GET['sort'] ) && ! empty( $_GET['sort'] ) ) ? $_GET['sort'] : 'sales';
$query['itemcategory'] = ( isset( $_GET['items'] )  && 'popular' != $_GET['items'] ) ? $_GET['items'] : '';

$user_args = array_intersect_key( $_GET, $valid_user_args );
$query = wp_parse_args( $user_args, $query );
$query = array_map( 'sanitize_title_for_query', $query );
$query = array_filter( $query );

$api_url = add_query_arg( $query, 'https://api.mojomarketplace.com/api/v2/items' );
if ( 'random' != $query['order'] ) {
	$response = mm_api_cache( $api_url );
} else {
	$response = wp_remote_get( $api_url );
}

if ( ! is_wp_error( $response ) ) {
	$api = json_decode( $response['body'] );
	$items = $api->items;
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
	<?php mm_require( MM_BASE_DIR . 'pages/header.php' ); ?>
	<div class="container">
		<?php
		mm_partner_offers( 'themes-banner-top' );
		mm_pagination( $api->page, $api->pageCount );
		?>
	</div>
	<main id="main">
		<div class="container">

			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<ol class="breadcrumb">
								<li>WordPress Themes</li>
								<?php
								if ( isset( $_GET['items'] ) ) {
									?>
									<li class="active"><?php echo mm_slug_to_title( $_GET['items'] ); ?></li>
									<?php
								}
								?>
							</ol>
						</div>
						<div class="col-xs-12 col-sm-4">
							<form class="form-horizontal theme-sort">
								<label for="sort_select" class="control-label">Sort By</label>
								<span class="fake-select">
									<select class="form-control input-sm" id="sort_select">
										<option value=''>Select</option>
										<option value='price'<?php selected( 'price', $query['order'] ); ?>>Price</option>
										<option value='latest'<?php selected( 'latest', $query['order'] ); ?>>Date Added</option>
										<option value='random'<?php selected( 'random', $query['order'] ); ?>>Random</option>
									</select>
								</span>
								<a href='#' class='sort-direction'><span class="dashicons dashicons-sort"></span></a>
							</form>
						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="list-group">
					<?php
					foreach ( $items as $item ) {
						if ( '0' == $item->prices->single_domain_license ) { continue; }
						?>
						<div class="list-group-item theme-item">
							<div class="row">
								<div class="col-xs-12 col-sm-4 col-md-5">
									<?php
									if ( 'themes' == $type ) {
										if ( isset( $_GET['items'] ) ) {
											$items = sanitize_title_for_query( $_GET['items'] );
										} else {
											$items = 'popular';
										}
										$link = add_query_arg( array( 'page' => 'mojo-theme-preview', 'id' => $item->id, 'items' => $items ), admin_url( 'admin.php' ) );
									} else {
										$link = add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item->id ), admin_url( 'admin.php' ) );
									}
									?>
									<a href="<?php echo $link; ?>">
										<img class="img-responsive" src="<?php echo $item->images->preview_url; ?>" alt="image description" width="367" height="205">
										<span class="preview-overlay dashicons dashicons-search"></span>
									</a>
								</div>
								<div class="col-xs-12 col-sm-5 col-md-5">
									<div class="description-box">
										<h2><a href="<?php echo add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item->id ), admin_url( 'admin.php' ) ); ?>"><?php echo apply_filters( 'mm_item_name', $item->name ); ?></a></h2>
										<?php if ( isset( $item->short_description ) ) { echo $item->short_description; } ?>
										<p><?php if ( isset( $item->tags ) ) { echo '<strong>Tags: </strong>' . substr( $item->tags, 0, 120 ) . '&hellip;'; } ?></p>
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
											<a href="<?php echo add_query_arg( array( 'page' => 'mojo-theme-preview', 'id' => $item->id, 'items' => $items ), admin_url( 'admin.php' ) ); ?>" class="btn btn-primary btn-lg">Demo</a>
											<a href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_list' ) ); ?>" class="btn btn-success btn-lg" data-price="<?php echo number_format( $item->prices->single_domain_license ); ?>" data-view="themes_list">Buy Now</a>
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
			mm_partner_offers( 'themes-banner-bottom' );
			mm_pagination( $api->page, $api->pageCount );
			?>
			<br style="clear: both"/><span class="alignright powered"><a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com' ); ?>"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo MM_ASSETS_URL . 'img/logo-dark.svg'; ?>"></a></span>
		</div>
	</main>
</div>
<script type="text/javascript">
jQuery( document ).ready( function( $ ) {
	$( '.theme-sort #sort_select' ).change( function() {
		window.location.href = window.location.href + '&sort=' + this.value;
	} );
	$( '.theme-sort a.sort-direction' ).click( function( link ) {
		link.preventDefault();
		var dir = location.search.split( 'direction=' )[1];
		if ( 'undefined' == typeof( dir ) || 'asc' == dir ) {
			window.location.href = window.location.href + '&direction=desc';
		} else {
			window.location.href = window.location.href + '&direction=asc';
		}
	} );
} );
</script>
	<?php
} else {
	//TODO display nice error message that the api is down.
}
