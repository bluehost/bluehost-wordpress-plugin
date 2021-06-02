import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useState, useEffect } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import { filter, isEmpty } from 'lodash';
import { BaseTour, addToStep, awaitElement } from '../base';

/**
 * Merge API-driven content and config with necessary JS functions to make tour 💯 work.
 * 
 * @param {array} apiResponse 
 * @returns {array}
 */
const contactTourSteps = (apiResponse) => {
    let steps = apiResponse;
    const wpFormsMenuItem = document.querySelector('li.toplevel_page_wpforms-overview');

    steps = addToStep(
        steps,
        'show-wpforms-link',
        {
            beforeShowPromise: () => {
                return new Promise( resolve => {
                    const isFullscreen = select('core/edit-post').isFeatureActive('fullscreenMode');
                    window.nfOverrideFullscreen = false;
                    if ( isFullscreen ) {
                        dispatch('core/edit-post').toggleFeature('fullscreenMode').then(() => {
                            window.nfOverrideFullscreen = true;
                            resolve();
                        });
                    } else {
                        resolve();
                    }
                })
            }
        }
    )

    // Wait for Block Inserter to Open so Shepherd can latch on properly
    steps = addToStep(
        steps, 
        'show-wpforms-menu', 
        { 
            beforeShowPromise: () => {
                return new Promise( resolve => {
                    wpFormsMenuItem.classList.add('opensub');
                    resolve();
                })
            },
            when: {
                hide: () => {
                    wpFormsMenuItem.classList.remove('opensub');
                    if ( true === window.nfOverrideFullscreen ) {
                        dispatch('core/edit-post').toggleFeature('fullscreenMode');
                    }
                }
            }
        }
    );

    steps = addToStep(
        steps,
        'final-polish',
        {
            beforeShowPromise: () => {
                return new Promise( resolve => {
                    const formBlocks = filter( select('core/block-editor').getBlocks(), [ 'name', 'wpforms/form-selector' ]);
                    if ( ! isEmpty( formBlocks ) ) {
                        dispatch('core/block-editor').selectBlock(formBlocks[0].clientId).then(() => {
                            resolve();
                        })
                    } else {
                        resolve();
                    }
                });
            }
        }
    )

    return steps;
}

export const ContactTour = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [steps, setSteps] = useState([]);
    const path = addQueryArgs('/newfold/v1/tours/blockeditor', {type: 'contact', brand: 'bluehost', lang: 'en-us'});

    useEffect(() => {
        apiFetch({ path }).then(response => {
            setSteps(contactTourSteps(response));
            setIsLoaded(true);
        })
    }, [])

    if(! isLoaded) {
        return false;
    }

    return <BaseTour type="contact" steps={steps} />
}

export default ContactTour;