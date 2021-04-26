<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta name="viewport" content="width=device-width">
		<title>
			<?php
			printf(
			/* translators: %s: Blog name */
				__( '%s &mdash; Coming Soon', 'bluehost-wordpress-plugin' ), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				esc_html( get_option( 'blogname' ) )
			);
			?>
		</title>
		<meta name="robots" content="noindex, nofollow" />
		<script
			src="<?php echo esc_url( includes_url( 'js/jquery/jquery.js' ) ); //phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript ?>"></script>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet"><?php //phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedStylesheet ?>
		<style type="text/css">
			body {
				background-color: #fff;
				background-image: url("<?php echo esc_url( BLUEHOST_PLUGIN_URL . 'static/images/cs-bluehost-bg.jpg' ); ?>");
				background-position: top right;
				background-repeat: no-repeat;
				font-family: "Open Sans", sans-serif;
				overflow-x: hidden;
			}

			* {
				box-sizing: border-box;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
			}

			input {
				font-family: "Open Sans", sans-serif;
			}

			::-webkit-input-placeholder {
				color: #9DAFBD;
			}

			::-moz-placeholder {
				color: #9DAFBD;
			}

			:-ms-input-placeholder {
				color: #9DAFBD;
			}

			:-moz-placeholder {
				color: #9DAFBD;
			}

			#wrap {
				max-width: 560px;
				margin: 320px auto 120px;
				color: #444;
				text-align: center;
			}

			#wrap h1 {
				font-weight: 300;
				font-size: 28px;
			}

			#wrap h2 {
				font-weight: 300;
				font-size: 38px;
			}

			#wrap p {
				color: #666;
				line-height: 1.5;
			}

			footer {
				background-color: #fff;
				width: 100%;
				position: fixed;
				bottom: 0;
				left: 0;
				color: #666;
			}

			footer p {
				font-size: 14px;
				line-height: 22px;
				color: #5B5B5B;
				padding: 8px;
				text-align: center;
			}

			footer p a {
				color: #3575D3;
				text-decoration: none;
			}

			footer p a:hover {
				text-decoration: underline;
			}

			.btn {
				display: inline-block;
				font-weight: 400;
				text-align: center;
				vertical-align: middle;
				-ms-touch-action: manipulation;
				touch-action: manipulation;
				cursor: pointer;
				background-image: none;
				border: 1px solid transparent;
				white-space: nowrap;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				padding: 8px 16px;
				font-size: 14px;
				line-height: 1.5;
				border: 1px solid #2e66ba;
				background: #2e66ba;
				color: #fff;
				box-shadow: none;
				border-radius: 3px;
				text-decoration: none;
				margin-top: 60px;
			}

			.btn:hover {
				border: 1px solid #2e66ba;
				background-color: #fff;
				color: #2e66ba;
			}

			.bh_subscription_widget {
			}

			.bh_subscription_widget h2.widgettitle {
				color: #5B5B5B;
				font-size: 38px;
				letter-spacing: -1px;
				line-height: 54px;
				margin-bottom: 10px;
			}

			.bh_subscription_widget #subscribe-text p {
				color: #5B5B5B;
				font-size: 16px;
				letter-spacing: 0;
				line-height: 24px;
				margin-bottom: 25px;
			}

			.bh_subscription_widget #success,
			.bh_subscription_widget #error {
				border-radius: 4px;
				font-size: 14px;
				line-height: 24px;
				color: #5B5B5B;
				margin-bottom: 25px;
				display: none;
				padding: 8px 40px;
			}

			.bh_subscription_widget #success {
				background: #CCE9D0;
				border: 1px solid #009013;
			}

			.bh_subscription_widget #error {
				background: #FFEAE9;
				border: 1px solid #F72F26;
			}

			.bh_subscription_widget form .bh-inputs {
				display: inline-block;
				position: relative;
				vertical-align: middle;
				-webkit-transition: all 0.1s ease-in-out;
				-moz-transition: all 0.1s ease-in-out;
				-o-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}

			.bh_subscription_widget form .bh-inputs.active {
				-webkit-transition: all 0.1s ease-in-out;
				-moz-transition: all 0.1s ease-in-out;
				-o-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}

			.bh_subscription_widget form .bh-inputs.email.active #bh-subscribe-label {
				color: #5B5B5B;
				clip: auto !important;
				height: auto !important;
				position: absolute !important;
				overflow: visible !important;
				width: auto !important;
				left: 16px;
				font-size: 11px;
				top: 2px;
			}

			.bh_subscription_widget form .bh-inputs.email input[type="email"] {
				background-color: #fff;
				background-image: url("<?php echo esc_url( BLUEHOST_PLUGIN_URL . 'images/icon-email.svg' ); ?>");
				background-position: 10px center;
				background-repeat: no-repeat;
				border: 1px solid #5B5B5B;
				border-radius: 3px;
				color: #5B5B5B;
				font-size: 11px;
				margin-right: 6px;
				min-width: 300px;
				padding: 14px 15px 14px 45px;
				max-height: 45px;
				-webkit-transition: all 0.05s ease-in-out;
				-moz-transition: all 0.05s ease-in-out;
				-o-transition: all 0.05s ease-in-out;
				transition: all 0.05s ease-in-out;
			}

			.bh_subscription_widget form .bh-inputs.email.active input[type="email"] {
				background-image: none;
				font-size: 14px;
				padding: 16px 15px 12px 15px;
				max-height: 45px;
			}

			.bh_subscription_widget form .bh-inputs.submit input[type="submit"] {
				background-color: #3575D3;
				border: none;
				border-radius: 4px;
				color: #fff;
				font-size: 14px;
				font-weight: 600;
				line-height: 13px;
				margin: 0;
				padding: 15px 30px;
				border: 1px solid #3575D3;
				-webkit-transition: all 0.1s ease-in-out;
				-moz-transition: all 0.1s ease-in-out;
				-o-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}

			.bh_subscription_widget form .bh-inputs.submit input[type="submit"]:hover {
				background-color: #5B5B5B;
				border-color: #5B5B5B;
				-webkit-transition: all 0.1s ease-in-out;
				-moz-transition: all 0.1s ease-in-out;
				-o-transition: all 0.1s ease-in-out;
				transition: all 0.1s ease-in-out;
			}

			@media (min-width: 1920px) {
				body {
					background-position-x: center;
				}
			}

			@media (max-width: 1024px) {
				#wrap {
					margin: 240px auto 120px;
				}
			}

			@media (max-width: 960px) {
				#wrap {
					margin: 120px auto;
				}
			}

			@media (max-width: 640px) {
				#wrap {
					margin: 60px auto 120px;
					max-width: 100%;
					color: #444;
					padding: 0 20px;
				}

				.btn {
					margin-top: 10px;
				}

				.bh_subscription_widget form .bh-inputs,
				.bh_subscription_widget form .bh-inputs.email input[type="email"],
				.bh_subscription_widget form .bh-inputs.submit input[type="submit"] {
					width: 100%;
				}

				.bh_subscription_widget form .bh-inputs.email input[type="email"] {
					min-width: 0;
				}

				.bh_subscription_widget form .bh-inputs {
					margin-bottom: 10px;
				}
			}

			@media (max-width: 360px) {
				#wrap h1 {
					font-size: 26px;
				}

				.btn {
					margin-top: 40px;
				}
			}
		</style>
	</head>
	<body>
		<div id="wrap">
			<main class="content">

				<?php if ( class_exists( 'Jetpack' ) && Jetpack::is_module_active( 'subscriptions' ) ) { ?>

					<div class="bh_subscription_widget">
						<h2 class="widgettitle"><?php esc_html_e( 'Coming Soon!', 'bluehost-wordpress-plugin' ); ?></h2>
						<div id="subscribe-text">
							<p><?php esc_html_e( 'Be the first to know when we launch, enter your email address and we will let you know when we go live and any future website updates we have.', 'bluehost-wordpress-plugin' ); ?></p>
						</div>
						<div id="success">
							<?php esc_html_e( 'Thank you, please check your email to confirm your subscription.', 'bluehost-wordpress-plugin' ); ?>
						</div>
						<div id="error">
							<?php esc_html_e( 'There was an error with your submission and you were not subscribed. Please try again with a different email address.', 'bluehost-wordpress-plugin' ); ?>
						</div>
						<form action="" method="post" accept-charset="utf-8" id="subscribe-bh">
							<input type="hidden" name="action" value="mojo_coming_soon_subscribe">
							<?php wp_nonce_field( 'mojo_coming_soon_subscribe_nonce', 'mm_nonce-coming-soon-subscribe' ); ?>
							<span class="bh-inputs email" id="subscribe-email">
								<label id="bh-subscribe-label" for="subscribe-field-bh">
									<?php esc_html_e( 'Email', 'bluehost-wordpress-plugin' ); ?>
								</label>
								<input
									type="email"
									name="email"
									required="required"
									value=""
									id="subscribe-field-bh"
									placeholder="Enter your email address"
								>
							</span>
							<span class="bh-inputs submit" id="subscribe-submit">
								<input class="btn" type="submit" value="Subscribe" name="bh_subscriptions_widget">
							</span>
						</form>
						<script>
							// Custom functionality for safari and IE
							(function (d) {
								// In case the placeholder functionality is available we remove labels
								if (('placeholder' in d.createElement('input'))) {
									var label = d.querySelector('label[for=subscribe-field-bh]');
									label.style.clip = 'rect(1px, 1px, 1px, 1px)';
									label.style.position = 'absolute';
									label.style.height = '1px';
									label.style.width = '1px';
									label.style.overflow = 'hidden';
								}

							})(document);
						</script>
					</div>

				<?php } else { ?>

					<h1><?php esc_html_e( 'A New WordPress Site', 'bluehost-wordpress-plugin' ); ?></h1>
					<h2><?php esc_html_e( 'Coming Soon!', 'bluehost-wordpress-plugin' ); ?></h2>
					<a class="btn" href="<?php echo esc_url( wp_login_url() ); ?>">
						<?php esc_html_e( 'Admin Login', 'bluehost-wordpress-plugin' ); ?>
					</a>

				<?php } ?>

			</main>
		</div>
		<footer>
			<p class="text-center">
				<?php
				$wordpress_hosting_page = ( get_option( 'mm_brand' ) === 'Bluehost_India' ) ? 'https://www.bluehost.in/wordpress' : 'https://bluehost.com/wordpress';
				$my_panel               = ( get_option( 'mm_brand' ) === 'Bluehost_India' ) ? 'https://my.bluehost.in/' : 'https://my.bluehost.com/';
				printf(
				/* translators: %1$s is replaced with opening link tag taking you to bluehost.com/wordpress, %2$s is replaced with closing link tag */
					esc_html__( 'A %1$sBluehost%2$s powered website.', 'bluehost-wordpress-plugin' ) . '&nbsp;',
					'<a href="' . esc_url( $wordpress_hosting_page ) . '" class="bluehost" target="_blank" rel="noopener noreferrer nofollow">',
					'</a>'
				);
				printf(
				/* translators: %1$s is replaced with opening link tag taking you to login page, %2$s is replaced with opening link tag taking you to my.bluehost.com, %3$s is replaced with closing link tag */
					esc_html__( 'Is this your website? Log in to %1$sWordPress%3$s or %2$sBluehost%3$s.', 'bluehost-wordpress-plugin' ),
					'<a href="' . esc_url( wp_login_url() ) . '">',
					'<a href="' . esc_url( $my_panel ) . '" class="bluehost" target="_blank" rel="noopener noreferrer nofollow">',
					'</a>'
				);
				?>
			</p>
		</footer>
		<script>
			jQuery(document).ready(function ($) {

				$('#subscribe-submit input').click(function (e) {
					e.preventDefault();

					$('#success').hide();
					$('#error').hide();

					var email = $('#subscribe-field-bh').val();
					var nonce = $('#mm_nonce-coming-soon-subscribe').val();
					var ajaxscript = {ajax_url: '<?php echo esc_url( admin_url() ); ?>admin-ajax.php'}

					$.ajax({
						type: 'POST',
						url: ajaxscript.ajax_url,
						data: {
							'action': 'mojo_coming_soon_subscribe',
							'email': email,
							'nonce': nonce
						},
						success: function (response) {

							var status = response.status;

							if (status == 'success') {

								$('#success').show();

							} else if (status == 'active') {

								$('#error').show().text('<?php echo esc_js( __( 'Your email address is already subscribed to this website. Stay tuned to your inbox for our updates or try a different email address.', 'bluehost-wordpress-plugin' ) ); ?>');

							} else if (status == 'invalid_email') {

								$('#error').show().text('<?php echo esc_js( __( 'There was an error with your submission and you were not subscribed. Please try again with a valid email address.', 'bluehost-wordpress-plugin' ) ); ?>');

							} else {

								$('#error').show();

							}

						},
					});
				});

				var input = $('#subscribe-email');
				input.focusin(function () {
					$(this).addClass('active');
				});
				input.focusout(function () {
					$(this).removeClass('active');
				});
			});
		</script>
	</body>
</html>
