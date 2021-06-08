<?php

namespace Newfold\Plugin\Tours;

use \__;
use \Newfold\Plugin\DefaultContent\Pages;

/**
 * REST API Endpoint
 */
class BlockEditorRestController extends \Newfold\Plugin\RestApi\BaseHiiveController {

    /**
     * Register Editor Tours REST API Routes
     */
    public function register_routes() {
        \register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/tours/blockeditor',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => array( $this, 'get_steps' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                    'args' => array(
                        'type' => array(
                            'description'       => 'Type of Editor Tour',
                            'type'              => 'string',
                            'enum'              => Pages::$contexts,
                            'default'           => 'about',
                            'sanitize_callback' => 'sanitize_text_field'
                        ),
                    ),
                )
            )
        );
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function get_steps( $request ) {
        $steps = array();
        $type = isset( $request['type'] ) ? $request['type'] : '';

        switch( $type ) {
            case 'about':
                $steps = $this->steps_about_page();
                break;
            case 'contact':
                $steps = $this->steps_contact_page();
                break;
            case 'home':
                $steps = $this->steps_home_page();
                break;
        }

        return \rest_ensure_response( $steps );
    }

    /**
     * Undocumented function
     *
     * @return boolean
     */
    public function has_permission() {
        return true;
    }

    /**
     * Shepherd.js Steps for About Page Tour
     *
     * @return array
     */
    private function steps_about_page() {
        return array(
            array(
                'id' => 'intro',
                'classes' => 'bluehost-large',
                'buttons' => array(
                    Shared::secondary_button( 'Exit', 'cancel' ),
                    Shared::primary_button( 'Get Started' ),
                ),
                'title' => __('Create an About Page with Bluehost', 'bluehost-wordpress-plugin'),
                'text'  => Shared::large_step( __('Your about page is where people get to know you.<br /><br />It\'s a great place to share how you got started and reasons you do what you do.', 'bluehost-wordpress-plugin') ),
            ),
            array(
                'id' => 'audience',
                'attachTo' => array( 'element' => '.block-editor-block-list__layout.is-root-container', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button(),
                ),
                'title' => __('Ask yourself what visitors should know', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( 'We have some fill-in-the-blanks here to get you started. Keep in mind original stories often rank better with search engines.' ),
                'scrollTo' => true,
                'canClickTarget' => false,
            ),
            array(
                'id' => 'inserter',
                'attachTo' => array( 'element' => '.edit-post-header-toolbar__inserter-toggle', 'on' => 'auto' ),
                'advanceOn' => array( 'selector' => '.edit-post-header-toolbar__inserter-toggle', 'event' => 'click' ),
                'buttons' => array(
                    Shared::secondary_button()
                ),
                'title' => __( 'Find the building blocks you\'ll need', 'bluehost-wordpress-plugin' ),
                'text' => Shared::step( __('<strong>Click the plus button right now</strong> to open the Block Inserter, your toolkit with building blocks and common layouts called Block Patterns.') ),
            ),
            array(
                'id' => 'inserter-opened',
                'attachTo' => array( 'element' => '.interface-interface-skeleton__secondary-sidebar', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button(),
                ),
                'scrollTo' => false,
                'popperOptions' => array(
                    'modifiers' => array(
                        array(
                            'name' => 'focusAfterRender',
                            'enabled' => false,
                        )
                    )
                ),
                'canClickTarget' => false,
                'title' => __('Show visitors who you are with media and embeds', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( __('Use photos, YouTube embeds, logos and social icons to weave a compelling story.', 'bluehost-wordpress-plugin')),
            ),
            array(
                'id' => 'fork',
                'buttons' => array(
                    Shared::primary_button('Get Started', 'complete'),
                ),
                'title' => __('Lets go!', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( 'Time to tackle those placeholders and tell the web who you are!' ),
            ),
        );
    }

    /**
     * Shepherd.js Steps for Contact Page Tour
     *
     * @return array
     */
    private function steps_contact_page() {
        return array(
            array(
                'id' => 'intro',
                'classes' => 'bluehost-large',
                'buttons' => array(
                    Shared::secondary_button( 'Exit', 'cancel' ),
                    Shared::primary_button( 'Get Started' ),
                ),
                'title' => __('Create a Contact Page with Bluehost', 'bluehost-wordpress-plugin'),
                'text'  => Shared::large_step( __('Forms power conversations and commerce across the web -- put yours to work for you today!', 'bluehost-wordpress-plugin') ),
            ),
            array(
                'id' => 'starter',
                'attachTo' => array( 'element' => '[data-type="wpforms/form-selector"]', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button(),
                ),
                'title' => __('We\'ve got the basics covered', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( 'We\'ve setup a simple form for you. Keep in mind short, simple forms are often best -- only add essential fields.' ),
                'scrollTo' => true,
                'canClickTarget' => false,
            ),
            array(
                'id' => 'show-wpforms-link',
                'attachTo' => array( 'element' => 'a.toplevel_page_wpforms-overview', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button(),
                ),
                'title' => __('Change fields and read submissions', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( 'Find your forms in your WordPress Admin. You can also change the email where your site will send submissions.' ),
                'scrollTo' => true,
                'canClickTarget' => false,
            ),
            array(
                'id' => 'show-wpforms-menu',
                'attachTo' => array( 'element' => '.toplevel_page_wpforms-overview .wp-submenu', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button(),
                ),
                'title' => __('Customize appearance, email settings & logic', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( 'You can customize email branding, prevent spam, fine-tune form behavior and check logs here too.' ),
                'scrollTo' => true,
                'canClickTarget' => false,
            ),
            array(
                'id' => 'final-polish',
                'attachTo' => array( 'element' => '.wpforms-gutenberg-panel-notice', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button('Got it', 'complete'),
                ),
                'title' => __('Don\'t forget to test!', 'bluehost-wordpress-plugin'),
                'text' => Shared::step( 'Check out this comprehensive guide to building and testing a form!' ),
                'scrollTo' => true,
                'canClickTarget' => false,
            ),
        );
    }

    /**
     * Shepherd.js Steps for Home Page Tour
     *
     * @return array
     */
    private function steps_home_page() {
        ob_start(); ?>
        <ul>
            <li><strong>Hero image</strong> (the first thing your site visitors will see, so make it good.)</li>
            <li><strong>Headline</strong> (the most important thing you want visitors to know.)</li>
            <li><strong>Subheadline</strong> (consider adding one or two sentences to give your headline more context.)</li>
            <li><strong>Call to action button</strong> (encourage your visitors to buy something, subscribe to something or learn more.)</li>
        </ul>
        <?php
        $header_contents = ob_get_clean();

        ob_start() ?>
        <ul>
            <li>“Reasons to believe” that help potential customers understand the value of your products.</li>
	        <li>Info on sales, promotions and incentives</li>
            <li>Product listings and images</li>
	        <li>Testimonials or customer reviews</li>
        </ul>
        <?php
        $mostly_selling = ob_get_clean();

        ob_start() ?>
        <ul>
            <li>Key information that supports your header</li>
	        <li>Most recent posts or news</li>
            <li>Most popular or select, curated blog posts</li>
	        <li>Top portfolio pieces, awards, certifications or other supporting materials</li>
        </ul>
        <?php
        $mostly_sharing = ob_get_clean();

        return array(
            array(
                'id' => 'intro',
                'classes' => 'bluehost-large',
                'buttons' => array(
                    Shared::secondary_button( 'Exit', 'cancel' ),
                    Shared::primary_button( 'Get Started' ),
                ),
                'title' => __('Create a Home Page with Bluehost', 'bluehost-wordpress-plugin'),
                'text'  => Shared::large_step( 
                    Shared::two_col(
                        __('Your website’s home page is your online storefront, billboard, and welcome mat. It’s where you make many first impressions, so it’s important to get it right.', 'bluehost-wordpress-plugin'),
                        __('It should be engaging, helpful, and interesting. It could be as simple as the name of your company, or it might be tied to a promotion or sale that you’re running.', 'bluehost-wordpress-plugin')
                    )
                 ),
            ),
            array(
                'id' => 'header',
                // 'classes' => 'bluehost-large',
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button(),
                ),
                'title' => __('Our formula for successful Home Page headers', 'bluehost-wordpress-plugin'),
                'text'  => Shared::step( $header_contents ),
            ),
            array(
                'id' => 'prompt',
                'buttons' => array(
                    Shared::secondary_button('Mostly selling', ''),
                    Shared::secondary_button('Mostly sharing', '')
                ),
                'title' => __('For this next section, help us understand your primary goal'),
                'text' => Shared::step('Is your main goal to sell a product or service? Or are you primarily sharing stories or information?')
            ),
            array(
                'id' => 'mostly-selling',
                'buttons' => array(
                    Shared::secondary_button(),
                    Shared::primary_button('Next', '')
                ),
                'title' => __("Great, let's put your website to work for you"),
                'text' => Shared::step( $mostly_selling )
            ),
            array(
                'id' => 'mostly-sharing',
                'buttons' => array(
                    Shared::secondary_button('Back', ''),
                    Shared::primary_button()
                ),
                'title' => __("Great, let's tell your story"),
                'text' => Shared::step( $mostly_sharing )
            ),
            array(
                'id' => 'finish-cta',
                'attachTo' => array( 'element' => '.wp-block.wp-block-buttons', 'on' => 'auto' ),
                'buttons' => array(
                    Shared::secondary_button('Back', ''),
                    Shared::primary_button('Get Started', 'complete')
                ),
                'title' => __("Guide users to your primary goal with a 'Call-to-Action' button"),
                'text' => Shared::step( __('This can be a button or link that directs people to their next steps. Depending on your site, this might be anything from contacting you, to setting up an appointment, looking at products, making a purchase, or subscribing to your blog or newsletter.', 'bluehost-wordpress-plugin' ) )
            )
        );
    }

}
