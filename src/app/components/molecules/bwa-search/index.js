import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SearchIcon } from '@app/assets';
import './style.scss';

export default function BWASearch( { onChange, value = '' } ) {
	const [ query, setQuery ] = useState( value );

	return (
		<form className="search-box" onSubmit={ ( e ) => {
			e.preventDefault();
			onChange( e.target.querySelector( '.search-box__input' ).value );
		} }>
			<label>
				<SearchIcon className="search-box__icon" />
				<span className="search-box__label sr-only">{ __( 'Search', 'bluehost-wordpress-plugin' ) }</span>
				<input
					className="search-box__input"
					type="search"
					placeholder={ __( 'Search', 'bluehost-wordpress-plugin' ) }
					value={ query }
					onChange={ ( e ) => setQuery( e.target.value ) }
				/>
			</label>
		</form>
	);
}
