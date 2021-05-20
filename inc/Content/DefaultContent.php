<?php
/**
 * Default Content type set by &dcpage=
 * Ideal landing page is:
 * /wp-admin/post-new.php?post_type=page&dcpage=about&page_title=About+Us
 * /wp-admin/post-new.php?post_type=page&dcpage=home&page_title=Home
 * /wp-admin/post-new.php?post_type=page&dcpage=contact&page_title=Contact+Us
 */

namespace Bluehost\Content;

class DefaultContent {
	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * Valid string values for a context
	 *
	 * @var array
	 */
	protected static $contexts = array( 'about', 'contact', 'home' );
	
	/**
	 * Get class instance.
	 *
	 * @return \Bluehost\Content\DefaultContent|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof \Bluehost\Content\DefaultContent ) ) {
			self::$instance = new \Bluehost\Content\DefaultContent();
			self::$instance->primary_init();
		}

		return self::$instance;
	}
    
	/**
	 * Initialize class.
	 */
	protected function primary_init() {
        add_action( 'wp_loaded', array( DefaultContent::class, 'handle_default_content_page' ) );
        add_action( 'rest_api_init', array( DefaultContent::class, 'register_default_content_rest_endpoint' ) );
	}

    /**
     * Register custom rest endpoint to deliver or proxy default content
     */
    public static function register_default_content_rest_endpoint() {
        register_rest_route( 
            'bluehost/v1', 
            '/defaultcontent', 
            array(
                'methods' => 'GET',
                'callback' => array( DefaultContent::class, 'handle_default_content_endpoint' ),
                'permission_callback' => '__return_true',
            )
        );
    }

