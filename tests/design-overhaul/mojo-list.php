<?php
$type = str_replace( 'mojo-', '', $_GET['page'] );
$type = sanitize_title( $type );
$query = array(
	'category' => 'wordpress',
	'type'     => $type,
	'count'    => 20,
);
if ( isset( $_GET['paged'] ) && is_numeric( $_GET['paged']) ) {
	$query['page'] = (int) $_GET['paged'];
} else {
	$query['page'] = 1;
}

if ( 'services' == $type || 'graphics' == $type ) {
	unset( $query['category'] );
}

if ( isset( $_GET['seller'] ) ) {
	$query['seller'] = sanitize_title_for_query( $_GET['seller'] );
}

if ( isset( $_GET['items'] ) ) {
	if ( 'recent' == $_GET['items'] || 'popular' == $_GET['items'] ) {
		$query['order'] = sanitize_title_for_query( $_GET['items'] );
	} else {
		$query['itemcategory'] = sanitize_title_for_query( $_GET['items'] );
	}
}
if ( isset( $_GET['sort'] ) ) {
	if ( 'recent' == $_GET['sort'] || 'popular' == $_GET['sort'] ) {
		$query['order'] = sanitize_title_for_query( $_GET['sort'] );
	}
}
if ( 'graphics' == $type && isset( $query['itemcategory'] ) ) {
	$query['category'] = $query['itemcategory'];
	unset( $query['itemcategory'] );
}

