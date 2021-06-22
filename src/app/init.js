/**
 * WordPress dependencies
 */
import { TAB } from '@wordpress/keycodes';

/**
 * Add <body> class for a11y styles
 */
const bwaDetectTabNavigating = () => {
	const bwaHandleFirstTab = ( event ) => {
		if ( event.keyCode === TAB ) {
			document.body.classList.add( 'is-tabbing' );
			window.removeEventListener( 'keydown', bwaHandleFirstTab );
		}
	}
	window.addEventListener( 'keydown', bwaHandleFirstTab );
}

const Init = () => {
 bwaDetectTabNavigating();
};

export default Init;
