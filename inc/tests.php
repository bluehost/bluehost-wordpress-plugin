<?php
function mm_ab_test_inclusion( $test_name, $key, $audience, $duration ) {
	if( false === ( $test = get_transient( 'mm_test', false ) ) ) {
		$previous_tests = get_option( 'mm_previous_tests', array() );
		
		if( in_array( $test_name, $previous_tests ) ) {
			return false;
		}
		
		$score = mt_rand( 0, 99 );
		
		if( $audience > $score ) {
			set_transient( 'mm_test', array( 'name' => $test_name, 'key' => $key ), $duration );
			$previous_tests[] = $test_name;
			update_option( 'mm_previous_tests', $previous_tests );
			return true;
		}
	} else {
		if( $test['key'] === $key ) {
			return true;
		}
	}
	return false;
}

function mm_ab_test_inclusion_none() {
	if( is_admin() && false === get_transient( 'mm_test', false ) ) {
		$duration = WEEK_IN_SECONDS * 4;
		set_transient( 'mm_test', array( 'key' => 'none' ), $duration );
	}
}
add_action( 'admin_footer', 'mm_ab_test_inclusion_none', 99 );

function mm_ab_test_file( $test_name, $file, $original, $test, $audience = 10, $duration = WEEK_IN_SECONDS  ) {
	if( strpos( $file, $original ) ) {
		$key = md5( serialize( $test ) );
		$inclusion = mm_ab_test_inclusion( $test_name, $key, $audience, $duration );

		$test_file = str_replace( $original, $test, $file );

		if( $inclusion && file_exists( $test_file ) ) {
			$file = $test_file;
		}
	}
	return $file;
}

function mm_ab_test_content( $test_name, $original, $test, $audience = 10, $duration = WEEK_IN_SECONDS ) {
	$key = md5( serialize( $test ) );
	$inclusion = mm_ab_test_inclusion( $test_name, $key, $audience, $duration );
	if( $inclusion ) {
		return $test;
	}
	return $original;
}

/* Few example tests

function mm_themes_ab( $file ) {
	return mm_ab_test_file( 'themes_page', $file, 'pages/mojo-themes.php', 'tests/mojo-themes.php' );
}
add_filter( 'mm_require_file', 'mm_themes_ab' );

function mm_themes_categories( $accepted_categories ) {
	$test_categories = array(
		'recent',
		'popular',
		'responsive',
		'business',
		'ecommerce',
		'photography',
		'real-estate',
		'restaurant'
	);
	return mm_ab_test_content( 'themes_categories_recent_first', $accepted_categories, $test_categories, 10 );
}
add_filter( 'mm_themes_accepted_categories', 'mm_themes_categories' );
*/

/* Start individual tests*/

/**
 * Should Jetpack Starter perform well, we would move this stuff to inc/jetpack.php.
 */


function mm_jetpack_bluehost_only() {
	$host = @exec( 'hostname' );
	$is_bluehost = ( stripos( $host, 'bluehost' ) ) ? true : false;
	return $is_bluehost;
}

function mm_jetpack_start_test() {
	$file = MM_BASE_DIR . 'tests/jetpack-start/jetpack-start.php';
	if( file_exists( $file ) && mm_jetpack_bluehost_only() ) {
		if( ! mm_ab_test_inclusion( 'jetpack-start-v6.1', md5( 'jetpack-start-v6.1' ), 20, WEEK_IN_SECONDS * 4 ) ) {
			mm_ab_test_inclusion( 'jetpack-start-exempt-v6.1', md5( 'jetpack-start-exempt-v6.1' ), 25, WEEK_IN_SECONDS * 4 );
			add_option( 'jpstart_wizard_has_run', true );
		}
	}
}
add_action( 'init', 'mm_jetpack_start_test', 5 );

function mm_jetpack_start_onboarding() {
	$mm_test = get_transient( 'mm_test', array( 'name' => 'none' ) );
	if( ! get_option( 'jpstart_wizard_has_run' ) && 
		! isset( $_GET['jps_wizard_start'] )  && 
		! get_option( 'jps_started' ) &&
		$mm_test['name'] == 'jetpack-start-v6' ) {
		add_option( 'jps_started', time() );
		wp_safe_redirect( admin_url( '?jps_wizard_start' ) );
	}
}
add_action( 'admin_init', 'mm_jetpack_start_onboarding', 10 );

function mm_jetpack_remove_themes_step( $steps ) {
	for ( $i = 0; $i < count( $steps ); $i++ ) {
		if( is_a( $steps[ $i ], 'Jetpack_Start_Step_select_theme' ) ) {
			unset( $steps[ $i ] );
		}
	}
	return $steps;
}
add_filter( 'jetpack_start_steps', 'mm_jetpack_remove_themes_step' );

