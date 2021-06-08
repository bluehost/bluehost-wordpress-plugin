import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useState, useEffect } from '@wordpress/element';

import { BaseTour, addToStep, awaitElement, findStepIndex } from '../base';


/**
 * Merge API-driven content and config with necessary JS functions to make tour 💯 work.
 * 
 * @param {array} apiResponse 
 * @returns {array}
 */
const homeTourSteps = (apiResponse) => {
    let steps = apiResponse;

    const promptIndex       = findStepIndex( steps, 'prompt' );
    const sellingIndex      = findStepIndex( steps, 'mostly-selling' );
    const sharingIndex      = findStepIndex( steps, 'mostly-sharing' );
    const finishCTAIndex    = findStepIndex( steps, 'finish-cta' );

    // SETUP PROMPT BUTTONS FOR LOGIC FORK
    if ( promptIndex ) {
        steps[promptIndex].buttons[0].action = () => {
            window.nfTour.show('mostly-selling');
            window.nfHomeSiteType = 'mostly-selling';
        }
        steps[promptIndex].buttons[1].action = () => {
            window.nfTour.show('mostly-sharing');
            window.nfHomeSiteType = 'mostly-sharing';
        }
    }
    
    if ( sellingIndex ) {
        steps[sellingIndex].buttons[1].action = () => {
            window.nfTour.show('finish-cta');
        }
    }
   

    if ( sharingIndex ) {
        steps[sharingIndex].buttons[0].action = () => {
            window.nfTour.show('prompt');
        }
    }

    if ( finishCTAIndex ) {
        steps[finishCTAIndex].buttons[0].action = () => {
            if ( 'undefined' !== typeof window.nfHomeSiteType ) {
                window.nfTour.show(window.nfHomeSiteType);
            } else {
                window.nfTour.show('prompt');
            }
        }
    }

    return steps;
}

export const HomeTour = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [steps, setSteps] = useState([]);
    const path = addQueryArgs('/newfold/v1/tours/blockeditor', {type: 'home', brand: 'bluehost', lang: 'en-us'});

    useEffect(() => {
        apiFetch({ path }).then(response => {
            setSteps(homeTourSteps(response));
            setIsLoaded(true);
        })
    }, [])

    if(! isLoaded) {
        return false;
    }

    return <BaseTour type="home" steps={steps} />
}

export default HomeTour;