    /**
     * Endpoint callback
     * 
     * @param $request WP_REST_Request
     */
    public static function handle_default_content_endpoint( \WP_REST_Request $request ) {
        $page = $request['page'];

        $title   = null;
        $content = null;

        switch($page) {
            case 'home':
                $title = 'Home';
                // easy results from copy all block content
                $content = <<<BLOCKCONTENT
                <!-- wp:group {"className":"bh-instructions"} -->
                <div class="wp-block-group bh-instructions"><div class="wp-block-group__inner-container"><!-- wp:paragraph -->
                <p>Your website’s home page is your online storefront, billboard, and welcome mat. It’s where you make your first impression, so it’s important to get it right.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>This is the first thing you want your site visitors to see, so it should be engaging, helpful, and interesting. It could be as simple as the name of your company, or it might be tied to a promotion or sale that you’re running.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>Use this outline to fill in the content for your homepage:</p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul><li><strong>Header</strong><ul><li><strong>Hero image</strong> (this is the first thing your site visitors will see, so make it something good.)</li><li><strong>Headline</strong> (This is the most important thing you want people to read.)</li><li><strong>Subheadline</strong> or short paragraph (this is usually one or two sentences that give the headline context — it’s optional but useful and very common).</li><li><strong>Call to action</strong> — think of this as a shortcut to move visitors directly to the next step whether that’s products, promotions, or subscriptions.</li></ul></li></ul>
                <!-- /wp:list -->

                <!-- wp:paragraph -->
                <p>What comes next will depend on the type of website you’re running.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>If your website is focused on selling a product or service, think about including:</p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul><li>“Reasons to believe” that help potential customers understand the value of your products.</li><li>Info on sales or promotions</li><li>Product listings and images</li><li>Testimonials or customer reviews</li></ul>
                <!-- /wp:list -->

                <!-- wp:paragraph -->
                <p>If your website is focused on blogging or sharing other information, you might want to include:</p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul><li>Key information that supports your header</li><li>Most recent posts or news</li><li>Most popular blog posts</li><li>Top portfolio pieces</li></ul>
                <!-- /wp:list -->

                <!-- wp:paragraph -->
                <p>Finish with a call to action (CTA).</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>This can be a button or link that directs people to their next steps. Depending on your site, this might be anything from contacting you, to setting up an appointment, looking at products, making a purchase, or subscribing to your blog or newsletter.</p>
                <!-- /wp:paragraph -->

                <!-- wp:image {"align":"center","width":600,"height":365,"sizeSlug":"large"} -->
                <div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 2520 1530'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop offset='0' stop-color='%23333'/%3E%3Cstop offset='.1' stop-color='%23aaa'/%3E%3Cstop offset='.8' stop-color='%23aaa'/%3E%3Cstop offset='1' stop-color='%23333'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' x1='693' x2='693.6' y1='823.5' y2='917.5' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3ClinearGradient id='c' x1='693' x2='693.6' y1='823.5' y2='917.5' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3Cfilter id='b' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3Cfilter id='e' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3Cfilter id='f' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3C/defs%3E%3Cpath style='marker:none' fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' color='%23000' enable-background='accumulate' filter='url(%23b)' overflow='visible' transform='matrix(2.02914 0 0 .71847 -50 822)'/%3E%3Cg transform='matrix(3.2252 0 0 3.2252 -554 -1612)'%3E%3Cpath style='marker:none' fill='url(%23d)' d='M641 823c-2 43-50 95-50 95h218s-49-52-50-95h-56z' color='%23000' enable-background='accumulate' overflow='visible' transform='translate(-51)'/%3E%3Crect style='marker:none' width='521.2' height='309.1' x='387.9' y='514' stroke='%23aaa' stroke-width='1.6' color='%23000' enable-background='accumulate' overflow='visible' rx='19' ry='18.3'/%3E%3Cpath style='marker:none' fill='%23fff' d='M409 534h480v270H409z' color='%23000' enable-background='accumulate' overflow='visible'/%3E%3Cpath style='marker:none' fill='%23aaa' d='M539 910h219v9H539z' color='%23000' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3Cg color='%23000'%3E%3Cpath fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' enable-background='accumulate' filter='url(%23e)' transform='matrix(.85876 0 0 .71847 92 907)' style='marker:none' overflow='visible'/%3E%3Cg transform='matrix(3.2252 0 0 3.2252 -368 -1606)'%3E%3Crect style='marker:none' width='200' height='266' x='247.1' y='671.4' stroke='%23aaa' stroke-width='.9' enable-background='accumulate' overflow='visible' rx='20' ry='20'/%3E%3Cpath style='marker:none' fill='%23fff' d='M264 687h167v222H264z' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' color='%23000' enable-background='accumulate' transform='matrix(.34001 0 0 .71847 88 960)' style='marker:none' filter='url(%23f)' overflow='visible'/%3E%3Cg color='%23000' transform='translate(-768 -2231) scale(3.99062)'%3E%3Crect style='marker:none' width='70' height='130.3' x='247.1' y='797.1' stroke='%23aaa' stroke-width='.8' enable-background='accumulate' overflow='visible' rx='7' ry='9.8'/%3E%3Cpath style='marker:none' fill='%23fff' d='M252 805h60v106h-60z' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="Placeholder image" width="600" height="365"/></figure></div>
                <!-- /wp:image --></div></div>
                <!-- /wp:group -->

                <!-- wp:heading {"level":1} -->
                <h1>[Name/Company Name]</h1>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>We’re dedicated to giving you the very best in [topic/product], [topic/product], and [topic/product]. Please reach out if you want to know more!</p>
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

                BLOCKCONTENT;
                break;

            case 'about':
                $title = 'About Us';
                // easy results from copy all block content
                $content = <<<BLOCKCONTENT
                <!-- wp:group {"className":"bh-instructions"} -->
                <div class="wp-block-group bh-instructions"><div class="wp-block-group__inner-container"><!-- wp:paragraph -->
                <p>Your “about me” or “about us” page is where people come to get to know you. It’s a great place to share how you got started and the reasons you do what you do. Ask yourself what your audience or customers might want to learn when they open your “about me” page, and go from there.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>In the next paragraphs, you’ll find sample, fill-in-the-blank content you can use to get a headstart writing your “about me” page. Keep in mind that original content tends to rank better in search engine results, so the more you personalize the content in your “about me” page, the better. Here are a few things to do on your “about me” page:</p>
                <!-- /wp:paragraph -->

                <!-- wp:list -->
                <ul><li>Welcome people to your page.</li><li>Tell a brief story of how you got started and why.</li><li>Let them know a bit about your brand and what makes it different.</li><li>Share photographs of yourself, your team, or your location.</li><li>Include a call to action — this could be an invitation to contact you, shop your store, or sign up for your newsletter.</li></ul>
                <!-- /wp:list --></div></div>
                <!-- /wp:group -->

                <!-- wp:paragraph -->
                <p>Welcome to [organization name]. We're dedicated to giving you the very best in [topic/product], with a focus on [brand differentiator 1], [brand differentiator 2], and [brand differentiator 3].</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>When we started in [founding date] our passion for [product or service type] drove us to [an action: create a product, start a community, etc.] Now we serve customers all over [your target market area: this could be a city, state, or the whole world], and are thrilled to share our passion with you.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>We hope you enjoy our [products/servcies]. If you have any questions or comments, please contact us [phone number, email, or link to contact form].</p>
                <!-- /wp:paragraph -->
                BLOCKCONTENT;
                break;

            case 'contact':
                $title = 'Contact Us';
                // easy results from copy all block content
                $content = <<<BLOCKCONTENT
                <!-- wp:paragraph -->
                <p>Please fill out the form below and we’ll be in touch.</p>
                <!-- /wp:paragraph -->
                
                <!-- wp:wpforms/form-selector {"formId":"5"} /-->
                BLOCKCONTENT;
                break;

            default:
                $title = $page;
                $content = 'Error: No Match Found for Specified Default Content Context';
        }

        return array(
            'title'   => $title,
            'content' => $content,
        );
    }

