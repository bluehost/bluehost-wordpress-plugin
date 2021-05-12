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
                <!-- /wp:paragraph --></div></div>
                <!-- /wp:group -->
                
                <!-- wp:image {"id":23,"sizeSlug":"large"} -->
                <figure class="wp-block-image size-large"><img src="https://bhmultisite.com/content/uploads/sites/4/2021/04/hero-image.jpg" alt="" class="wp-image-23"/></figure>
                <!-- /wp:image -->
                
                <!-- wp:paragraph -->
                <p></p>
                <!-- /wp:paragraph -->
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