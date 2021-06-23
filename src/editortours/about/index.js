import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useState, useEffect } from '@wordpress/element';

import { BaseTour, addToStep, awaitElement } from '../base';

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
    const path = addQueryArgs('/newfold/v1/tours/blockeditor', {type: 'about', brand: 'bluehost', lang: 'en-us'});

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