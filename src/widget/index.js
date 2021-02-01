import './style.scss';

import { Suspense, lazy } from '@wordpress/element';

import Error from './error';
import { ErrorBoundary } from 'react-error-boundary';

const WidgetMain = lazy(() => import( '@widget/main' ));

export const Widget = () => {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={<div>Loading...</div>}>
                <WidgetMain />
            </Suspense>
        </ErrorBoundary>
    )
}

export default Widget;