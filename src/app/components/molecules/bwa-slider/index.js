import './style.scss';

import { Children } from '@wordpress/element';
import { default as SlickSlider } from 'react-slick';

export default function BWASlider( { children, settings = {} } ) {
	return (
		<SlickSlider { ...settings }>
			{ Children.map( children, ( item ) => <div>{ item }</div> ) }
		</SlickSlider>
	);
}
