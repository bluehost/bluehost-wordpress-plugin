import { Fragment, useContext } from '@wordpress/element';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';
import { merge, findIndex } from 'lodash';
import editorTourEvents from './editorTourEvents';

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
    const indexOfId = findIndex( steps, { id } );
    if ( -1 !== indexOfId ) {
        steps[indexOfId] = merge( steps[indexOfId], newConfig );
    }

    return steps;
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
        const tour = useContext(ShepherdTourContext);
        editorTourEvents(type, tour);

        return <Fragment>{tour.start()}</Fragment>
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
    awaitElement
}