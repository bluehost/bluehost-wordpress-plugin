import { Fragment, useContext } from '@wordpress/element';
import { PluginPrePublishPanel } from '@wordpress/edit-post';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';
import { merge, findIndex } from 'lodash';
import { initEvents } from './events';

/**
 * Helper to detect element is in the DOM
 * 
 * @param {string} selector 
 * @returns 
 */
export const awaitElement = async selector => {
    while ( document.querySelector(selector) === null ) {
        await new Promise( resolve => requestAnimationFrame(resolve) );
    }

    return document.querySelector(selector);
}

/**
 * Helper to merge additional config into a Shepherd step by string key (id).
 * 
 * @param {array} steps 
 * @param {string} id 
 * @param {object} newConfig 
 * @returns 
 */
export const addToStep = ( steps, id, newConfig ) => {
    const indexOfId = findStepIndex( steps, id );
    if ( indexOfId ) {
        steps[indexOfId] = merge( steps[indexOfId], newConfig );
    }

    return steps;
}

/**
 * Helper to find the index of a step by string ID.
 * 
 * @param {array} steps 
 * @param {string} id 
 * @returns 
 */
export const findStepIndex = ( steps, id ) => {
    const index = findIndex( steps, { id } );

    return -1 !== index ? index : false;
}

/**
 * Base component to pass steps and options to execute a Shepherd Tour.
 * 
 * @param {object} props 
 * @returns 
 */
export const BaseTour = ({ type, steps, options = {} }) => {

    const shepherdOptions = merge({
        defaultStepOptions: {
            cancelIcon: {
                enabled: true,
            }
        },
        useModalOverlay: true,
    }, { type, ...options });

    const TourContents = () => {
        window.nfTour = useContext(ShepherdTourContext);
        initEvents(type, window.nfTour);

        return <Fragment>{window.nfTour.start()}</Fragment>
    }

   return (
    <ShepherdTour 
        steps={steps} 
        tourOptions={shepherdOptions}
    >
        <TourContents />
    </ShepherdTour>
   );
}

export default {
    BaseTour,
    addToStep,
    findStepIndex,
    awaitElement
}