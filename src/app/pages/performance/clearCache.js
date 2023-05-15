import { Heading, ErrorCard } from '../../components';
import AppStore from '../../data/store';
import {
	blueprintPurgeCacheApiFetch,
	dispatchUpdateSnackbar,
} from '../../util/helpers';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
} from '@wordpress/components';
import { sprintf } from '@wordpress/i18n';

const ClearCache = () => {
	const { store, setStore } = useContext( AppStore );
	const [ isError, setError ] = useState( false );

	const getCacheClearNoticeText = () => {
		return __( 'Cache cleared', 'wp-plugin-blueprint' );
	};

	const clearCache = () => {
		blueprintPurgeCacheApiFetch( {}, setError, ( response ) => {
			dispatchUpdateSnackbar( getCacheClearNoticeText() );
		} );
	};

	if ( isError ) {
		return <ErrorCard error={ isError } />;
	}
	return (
		<Card
			className={ `short card-clear-cache ${
				! store.cacheLevel ? 'disabled' : ''
			}` }
		>
			<CardHeader>
				<Heading level="3">
					{ __( 'Clear Cache', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				<strong>
					{ __(
						'We automatically clear your cache',
						'wp-plugin-blueprint'
					) }
				</strong>
				{ ' ' +
					__(
						"as you work (creating content, changing settings, installing plugins and more). But you can manually clear it here to be confident it's fresh.",
						'wp-plugin-blueprint'
					) }
			</CardBody>
			<CardFooter>
				<Button
					variant="primary"
					onClick={ () => {
						clearCache();
					} }
					disabled={ ! store.cacheLevel }
				>
					{ __( 'Clear All Cache Now', 'wp-plugin-blueprint' ) }
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ClearCache;
