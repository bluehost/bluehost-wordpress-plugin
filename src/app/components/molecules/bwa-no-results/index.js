import './style.scss';

import { ErrorStateImage } from '@app/assets';
import { __ } from '@wordpress/i18n';

export default function BWANoResults() {
	return (
		<div className="bluehost-no-results">
			<ErrorStateImage />
			<h2>{ __( 'No results found', 'bluehost-wordpress-plugin' ) }</h2>
			<p>{ __( 'It seems we can\'t find any results based on your search. Try again.', 'bluehost-wordpress-plugin' ) }</p>
		</div>
	);
}
