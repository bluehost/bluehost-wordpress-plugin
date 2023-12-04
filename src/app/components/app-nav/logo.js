import { Button } from '@wordpress/components';
import { Title } from '@newfold/ui-component-library';
import { ReactComponent as Brand } from 'Assets/svg/bluehost-logo.svg';
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
			icon={ <Brand className="wppbh-logo nfd-w-full nfd-h-auto" /> }
			style={ { width: '160px', height: 'auto' } }
			onMouseUp={ defocus }
			className="logo-mark nfd-p-0"
			href="#/home"
		/>
	);
};

const Logo = () => {
	return (
		<div className="wppbh-logo-wrap">
			<Mark />
			<Title as="h2" className="nfd-sr-only">
				{ __( 'Bluehost WordPress Plugin', 'wp-plugin-bluehost' ) }
			</Title>
		</div>
	);
};

export default Logo;
