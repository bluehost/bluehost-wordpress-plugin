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
		className={ 'bwa-desktop-nav__item ' + item.slug }
		key={ item.slug }
		{ ...props }
	>
		<NavLink
			to={ item.path }
			className="bwa-desktop-nav__link"
			activeClassName="active"
		>
			{ item.label }
		</NavLink>
	</li>
);

const DesktopTabs = () => (
	<nav className="bwa-desktop-nav__inner">
		<ul className="bwa-desktop-nav__items">
			{ mainMenuItems.map( ( item ) => <DesktopTab item={ item } key={ item.slug } /> ) }
		</ul>
	</nav>
);

export default DesktopTabs;
