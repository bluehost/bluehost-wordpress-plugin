<header id="header" class="navbar navbar-default">
	<div class="header-block bg-cover" style="background-image: url('<?php echo mm_brand( MM_ASSETS_URL . 'img/header-bg-%s.jpg' ); ?>');">
		<span data-srcset="<?php echo mm_brand( MM_ASSETS_URL . 'img/header-bg-%s.jpg' ); ?>, <?php echo mm_brand( MM_ASSETS_URL . 'img/header-bg-%s-2x.jpg' );?> 2x"></span>
		<nav>
			<div class="container">
				<div class="inner-holder">
					<a class="navbar-brand" href="#">
						<img src="<?php echo mm_brand( MM_ASSETS_URL . 'img/logo-icon-%s.svg' ); ?>" alt="Marketplace">
					</a>
				</div>
			</div>
			<?php
			require_once( MM_BASE_DIR . 'pages/header/nav-primary.php' );
			require_once( MM_BASE_DIR . 'pages/header/nav-sub.php' );
			if ( 'bluehost' == mm_brand() ) {
				echo '<div class="bluehost-loader"></div>';
			}
			?>
		</nav>
	</div>
</header>
