/**
 * External dependencies
 */
import { NavLink } from 'react-router-dom';

/**
 * Component dependencies
 */
/**
 * Internal dependencies
 */
import './style.scss';

/**
 * Internal navigation link (from React Router) that also handles focus management.
 *
 * TIP: import { BWANavLink as NavLink } for easier swap with NavLink in ReactRouterDOM.
 *
 * @param {*} props
 */
const BWANavLink = ( props ) => (
	<NavLink
		to={ { pathname: props.to || '', state: { setFocus: true } } }
		exact
		className={ props.className || 'bluehostTab' }
		activeClassName={ props.activeClassName || 'bluehostActiveTab' }>
		{ props.children || '' }
	</NavLink>
);

export default BWANavLink;
