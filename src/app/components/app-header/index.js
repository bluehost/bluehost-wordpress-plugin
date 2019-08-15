/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { AppNavLink as NavLink } from '@/components';
import { Component } from '@wordpress/element';
import { ReactComponent as BluehostLogo } from '@/assets/bluehost.svg';
import { ReactComponent as HelpIcon } from '@/assets/question-circle-regular.svg';
/**
 * Internal dependencies
 */
import './style.scss';
import UserDropdown from './user-dropdown'
import MobileMenu from './mobile-menu'

class AppHeader extends Component {
	render() {
		return (
			<header id="bluehost-header">
				<div className="col">
					<div id="bluehost-logo-wrap">
						<NavLink to="/home" activeClassName="is-home">
							<BluehostLogo />
						</NavLink>
					</div>
					<div id="bluehost-nav-wrap">
						<div className="bluehost-nav-wrap-element help">
							<a href="https://my.bluehost.com/hosting/help"><HelpIcon /></a>
						</div>
						<UserDropdown />
						<div className="bluehost-nav-wrap-element mobile-toggle">
							<MobileMenu />
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default AppHeader;
