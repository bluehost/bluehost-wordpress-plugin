import {filter} from 'lodash';

/**
 * Mojo filter functionality.
 *
 * @param {Array} favorites
 * @returns {Array}
 */
export default function useMojoFilter(favorites) {

    /**
     * Filter by favorites.
     *
     * @param {Array} items
     * @returns {Array}
     */
    function filterByFavorites(items) {
        return filter(items, (item) => favorites.includes(item.id));
    }

    /**
     * Filter using a specific method.
     *
     * @param {Array} items
     * @param {String} method
     * @returns {Array}
     */
    function filterBy(items, method) {
        switch (method) {
            case 'favorites':
                return filterByFavorites(items);
            default:
                return items;
        }
    }

    return [filterBy];
}