//following test for service search
function mm_plugin_search_offer() {

	$mm_test = get_transient( 'mm_test', array( 'name' => 'none' ) );

	if( isset( $_GET['s'] ) && $plugin = mm_check_plugin_search_value( $_GET['s'] ) ) {
		$link = mm_build_link( $plugin['url'], array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'plugin_search' ) );
		
		switch ( $mm_test['name'] ) {
			case 'plugin-search-banner':
				$plugin_html = '
				<div style="display: inline-block;background-color: #D54E21;margin-left: -20px;padding-right: 20px;width: 100%;">
					<p style="font-size: 1.2rem;color: #fff;padding-left: 20px;">
						Did you know MOJO Marketplace has <a style="color:#fff;" href="' . $link . '">Pro Services</a> for ' . $plugin['name']. '? <a style="color: #fff; font-size: .8rem; margin: 15px;" href="' . $link . '">Click here for more</a>
					</p>
				</div>';

				$plugin_html = mm_minify( $plugin_html );

				echo "
				<script type='text/javascript'>
					jQuery( document ).ready( function( jQuery ) {
						jQuery( '#wpbody' ).before( '" . $plugin_html . "' );
					} );
				</script>";
			
				break;
			
			case 'plugin-search-result':
				//this should be fast as a transient
				$api_args = array(
					'mojo-platform' 	=> 'wordpress',
					'mojo-type' 		=> '',
					'mojo-items' 		=> 'popular-services'
				);
				$result = mm_api( $api_args, array( 'count' => '30' ) );
				if( ! is_wp_error( $result ) ) {

					//this makes me wanna cry
					$descriptions = array(
						'530782e3-1388-4e6a-a8ac-6f7b0a140b28' => 'WooCommerce will transform your WordPress site into a full eCommerce store that is simple to use. WooCommerce comes ready for all the features you need to operate such as a shipping calculator, easy checkout, rating system, reporting, tax options, and much more. There is a reason WooCommerce is the leading eCommerce WordPress plugin today!',//woocommerce
						'530697a6-92cc-4329-9cdd-21e40a140b28' => 'Google Analytics is a powerful tool that is free to use when you have a Google account. For many people, integrating Google Analytics can be a challenge and that is why we are offering help from our professional service team. You can follow users on your site in real time and get in depth analysis as to their behaviors when browsing your website.',//analytics
						'530788ba-c450-45eb-b154-47ce0a141528' => 'Google loves to see a list of every page on your site and how those pages relate to each other. Not only does it help Google find each page it also shows them understand what is and is not important and that‘s how they determine which pages show up in the Google search results. As an added bonus, it helps your users find what they‘re looking for within your site. ',//sitemap
						'53d7ea4d-e52c-42fe-9b7e-5ed50a141528' => 'As a platform, WordPress offers some sound SEO components to rank high in the search engines like Google. With the WordPress SEO plugin by Yoast, you‘re guided within each post and page your publish inside your WordPress site. The plugin ensures your content is fully optimized for the search engines.',//seo
						'53078511-1974-470c-8ed5-43500a141528' => 'BuddyPress is a WordPress plugin that takes your WordPress site and adds a full-blown social network. By using BuddyPress, you instantly get access to user profiles, activity streams, user groups and much more functionality. You can use your existing WordPress site and add BuddyPress on top of it for your personal social network.',//buddypress
						'530783b3-d4d8-4823-ad1e-70310a140b28' => 'bbPress is a WordPress plugin that makes it easy to add a forum to your website. From within your WordPress admin, you can easily setup and moderate forums, topics and replies. All bbPress features integrate nicely with your current users and pages.',//bbpress
						'53078468-fc10-45de-b813-70b70a140b28' => 'Adding a WordPress contact form to your website will make it easy for you to have your users contact you directly without you having to give away your email address. Contact forms also make it easy for you to view your contacts and leads directly from the your WordPress dashboard.',//contact
						'530786ea-27b8-4f1b-bc94-46650a141528' => 'Does your business have a physical location? Then you probably want your customers to locate you, and Google Maps can make that happen. Let us add Google Maps to your WordPress website for you. We can add up to 10 different locations with include custom navigation. After we install Google Maps you‘ll be able to make sure that everyone knows just how to find your business.',//map
						'53b4501f-180c-4bd3-9b3f-56cb0a141528' => 'On average 30,000 websites are hacked every day! Unfortunately, WordPress can be an easy target. Let us help you drastically increase your site‘s security. ',//secure
						'53d7e760-5140-4761-ac5b-5bd00a141528' => 'This service adds Facebook social plugins to your WordPress site. With this service, you can attach your WordPress site to a Facebook account and easily share new posts to your Facebook timeline.',//facebook
						'53e00b04-03b8-4025-bb75-173c0a141528' => 'Backing up your website is one of the single most important things you can do. With this backup service we will set things up so you can continually backup your WordPress website. So if your site gets hacked or you make an accidental change you’ll be able to backup your site to when it was in tip top shape.',//backup
						'53ee5b7a-aef4-44f3-a4dd-48b90a140b28' => '<strong>Improve Usability and site traffic with a Faster Website. </strong>Is your WordPress website taking a long time to load? Did you know that Google and other search engines will actually send you more traffic if it loads quickly? Did you also know that having a faster site means visitors will stay on your site longer so you can be even more successful? It‘s True! Let our pros go through your site and speed it up.',//speed
						'53ee5ec2-eff0-441a-944d-52050a140b28' => '<strong>Have a great theme, but don’t like the colors?</strong> Simply tell us which colors you’d like to replace and we’ll swap out up to 3 colors throughout your entire site. This is a great way to ensure that your theme properly reflects your unique style and brand.',//branding
						'53ee5dce-e2ec-4697-a09a-52050a140b28' => '<strong>Wish someone else would write your content for you?</strong> We will! In fact we have an amazing team of college grads and English majors who just love writing content (Weird, right?). You’ve probably been meaning to write out the content yourself for a while now, but you never seem to have the time to finish it. Answer a few simple questions and our team will write 100 words of amazing content and add it to any page of your site.'//copywrite
					);

					$items = json_decode( $result['body'] );

					foreach( $items as $item ) {
						if( $item->id == $plugin['id'] ) {
							$service = $item;
						}
					}

					if( isset( $service ) && isset( $descriptions[ $plugin['id'] ] ) ) {
						$plugin_html = '
						<div class="plugin-card" style="border-color: #0074a2;">
							<div class="plugin-card-top" style="border-bottom: 1px solid #0074a2;">
								<a target="_blank" href="' . $link . '"><img class="plugin-icon" src="' . $service->images->square_thumbnail_url . '"></a>
								<div class="name column-name">
									<h4><a href="' . $link . '">' . $service->name . '</a></h4>
									<div class="action-links">
										<ul class="plugin-action-buttons">
											<li>
												<a aria-label="' . esc_attr( $service->name ) . '" href="' . $link . '" class="button">More Details</a>
											</li>
											<li>
												<form method="POST" target="_blank" action="' . mm_build_link( "https://www.mojomarketplace.com/cart", array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'item_' . $api_args['mojo-items'] . '_plugin_search' ) ) . '" class="item_plugin_search_' . mm_title_to_slug( $item->name ) . '">
													<input type="hidden" name="data[CartItem][item_id]" value="' . esc_attr( $service->id ) . '"/>
													<input class="button" type="submit" value="Purchase"/>
												</form>
											</li>
										</ul>	
									</div>
								</div>
								<div class="desc column-description">
									<p>' . $descriptions[ $plugin['id'] ] . '</p>
									<p class="authors"> <cite>By <a href="' . mm_build_link( 'https://mojomarketplace.com/', array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'author_plugin_search' ) ) . '">MOJO Marketplace</a></cite></p>
								</div>
							</div>
							<div class="plugin-card-bottom">
								<div class="column-downloaded">
									' . $service->sales_count . ' downloads
								</div>
							</div>
						</div>';

						$plugin_html = mm_minify( $plugin_html );
						
						echo "
						<script type='text/javascript'>
							jQuery( document ).ready( function( $ ) {
								$( '#the-list' ).prepend( '" . $plugin_html . "' );
								$( '.plugin-card:last-of-type' ).hide();
							} );
						</script>";
					}
				}
				break;

			default:
				add_action( 'admin_notices', 'mm_plugin_search_notice' );
				break;
		}
	}
}
add_action( 'admin_head-plugin-install.php', 'mm_plugin_search_offer', 40 );

function mm_test_load_search_test() {
	//at this point there should be 60% of the base left then we take 33%(really20) then 50% of the remaining 40 then 100% of the remaining 20
	//this should give us a 20/20/20 test
	mm_ab_test_inclusion( 'plugin-search-banner', md5( 'plugin-search-banner' ), 33, WEEK_IN_SECONDS * 4 );
	mm_ab_test_inclusion( 'plugin-search-result', md5( 'plugin-search-result' ), 50, WEEK_IN_SECONDS * 4 );
	mm_ab_test_inclusion( 'plugin-search-notice', md5( 'plugin-search-notice' ), 100, WEEK_IN_SECONDS * 4 );
}
add_action( 'admin_init', 'mm_test_load_search_test' );