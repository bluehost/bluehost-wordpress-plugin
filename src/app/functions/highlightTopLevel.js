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

export const handleWPMenuActiveHighlight = ( topLevelSlug ) => {
    removeWPMenuActiveHighlight();
    console.log( 'handleHighlight passed slug: ' + topLevelSlug);
    try {
        const liToActivate = document.querySelector( '[data-' + menuItemClass + '="' + topLevelSlug + '"]' );
        const bluehostWpSubMenuNode = document.querySelector( '#' + topLevelPage + ' ul' );
        if ( liToActivate && bluehostWpSubMenuNode ) {
            liToActivate.classList.add( 'current' );
            bluehostWpSubMenuNode.style = 'display: block;';
        }
    } catch ( e ) {
        console.error( e.message );
    }
}

export default handleWPMenuActiveHighlight;