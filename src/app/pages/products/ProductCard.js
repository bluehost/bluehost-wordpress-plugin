import { Card, Table } from '@newfold/ui-component-library';
import { productApiFetch, isJarvis } from '../../util/helpers';

const formatDate = ( dateString ) => {
	const date = new Date( dateString );
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

const ProductCard = ( { props } ) => {
	const [ productData, setProductData ] = useState( '' );
	useEffect( () => {
		if ( isJarvis() ) {
			productApiFetch( [], console.error, ( response ) => {
				setProductData( response );
			} );
		}
	}, [] );
	return (
		<Card { ...props }>
			<Card.Content>
				{ productData && (
					<Table className='wppbh-products-data-section'>
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
									<Table.Cell>
										{ product.prodName }
									</Table.Cell>
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
				{ ! isJarvis() && (
					<p>Please login to your account manager to see products</p>
				) }
			</Card.Content>
		</Card>
	);
};

export default ProductCard;
