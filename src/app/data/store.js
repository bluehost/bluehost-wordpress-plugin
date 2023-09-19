import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { createContext, useMemo } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const DEFAULT = {
	store: {},
	setStore: () => {},
};

const AppStore = createContext( DEFAULT );

export const bluehostApiFetchSettings = async ( options = {} ) => {
	return await apiFetch( {
		url: NewfoldRuntime.createApiUrl('/bluehost/v1/settings'),
		...options,
	} );
};

export const reformStore = ( store, endpoint, response ) => {
	return {
		...store,
		[ _camelCase( endpoint ) ]: response,
	};
};

export const AppStoreProvider = ( { children } ) => {
	const [ booted, setBooted ] = useState( false );
	const [ hasError, setError ] = useState( false );
	const [ store, setStore ] = useState( {} );

	const contextStore = useMemo(
		() => ( { store, setStore, booted, setBooted, hasError, setError } ),
		[ store, booted, hasError ]
	);

	useEffect( () => {
		if ( false === booted ) {
			bluehostApiFetchSettings()
				.then( ( settings ) => {
					setStore( { ...store, ...settings } );
					setBooted( true );
				} )
				.catch( ( error ) => {
					setError( error );
				} );
		}
	}, [] );

	return (
		<AppStore.Provider value={ contextStore }>
			{ ' ' }
			{ children }{ ' ' }
		</AppStore.Provider>
	);
};

export default AppStore;
