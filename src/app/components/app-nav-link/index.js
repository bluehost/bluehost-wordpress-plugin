import { NavLink } from 'react-router-dom';

const AppLink = (props) => (
    <NavLink
        to={ { pathname: props.to || '', state: { setFocus: true } } }
        activeClassName="active">
        {props.children || ''}
    </NavLink>
);

export default AppLink;