import './style.scss';

import { BWANavLink as NavLink } from '@app/components/atoms';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

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

const DesktopTabs = () => {
	const topLevelPages = useSelect((select) => {
		return select('bluehost/plugin').getTopLevelPages();
	}, []);
	return (
		<nav className="bwa-desktop-nav__inner">
			<ul className="bwa-desktop-nav__items">
				{ topLevelPages.map(
					( item ) => (
						item.inapp ?
							<DesktopTab item={ item } key={ item.slug } /> : ''
					)
				)}
			</ul>
		</nav>
	);
}

export default DesktopTabs;
