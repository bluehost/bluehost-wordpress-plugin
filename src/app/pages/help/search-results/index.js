import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch-dom';

function getExcerpt(content, charLength) {
	if (content.length <= charLength) {
		return content;
	}
	return content.substr(0, charLength) + '...';
}

const More = ({hasMore, onClick}) => {
	if (!hasMore) {
		return null
	}
	return (
		<div className="button-container">
			<button
				className="components-button bluehost is-secondary is-link"
				onClick={ onClick }
			>
				{ __('More', 'bluehost-wordpress-plugin') }
			</button>
		</div>
	);
}

const Hits = connectInfiniteHits(
	({hasMore, hits, refineNext}) => {

		console.log(hits);

		if (!hits.length) {
			return (
				<p className="resource-search-no-results">
					{ __('There were no results for your query. Please try again.', 'bluehost-wordpress-plugin') }
				</p>
			);
		}

		return (
			<Fragment>
				<div className="resources-search-results">
					{
						hits.map(
							(
								{
									permalink,
									content,
									post_title: title,
								},
								index
							) => {

								const url = new URL(permalink);
								url.host = 'bluehost.com';

								return (
									<a
										className="resource-card"
										href={ url }
										key={ index }
										rel="noreferrer noopener"
										target="_blank"
									>
										<div
											className="resource-card__title"
											dangerouslySetInnerHTML={ {__html: title} }
										/>
										<div
											className="resource-card__description"
											dangerouslySetInnerHTML={ {__html: getExcerpt(content, 100)} }
										/>
									</a>
								);
							}
						)
					}
				</div>
				<More hasMore={ false } onClick={ refineNext } />
			</Fragment>
		);
	}
);

const SearchResults = connectStateResults(
	() => {
		return <Hits />;
	}
);


export default SearchResults;
