import { Dropdown } from '@wordpress/components';

import {
	AstronautIcon,
	BillingIcon,
	ProductsIcon,
	SecurityIcon,
	ValidationIcon
} from '@/assets';

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

export default NavDropdown;