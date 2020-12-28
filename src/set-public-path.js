/**
 * Set Webpack Public Path via PHP-written value on the window object.
 * 
 * Usage: Make this the first import in the root file of a JS-powered feature and use wp_localize_script() to provide window object variable.
 * 
 * @see bluehost-wordpress-plugin/inc/
 */
if ( 'undefined' !== typeof window.bluehostPluginPublicPath ) {
    __webpack_public_path__ = window.bluehostPluginPublicPath;
}