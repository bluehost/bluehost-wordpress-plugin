import { getFragment } from '@wordpress/url';
import keyBy from 'lodash/keyBy';

const menuItemClass = 'bluehost-wp-menu-item';
const topLevelPage 	= 'toplevel_page_bluehost'; // wordpress-generated DOM ID

export const handleWPMenuAugmentation = ( topLevelPages ) => {
    const primaryNode = window.document.querySelector( '#' + topLevelPage );
        
    if ( 'undefined' !== typeof primaryNode.dataset && primaryNode.dataset.augmented ) {
        return; // if data-augmented="1", don't re-augment
    }

    augmentWPMenu(topLevelPages);

    primaryNode.setAttribute( 'data-augmented', 1 );
}

export const augmentWPMenu = ( topLevelPages ) => {
    const topLevelPagesByPath = keyBy( topLevelPages, 'path' );
    
    const menuItems = Array.from( window.document.querySelectorAll( '#' + topLevelPage + ' > ul > li' ) );
    menuItems.splice( 0, 2 ); // skip first two line items to only include submenu line items
    menuItems.forEach( function( li ) {
        const anchor = li.querySelector('a');
        const anchorPath = getFragment( anchor.href ).substring(1); // nix hash prefix from fragment
        const itemData = topLevelPagesByPath[ anchorPath ]; // use path to tap into page data from store
        li.classList.add( menuItemClass, itemData.slug );
        li.setAttribute( 'data-' + menuItemClass, itemData.slug );
        li.setAttribute( 'data-' + menuItemClass + '-path', anchorPath );
    } );

    try { // find top-level page item in menu, append
        const elem = window.document.querySelector( 'a.' + topLevelPage );
        if ( ! elem.href.includes('#/home') ) {
            elem.href = elem.href + '#/home';
        }
    } catch ( e ) {
        console.log( 'Couldn\'t find Bluehost Menu Element to swap href' );
    }
}

export default handleWPMenuAugmentation;