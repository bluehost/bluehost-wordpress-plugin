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
	<header id="header" class="navbar navbar-default">
		<div class="header-block bg-cover" style="background-image: url('<?php echo MM_BASE_URL; ?>img/tmp/header-bg-001.jpg');">
			<span data-srcset="<?php echo MM_BASE_URL; ?>img/tmp/header-bg-001.jpg, <?php echo MM_BASE_URL; ?>img/tmp/header-bg-001-2x.jpg 2x"></span>
			<nav>
				<div class="container">
					<div class="inner-holder">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<div class="menu-holder dropdown pull-right" style="visibility: hidden;">
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
								<img src="<?php echo MM_BASE_URL; ?>img/tmp/logo-icon.svg" width="250" height="42" alt="MOJO marketplace">
							</a>
							<form class="navbar-form form-inline navbar-right text-right" role="search" action="admin.php" method="GET">
								<div class="form-group">
									<input type="hidden" name="page" value="mojo-search" />
									<input name="search" type="text" class="form-control input-lg" placeholder="Search Themes, Plugins &amp; Extensions">
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
								<li>
									<?php
									switch ( $item->type ) {
										case 'Themes &amp; Templates':
											echo '<a href="admin.php?page=mojo-themes">Themes</a>';
											break;

										case 'Plugins &amp; Extensions':
											echo '<a href="admin.php?page=mojo-plugins">Plugins</a>';
											break;

										case 'Professional Services':
											echo '<a href="admin.php?page=mojo-services">Services</a>';
											break;

										case 'Logos &amp; Graphics':
											echo '<a href="admin.php?page=mojo-graphics">Graphics</a>';
											break;

										default:
											echo '<a href="admin.php?page=mojo-themes">Items</a>';
											break;
									}
									?>
								</li>
								<li class="active"><?php echo substr( $item->name, 0, 50 ); ?></li>
							</ol>
						</div>
						<div class="col-xs-12 col-sm-4">
							<!-- <form class="form-horizontal">
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
							</form> -->
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
											<a class="btn btn-success btn-lg" href="">Buy Now</a>
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
										<a href="<?php echo mm_build_link( add_query_arg( array( 'item_id' => $item->id ), 'https://www.mojomarketplace.com/cart' ) ); ?>" class="btn btn-success btn-lg">Buy Now</a>
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
												if ( $item->sales_count < 10 ) {
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