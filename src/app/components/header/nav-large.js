import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { topRoutes } from '../../data/routes';

const NavLarge = () => (
	<ul className="wppb-nav-large">
		{ topRoutes.map( ( page ) => (
			<li key={ page.name } className="wppb-nav-large__item">
				<div className="wppb-nav-large__inner">
					<NavLink
						to={ page.name }
						className={ classNames(
							`wppb-nav-large__link`,
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
