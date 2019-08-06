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
		</div>
	</header>
);

export default AppHeader;
