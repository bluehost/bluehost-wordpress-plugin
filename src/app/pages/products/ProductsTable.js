import { Table } from '@newfold/ui-component-library';
import { isJarvis } from '../../util/helpers';
import apiFetch from '@wordpress/api-fetch';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';

const formatDate = ( dateString ) => {
	if ( typeof dateString !== 'string' ) {
		return '<date>';
	}

	const date = new Date( dateString );
	// Check if the date is valid
	if ( isNaN( date.getTime() ) ) {
		return '<date>';
	}

	const month = ( date.getMonth() + 1 ).toString().padStart( 2, '0' );
	const day = date.getDate().toString().padStart( 2, '0' );
	const year = date.getFullYear();

	return `${ month }/${ day }/${ year }`;
};

const determineMessage = ( autoRenewFlag, expirationDate ) => {
	const formattedDate = formatDate( expirationDate );
	if ( autoRenewFlag === true ) {
		return `Auto-renews: ${ formattedDate }`;
	}
	return `Expires: ${ formattedDate }`;
};
const defaults = {
	productendpoint: '/newfold-data/v1/customer/products',
	text: {
		jarvisText: 'Explore our featured collection of tools and services.',
		error: 'Oops, there was an error loading products, please try again later.',
		noProducts: 'Sorry, no products. Please, try again later.',
	},
};
const ProductsTable = () => {
	const [ productData, setProductData ] = useState( '' );
	const [ isError, setIsError ] = useState( false );
	const [ isErrorMsg, setIsErrorMsg ] = useState( '' );
	useEffect( () => {
		if ( isJarvis() ) {
			apiFetch( {
				url: NewfoldRuntime.createApiUrl( defaults.productendpoint ),
				method: 'POST',
			} )
				.then( ( response ) => {
					if ( ! response ) {
						throw new Error( defaults.text.error );
					}
					if ( Array.isArray( response ) && response.length === 0 ) {
						throw new Error( 'Empty array' );
					}
					setProductData( response );
				} )
				.catch( ( error ) => {
					setIsError( true );
					if ( error.message === 'Empty array' ) {
						setIsErrorMsg( defaults.text.noProducts );
					} else {
						setIsErrorMsg( defaults.text.error );
					}
					setProductData( null ); // Or any default value you want to set
				} );
		}
	}, [] );
	return (
		<div>
			{ isError && isErrorMsg }
			{ ! isJarvis() && ! isError && defaults.text.jarvisText }
			{ isJarvis() && ! isError && productData && (
				<Table className="wppbh-products-data-section">
					<Table.Head>
						<Table.Row>
							<Table.Header>Products & Services</Table.Header>
							<Table.Header>Renewal Date</Table.Header>
							<Table.Header>Renewal Setting</Table.Header>
						</Table.Row>
					</Table.Head>
					<Table.Body>
						{ productData.map( ( product ) => (
							<Table.Row key={ product.prodId }>
								<Table.Cell>{ product.prodName }</Table.Cell>
								<Table.Cell>
									{ determineMessage(
										product.autoRenewFlag,
										product.expirationDate
									) }
								</Table.Cell>
								<Table.Cell>
									<a href="https://www.bluehost.com/my-account/renewal-center">
										Manage Renewal
									</a>
								</Table.Cell>
							</Table.Row>
						) ) }
					</Table.Body>
				</Table>
			) }
		</div>
	);
};

export default ProductsTable;
