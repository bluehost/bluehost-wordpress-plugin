import { useState, useEffect } from '@wordpress/element';
import { chunk } from 'lodash';

/**
 * Paginates a collection of items.
 *
 * @param {Array} initialCollection
 * @param {number} initialItemsPerPage
 * @param {number} initialPageNumber
 * @return {Array}
 */
export default function usePaginator( initialCollection = [], initialItemsPerPage = 12, initialPageNumber = 1 ) {
	const [ collection, setCollection ] = useState( initialCollection );
	const [ items, setItems ] = useState( [] );
	const [ itemsPerPage, setItemsPerPage ] = useState( initialItemsPerPage );
	const [ pages, setPages ] = useState( [] );
	const [ pageCount, setPageCount ] = useState( 1 );
	const [ pageNumber, setPageNumber ] = useState( initialPageNumber );

	useEffect( () => {
		const chunks = chunk( collection, itemsPerPage );
		setPages( chunks );
		setPageCount( chunks.length );
	}, [ collection ] );

	useEffect( () => {
		setItems( pages[ pageNumber - 1 ] );
	}, [ pages, pageNumber ] );

	return [ { items, itemsPerPage, pageCount, pageNumber }, { setCollection, setItemsPerPage, setPageNumber } ];
}
