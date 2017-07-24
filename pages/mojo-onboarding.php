<?php
if ( ! defined( 'WPINC' ) ) { die; }
?>
<style type="text/css">
#jpo-welcome-panel {
	font-family: Open Sans,sans-serif;
	top: 0;
	bottom: initial;
	left: initial;
	position: relative;
	width: auto;
}
.welcome__wrapper {
	min-height: 0;
}
.welcome__review-cta a.dops-button{
	margin-top: 25px;
}
img.welcome__get-started-image {
	width: 48vw;
	margin-bottom: -80px;
	position:relative;
	transform: none;
	left: initial;
}
.dops-button{
	padding: 8px 14px;
}

</style>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header/header-no-nav.php' );
?>
	<main id="main">
		<div class="container">
			<?php do_action( 'mm_onboarding' ); ?>
		</div>
	</main>
</div>
