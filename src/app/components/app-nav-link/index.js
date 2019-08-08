import { NavLink } from 'react-router-dom';

import './style.scss';

const AppLink = (props) => (
    <NavLink
        to={ { pathname: props.to || '', state: { setFocus: true } } }
        exact
        className="bluehostTab"
        activeClassName="bluehostActiveTab">
        {props.children || ''}
    </NavLink>
);

export default AppLink;