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
			<div class="collapse navbar-collapse" id="navbar-collapse-1" style="margin-top: 40px;">
				<div class="container">
					<div class="inner-holder">
						<div class="nav-holder clearfix">
							<ul class="nav navbar-nav justified-nav">
								<li class="active">
									<a class="scroll" href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-home' ),         admin_url( 'admin.php' ) ) ); ?>">Home</a>
								</li>
								<li>
									<a class="scroll" href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes' ),         admin_url( 'admin.php' ) ) ); ?>">Marketplace</a>
								</li>
								<li>
									<a class="scroll" href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-performance'),         admin_url( 'admin.php' ) ) ); ?>">Site Performance</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="sub-navbar collapse navbar-collapse" id="navbar-collapse-1">
				<div class="container">
					<div class="inner-holder">
						<div class="nav-holder clearfix">
							<ul class="nav sub-navbar-nav navbar-nav justified-nav">
								<li>
									<a class="scroll" href="#content">Site Content</a>
								</li>
								<li>
									<a class="scroll" href="#design">Design &amp; Build</a>
								</li>
								<li>
									<a class="scroll" href="#traffic">Traffic &amp; Engagement</a>
								</li>
								<li>
									<a class="scroll" href="#performance">Site Performance</a>
								</li>
								<li>
									<a class="scroll" href="#hosting">Hosting</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</nav>
	</div>
</header>
