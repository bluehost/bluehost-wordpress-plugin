<?php

namespace Newfold\Plugin\DefaultContent;

use Newfold\Plugin\RestApi\BaseHiiveController;

/**
 * Undocumented class
 */
class PagesRestController extends BaseHiiveController {

    /**
     * Undocumented function
     *
     * @return void
     */
    public static function init() {
        \register_rest_route( 
            'newfold/v1', 
            '/defaultcontent/pages', 
            array(
                'methods' => \WP_REST_Server::READABLE,
                'callback' => array( PagesRestController::class, 'callback' ),
                'permission_callback' => '__return_true',
                'args' => array(
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
     * Endpoint callback
     * 
     * @param $request WP_REST_Request
     */
    public static function callback( \WP_REST_Request $request ) {
        $page = $request['page'];

        $title   = null;
        $content = null;

        switch($page) {
            case 'home':
                $title = 'Home';
                // easy results from copy all block content
                $content = <<<BLOCKCONTENT
                <!-- wp:group {"className":"nf-instructions"} -->
                <div class="wp-block-group nf-instructions"><div class="wp-block-group__inner-container"><!-- wp:image {"align":"center","width":600,"height":365,"sizeSlug":"large"} -->
                <div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 2520 1530'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop offset='0' stop-color='%23333'/%3E%3Cstop offset='.1' stop-color='%23aaa'/%3E%3Cstop offset='.8' stop-color='%23aaa'/%3E%3Cstop offset='1' stop-color='%23333'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' x1='693' x2='693.6' y1='823.5' y2='917.5' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3ClinearGradient id='c' x1='693' x2='693.6' y1='823.5' y2='917.5' gradientUnits='userSpaceOnUse' xlink:href='%23a'/%3E%3Cfilter id='b' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3Cfilter id='e' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3Cfilter id='f' width='1.3' height='2.8' x='-.1' y='-.9' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='50.3'/%3E%3C/filter%3E%3C/defs%3E%3Cpath style='marker:none' fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' color='%23000' enable-background='accumulate' filter='url(%23b)' overflow='visible' transform='matrix(2.02914 0 0 .71847 -50 822)'/%3E%3Cg transform='matrix(3.2252 0 0 3.2252 -554 -1612)'%3E%3Cpath style='marker:none' fill='url(%23d)' d='M641 823c-2 43-50 95-50 95h218s-49-52-50-95h-56z' color='%23000' enable-background='accumulate' overflow='visible' transform='translate(-51)'/%3E%3Crect style='marker:none' width='521.2' height='309.1' x='387.9' y='514' stroke='%23aaa' stroke-width='1.6' color='%23000' enable-background='accumulate' overflow='visible' rx='19' ry='18.3'/%3E%3Cpath style='marker:none' fill='%23fff' d='M409 534h480v270H409z' color='%23000' enable-background='accumulate' overflow='visible'/%3E%3Cpath style='marker:none' fill='%23aaa' d='M539 910h219v9H539z' color='%23000' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3Cg color='%23000'%3E%3Cpath fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' enable-background='accumulate' filter='url(%23e)' transform='matrix(.85876 0 0 .71847 92 907)' style='marker:none' overflow='visible'/%3E%3Cg transform='matrix(3.2252 0 0 3.2252 -368 -1606)'%3E%3Crect style='marker:none' width='200' height='266' x='247.1' y='671.4' stroke='%23aaa' stroke-width='.9' enable-background='accumulate' overflow='visible' rx='20' ry='20'/%3E%3Cpath style='marker:none' fill='%23fff' d='M264 687h167v222H264z' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath fill='%231a1a1a' fill-opacity='.7' d='M1217 667c0 37-194 68-435 68-240 0-435-31-435-68s195-68 435-68c241 0 435 31 435 68z' color='%23000' enable-background='accumulate' transform='matrix(.34001 0 0 .71847 88 960)' style='marker:none' filter='url(%23f)' overflow='visible'/%3E%3Cg color='%23000' transform='translate(-768 -2231) scale(3.99062)'%3E%3Crect style='marker:none' width='70' height='130.3' x='247.1' y='797.1' stroke='%23aaa' stroke-width='.8' enable-background='accumulate' overflow='visible' rx='7' ry='9.8'/%3E%3Cpath style='marker:none' fill='%23fff' d='M252 805h60v106h-60z' enable-background='accumulate' overflow='visible'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="Placeholder image" width="600" height="365"/></figure></div>
                <!-- /wp:image --></div></div>
                <!-- /wp:group -->

                <!-- wp:heading {"level":1,"className":"nf-placeholder nf-highlight"} -->
                <h1 class="nf-placeholder nf-highlight">[Name/Company Name]</h1>
                <!-- /wp:heading -->

                <!-- wp:paragraph -->
                <p>We’re dedicated to giving you the very best in <span class="nf-placeholder nf-highlight">[topic/product]</span>, <span class="nf-placeholder nf-highlight">[topic/product]</span>, and <span class="nf-placeholder nf-highlight">[topic/product]</span>. Please reach out if you want to know more!</p>
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
                <!-- wp:paragraph -->
                <p>Welcome to <span class="nf-placeholder nf-highlight">[organization name]</span>. We're dedicated to giving you the very best in <span class="nf-placeholder nf-highlight">[topic/product]</span>, with a focus on <span class="nf-placeholder nf-highlight">[brand differentiator 1]</span>, <span class="nf-placeholder nf-highlight">[brand differentiator 2]</span>, and <span class="nf-placeholder nf-highlight">[brand differentiator 3]</span>.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>When we started in <span class="nf-placeholder nf-highlight">[founding date]</span> our passion for <span class="nf-placeholder nf-highlight">[product or service type]</span> drove us to <span class="nf-placeholder nf-highlight">[an action: create a product, start a community, etc.].</span> Now we serve customers all over <span class="nf-placeholder nf-highlight">[your target market area: this could be a city, state, or the whole world]</span>, and are thrilled to share our passion with you.</p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p>We hope you enjoy our <span class="nf-placeholder nf-highlight">[products/servcies]</span>. If you have any questions or comments, please contact us <span class="nf-placeholder nf-highlight">[phone number, email, or link to contact form]</span>.</p>
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
}
