import { useEffect, useState } from '@wordpress/element';

/**
 * Checks if the container block is the target element based on the query param.
 * If true, the hook will return that boolean value for a few seconds.
 * The hook will set the value to false and remove the query param.
 *
 * @param {string} id - the container block id, used to check if it's the target.
 * @return {boolean} - true if the container block is the target.
 */
const useContainerBlockIsTarget = ( id ) => {
	const [ isTarget, setIsTarget ] = useState( false );
	const searchParams = new URLSearchParams( window.location.search );

	useEffect( () => {
		if (
			searchParams.has( 'nfd-target' ) &&
			searchParams.get( 'nfd-target' ) === id
		) {
			setIsTarget( true );

			setTimeout( () => {
				setIsTarget( false );
				removeTargetQueryParam();
			}, 9500 );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ searchParams ] );

	/*
	 * Remove the 'nfd-target={id}' query param from the URL
	 */
	const removeTargetQueryParam = () => {
		searchParams.delete( 'nfd-target' );
		const currentURL = window.location.href;
		const updatedURL = currentURL.replace( `&nfd-target=${ id }`, '' );
		window.history.replaceState( null, null, updatedURL );
	};

	return isTarget;
};

export default useContainerBlockIsTarget;
