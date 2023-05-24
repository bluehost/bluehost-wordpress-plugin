import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { topRoutes } from '../../data/routes';

const NavLarge = () => (
	<ul className="wppbh-nav-large">
		{ topRoutes.map( ( page ) => (
			<li key={ page.name } className="wppbh-nav-large__item">
				<div className="wppbh-nav-large__inner">
					<NavLink
						to={ page.name }
						className={ classNames(
							`wppbh-nav-large__link`,
							`link-${ page.title }`
						) }
					>
						{ page.title }
					</NavLink>
				</div>
			</li>
		) ) }
	</ul>
);

export default NavLarge;