$api_url = add_query_arg( $query, 'https://api.mojomarketplace.com/api/v2/items' );
$response = mm_api_cache( $api_url );
if ( ! is_wp_error( $response ) ) {
	if ( isset( $_GET['items'] ) && 'security-1' == $_GET['items'] ) {
		$_GET['items'] = 'security';
	}
	$api = json_decode( $response['body'] );
	$items = $api->items;

?>
<div id="mojo-wrapper">
	<header id="header" class="navbar navbar-default">
		<div class="header-block bg-cover" style="background-image: url( '<?php echo esc_url( MM_BASE_URL . 'img/tmp/header-bg-001.jpg' ); ?>' );">
			<span data-srcset="<?php echo esc_url( MM_BASE_URL .'img/tmp/header-bg-001.jpg' ); ?>, <?php echo esc_url( MM_BASE_URL . 'img/tmp/header-bg-001-2x.jpg' ); ?> 2x"></span>
			<nav>
				<div class="container">
					<div class="inner-holder">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<div class="menu-holder dropdown pull-right" style="visibility:hidden;">
							<button type="button" class="dropdown-toggle visible navbar-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span class="visible-xs-inline-block visible-sm-inline-block">Account</span>
								<span class="sr-only">Toggle menu</span>
								<span class="icon-bar hidden-sm hidden-xs"></span>
								<span class="icon-bar hidden-sm hidden-xs"></span>
								<span class="icon-bar hidden-sm hidden-xs"></span>
							</button>
							<div class="dropdown-menu">
								<div class="avatar-block">
									<div class="avatar"><a href="#"><i class="icon-avatar"></i></a></div>
									<div class="name"><a href="#">Jonnyapplseed_6</a></div>
								</div>
								<ul class="projects-nav list-unstyled">
									<li><a href="#">Bumble Beer</a></li>
									<li><a href="#">Suckerpunch</a></li>
									<li><a href="#">Livin la vida loca</a></li>
									<li><a href="#">Fixie</a></li>
									<li><a href="#">Pepermint Latté</a></li>
								</ul>
							</div>
						</div>
						<div class="header-holder clearfix">
							<a class="navbar-brand" href="#">
								<img src="<?php echo esc_url( MM_BASE_URL . 'img/tmp/logo-icon.svg' ); ?>" width="250" height="42" alt="MOJO marketplace">
							</a>
							<form class="navbar-form form-inline navbar-right text-right" role="search" action="<?php echo esc_url( admin_url( 'admin.php' ) ); ?>" method="GET">
								<div class="form-group">
									<input type="hidden" name="page" value="mojo-search" />
									<input name="search" type="text" class="form-control input-lg" placeholder="Search Themes, Plugins &amp; Services">
								</div>
								<button type="submit" class="btn btn-info btn-lg">Search</button>
							</form>
						</div>
					</div>
				</div>
				<?php mm_require( MM_BASE_DIR . 'pages/navigation.php' ); ?>
			</nav>
		</div>
	</header>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<div class="col-xs-12 col-sm-8">
							<ol class="breadcrumb">

							<?php if ( ! isset( $_GET['items'] ) && $type !== 'graphics' ) {
								echo '<li>WordPress ' . ucfirst( $type ) . '</li>';
							} ?>

							<?php if ( ! isset( $_GET['items'] ) && $type == 'graphics' ) {
								echo '<li>' . ucfirst( $type ) . '</li>';
							} ?>

							<?php if ( isset( $_GET['items'] ) && $type !== 'graphics' ) : ?>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-' . $type ), admin_url( 'admin.php' ) ) ); ?>">WordPress <?php echo ucfirst( $type ); ?></a></li>
							<?php endif; ?>

							<?php if ( isset( $_GET['items'] ) && $type == 'graphics' ) : ?>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-' . $type ), admin_url( 'admin.php' ) ) ); ?>"><?php echo ucfirst( $type ); ?></a></li>
							<?php endif; ?>
								<?php
								if ( isset( $_GET['items'] ) ) {
									?>
									<li class="active"><?php echo mm_slug_to_title( $_GET['items'] ); ?></li>
									<?php
								}
								?>
							</ol>
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
									</a>
								</div>
								<div class="col-xs-12 col-sm-5 col-md-5">
									<div class="description-box">
										<h2><a href="<?php echo $link; ?>"><?php echo apply_filters( 'mm_item_name', $item->name ); ?></a></h2>
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
											<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-single-item', 'item_id' => $item->id ), admin_url( 'admin.php' ) ) ); ?>" class="btn btn-primary btn-lg">Details</a>
											<a href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ) ); ?>" class="btn btn-success btn-lg">Buy Now</a>
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
			<div class="alignright">
				<nav class="pagination">
					<ul class="group">
						<?php
						$pagination_start = $api->page - 5;
						$pagination_end = $api->page + 5;
						if ( $api->page < 5 ) {
							$pagination_extra = 10 - $api->page;
							$pagination_end = $api->page + $pagination_extra;
						}
						if ( $pagination_start < 1 ) {
							$pagination_start = 1;
						}
						if ( $api->pageCount - $pagination_start < 10 && $api->pageCount - 10 > 1 ) {
							$pagination_start = $api->pageCount - 10;
						}
						if ( $pagination_end > $api->pageCount ) {
							$pagination_end = $api->pageCount;
						}
						?>
						<li class="prev">
							<a href="<?php echo esc_url( add_query_arg( array( 'paged' => $api->page - 1 ) ) ); ?>"><span class="dashicons dashicons-arrow-left"></span></a>
						</li>
						<?php
						for ( $i = $pagination_start;  $i <= $pagination_end;  $i++ ) {
							?>
							<li<?php if ( $i == $api->page ) { echo " class='active'";}?> >
								<a href="<?php echo esc_url( add_query_arg( array( 'paged' => $i ) ) ); ?>"><?php echo $i; ?></a>
							</li>
							<?php
						}
						?>
						<li class="next">
							<?php
							$next_num = ( $api->page + 1 >= $api->pageCount ) ? $api->pageCount : $api->page + 1 ;
							?>
							<a rel="next" href="<?php echo esc_url( add_query_arg( array( 'paged' => $next_num ) ) ); ?>">
								<span class="dashicons dashicons-arrow-right"></span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</main>
</div>
	<?php
}
