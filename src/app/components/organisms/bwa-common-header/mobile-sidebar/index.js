import './style.scss';

import {
	BluehostLogo,
	CloseIcon,
	HelpIcon,
	MenuIcon,
	UserIcon,
} from '@app/assets';
import {
	BWAButton as Button,
	BWANavLink as NavLink,
} from '@app/components/atoms';
import { dispatch, useSelect } from '@wordpress/data';

import { Modal } from '@wordpress/components';
import { addUtmParams, userTrigger } from '@app/functions';
import userMenu from '@app/menus/user';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const PrimaryMenu = () => {
	const topLevelPages = useSelect( select => {
		return select('bluehost/plugin').getTopLevelPages();
	});
	return (
		<ul className="main">
			{ topLevelPages.map(
				(item) => (
					item.inapp && !item.action ?
					<li className={ ['tab ' + item.slug] } key={ item.slug }>
						<NavLink to={ item.path } activeClassName="is-active">{ item.label }</NavLink>
					</li> : ''
				)
			) }
		</ul>
	);
};

const UserMenu = () => {
	const userMenuItems = userMenu('mobile-menu');
	return (
		<ul className="user">
			{ userMenuItems.map((item) => (
				<li className={ ['tab'] } key={ item.href }>
					<a href={ item.href } className="is-active">
						<span className={ ['menu-item-icon is-svg-' + item.color] }><item.icon /></span>
						{ item.label }
					</a>
				</li>
			)) }
		</ul>
	);
}

const MobileSidebar = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isUserMenu, setIsUserMenu] = useState(false);

	const toggleSidebar = event => {
		userTrigger( event, () => {
			setIsVisible(!isVisible);
		})
	}

	const toggleMenuShown = event => {
		userTrigger( event, () => {
			setIsUserMenu(!isUserMenu);
		})
	}

	return(
		<div className="bluehost-nav-wrap-element mobile-toggle">
			<Button className="mobile-toggle" onClick={ toggleSidebar } onKeyDown={toggleSidebar}>
				{ !isVisible && (
					<MenuIcon />
				) || (
					<CloseIcon />
				) }
			</Button>
			{ isVisible && (
				<Modal title={__('Bluehost', 'bluehost-wordpress-plugin')} onRequestClose={() => setIsVisible(false)} className="nf-mobile-menu">
					<Button className="user-toggle" onClick={toggleMenuShown} onKeyDown={toggleMenuShown}><UserIcon /></Button>
					{ isUserMenu && (
					<UserMenu />
				) || (
					<PrimaryMenu />
				) }
				</Modal>
			) }
		</div>
	);
}

export default MobileSidebar;

