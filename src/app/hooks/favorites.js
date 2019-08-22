import {without} from 'lodash';
import {useState} from '@wordpress/element';

/**
 * Favorites functionality.
 *
 * @param {Array} initialFavorites
 * @returns {Array}
 */
export default function useFavorites(initialFavorites = []) {

    const [favorites, setFavorites] = useState(initialFavorites);

    /**
     * Add a favorite by ID.
     *
     * @param {String} id
     */
    function addFavorite(id) {
        setFavorites([...favorites, id]);
    }

    /**
     * Check if favorite exists by ID.
     *
     * @param {String} id
     * @returns {boolean}
     */
    function hasFavorite(id) {
        return favorites.includes(id);
    }

    /**
     * Remove a favorite by ID.
     *
     * @param {String} id
     */
    function removeFavorite(id) {
        setFavorites(without(favorites, id));
    }

    /**
     * Toggle a favorite by ID.
     *
     * @param {String} id
     */
    function toggleFavorite(id) {
        hasFavorite(id) ? removeFavorite(id) : addFavorite(id);
    }

    return [{favorites}, {addFavorite, hasFavorite, removeFavorite, setFavorites, toggleFavorite}];
}