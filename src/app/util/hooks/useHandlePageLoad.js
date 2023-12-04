import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top of page on route change.
 * @return {boolean} - true
 */
const useHandlePageLoad = () => {
	const location = useLocation();
	const routeContents = document.querySelector( '.wppbh-app-body-inner' );

	useEffect( () => {
		window.scrollTo( 0, 0 );
		if ( routeContents ) {
			routeContents.focus( { preventScroll: true } );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ location.pathname ] );

	return true;
};

export default useHandlePageLoad;
