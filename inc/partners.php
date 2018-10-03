<?php

/* 
 * Mojo/Bluehost Partners code
 */

 // WPForms Upgrade Affiliate link
function mm_wpforms_upgrade_affiliate_link( $url ) {
    return 'http://www.shareasale.com/r.cfm?B=837827&U=1258907&M=64312&urllink=' . rawurlencode( $url );
} 
add_filter( 'wpforms_upgrade_link', 'mm_wpforms_upgrade_affiliate_link' );
