<?php
$type = str_replace( 'mojo-', '', $_GET['page'] );
$query = array(
	'category' => 'wordpress',
	'type'     => $type,
);

if ( 'services' == $type || 'graphics' == $type ) {
	unset( $query['category'] );
}

if ( isset( $_GET['seller'] ) ) {
	$query['seller'] = $_GET['seller'];
}

if ( isset( $_GET['items'] ) ) {
	if ( 'recent' == $_GET['items'] || 'popular' == $_GET['items'] ) {
		$query['order'] = $_GET['items'];
	} else {
		$query['itemcategory'] = $_GET['items'];
	}
}
if ( isset( $_GET['sort'] ) ) {
	if ( 'recent' == $_GET['sort'] || 'popular' == $_GET['sort'] ) {
		$query['order'] = $_GET['sort'];
	}
	//Logo | Business Cards
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
	$body = json_decode( $response['body'] );
	$items = $body->items;

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
				<div class="collapse navbar-collapse" id="navbar-collapse-1">
					<div class="container">
						<div class="inner-holder">
							<div class="nav-holder clearfix">
								<ul class="nav navbar-nav justified-nav">
									<li <?php if ( 'mojo-themes' == $_GET['page'] ) { echo 'class="active"'; } ?>>
										<a href="admin.php?page=mojo-themes">Themes</a>
										<div class="dropdown">
											<ul class="menu">
												<li class="popular"><a href="#"><strong>Popular</strong></a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'blog' ),         admin_url( 'admin.php' ) ) ); ?>">Blog</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'business' ),     admin_url( 'admin.php' ) ) ); ?>">Business</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'church' ),       admin_url( 'admin.php' ) ) ); ?>">Church</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'woocommerce' ),  admin_url( 'admin.php' ) ) ); ?>">WooCommerce</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'fashion' ),      admin_url( 'admin.php' ) ) ); ?>">Fashion</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'fitness' ),      admin_url( 'admin.php' ) ) ); ?>">Fitness</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'health' ),       admin_url( 'admin.php' ) ) ); ?>">Health</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'landing-page' ), admin_url( 'admin.php' ) ) ); ?>">Landing Page</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'magazine' ),     admin_url( 'admin.php' ) ) ); ?>">Magazine</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'photography' ),  admin_url( 'admin.php' ) ) ); ?>">Photography</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'portfolio' ),    admin_url( 'admin.php' ) ) ); ?>">Portfolio</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'real-estate' ),  admin_url( 'admin.php' ) ) ); ?>">Real Estate</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'restaurant' ),   admin_url( 'admin.php' ) ) ); ?>">Restaurant</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'sports' ),       admin_url( 'admin.php' ) ) ); ?>">Sports</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes', 'items' => 'travel' ),       admin_url( 'admin.php' ) ) ); ?>">Travel</a></li>
											</ul>
										</div>
									</li>
									<li <?php if ( 'mojo-plugins' == $_GET['page'] ) { echo 'class="active"'; } ?>>
										<a href="admin.php?page=mojo-plugins">Plugins</a>
										<div class="dropdown">
											<ul class="menu">
												<li class="popular"><a href="#"><strong>Popular</strong></a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-plugins', 'items' => 'woocommerce' ), admin_url( 'admin.php' ) ) ); ?>">WooCommerce</a></li>
												<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-plugins', 'items' => 'slider' ),      admin_url( 'admin.php' ) ) ); ?>">Slider</a></li>
											</ul>
										</div>
									</li>
									<li <?php if ( 'mojo-services' == $_GET['page'] ) { echo 'class="active"'; } ?>>
										<a href="admin.php?page=mojo-services">Services</a>
										<div class="dropdown">
											<ul class="menu">
												<li class="popular"><a href="#"><strong>Popular</strong></a></li>
												<li><a href="#">Analytics</a></li>
												<li><a href="#">Training</a></li>
												<li><a href="#">Backup</a></li>
												<li><a href="#">Optimization</a></li>
												<li><a href="#">Security</a></li>
												<li><a href="#">Membership</a></li>
												<li><a href="#">Setup/Configure</a></li>
											</ul>
										</div>
									</li>
									<li <?php if ( 'mojo-graphics' == $_GET['page'] ) { echo 'class="active"'; } ?>>
										<a href="admin.php?page=mojo-graphics">Graphics</a>
										<div class="dropdown">
											<ul class="menu">
												<li class="popular"><a href="#"><strong>Popular</strong></a></li>
												<li><a href="admin.php?page=mojo-graphics&items=logo">Stock Logos</a></li>
												<li><a href="admin.php?page=mojo-graphics&items=business-cards">Business Cards</a></li>
											</ul>
										</div>
									</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
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
								<li><a href="admin.php?page=mojo-<?php echo $type; ?>">WordPress <?php echo ucfirst( $type ); ?></a></li>
							<?php endif; ?>

							<?php if ( isset( $_GET['items'] ) && $type == 'graphics' ) : ?>
								<li><a href="admin.php?page=mojo-<?php echo $type; ?>"><?php echo ucfirst( $type ); ?></a></li>
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
						<!-- <div class="col-xs-12 col-sm-4">
							<form class="form-horizontal">
								<label class="control-label" for="sort_select">Sort By</label>
								<span class="fake-select">
									<select id="sort_select" class="form-control input-sm">
										<option>Most Popular</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</span>
							</form>
						</div> -->
					</div>
				</div>
				<div class="panel-body">
					<div class="list-group">
					<?php
					foreach ( $items as $item ) {
						if ( '0' == $item->prices->single_domain_license ) {continue;}
						?>
						<div class="list-group-item theme-item">
							<div class="row">
								<div class="col-xs-12 col-sm-4 col-md-5">
									<?php
									if ( 'themes' == $type ) {
										$link = 'admin.php?page=mojo-theme-preview&id=' . $item->id . '&items=';
										if ( isset( $_GET['items'] ) ) {
											$link .= $_GET['items'];
										} else {
											$link .= 'popular';
										}
									} else {
										$link = 'admin.php?page=mojo-single-item&item_id=' . $item->id;
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
										<p><?php if ( isset( $item->tags ) ) { echo '<strong>Tags: </strong>' . substr($item->tags, 0, 120) . '...'; } ?></p>
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
											<a href="admin.php?page=mojo-single-item&item_id=<?php echo $item->id; ?>" class="btn btn-primary btn-lg">Details</a>
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
		</div>
	</main>
</div>
	<?php
}
	/*<!-- include jQuery library from CDN -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" defer></script>
	<script>window.jQuery || document.write('<script src="js/jquery-1.11.2.min.js" defer><\/script>')</script>
	<!-- include bootstrap JavaScript -->
	<script src="js/bootstrap.min.js" defer></script>
	<!-- include custom JavaScript -->
	<script src="js/jquery.main.js" defer></script>*/