import apiFetch from '@wordpress/api-fetch';
import { useState } from '@wordpress/element';

import { BaseTour } from '../base';

export const HomeTour = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        apiFetch({ path: '/bluehost/v1/defaultcontent/tours' }).then( res => {
            setSteps(res);
            setIsLoaded(true);
        })
    }, [])

    if( ! isLoaded ) {
        return false;
    }

    return <BaseTour type="home" steps={steps} />
}

export default HomeTour;