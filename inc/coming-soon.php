<?php
/**
 * This file adds a coming soon page for new installs
 */

function mm_cs_login_check() {
	if ( get_option( 'mm_install_date' ) === date( 'M d, Y' )  && ! get_option( 'mm_coming_soon' ) ) {
		update_option( 'mm_coming_soon', 'true' );
	}
}
add_action( 'init', 'mm_cs_login_check', 11 );

function mm_cs_notice_display() {
	if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
		?>
		<div class='updated'>
			<p>Your site is currently displaying a "Coming Soon" page. Once you are ready to launch your site <a href='<?php echo esc_url( add_query_arg( array( 'mm_cs_launch' => true ) ) );?>'>click here</a>.</p>
		</div>
		<?php
	}
}
add_action( 'admin_notices', 'mm_cs_notice_display' );

function mm_cs_notice_launch_message() {
	?>
		<div class='updated'>
			<p>Congratulations. Your site is now live, <a target='_blank' href='<?php echo esc_url( get_option( 'siteurl' ) ); ?>'>click here</a> to view it.</p>
		</div>
	<?php
}

function mm_cs_notice_launch() {
	if ( isset( $_GET['mm_cs_launch'] ) ) {
		update_option( 'mm_coming_soon', 'false' );
		add_action( 'admin_notices', 'mm_cs_notice_launch_message' );
	}
}
add_action( 'admin_init', 'mm_cs_notice_launch' );

function mm_cs_load() {
	if ( ! is_user_logged_in() ) {
		$coming_soon = get_option( 'mm_coming_soon', 'false' );
		if ( 'true' === $coming_soon ) {
			mm_cs_content();
			die();
		}
	}
}
add_action( 'template_redirect', 'mm_cs_load' );

function mm_cs_meta() {
	$meta = wp_remote_get( 'http://mojomarketplace.com/api/v1/meta/landing_page' );
	if ( is_wp_error( $meta ) ) {return;}
	if ( isset( $meta['body'] ) && $meta['body'] != '' ) {
		return "<meta name='robots' content='noindex, nofollow' />";
	}
	return;
}

function mm_cs_enabled_callback( $args ) {
		$value = get_option( $args['field'], 'false' );
		echo "On <input type='radio' name='" . esc_attr( $args['field'] ) . "' value='true'" . checked( $value, 'true', false ) . " />";
		echo "Off <input type='radio' name='" . esc_attr( $args['field'] ) . "' value='false'" . checked( $value, 'false', false ) . " />";
}

function mm_cs_settings() {
	$section_name = 'mm_cs_settings_section';
	$section_hook = 'general';

	add_settings_section(
		$section_name, //Section
		'MOJO Coming Soon', //Title
		'__return_false', //section description callback
		$section_hook //Setting Hook
	);

	add_settings_field(
		'mm_coming_soon',
		'Enable',
		'mm_cs_enabled_callback',
		$section_hook,
		$section_name,
		array( 'field' => 'mm_coming_soon' )
	);
	register_setting( 'general', 'mm_coming_soon' );

}
add_action( 'admin_init', 'mm_cs_settings' );

