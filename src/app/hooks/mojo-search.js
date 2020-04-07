import { useState } from '@wordpress/element';
import Fuse from 'fuse.js';

export default function useMojoSearch( initialQuery = '' ) {
	const [ query, setQuery ] = useState( initialQuery );

	function search( items ) {
		if ( ! query ) {
			return items;
		}
		const options = {
			threshold: 0.1,
			keys: [
				'name',
				'short_description',
				'features',
				'tags',
			],
		};
		const fuse = new Fuse( items, options );
		return fuse.search( query );
	}

	return [ { query }, { search, setQuery } ];
}
