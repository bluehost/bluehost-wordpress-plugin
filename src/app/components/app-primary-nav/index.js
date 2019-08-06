/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { AppNavLink as NavLink } from '@/components';
import './style.scss';

const PrimaryNavigation = () => (
	<div className="wp-filter">
		<ul className="filter-links">
			<li>
				<NavLink to="home">
					{ __( 'Home', 'yellow-brick-road' ) }
				</NavLink>
			</li>
			<li>
				<NavLink to="marketplace">
					{ __( 'Marketplace', 'yellow-brick-road' ) }
				</NavLink>
			</li>
			<li>
				<NavLink to="tools">
					{ __( 'Tools', 'yellow-brick-road' ) }
				</NavLink>
			</li>
		</ul>

		<ul className="filter-links" style={ { float: 'right' } }>
			<li>
				<NavLink to="settings">
					{ __( 'Settings', 'yellow-brick-road' ) }
				</NavLink>
			</li>
			<li>
				<NavLink to="help">
					{ __( 'Help', 'yellow-brick-road' ) }
				</NavLink>
			</li>
		</ul>
	</div>
);

export default PrimaryNavigation;
