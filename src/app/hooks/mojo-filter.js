import { filter } from 'lodash';

/**
 * Mojo filter functionality.
 *
 * @param {Array} favorites
 * @return {Array}
 */
export default function useMojoFilter( favorites ) {
	/**
  * Filter by favorites.
  *
  * @param {Array} items
  * @return {Array}
  */
	function filterByFavorites( items ) {
		return filter( items, ( item ) => favorites.includes( item.id ) );
	}

	/**
  * Filter using a specific method.
  *
  * @param {Array} items
  * @param {string} method
  * @return {Array}
  */
	function filterBy( items, method ) {
		switch ( method ) {
			case 'favorites':
				return filterByFavorites( items );
			default:
				return items;
		}
	}

	return [ filterBy ];
}
