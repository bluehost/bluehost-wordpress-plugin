/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import { Component } from '@wordpress/element';
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
import { AppNavLink as NavLink } from '@/components';
import { PrimaryMenuItems } from '@/parts/menus';
import './style.scss';

const PrimaryMenu = PrimaryMenuItems.map( ( item ) => (
	<li className={ [ 'tab ' + item.slug ] } key={ item.slug }>
		<NavLink to={ item.path }>
			{ item.label }
		</NavLink>
	</li>
) );

class AppPrimaryNavigation extends Component {
	maybeShowMenu() {
		select('bluehost/plugin').isTopLevel() && (<div id="app-primary-navigation">
			<ul className="tabs">
				{ PrimaryMenu }
			</ul>
		</div>) || (<div>It the level</div>);
	}
	render() {
		return (
			<maybeShowMenu />
		);
	}

}

export default AppPrimaryNavigation;
