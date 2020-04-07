/**
 * WordPress dependencies
 */
import { TAB } from '@wordpress/keycodes';

export default () => {
	/**
  * Register Helpers
  *
  * @param e
  */
	function bluehostHandleFirstTab( e ) {
		if ( e.keyCode === TAB ) {
			document.body.classList.add( 'bluehost-admin-keynav' );
			window.removeEventListener( 'keydown', bluehostHandleFirstTab );
		}
	}
	window.addEventListener( 'keydown', bluehostHandleFirstTab );
};
