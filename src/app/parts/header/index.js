/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Project dependencies
 */
/**
 * External dependencies
 */
import { BluehostLogo, HelpIcon } from '@/assets';
import { AppNavLink as NavLink } from '@/components';
/**
 * Internal dependencies
 */
import './style.scss';
import DesktopDropdown from './desktop-dropdown';
import MobileSidebar from './mobile-sidebar';

const HeaderLogo = () => (
	<div id="bluehost-logo-wrap">
		<a href="https://my.bluehost.com/hosting/app" target="_blank" rel="noopener noreferrer">
			<BluehostLogo />
		</a>
	</div>
);

const HeaderIcons = () => (
	<div id="bluehost-nav-wrap">
		<div className="bluehost-nav-wrap-element help">
			<a href="https://my.bluehost.com/hosting/help" target="_blank"><HelpIcon /></a>
		</div>
		<DesktopDropdown />
		<MobileSidebar />
	</div>
);

const Header = () => (
	<header id="bluehost-header">
		<div className="col">
			<HeaderLogo />
			<HeaderIcons />
		</div>
	</header>
);

export default Header;
