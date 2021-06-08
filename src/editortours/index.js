import './shepherd.scss';

import { lazy, Suspense, Fragment } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import { registerPlugin } from '@wordpress/plugins';
import { getQueryArg } from '@wordpress/url';
import { ErrorBoundary } from 'react-error-boundary';
import { suppressCoreTour } from './suppress-core-tour';
import { setupCaretEvents, PrePublishValidation } from './highlighting';

const AboutTour = lazy(() => import('./about'));
const ContactTour = lazy(() => import('./contact'));
const HomeTour = lazy(() => import('./home'));

// Register Placeholder Validation Panel in Pre-Publish Sidebar
registerPlugin( 'newfold-editor-placeholders', { render: PrePublishValidation } );

export const EditorTours = () => {
    // suppress Core Welcome Guide when Newfold Tours are active.
    suppressCoreTour();
    // setup caretIn and caretOut custom events
    setupCaretEvents();

    const location = window.location.href;
    const tour = getQueryArg(location, 'tour');
    let CurrentTour = <Fragment />;

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
        <ErrorBoundary FallbackComponent={<div />}>
            <Suspense fallback={<div />}>
                <CurrentTour />
            </Suspense>
        </ErrorBoundary>
    )
}

export default EditorTours;