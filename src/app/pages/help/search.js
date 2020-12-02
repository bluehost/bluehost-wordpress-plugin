import { Fragment, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import algoliasearch from 'algoliasearch/lite';
import { join } from 'lodash';
import { createInfiniteHitsSessionStorageCache, Configure, InstantSearch } from 'react-instantsearch-dom';
import { sendEvent } from '@app/functions';

import SearchForm from './search-form';
import SearchFilters from './search-filters';
import SearchResults from './search-results';

const searchClient = algoliasearch(
	'AVE0JWZU92', // ALGOLIA_APP_ID,
	'92e960b820b03fb532d5f440191ec0fe', // ALGOLIA_SEARCH_KEY
);

const sessionStorageCache = createInfiniteHitsSessionStorageCache();

const SearchPage = () => {

	const isFirstRun = useRef(true);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchState, setSearchState] = useState({query: searchQuery});
	const [filters, setFilters] = useState(['post_type:post']);
	const [category, setCategory] = useState('Websites');

	useEffect(() => {
		if (category) {
			setFilters(['post_type:post', `taxonomies.category:${ category }`]);
		} else {
			setFilters(['post_type:post']);
		}
	}, [category]);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		sendEvent({action: 'resource-center-search', query: {text: searchQuery, category}});
	}, [searchQuery, category]);

	return (
		<Fragment>
			<InstantSearch
				indexName={ 'bh_rc_searchable_posts' } // ALGOLIA_INDEX_NAME
				searchClient={ searchClient }
				searchState={ searchState }
				onSearchStateChange={ setSearchState }
			>
				<Configure
					hitsPerPage={ 6 }
					filters={ join(filters, ' AND ') }
					distinct
				/>
				<SearchForm
					defaultRefinement={ searchQuery }
					onSubmit={ (value) => setSearchQuery(value) }
				/>
				<SearchFilters
					defaultValue={ category }
					group="taxonomies.user_level_tax"
					label={ __('Filter by', 'bluehost-wordpress-plugin') }
					onChange={ (value) => setCategory(value) }
					options={ ['Websites', 'Marketing', 'Business'] }
				/>
				<SearchResults cache={ sessionStorageCache } />
			</InstantSearch>
		</Fragment>
	);
}

export default SearchPage;
