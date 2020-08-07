/**
 * Set Webpack Public Path via PHP-written value on the window object.
 * 
 * @see bluehost-wordpress-plugin/inc/
 */
if ( 'undefined' !== typeof window.bluehostAppPublicPath ) {
    __webpack_public_path__ = window.bluehostAppPublicPath;
}