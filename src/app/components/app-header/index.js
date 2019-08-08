/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { AppButton as Button } from '@/components';
import { Dropdown } from '@wordpress/components';
import { ReactComponent as BlueHostLogo } from '@/assets/bluehost.svg';
import { ReactComponent as AstronautLogo } from '@/assets/user-astronaut-light.svg';
import { ReactComponent as HelpLogo } from '@/assets/question-circle-regular.svg';
import { ReactComponent as BillingLogo } from '@/assets/credit-card-regular.svg';
import { ReactComponent as ProductsLogo } from '@/assets/box-full-regular.svg';
import { ReactComponent as SecurityLogo } from '@/assets/shield-check-regular.svg';
import { ReactComponent as ValidationLogo } from '@/assets/id-card-alt-regular.svg';
import { ReactComponent as LogoutLogo } from '@/assets/sign-out-regular.svg';

/**
 * Internal dependencies
 */
import './style.scss';

const NavDropdown = () => (
	<Dropdown
		className="bluehost-nav-wrap-element"
		contentClassName="bluehost-nav-popup"
		position="120px 24px"
		renderToggle={ ( { isOpen, onToggle } ) => (
				<AstronautLogo onClick={ onToggle } aria-expanded={ isOpen } />
		) }
		renderContent={ () => (
			<div id="bluehost-nav-popup-wrap">
				<div id="bluehost-nav-popup-inner">
					<ul>
						<li><a href="https://my.bluehost.com/hosting/app"><span className="bluehost-nav-popup-nav-icon gray"><AstronautLogo /></span><span className="bluehost-nav-popup-nav-text">Bluehost Account</span></a></li>
						<li><a href="https://my.bluehost.com/hosting/account_center#billing"><span className="bluehost-nav-popup-nav-icon blue"><BillingLogo /></span><span className="bluehost-nav-popup-nav-text">Billing</span></a></li>
						<li><a href="https://my.bluehost.com/hosting/account_center#products"><span className="bluehost-nav-popup-nav-icon dark-blue"><ProductsLogo /></span><span className="bluehost-nav-popup-nav-text">Products</span></a></li>
						<li><a href="https://my.bluehost.com/hosting/account_center#security"><span className="bluehost-nav-popup-nav-icon green"><SecurityLogo /></span><span className="bluehost-nav-popup-nav-text">Security</span></a></li>
						<li><a href="#"><span className="bluehost-nav-popup-nav-icon orange"><ValidationLogo /></span><span className="bluehost-nav-popup-nav-text">Validation Token</span></a></li>
						<li><a href="#"><span className="bluehost-nav-popup-nav-icon red"><LogoutLogo /></span><span className="bluehost-nav-popup-nav-text">Logout</span></a></li>
					</ul>
				</div>
			</div>
		) }
	/>
);

const AppHeader = () => (
	<header id="bluehost-header">
		<div className="col">
			<div id="bluehost-logo-wrap">
				<BlueHostLogo />
			</div>
			<div id="bluehost-nav-wrap">
				<div className="bluehost-nav-wrap-element">
					<a href="https://my.bluehost.com/hosting/help"><HelpLogo /></a>
				</div>
				<NavDropdown />
			</div>
		</div>
	</header>
);

export default AppHeader;
