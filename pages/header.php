<header id="header" class="navbar navbar-default">
	<div class="header-block bg-cover" style="background-image: url('<?php echo mm_brand( MM_ASSETS_URL . 'img/header-bg-%s.jpg' ); ?>');">
		<span data-srcset="<?php echo mm_brand( MM_ASSETS_URL . 'img/header-bg-%s.jpg' ); ?>, <?php echo mm_brand( MM_ASSETS_URL . 'img/header-bg-%s-2x.jpg' );?> 2x"></span>
		<nav>
			<div class="container">
				<div class="inner-holder">
					<?php if ( get_transient( '_mm_session_token' ) ) { ?>
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<div class="menu-holder dropdown pull-right">
						<button type="button" class="dropdown-toggle visible navbar-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span class="visible-xs-inline-block visible-sm-inline-block">Account</span>
							<span class="sr-only">Toggle menu</span>
							<span class="icon-bar hidden-sm hidden-xs"></span>
							<span class="icon-bar hidden-sm hidden-xs"></span>
							<span class="icon-bar hidden-sm hidden-xs"></span>
						</button>
						<?php if ( 'default' != mm_brand() ) { ?>
						<span class="powered">Powered By <a href="<?php echo mm_build_link( 'https://www.mojomarketplace.com', array( 'utm_content' => 'powered_by_link' ) ); ?>" target="_blank"><img height="16" width="156" alt="Mojo Marketplace" src="<?php echo mm_brand( MM_ASSETS_URL . 'img/logo.svg' ); ?>"></a></span>
						<?php } ?>
						<div class="dropdown-menu">
							<div class="avatar-block">
								<?php $user = wp_get_current_user(); ?>
								<div class="avatar"><a href="#" style="border-radius: 24px;overflow:hidden;"><?php echo get_avatar( $user->data->ID, 48 );?></a></div>
								<div class="name"><a href="#"><?php echo $user->data->display_name; ?></a></div>
							</div>
							<ul class="projects-nav list-unstyled">
								<li><a href="<?php echo add_query_arg( array( 'page' => 'mojo-purchases' ), admin_url( 'admin.php' ) ); ?>">Purchases</a></li>
							</ul>
						</div>
					</div>
					<?php } ?>
					<div class="header-holder clearfix">
						<a class="navbar-brand" href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-themes' ), admin_url( 'admin.php' ) ) ); ?>">
							<img src="<?php echo mm_brand( MM_ASSETS_URL . 'img/logo-icon-%s.svg' ); ?>" alt="Marketplace">
						</a>
						<form class="navbar-form form-inline navbar-right text-right" role="search" action="admin.php" method="GET">
							<div class="form-group">
								<input type="hidden" name="page" value="mojo-search" />
								<input name="search" type="text" class="form-control input-lg" placeholder="Search Themes, Plugins, &amp; Services">
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