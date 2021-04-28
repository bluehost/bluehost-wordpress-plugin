import './shepherd.scss';

import { Suspense, lazy } from '@wordpress/element';

import { ErrorBoundary } from 'react-error-boundary';
import Shepherd from 'shepherd.js';

// import editorTourEvents from './editorTourEvents';


const AboutTour = lazy(() => import( '@editortours/about' ));
const ContactTour = lazy(() => import( '@editortours/contact' ));
const GeneralTour = lazy(() => import( '@editortours/general' ));

export const EditorTours = () => {
    // editorTourEvents();
    return (
        <ErrorBoundary FallbackComponent={<div>Error State</div>}>
            <Suspense fallback={<div>Loading...</div>}>
                <AboutTour />
            </Suspense>
        </ErrorBoundary>
    )
}

export default EditorTours;