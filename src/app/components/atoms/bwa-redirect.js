import { Fragment, useEffect } from '@wordpress/element';

import { useNavigate } from 'react-router-dom';

export const BWARedirect = ({ to, currentLocation, ...props }) => {
    const toObject = 'object' === typeof to ? { state: {}, ...to} : { pathname: to, state: {} };
    if( 'object' === typeof currentLocation && currentLocation.hasOwnProperty('state') && Object(toObject?.state)?.entries?.length === 0 ) {
        toObject.state = currentLocation.state;
    }
    const navigate = useNavigate();

    useEffect(() => {
        navigate(toObject.pathname, toObject.state);
    }, []);

    return <Fragment />;
}

export default BWARedirect;