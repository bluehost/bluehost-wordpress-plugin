import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useState, useEffect } from '@wordpress/element';

import { BaseTour, addToStep, awaitElement } from '../base';

// const LargeStep = ({children}) => {
//     return (
//         <div class="wrap-large">
//             {children}
//             <div class="step-bluehost-logo">
//                 <img src={window.bluehostPluginPublicPath + '../static/images/bluehost.svg'} />
//             </div>
//         </div>
//     )
// }

// const StandardStep = ({children}) => {
//     return (
//         <div class="wrap-std">
//             {children}
//             <div class="step-bluehost-squares">
//                 <img src={window.bluehostPluginPublicPath + '../static/images/bluehost-squares.svg'} />
//             </div>
//         </div>
//     )
// }

/**
 * Merge API-driven content and config with necessary JS functions to make tour 💯 work.
 * 
 * @param {array} apiResponse 
 * @returns {array}
 */
const aboutTourSteps = (apiResponse) => {
    let steps = apiResponse;

    // Wait for Block Inserter to Open so Shepherd can latch on properly
    steps = addToStep(
        steps, 
        'inserter-opened', 
        { 
            beforeShowPromise: () => {
                return new Promise( resolve => {
                    awaitElement('.interface-interface-skeleton__secondary-sidebar').then(() => {
                        resolve();
                    })
                })
            } 
        }
    );

    return steps;
}

export const AboutTour = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [steps, setSteps] = useState([]);
    const path = addQueryArgs('/newfold/v1/defaultcontent/tours', {type: 'about', brand: 'bluehost', lang: 'en-us'});

    useEffect(() => {
        apiFetch({ path }).then(response => {
            setSteps(aboutTourSteps(response));
            setIsLoaded(true);
        })
    }, [])

    if(! isLoaded) {
        return false;
    }

    return <BaseTour type="about" steps={steps} />
}

export default AboutTour;