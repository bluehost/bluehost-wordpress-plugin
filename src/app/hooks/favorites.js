/**
 * External dependencies
 */
import without from 'lodash/without';
/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Favorites functionality hook
 *
 * @param {Array} initialFavorites
 * @return {Array}
 */
export default function useFavorites( initialFavorites = [] ) {
	const [ favorites, setFavorites ] = useState( initialFavorites );

	/**
	 * Add a favorite by ID.
	 *
	 * @param {string} id
  */
	function addFavorite( id ) {
		setFavorites( [ ...favorites, id ] );
	}

	/**
  * Check if favorite exists by ID.
  *
  * @param {string} id
  * @return {boolean}
  */
	function hasFavorite( id ) {
		return favorites.includes( id );
	}

	/**
  * Remove a favorite by ID.
  *
  * @param {string} id
  */
	function removeFavorite( id ) {
		setFavorites( without( favorites, id ) );
	}

	/**
  * Toggle a favorite by ID.
  *
  * @param {string} id
  */
	function toggleFavorite( id ) {
		hasFavorite( id ) ? removeFavorite( id ) : addFavorite( id );
	}

	return [ { favorites }, { addFavorite, hasFavorite, removeFavorite, setFavorites, toggleFavorite } ];
}
