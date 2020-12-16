import { Redirect } from 'react-router-dom';

export const BWARedirect = ({ to, currentLocation, ...props }) => {
    const toObject = { pathname: to };
    if( 'undefined' !== typeof currentLocation.state ) {
        toObject.state = currentLocation.state;
    }
    return <Redirect to={toObject} />
}

export default BWARedirect;