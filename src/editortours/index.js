import './shepherd.scss';

import { lazy, Suspense, Fragment } from '@wordpress/element';
import { getQueryArg } from '@wordpress/url';
import { ErrorBoundary } from 'react-error-boundary';
import { suppressCoreTour } from './suppress-core-tour';

const AboutTour = lazy(() => import('./about'));
const ContactTour = lazy(() => import('./contact'));
const HomeTour = lazy(() => import('./home'));

export const EditorTours = () => {
    // suppress Core Welcome Guide when Newfold Tours are active.
    suppressCoreTour();

    const location = window.location.href;
    const tour = getQueryArg(location, 'tour');
    let CurrentTour = false;

    switch( tour ) {
        case 'about':
            CurrentTour = AboutTour;
            break;
        case 'contact':
            CurrentTour = ContactTour;
            break;
        case 'home':
            CurrentTour = HomeTour;
            break;
        default:
            CurrentTour = Fragment;
            break;
    }
    
    return (
        <ErrorBoundary FallbackComponent={<Fragment />}>
            <Suspense fallback={<Fragment />}>
                <CurrentTour />
            </Suspense>
        </ErrorBoundary>
    )
}

export default EditorTours;