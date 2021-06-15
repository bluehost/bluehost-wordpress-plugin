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

import { Popover } from '@wordpress/components';
import { addUtmParams } from '@app/functions';
import userMenuItems from '@app/menus/user';
import { withState } from '@wordpress/compose';

const PrimaryMenu = () => {
	const topLevelPages = useSelect((select) => {
		return select('bluehost/plugin').getTopLevelPages();
	}, []);
	return (
		<ul className="main">
			{ topLevelPages.map((item) => (
					<li className={ ['tab ' + item.slug] } key={ item.slug }>
						<NavLink to={ item.path } activeClassName="is-active">{ item.label }</NavLink>
					</li>
				)
			) }
		</ul>
	);
};

const UserMenu = () => (
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

// const {
// 	openMobileSidebar
// } = useDispatch('bluehost/plugin');

const MobileSidebar = withState({
	isVisible: false,
	userMenu: false,
})(({isVisible, userMenu, setState}) => {
	const toggleSidebarVisible = () => {
		isVisible ? dispatch('bluehost/plugin').closeMobileSidebar() : dispatch('bluehost/plugin').openMobileSidebar();
		setState(
			(state) => {
				return {isVisible: !state.isVisible};
			}
		);
	};
	const toggleMenuShown = () => {
		setState((state) => ({userMenu: !state.userMenu}));
	};
	return (
		<div className="bluehost-nav-wrap-element mobile-toggle">
			<Button className="mobile-toggle" onClick={ toggleSidebarVisible }>
				{ !isVisible && (
					<MenuIcon />
				) || (
					<CloseIcon />
				) }
			</Button>
			{ isVisible && (
				<Popover className="bluehost-mobile-menu" position="middle top" noArrow>
					<div className="slideout-inner">
						<div className="slideout-logo-wrap" onClick={ toggleSidebarVisible }>
							<BluehostLogo />
						</div>
						<div id="slideout-icons-wrap">
							<div className="help">
								<a
									href={
										addUtmParams(
											'https://my.bluehost.com/hosting/help',
											{
												utm_content: 'mobile_help_link',
												utm_term: 'Help',
											}
										)
									}
								>
									<HelpIcon />
								</a>
							</div>
							<div className="user-menu">
								<UserIcon onClick={ toggleMenuShown } />
							</div>
						</div>
						<div className="slideout-menu-wrap" onClick={ toggleSidebarVisible }>
							{ userMenu && (
								<UserMenu />
							) || (
								<PrimaryMenu />
							) }
						</div>
					</div>
				</Popover>
			) }
		</div>
	);
});

export default MobileSidebar;

