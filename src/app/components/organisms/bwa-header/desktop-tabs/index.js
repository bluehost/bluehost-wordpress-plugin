/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { BWANavLink as NavLink } from '@app/components/atoms';
import mainMenuItems from '../main-menu';
import './style.scss';

const DesktopTab = ( { item, ...props } ) => (
	<li
		className={ 'navtabs-desktop__item ' + item.slug }
		key={ item.slug }
		{ ...props }
	>
		<NavLink
			to={ item.path }
			className="navtabs-desktop__link"
			activeClassName="active"
		>
			{ item.label }
		</NavLink>
	</li>
);

const DesktopTabs = () => (
	<nav className="navtabs-desktop__inner">
		<ul className="navtabs-desktop__items">
			{ mainMenuItems.map( ( item ) => <DesktopTab item={ item } key={ item.slug } /> ) }
		</ul>
	</nav>
);

export default DesktopTabs;
