const topLevelPage 	= 'toplevel_page_bluehost'; // wordpress-generated DOM ID
const menuItemClass = 'bluehost-wp-menu-item'; // special classname for handling highlights

/**
 * Loop over all .bluehost-wp-menu-item, remove .current
 */
export const removeWPMenuActiveHighlight = () => {
    const bluehostWpMenuItems = Array.from( document.querySelectorAll( '#' + topLevelPage + ' .' + menuItemClass ) );
    bluehostWpMenuItems.forEach( function( menuItem ) {
        menuItem.classList.remove( 'current' );
    } );
}

/**
 * Based on 'slug' defined in Bluehost_Admin_App_Assets::get_top_level_pages(), highlight a top-level page.
 * @param {string} topLevelSlug 
 */
export const handleWPMenuActiveHighlight = ( topLevelSlug ) => {
    removeWPMenuActiveHighlight();
    try {
        const liToActivate = document.querySelector( '[data-' + menuItemClass + '="' + topLevelSlug + '"]' );
        const bluehostWpSubMenuNode = document.querySelector( '#' + topLevelPage + ' ul' );
        if ( liToActivate && bluehostWpSubMenuNode ) {
            liToActivate.classList.add( 'current' );
            bluehostWpSubMenuNode.style = 'display: block;';
        }
    } catch ( e ) {
        // 
    }
}

export default handleWPMenuActiveHighlight;