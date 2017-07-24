<?php
$page = sanitize_key( $_GET['page'] );
$nav = array(
	'mojo-marketplace' => array(
		'href' => add_query_arg( array( 'page' => 'mojo-marketplace' ),admin_url( 'admin.php' ) ),
		'content' => 'Marketplace',
	),

	'mojo-performance' => array(
		'href' => add_query_arg( array( 'page' => 'mojo-performance' ),admin_url( 'admin.php' ) ),
		'content' => 'Performance',
	),

);

if ( 'bluehost' == mm_brand() || 'bluehost-india' == mm_brand() ) {
	$home = array(
		'mojo-home' => array(
			'href' => add_query_arg( array( 'page' => 'mojo-home' ), admin_url( 'admin.php' ) ),
			'content' => 'Home',
		),
	);
	$nav = $home + $nav;
}

if ( 'bluehost' == mm_brand() || 'bluehost-india' == mm_brand() ) {
	$nav['mojo-staging'] = array(
		'href' => add_query_arg( array( 'page' => 'mojo-staging' ),admin_url( 'admin.php' ) ),
		'content' => 'Staging',
	);
}

if ( array_key_exists( $page, $nav ) ) {
	$nav[ $page ]['active'] = true;
} else {
	$nav['mojo-home']['active'] = true;
}
?>

<div class="collapse navbar-collapse" id="navbar-collapse-1" style="margin-top: 40px;">
	<div class="container">
		<div class="inner-holder">
			<div class="nav-holder clearfix">
				<ul class="nav navbar-nav justified-nav">
					<?php
					foreach ( $nav as $navitem ) {
						if ( ! isset( $navitem['active'] ) ) {
							echo '<li>';
						} else {
							echo '<li class="active">';
						}
						echo '<a href="' . $navitem['href'] . '">' . $navitem['content'] . '</a>';
						echo '</li>';
					}
					?>
				</ul>
			</div>
		</div>
	</div>
</div>