function mm_cs_content() {
	if ( stripos( @exec( 'hostname' ), 'bluehost' ) ) {
		$powered_by = "<div class='powered-by'>Powered by <a href='http://bluehost.com'>Bluehost</a></div>";
	} else {
		$powered_by = "";
	}
	echo mm_minify( "
<!DOCTYPE html>
<html>
<head>
<title>" . get_option( 'blogname' ) . " &mdash; Coming Soon</title>
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
" . mm_cs_meta() . "
<style type='text/css'>
body{
	background-color: #2D2A25;
	background-image: url( https://mojomarketplace.com/img/mojo-landing-bg.jpg );
	background-position: top right;
	background-repeat: no-repeat;
	font-family: 'Montserrat', sans-serif;
	color: #fff;
}
a{
	color: #fff;
	text-decoration: none;
}
#wrap{
	max-width: 900px;
	margin: 0 auto;
}
#logo{height: auto;width: 204px;padding: 30px 10px 10px 10px;max-width: 90%;}
.cta{
	background-color: #93C933;
	color: #35393A;
	padding: 10px 20px;
	text-decoration: none;
	margin: 10px 0;
	display: inline-block;
	border-radius: 3px;
}
.cta:hover{color: #fff;}
.content{
	margin: 5rem 0;
	font-size: 1.2rem;
	padding: 0 15px;
}
.powered-by {
	text-align: right;
	padding: 50px;
	font-size: 12px;
}
h1 span{
	color: #93C933;
}
footer{
	border-top: 1px solid #333;
}
footer a:hover{color: #ccc;}
footer .col{
	padding: 10px 4%;
	display: inline-block;
	vertical-align: top;
	max-width: 100%;
}
footer h2, footer h2 a{
	color: #93C933;
	font-size: 1rem;
	text-decoration: none;
}
footer ul{
	list-style: none;
	padding:0;
}
footer li{
	height: 26px;
}
#what-is-this-content{
	display:none;
	position: fixed;
	top: 50%;
	left: 50%;
	margin-top: -200px;
	margin-left: -200px;
	width: 300px;
	height: 200px;
	background-color: #fff;
	color: #aaa;
	padding: 50px;
}
.btn{display: inline-block;margin-top:50px;text-align:center;padding: 10px 50px; border-radius: 3px;}
.green{
	color: #343537;
	background: #92c835; /* Old browsers */
	background: -moz-linear-gradient(top,  #92c835 0%, #6d9628 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#92c835), color-stop(100%,#6d9628)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top,  #92c835 0%,#6d9628 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top,  #92c835 0%,#6d9628 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top,  #92c835 0%,#6d9628 100%); /* IE10+ */
	background: linear-gradient(to bottom,  #92c835 0%,#6d9628 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#92c835', endColorstr='#6d9628',GradientType=0 ); /* IE6-9 */	
}
#what-is-this-content a{width: 50%;display:inline-block;color: #666;text-align:center;}
.footer-actions a{width: 50%; text-align:center; display:inline-block;}
.split-content > div:first-of-type{
	padding-right: 10%;
}
.split-content > div{
	width: 40%;
	display: inline-block;
	vertical-align: top;
	padding: 50px 80px 0 0;
	font-family: Arial;
	font-weight: lighter;
	line-height: 1.8rem;
}
#wrap .highlight{color:#90C534;}
@media (max-width: 859px) {
	.split-content > div{
		width: 100%;
		box-sizing: border-box;
		padding: 5% 20%;
	}
	.btn{
		width: 122px;
		display:block;
		margin: 50px auto;
	}
	footer .col {
		width: 100%;
		box-sizing: border-box;
		padding: 5%;
		text-align:center;
	}
}
</style>
</head>
<body>
<div id='wrap'>
	<div class='content'>
		<h1>Website Coming Soon</h1>
		<p>This page is used to test the proper operation of your recent <a class='highlight' href='https://www.mojomarketplace.com/explore?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=description_link'>MOJO Marketplace</a> installation of WordPress! If you can read this page it means your installation was successful!</p>
		<a class='btn green' href='" . site_url( 'wp-login.php' ) . "'>Admin Login</a>
		<div class='split-content'>
			<div>
				<h3>Just visiting?</h3>
				<p>
					The owner of this website is working on making this site awesome. Why not <a class='highlight' href='#' onclick='bookmark();'>bookmark it</a> and come back again later. We are sure you will not be disappointed.
				</p>
			</div>
			<div>
				<h3>Are you the Site Owner?</h3>
				<p>
					You should <a class='highlight' href='" . site_url( 'wp-login.php' ) . "'>login</a> to your WordPress installation and prepare your site for launch.
				</p>
				<p>
					To launch your site just click the link in the banner at the top of the screen.
				</p>
			</div>
		</div>
	</div>
	<footer>
		<div class='col'>
			<h2><a href='https://www.mojomarketplace.com/themes/wordpress?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=wordpress_themes'>WordPress Themes</a></h2>
			<ul>
				<li><a target='_blank' href='https://www.mojomarketplace.com/themes/wordpress/blog?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=woocommerce_themes'>WooCommerce Themes</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/themes/wordpress/business?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=responsive_themes'>Responsive WordPress Themes</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/themes/wordpress/photography?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=business_themes'>Business WordPress Themes</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/themes/wordpress/restaurant?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=blog_themes'>Blog WordPress Themes</a></li>
			</ul>
		</div>
		<div class='col'>
			<h2><a href='https://www.mojomarketplace.com/services/all/wordpress?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=wordpress_services'>WordPress Services</a></h2>
			<ul>
				<li><a target='_blank' href='https://www.mojomarketplace.com/item/install-your-wordpress-theme?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=install_theme_service'>Install WordPress Theme</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/item/make-my-wordpress-site-look-like-the-theme-demo?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=theme_demo_service'>Make My Site Look Like the Demo</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/item/backup-your-wordpress-website?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=website_backup_service'>Backup Your WordPress Website</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/item/wordpress-theme-training?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=wp_theme_training_service'>WordPress Theme Training</a></li>
			</ul>
		</div>
		<div class='col'>
			<h2><a href='https://www.mojomarketplace.com/?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=about_mojo'>About MOJO</a></h2>
			<ul>
				<li><a target='_blank' href='https://www.mojomarketplace.com/explore?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=explore_mojo'>Explore MOJO</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/sellers?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=sell_w_mojo'>Sell with MOJO</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/affiliates?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=mojo_affiliates'>MOJO Affiliates</a></li>
				<li><a target='_blank' href='https://www.mojomarketplace.com/how-it-works/faq?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_landing&utm_content=faqs'>FAQs</a></li>
			</ul>
		</div>
		<div class='footer-actions'>
			<a href='" . site_url( 'wp-login.php' ) . "'>Login</a>
			<a href='#' id='what-is-this' onClick='what_is_this_show()'>What is this?</a>
		</div>
	</footer>
	" . $powered_by . "
</div>
<div id='what-is-this-content'>
	<p>This is the default coming soon page for this site because it was installed via MOJO Marketplace.</p>
	<p>If you are the site owner and are finished building the site you can click the link in the banner of the administration panel to disable it.</p>
	<div>
		<a href='#' onClick='what_is_this_hide()'>close</a>
		<a href='" . site_url( 'wp-login.php' ) . "'>login</a>
	</div>
</div>
<script type='text/javascript'>
function what_is_this_show() {
	document.getElementById('what-is-this-content').style.display = 'block';
}
function what_is_this_hide() {
	document.getElementById('what-is-this-content').style.display = 'none';
}
function bookmark() {
	var title = '" . get_bloginfo( 'name', 'display' ) . "';
	var url = '" . site_url() . "';
	if ( window.sidebar && window.sidebar.addPanel ) {
		window.sidebar.addPanel( title, href, '' );
	} else if( window.external && ( 'AddFavorite' in window.external ) ) {
		window.external.AddFavorite( href,title );
	} else if( window.opera && window.print ) {
		this.title=title;
		return true;
	} else {
		alert( 'Press ' + (navigator.userAgent.toLowerCase().indexOf( 'mac' ) != - 1 ? 'Command/Cmd' : 'CTRL' ) + ' + D to bookmark this page.' );
	}
}
</script>
</body>
</html>" );
}