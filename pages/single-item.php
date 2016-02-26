<?php
/**
 * @package MOJO Marketplace WP Plugin
 */

$id = sanitize_title_for_query( $_GET['item_id'] );
$response = wp_remote_get( 'https://api.mojomarketplace.com/api/v2/items/' . $id );
if ( ! is_wp_error( $response ) ) {
	$body = json_decode( $response['body'] );
	$item = $body->items[0];
	$type = $item->type;
?>
<div id="mojo-wrapper">
	<?php mm_require( MM_BASE_DIR . 'pages/header.php' ); ?>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<ol class="breadcrumb">
								<li>
									<?php
									switch ( $item->type ) {
										case 'Themes &amp; Templates':
											echo '<a href="admin.php?page=mojo-themes">WordPress Themes</a>';
											break;

										case 'Plugins &amp; Extensions':
											echo '<a href="admin.php?page=mojo-plugins">WordPress Plugins</a>';
											break;

										case 'Professional Services':
											echo '<a href="admin.php?page=mojo-services">Services</a>';
											break;

										case 'Logos &amp; Graphics':
											echo '<a href="admin.php?page=mojo-graphics">Graphics</a>';
											break;

										default:
											echo '<a href="admin.php?page=mojo-themes">WordPress Items</a>';
											break;
									}
									?>
								</li>
								<li class="active"><?php echo substr( $item->name, 0, 50 ); ?></li>
							</ol>
						</div>
						<div class="col-xs-12 col-sm-4">

						</div>
					</div>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<div id="content">
								<h1><?php echo $item->name; ?></h1>
								<div class="meta-info">
									<?php mm_stars( $item->rating, $item->sales_count ); ?>
								</div>
								<div class="post-holder">
									<img style="max-width: 100%;" src="<?php echo $item->images->preview_url; ?>" />
									<hr/>
									<?php
									echo apply_filters( 'the_content', $item->description );
									?>
									<div class="hidden-xs widget text-center" style="border-width: 2px;">
										<div class="price">
											<span class="price-number">$<span><?php echo number_format( $item->prices->single_domain_license ); ?></span></span>
											<span class="currency">USD</span>
										</div>
										<div class="btn-box">
											<a class="btn btn-success btn-lg" href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_single_bottom' ) ); ?>">Buy Now</a>
										</div>
										<span class="price-option">One Time Fee</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-4">
							<aside id="sidebar">
								<div class="widget text-center">
									<div class="price">
										<span class="price-number">$<span><?php echo number_format( $item->prices->single_domain_license ); ?></span></span>
										<span class="currency">USD</span>
									</div>
									<div class="btn-box">
										<a href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ), array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'buy_now_single_sidebar' ) ); ?>" class="btn btn-success btn-lg">Buy Now</a>
									</div>
									<span class="price-option">One Time Fee</span>
								</div>
								<div class="widget">
									<h3>Item Information</h3>
									<dl class="dl-horizontal">
										<dt>Created:</dt>
											<dd> <?php echo date( 'F j, Y', $item->created_timestamp );?></dd>
										<dt>Updated:</dt>
											<dd> <?php echo date( 'F j, Y', $item->modified_timestamp );?></dd>
										<dt>Sales:</dt>
											<dd>
											<?php
												if ( ( $item->created_timestamp > time() - WEEK_IN_SECONDS * 4 ) && $item->sales_count < 10 ) {
													echo 'New Item!';
												} else if ( ( $item->created_timestamp > time() - WEEK_IN_SECONDS * 4 ) && $item->sales_count > 10) {
													echo 'Popular New Item! (' . $item->sales_count . ')';
												} else {
													echo number_format( $item->sales_count );
												}
											?>
											</dd>
									</dl>
								</div>
								<?php if ( 'Professional Services' == $item->type ) { ?>
								<div class="widget">
									<h3>Providers</h3>
									<div class="avatar-block">
										<div class="avatar"><img class="provider-avatar" src="https://www.gravatar.com/avatar/<?php echo md5( strtolower( trim( $item->service_provider->email ) ) ); ?>?s=36" /></div>
										<div class="name"><?php echo $item->service_provider->username; ?> </div>
									</div>
									<i><small>Providers are prescreened and selected by MOJO.</small></i>
								</div>
								<?php } ?>
							</aside>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
	<?php
}