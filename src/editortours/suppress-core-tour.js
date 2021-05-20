import { dispatch, select } from '@wordpress/data';

const STORE_KEY = 'core/edit-post';
const FEATURE_KEY = 'welcomeGuide';

const suppressCoreTour = () => {
    const isCoreGuideActive = getCoreGuideStatus();
    if ( isCoreGuideActive ) {
        toggleCoreTour();
        window.suppressedCore = true;
    }
}

const getCoreGuideStatus = () => {
    return select(STORE_KEY).isFeatureActive(FEATURE_KEY);
}

const toggleCoreTour = () => {
    return dispatch(STORE_KEY).toggleFeature(FEATURE_KEY);
}

const restoreCoreTour = () => {
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