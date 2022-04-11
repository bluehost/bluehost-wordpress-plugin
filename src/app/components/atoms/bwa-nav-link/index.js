import './style.scss';

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Internal navigation link (from React Router) that also handles focus management.
 *
 * TIP: import { BWANavLink as NavLink } for easier swap with NavLink in ReactRouterDOM.
 *
 * @param {*} props
 */
const BWANavLink = ( props ) => {
	const activeClassName = props.activeClassName || 'bluehostActiveTab';
	const className = props.className || 'bluehostTab';

	return (
		<NavLink
			to={ { pathname: props.to || '', state: { setFocus: true } } }
			className={({isActive}) => {
				return isActive ? classNames(className, activeClassName) : className
			}}
		>
			{ props.children || '' }
		</NavLink>
	);
}

export default BWANavLink;