    /**
     * Manage dcpage param
     * 
	 * @return void
     */
	public static function handle_default_content_page() {
        // bail if no `dcpage` url parameter found, and not on add new page url
        if ( !isset( $_GET['dcpage'] ) ) {
            return;
        }
        
        // get context for default content
        $context = filter_input( INPUT_GET, 'dcpage', FILTER_SANITIZE_STRING );
        // bail if improper context
		if ( 
            !is_string( $context ) || 
            !in_array( $context, DefaultContent::$contexts )
        ) {
			return;
		}

        // check if existing page for this context already exists
        $dc_post_id = DefaultContent::does_dcpage_exist( $context );
        
        // if no about page already exists
        if ( false === $dc_post_id ) {
            // create a new draft page and set default block content
            $dc_post_id = DefaultContent::make_dc_page( $context );
        }
        
        // redirect link to page editor for this page
        $dc_post_edit_url = get_admin_url( 
            null, 
            'post.php?action=edit&post=' . $dc_post_id
        );

        $dc_post_edit_url.= '&tour=' . $context;

        if ( wp_safe_redirect( $dc_post_edit_url ) ) {
            exit;
        }
    
    }

    /**
     * Determine if dcpage already exists for this context
     * 
     * @param context:String - context of new page
     * 
     * @return - page id if so or false if none found
     */
    public static function does_dcpage_exist( $context ) {
        // check for existing page by context
        $dc_args = array(
            'posts_per_page' => 1,
            'post_type'      => 'page',
            'meta_key'       => 'dc_page',
            'meta_value'     => $context,
            'meta_compare'   => '=',
        );
        $dc_query = new \WP_Query( $dc_args );
        while ( $dc_query->have_posts() ) : 
            $dc_query->the_post();
            // return page id
            return get_the_id();
        endwhile;

        // none found, return false
        return false;
    }

    /**
     * Get Default Content and send to new page
     * 
     * @param context:String - context of new page
     * @return - id of new post
     */
    public static function make_dc_page( $context ) {
        // get default content via proxy api
        $request  = new \WP_REST_Request( 'GET', '/bluehost/v1/defaultcontent' );
        $request->set_query_params( [ 'page' => $context ] );
        $response = rest_do_request( $request );
        $server   = rest_get_server();
        $data     = $server->response_to_data( $response, false );
        
        $dc_post_content = $data['content'];
        $dc_post_title   = $data['title'];
        
        $new_post = array(
            'post_type'    => 'page',
            'post_title'   => $dc_post_title,
            'post_content' => $dc_post_content,
            'meta_input'   => array(
                'nf_dc_src'  => 'test',
                'nf_dc_page' => $context,
                'nf_dc_stat' => 'draft',
            ),
        );
        
        // create new post - id is returned
        return wp_insert_post( $new_post );
    }

}
