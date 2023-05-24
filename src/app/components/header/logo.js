import { Button } from '@wordpress/components';
import { Heading } from '../../components';
import { ReactComponent as Brand } from '../../../../assets/svg/bluehost-logo.svg';
import { delay } from 'lodash';

const Mark = () => {
	const defocus = () => {
		const button = document.querySelector( '.logo-mark' );
		delay( () => {
			if ( null !== button ) {
				button.blur();
			}
		}, 500 );
	};
	return (
		<Button
			icon={ <Brand className="wppb-logo" /> }
			style={ { height: '39px' } }
			iconSize={ 39 }
			onMouseUp={ defocus }
			className="logo-mark"
			href="#/home"
		/>
	);
};

const Logo = () => {
	return (
		<div className="wppb-logo-wrap">
			<Mark />
			<Heading level="2" className="screen-reader-text">
				{ __( 'Bluehost WordPress Plugin', 'wp-plugin-bluehost' ) }
			</Heading>
		</div>
	);
};

export default Logo;
