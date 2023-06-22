<?php
/**
 * Correct missing nfd_coming_soon and mm_coming_soon sync
 * 
 * Installers set a mm_coming_soon value - the plugin relies on the nfd_coming_soon value.
 * After 2.13.8 and before 3.0.3 the legacy mm_coming_soon and newer nfd_coming_soon did not sync anymore.
 * This release adds the sync but also must correct the values that may not be synced with this upgrade routine.
 * 
 * This sets the missing nfd_coming_soon value to match the mm_coming_soon, but also
 * takes care to not retroactively set a site that is already live to coming soon mode.
 * 
 * Variables: mm_coming_soon set by installers, nfd_coming_soon read/set by plugin:
 * 
 *                       nfd
 *            |'true'|'false'|false|
 *    'true'  |   2  |   4   |  3  |
 * mm 'false' |   6  |   1   |  5  |
 *     false  |   7  |   8   |  0  |
 *  
 * case 0. Both mm_cs and nfd_cs are undefined. Status: Live Site
 *     Not sure how we got here, but lets set the values to 'false'.
 * case 1. Both mm_cs and nfd_cs are 'false'. Status: Live Site
 *     These users are in the proper state, they installed before 3.0.0
 *     and didn't change their coming soon setting since updating to 3.0.x
 *     Nothing is needed and nothing upgrade routine will do nothing.
 * case 2. Both mm_cs and nfd_cs are 'true'. Status: Coming Soon
 *     These users are in the proper state, they installed before 3.0.0
 *     and didn't change their coming soon setting since updating to 3.0.x
 *     Nothing is needed and nothing upgrade routine will do nothing.
 * case 3. mm_cs is 'true', nfd_cs is missing because it hasn't been set. 
 *     These users installed after 2.13.8 but before 3.0.3 and didn't have a coming soon state properly set.
 *     Their site was live from the get go, we should leave these in a live state 
 *     In order to not mark a live site to a coming soon state in error.
 *     Set nfd_cs and mm_cs values both to 'false'.
 * case 4. mm_cs is 'true', nfd_cs is set to 'false' 
 *     These users installed after 2.13.8 but before 3.0.3 and didn't have a coming soon state properly set.
 *     Their site was live from the get go, they activated coming soon mode and then launched their site.
 *     Use nfd_cs to set mm_cs to match.
 * case 5. mm_cs is 'false', nfd_cs is false - not set.
 *     Not sure how we got here, but we should copy mm_cs value to nfd_cs value so they are consistent.
 *     Use mm_cs to set nfd_cs to match.
 * case 6. mm_cs is 'false', nfd_cs is 'true'
 *     These users installed after 2.13.8 but before 3.0.3 and didn't have a coming soon state properly set.
 *     Their site was live from the get go, they activated coming soon mode manually.
 *     Use nfd_cs to set mm_cs to match.
 * case 7. mm_cs is false (undefined), nfd_cs is 'true'
 *     Not sure how we got here, but we should copy nfd_cs value to mm_cs value so they are consistent.
 *     Use nfd_cs to set mm_cs to match.
 * case 8. mm_cs is false (undefined), nfd_cs is 'false'
 *     Not sure how we got here, but we should copy nfd_cs value to mm_cs value so they are consistent.
 *     Use nfd_cs to set mm_cs to match.
 **/

$mm_coming_soon = get_option( 'mm_coming_soon' );   // 'true', 'false' or false if not set
$nfd_coming_soon = get_option( 'nfd_coming_soon' ); // 'true', 'false' or false if not set

// If neither defined, explicitly define them to each to 'false'.
if ( $mm_coming_soon === false && $nfd_coming_soon === false ) { // case 0
    update_option( 'mm_coming_soon', 'false' );
    update_option( 'nfd_coming_soon', 'false' );
}
// If both are defined and they match, they are already synced and all is good.
elseif ( $mm_coming_soon === $nfd_coming_soon ) { // 1 & 2
    // all is good, do nothing
}
// If one is not defined but the other is, copy the defined value to the undefined to sync them.
elseif ( $nfd_coming_soon === false ) { // 3 & 5
    update_option( 'nfd_coming_soon', $mm_coming_soon );
} 
elseif ( $mm_coming_soon === false ) { // 7 & 8
    update_option( 'mm_coming_soon', $nfd_coming_soon );
}
// If they are both defined but differ, copy nfd_cs to mm_cs to sync them because the plugin setting was set.
elseif ( $mm_coming_soon === 'true' && $nfd_coming_soon === 'false' ) { // 4
    update_option( 'mm_coming_soon', $nfd_coming_soon );
}
elseif ( $mm_coming_soon === 'false' && $nfd_coming_soon === 'true' ) { // 6
    update_option( 'mm_coming_soon', $nfd_coming_soon );
}