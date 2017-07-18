<div class="collapse navbar-collapse" id="navbar-collapse-1">
	<div class="container">
		<div class="inner-holder">
			<div class="nav-holder clearfix">
				<ul class="nav navbar-nav justified-nav">
					<li <?php if ( 'themes' == $_GET['section'] ) { echo 'class="active"'; } ?>>
						<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes' ), admin_url( 'admin.php' ) ) ); ?>">Themes</a>
						<div class="dropdown">
							<ul class="menu">
								<li class="popular"><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'sort' => 'popular' ), admin_url( 'admin.php' ) ) ); ?>"><strong>Popular</strong></a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'blog' ),         admin_url( 'admin.php' ) ) ); ?>">Blog</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'business' ),     admin_url( 'admin.php' ) ) ); ?>">Business</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'church' ),       admin_url( 'admin.php' ) ) ); ?>">Church</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'woocommerce' ),  admin_url( 'admin.php' ) ) ); ?>">WooCommerce</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'fashion' ),      admin_url( 'admin.php' ) ) ); ?>">Fashion</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'fitness' ),      admin_url( 'admin.php' ) ) ); ?>">Fitness</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'health-care' ),  admin_url( 'admin.php' ) ) ); ?>">Health</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'landing-page' ), admin_url( 'admin.php' ) ) ); ?>">Landing Page</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'magazine' ),     admin_url( 'admin.php' ) ) ); ?>">Magazine</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'photography' ),  admin_url( 'admin.php' ) ) ); ?>">Photography</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'portfolio' ),    admin_url( 'admin.php' ) ) ); ?>">Portfolio</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'real-estate' ),  admin_url( 'admin.php' ) ) ); ?>">Real Estate</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'restaurant' ),   admin_url( 'admin.php' ) ) ); ?>">Restaurant</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'sports' ),       admin_url( 'admin.php' ) ) ); ?>">Sports</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'themes', 'items' => 'travel' ),       admin_url( 'admin.php' ) ) ); ?>">Travel</a></li>
							</ul>
						</div>
					</li>
					<li <?php if ( 'plugins' == $_GET['section'] ) { echo 'class="active"'; } ?>>
						<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'plugins' ), admin_url( 'admin.php' ) ) ); ?>">Plugins</a>
					</li>
					<li <?php if ( 'services' == $_GET['section'] ) { echo 'class="active"'; } ?>>
						<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'services' ), admin_url( 'admin.php' ) ) ); ?>">Services</a>
					</li>
					<li <?php if ( 'graphics' == $_GET['section'] ) { echo 'class="active"'; } ?>>
						<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'graphics' ), admin_url( 'admin.php' ) ) ); ?>">Graphics</a>
						<div class="dropdown">
							<ul class="menu">
								<li class="popular"><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'graphics', 'sort' => 'popular' ), admin_url( 'admin.php' ) ) ); ?>"><strong>Popular</strong></a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'graphics', 'items' => 'logo' ), admin_url( 'admin.php' ) ) ); ?>">Stock Logos</a></li>
								<li><a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'graphics', 'items' => 'business-cards' ), admin_url( 'admin.php' ) ) ); ?>">Business Cards</a></li>
							</ul>
						</div>
					</li>
					<li <?php if ( 'business-tools' == $_GET['section'] ) { echo 'class="active"'; } ?>>
						<a href="<?php echo esc_url( add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'business-tools' ), admin_url( 'admin.php' ) ) ); ?>">Business Tools</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
