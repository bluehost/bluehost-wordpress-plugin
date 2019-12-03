/**
 * WordPress dependencies
 */
import { Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Project dependencies
 */
/**
 * External dependencies
 */
import {
	BluehostLogo,
	CloseIcon,
	HelpIcon,
	MenuIcon,
	UserIcon,
} from '@/assets';

import {
	PrimaryMenuItems,
	UserMenuItems,
} from '@/parts';

import {
	AppButton as Button,
	AppNavLink as NavLink,
} from '@/components';

/**
 * Component dependencies
 */
/**
 * Internal dependencies
 */
import './style.scss';

const PrimaryMenu = () => (
	<ul className="main">
		{ PrimaryMenuItems.map( ( item ) => (
			<li className={ [ 'tab ' + item.slug ] } key={ item.slug }>
				<NavLink to={ item.path } activeClassName="is-active">{ item.label }</NavLink>
			</li>
		)
		) }
	</ul>
);

const UserMenu = () => (
	<ul className="user">
		{ UserMenuItems.map( ( item ) => (
			<li className={ [ 'tab' ] } key={ item.href }>
				<a href={ item.href } activeClassName="is-active">
					<span className={ [ 'menu-item-icon is-svg-' + item.color ] }><item.icon /></span>
					{ item.label }
				</a>
			</li>
		) ) }
	</ul>
);

// const {
// 	openMobileSidebar
// } = useDispatch('bluehost/plugin');

const MobileSidebar = withState( {
	isVisible: false,
	userMenu: false,
} )( ( { isVisible, userMenu, setState } ) => {
	const toggleSidebarVisible = () => {
		isVisible ? dispatch( 'bluehost/plugin' ).closeMobileSidebar() : dispatch( 'bluehost/plugin' ).openMobileSidebar();
		setState(
			( state ) => {
				return { isVisible: ! state.isVisible };
			}
		);
	};
	const toggleMenuShown = () => {
		setState( ( state ) => ( { userMenu: ! state.userMenu } ) );
	};
	return (
		<div className="bluehost-nav-wrap-element mobile-toggle">
			<Button className="mobile-toggle" onClick={ toggleSidebarVisible }>
				{ ! isVisible && (
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
								<a href="https://my.bluehost.com/hosting/help"><HelpIcon /></a>
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
} );

export default MobileSidebar;

