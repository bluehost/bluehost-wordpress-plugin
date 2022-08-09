<?php

namespace Newfold\Plugin\DefaultContent;

use \Newfold\Plugin\RestApi\BaseHiiveController;

/**
 * Undocumented class
 */
class PagesRestController extends BaseHiiveController {

	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function register_routes() {
		\register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/defaultcontent/pages',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'callback' ),
				'permission_callback' => array( $this, 'has_permission' ),
				'args'                => array(
					'page' => array(
						'type'              => 'string',
						'description'       => 'Type of default content page',
						'enum'              => Pages::$contexts,
						'default'           => 'about',
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			)
		);
	}

	/**
	 * Undocumented function
	 *
	 * @return boolean
	 */
	public function has_permission() {
		return \current_user_can( 'edit_posts' );
	}

	/**
	 * Endpoint callback
	 *
	 * @param \WP_REST_Request $request - WP_REST_Request
	 * @return Array - of title and content
	 */
	public function callback( \WP_REST_Request $request ) {
		$page = $request['page'];

		$title   = null;
		$content = null;

		switch ( $page ) {
			case 'home':
				$title = 'Home';
				// easy results from copy all block content
				ob_start();
				?>
				<!-- wp:group {"className":"nf-instructions"} -->
				<div class="wp-block-group nf-instructions"><div class="wp-block-group__inner-container"><!-- wp:image {"align":"center","width":600,"height":365,"sizeSlug":"large"} -->
				<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 2520 1530'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop offset='0' stop-color='%23333'/%3E%3Cstop offset='.1' stop-color='%23aaa'/%3E%3Cstop offset='.8' stop-color='%23aaa'/%3E%3Cstop offset='1' stop-color='%23333'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' x1='693' x2='693.6' y1='823.5' y2='917.5' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3ClinearGradient id='c' x1='693' x2='693.6' y1='823.5' y2='917.5' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3Cfilter id='b' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3Cfilter id='e' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3Cfilter id='f' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3C/defs%3E%3Cpath style='marker:none' fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' color='%23000' enable-background='accumulate' filter='url(%23b)' overflow='visible' transform='matrix(2.02914 0 0 .71847 -50 822)'/%3E%3Cg transform='matrix(3.2252 0 0 3.2252 -554 -1612)'%3E%3Cpath style='marker:none' fill='url(%23d)' d='M641 823c-2 43-50 95-50 95h218s-49-52-50-95h-56z' color='%23000' enable-background='accumulate' overflow='visible' transform='translate(-51)'/%3E%3Crect style='marker:none' width='521.2' height='309.1' x='387.9' y='514' stroke='%23aaa' stroke-width='1.6' color='%23000' enable-background='accumulate' overflow='visible' rx='19' ry='18.3'/%3E%3Cpath style='marker:none' fill='%23fff' d='M409 534h480v270H409z' color='%23000' enable-background='accumulate' overflow='visible'/%3E%3Cpath style='marker:none' fill='%23aaa' d='M539 910h219v9H539z' color='%23000' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3Cg color='%23000'%3E%3Cpath fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' enable-background='accumulate' filter='url(%23e)' transform='matrix(.85876 0 0 .71847 92 907)' style='marker:none' overflow='visible'/%3E%3Cg transform='matrix(3.2252 0 0 3.2252 -368 -1606)'%3E%3Crect style='marker:none' width='200' height='266' x='247.1' y='671.4' stroke='%23aaa' stroke-width='.9' enable-background='accumulate' overflow='visible' rx='20' ry='20'/%3E%3Cpath style='marker:none' fill='%23fff' d='M264 687h167v222H264z' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' color='%23000' enable-background='accumulate' transform='matrix(.34001 0 0 .71847 88 960)' style='marker:none' filter='url(%23f)' overflow='visible'/%3E%3Cg color='%23000' transform='translate(-768 -2231) scale(3.99062)'%3E%3Crect style='marker:none' width='70' height='130.3' x='247.1' y='797.1' stroke='%23aaa' stroke-width='.8' enable-background='accumulate' overflow='visible' rx='7' ry='9.8'/%3E%3Cpath style='marker:none' fill='%23fff' d='M252 805h60v106h-60z' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="Placeholder image" width="600" height="365"/></figure></div>
				<!-- /wp:image --></div></div>
				<!-- /wp:group -->

				<!-- wp:heading {"level":1,"id":"nf-1","className":"nf-placeholder nf-highlight"} -->
				<h1><span id="nf-1" class="nf-placeholder nf-highlight">Name/Company Name</span></h1>
				<!-- /wp:heading -->

				<!-- wp:paragraph -->
				<p>We're dedicated to giving you the very best in <span id="nf-2" class="nf-placeholder nf-highlight">topic/product</span>, <span id="nf-3" class="nf-placeholder nf-highlight">topic/product</span>, and <span id="nf-4" class="nf-placeholder nf-highlight">topic/product</span>. Please reach out if you want to know more!</p>
				<!-- /wp:paragraph -->

				<!-- wp:buttons -->
				<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-fill"} -->
				<div class="wp-block-button is-style-fill"><a class="wp-block-button__link" rel="/default-content/?p=4">Contact Us</a></div>
				<!-- /wp:button --></div>
				<!-- /wp:buttons -->

				<!-- wp:heading -->
				<h2>News</h2>
				<!-- /wp:heading -->

				<!-- wp:latest-posts {"displayPostContent":true,"excerptLength":20} /-->
				<?php
				$content = ob_get_clean();
				break;

			case 'about':
				$title = 'About';
				// easy results from copy all block content
				ob_start();
				?>
				<!-- wp:paragraph -->
				<p>Welcome to <span id="nf-1" class="nf-placeholder nf-highlight">organization name</span>. We're dedicated to giving you the very best in <span id="nf-2" class="nf-placeholder nf-highlight">topic/product</span>, with a focus on <span id="nf-3" class="nf-placeholder nf-highlight">brand differentiator 1</span>, <span id="nf-4" class="nf-placeholder nf-highlight">brand differentiator 2</span>, and <span id="nf-5" class="nf-placeholder nf-highlight">brand differentiator 3</span>.</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph -->
				<p>When we started in <span id="nf-6" class="nf-placeholder nf-highlight">founding date</span> our passion for <span id="nf-7" class="nf-placeholder nf-highlight">product or service type</span> drove us to <span id="nf-8" class="nf-placeholder nf-highlight">an action: create a product, start a community, etc</span>. Now we serve customers all over <span id="nf-9" class="nf-placeholder nf-highlight">your target market area: this could be a city, state, or the whole world</span>, and are thrilled to share our passion with you.</p>
				<!-- /wp:paragraph -->

				<!-- wp:paragraph -->
				<p>We hope you enjoy our <span id="nf-10" class="nf-placeholder nf-highlight">products/servcies</span>. If you have any questions or comments, please contact us <span id="nf-11" class="nf-placeholder nf-highlight">phone number, email, or link to contact form</span>.</p>
				<!-- /wp:paragraph -->
				<?php
				$content = ob_get_clean();
				break;

			case 'contact':
				$title = 'Contact';
				// easy results from copy all block content
				ob_start();
				?>
				<!-- wp:paragraph -->
				<p>Please fill out the form below and we'll be in touch.</p>
				<!-- /wp:paragraph -->

				<!-- wp:wpforms/form-selector {"formId":"0"} /-->
				<?php
				$content = ob_get_clean();
				break;

			case 'wpforms':
				$title = 'Contact Form';
				ob_start();
				?>
				{"fields":[{"id":"0","type":"name","label":"Name","format":"simple","description":"","required":"1","size":"medium","simple_placeholder":"","simple_default":"","first_placeholder":"","first_default":"","middle_placeholder":"","middle_default":"","last_placeholder":"","last_default":"","css":""},{"id":"1","type":"email","label":"Email","description":"","required":"1","size":"medium","placeholder":"","confirmation_placeholder":"","default_value":"","css":"","filter_type":"","allowlist":"","denylist":""},{"id":"2","type":"textarea","label":"Message","description":"","required":"1","size":"medium","placeholder":"","limit_count":"1","limit_mode":"characters","default_value":"","css":""}],"id":"91","field_id":3,"settings":{"form_title":"Contact","form_desc":"","form_class":"","submit_text":"Submit","submit_text_processing":"Sending...","submit_class":"","antispam":"1","ajax_submit":"1","notification_enable":"1","notifications":{"1":{"email":"{admin_email}","subject":"New Entry: {form_name}","sender_name":"{field_id=0}","sender_address":"{admin_email}","replyto":"{field_id=1}","message":"{all_fields}"}},"confirmations":{"1":{"type":"message","message":"Thanks for contacting us! We will be in touch with you shortly.","message_scroll":"1","page":"2","redirect":""}}},"meta":{"template":"contact"}}
				<?php
				$content = ob_get_clean();
				break;

			default:
				$title   = $page;
				$content = 'Error: No Match Found for Specified Default Content Context';
				break;
		}

		return array(
			'title'   => $title,
			'content' => $content,
		);
	}
}
