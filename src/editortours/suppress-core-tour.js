import { dispatch, select } from '@wordpress/data';

const FEATURE_KEY = 'welcomeGuide';

const suppressCoreTour = () => {
    const isCoreGuideActive = getCoreGuideStatus();
    if ( isCoreGuideActive ) {
        console.log('was active');
        toggleCoreTour();
        window.suppressedCore = true;
    }
}

const getCoreGuideStatus = () => {
    return select('core/edit-post').isFeatureActive(FEATURE_KEY);
}

const toggleCoreTour = () => {
    return dispatch('core/edit-post').toggleFeature(FEATURE_KEY);
}

const restoreCoreTour = () => {
    console.log('restoring');
    if ( 'undefined' !== typeof window.suppressedCore && window.suppressedCore ) {
        toggleCoreTour();
        window.suppressedCore = false;
    }
}

export {
    suppressCoreTour,
    toggleCoreTour,
    restoreCoreTour
}