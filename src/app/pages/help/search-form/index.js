import React, { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchIcon } from '@app/assets';

const SearchBox = ({defaultRefinement, onSubmit, refine}) => {

	const [query, setQuery] = useState(defaultRefinement);

	const submitHandler = (e) => {
		e.preventDefault();
		refine(query);
		onSubmit(query);
	};

	return (
		<form
			action=""
			className="resources-search-form"
			noValidate
			onSubmit={ submitHandler }
			role="search"
		>
			<input
				type="text"
				placeholder={ __('Search Resources', 'bluehost-wordpress-plugin') }
				value={ query }
				onChange={ (e) => setQuery(e.target.value) }
				aria-label={ __('Search', 'bluehost-wordpress-plugin') }
			/>
			<button type="submit">
				<SearchIcon />
				<span className="screen-reader-text">
					{ __('Search Resources', 'bluehost-wordpress-plugin') }
				</span>
			</button>
		</form>
	);
}

const SearchForm = connectSearchBox(SearchBox);

export default SearchForm;
