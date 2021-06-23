import { cleanForSlug } from '@wordpress/url';
import { filter } from 'lodash';
/**
 * Based on passed string,
 */
export const pageToBodyAttribute = ( path ) => {
    const PREFIX = 'bwa';
    const body = window.document.body;
    const old = filter(body.classList, (item) => item.includes(PREFIX) );

    if ( old ) {
        body.classList.remove(old[0]);
    }

    body.classList.add( PREFIX + '-' + cleanForSlug( path ) );
}
export default pageToBodyAttribute;