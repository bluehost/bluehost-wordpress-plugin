<?php

namespace Bluehost\Tours;

use \__;

/**
 * REST API Endpoint
 */
class EditorToursApi extends \Bluehost\RestApi\BaseDefaultContent {

    /**
     * Register Editor Tours REST API Routes
     */
    public function register_routes() {
        \register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/tours',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => array( $this, 'get_steps' ),
                    'permission_callback' => array( $this, 'has_permission' ),
                    'args' => array(
                        'type' => array(
                            'description' => 'Type of Editor Tour',
                            'type' => 'string',
                            'enum' => array(
                                'about',
                                'contact',
                                'home',
                            ),
                            'default' => 'about',
                            'sanitize_callback' => 'sanitize_text_field'
                        ),
                    ),
                )
            )
        );
    }

    public function get_steps() {
        return \rest_ensure_response( $this->steps_about_page() );
    }

    public function has_permission() {
        return true;
    }

    /**
     * Shepherd.js Steps for About Page Tour
     *
     * @return void
     */
    private function steps_about_page() {
        return array(
            array(
                'id' => 'intro',
                'classes' => 'bluehost-large',
                'buttons' => array(
                    $this->secondary_button( 'Exit', 'cancel' ),
                    $this->primary_button( 'Get Started' ),
                ),
                'title' => __('Create an About Page with Bluehost', 'bluehost-wordpress-plugin'),
                'text'  => $this->large_step( __('Your about page is where people get to know you.<br /><br />It\'s a great place to share how you got started and reasons you do what you do.', 'bluehost-wordpress-plugin') ),
            ),
            array(
                'id' => 'audience',
                'attachTo' => array( 'element' => '.block-editor-block-list__layout.is-root-container', 'on' => 'auto' ),
                'buttons' => array(
                    $this->secondary_button(),
                    $this->primary_button(),
                ),
                'title' => __('Ask yourself what visitors should know', 'bluehost-wordpress-plugin'),
                'text' => $this->step( 'We have some fill-in-the-blanks here to get you started. Keep in mind original stories often rank better with search engines.' ),
                'scrollTo' => true,
                'canClickTarget' => false,
            ),
            array(
                'id' => 'inserter',
                'attachTo' => array( 'element' => '.edit-post-header-toolbar__inserter-toggle', 'on' => 'auto' ),
                'advanceOn' => array( 'selector' => '.edit-post-header-toolbar__inserter-toggle', 'event' => 'click' ),
                'buttons' => array(
                    $this->secondary_button()
                ),
                'title' => __( 'Find the building blocks you\'ll need', 'bluehost-wordpress-plugin' ),
                'text' => $this->step( __('<strong>Click the plus button right now</strong> to open the Block Inserter, your toolkit with building blocks and common layouts called Block Patterns.') ),
            ),
            array(
                'id' => 'inserter-opened',
                'attachTo' => array( 'element' => '.interface-interface-skeleton__secondary-sidebar', 'on' => 'auto' ),
                'buttons' => array(
                    $this->secondary_button(),
                    $this->primary_button(),
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
                'text' => $this->step( __('Use photos, YouTube embeds, logos and social icons to weave a compelling story.', 'bluehost-wordpress-plugin')),
            ),
            array(
                'id' => 'fork',
                'buttons' => array(
                    $this->primary_button('Get Started', 'complete'),
                ),
                'title' => __('Lets go!', 'bluehost-wordpress-plugin'),
                'text' => $this->step( 'Time to tackle those placeholders and tell the web who you are!' ),
            ),
            // array(
            //     'id' => 'org-name',
            //     'buttons' => array(
            //         $this->secondary_button(),
            //         $this->primary_button(),
            //     ),
            //     'title' => __('What is your site called?', 'bluehost-wordpress-plugin'),
            //     'text' => 'Perhaps a brand name or your name.<br /><input type="text" id="org-name" />',
            // ),
            // array(
            //     'id' => 'org-product',
            //     'buttons' => array(
            //         $this->secondary_button(),
            //         $this->primary_button(),
            //     ),
            //     'title' => __('What is your primary topic or product?', 'bluehost-wordpress-plugin'),
            //     'text' => 'Perhaps a brand name or your name.<br /><input type="text" id="org-product" />',
            // ),
            // array(
            //     'id' => 'org-diff',
            //     'buttons' => array(
            //         $this->secondary_button(),
            //         $this->primary_button(),
            //     ),
            //     'title' => __('What differentiate\'s you?', 'bluehost-wordpress-plugin'),
            //     'text' => 'What do you focus on and excel at?<br /><input type="text" id="brand-diff1" /><br /><input type="text" id="brand-diff2" /><br /><input type="text" id="brand-diff3" />',
            // ),
            // array(
            //     'id' => 'org-date',
            //     'buttons' => array(
            //         $this->secondary_button(),
            //         $this->primary_button(),
            //     ),
            //     'title' => __('When is your founding date?', 'bluehost-wordpress-plugin'),
            //     'text' => 'When did it all start? Today?<br /><input type="date" id="org-date" />',
            // ),
            // array(
            //     'id' => 'org-purpose',
            //     'buttons' => array(
            //         $this->secondary_button(),
            //         $this->primary_button(),
            //     ),
            //     'title' => __('What is the purpose of this site or your brand?', 'bluehost-wordpress-plugin'),
            //     'text' => 'Tell your visitors about your motivation: creating a product, starting a community, etc.<br /><textarea id="org-purpose" />',
            // ),
            // array(
            //     'id' => 'org-target',
            //     'buttons' => array(
            //         $this->secondary_button(),
            //         $this->primary_button(),
            //     ),
            //     'title' => __('What is the purpose of this site or your brand?', 'bluehost-wordpress-plugin'),
            //     'text' => 'Tell your visitors about your motivation: creating a product, starting a community, etc.<br /><textarea id="org-target" />',
            // )
        );
    }

    private function steps_contact_page() {

    }

    private function steps_home_page() {

    }

    private function secondary_button( $text = 'Back', $type = 'back' ) {
        return array(
            'classes' => 'components-button is-secondary',
            'text'    => $text,
            'type'    => $type,
        );
    }

    private function primary_button( $text = 'Next', $type = 'next' ) {
        return array(
            'classes' => 'components-button is-primary',
            'text'    => $text,
            'type'    => $type,
        );
    }

    private function step( $contents ) {
        $squares = '<div class="step-bluehost-squares"><img src="https://cdn.hiive.space/bluehost/mark.svg" /></div>';
        return '<div class="wrap-std">' . $contents . $squares . '</div>';
    }

    private function large_step( $contents ) {
        $logo = '<div class="step-bluehost-logo"><img src="https://cdn.hiive.space/bluehost/logo.svg" /></div>';
        return '<div class="wrap-large">'. $contents . $logo . '</div>';
    }

    private function two_col( $col1, $col2 ) {

    }
}
