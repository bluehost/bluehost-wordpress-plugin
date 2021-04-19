import './style.scss';

import { Suspense, lazy } from '@wordpress/element';

import Error from './error';
import { ErrorBoundary } from 'react-error-boundary';

const WidgetMain = lazy(() => import( '@dashboard/main' ));

export const Widget = () => {
    return (
        <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={<div />}>
                <WidgetMain />
            </Suspense>
        </ErrorBoundary>
    )
}

export default Widget;