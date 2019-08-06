/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { AppButton as Button } from '@/components';
import { ReactComponent as BlueHostLogo } from '@/assets/bluehost.svg';

/**
 * Internal dependencies
 */
import './style.scss';

const AppHeader = () => (
	<header id="eig-header">
		<div className="col">
			<div id="eig-logo-wrap">
				<BlueHostLogo />
			</div>
			<div style={{ float: 'right', position: 'relative', right: '1rem', top: '-2rem' }}>
				<Button href="https://my.bluehost.com" isPrimary>Go to Bluehost Account</Button>
			</div>
		</div>
	</header>
);

export default AppHeader;
