import { Redirect } from 'react-router-dom';

export const BWARedirect = ({ to, currentLocation, ...props }) => {
    const toObject = 'object' === typeof to ? to : { pathname: to };
    if( 'undefined' !== typeof currentLocation.state && 'undefined' === typeof toObject.state ) {
        toObject.state = currentLocation.state;
    }
    return <Redirect to={toObject} />
}

export default BWARedirect;