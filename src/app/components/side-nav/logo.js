import { Button } from '@wordpress/components';
import { Heading } from '..';
import { ReactComponent as Brand } from '../../../../assets/svg/blueprint-logo.svg';
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
			style={ { width: '160px', height: 'auto' } }
			onMouseUp={ defocus }
			className="logo-mark yst-p-0"
			href="#/home"
		/>
	);
};

const Logo = () => {
	return (
		<div className="wppb-logo-wrap">
			<Mark />
			<Heading level="2" className="screen-reader-text">
				{ __( 'Blueprint WordPress Plugin', 'wp-plugin-blueprint' ) }
			</Heading>
		</div>
	);
};

export default Logo;
