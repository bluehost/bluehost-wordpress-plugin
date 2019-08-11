/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { AppButton as Button, AppNavLink as NavLink } from '@/components';
import { Dropdown } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { ReactComponent as BluehostLogo } from '@/assets/bluehost.svg';
import { ReactComponent as AstronautIcon } from '@/assets/user-astronaut-light.svg';
import { ReactComponent as HelpIcon } from '@/assets/question-circle-regular.svg';
import { ReactComponent as BillingIcon } from '@/assets/credit-card-regular.svg';
import { ReactComponent as ProductsIcon } from '@/assets/box-full-regular.svg';
import { ReactComponent as SecurityIcon } from '@/assets/shield-check-regular.svg';
import { ReactComponent as ValidationIcon } from '@/assets/id-card-alt-regular.svg';
import { ReactComponent as HamburgerIcon } from '@/assets/hamburger.svg';
import { ReactComponent as CloseIcon } from '@/assets/close.svg';

/**
 * Internal dependencies
 */
import './style.scss';
import MobileMenu from './mobile-menu'

const NavDropdown = () => (
	<Dropdown
		className="bluehost-nav-wrap-element user-menu"
		contentClassName="bluehost-nav-popup"
		position="120px 24px"
		renderToggle={ ( { isOpen, onToggle } ) => (
				<AstronautIcon onClick={ onToggle } aria-expanded={ isOpen } />
		) }
		renderContent={ () => (
			<div id="bluehost-nav-popup-wrap">
				<div id="bluehost-nav-popup-inner">
					<ul>
						<li><a href="https://my.bluehost.com/hosting/app"><span className="bluehost-nav-popup-nav-icon gray"><AstronautIcon /></span><span className="bluehost-nav-popup-nav-text">Bluehost Account</span></a></li>
						<li><a href="https://my.bluehost.com/hosting/account_center#billing"><span className="bluehost-nav-popup-nav-icon blue"><BillingIcon /></span><span className="bluehost-nav-popup-nav-text">Billing</span></a></li>
						<li><a href="https://my.bluehost.com/hosting/account_center#products"><span className="bluehost-nav-popup-nav-icon dark-blue"><ProductsIcon /></span><span className="bluehost-nav-popup-nav-text">Products</span></a></li>
						<li><a href="https://my.bluehost.com/hosting/account_center#security"><span className="bluehost-nav-popup-nav-icon green"><SecurityIcon /></span><span className="bluehost-nav-popup-nav-text">Security</span></a></li>
						<li><a href="#"><span className="bluehost-nav-popup-nav-icon orange"><ValidationIcon /></span><span className="bluehost-nav-popup-nav-text">Validation Token</span></a></li>
					</ul>
				</div>
			</div>
		) }
	/>
);

class AppHeader extends Component {
	constructor(props) {
		super(props);
		this.toggleMobileMenu = this.toggleMobileMenu.bind( this );
		this.state = { mobileMenuActive: 0 };
	}

	toggleMobileMenu() {
		if ( this.state.mobileMenuActive ) {
			this.setState((state) => {
				return {mobileMenuActive: 0}
			});
			document.body.classList.remove('bluehost-mobile-menu')
		} else {
			this.setState((state) => {
				return {mobileMenuActive: 1}
			});
			document.body.classList.add('bluehost-mobile-menu')
		}
	}

	mobileIcon() {
		if ( 1 === this.state.mobileMenuActive ) {
			return <CloseIcon onClick={this.toggleMobileMenu} />;
		} else {
			return <HamburgerIcon onClick={this.toggleMobileMenu} />;
		}
	}

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
						<NavDropdown />
						<div className="bluehost-nav-wrap-element mobile-toggle">
							{this.mobileIcon()}
							{1 === this.state.mobileMenuActive && (
								<MobileMenu />
							)}
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default AppHeader;
