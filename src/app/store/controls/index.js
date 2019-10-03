import apiFetch from '@wordpress/api-fetch';

export default function FETCH_FROM_API( action ) {
    return apiFetch.fetch( { path: action.path } );
}