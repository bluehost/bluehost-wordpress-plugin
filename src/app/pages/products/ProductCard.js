import { CpuChipIcon } from '@heroicons/react/24/outline';
import { Card, Title, Table } from '@newfold/ui-component-library';
import { productApiFetch } from '../../util/helpers';

const determineMessage = ( autoRenewFlag, expirationDate ) => {
	if ( autoRenewFlag === true ) {
		return `Auto-renews: ${ expirationDate }`;
	}
	return `Expires: ${ expirationDate }`;
};

const ProductCard = ( { props } ) => {
	const [ productData, setProductData ] = useState( '' );
	useEffect( () => {
		productApiFetch( [], console.error, ( response ) => {
			setProductData( response );
		} );
	}, [] );
	return (
		<Card { ...props }>
			<Card.Content>
				{ productData && (
					<Table>
						<React.Fragment key=".0">
							<Table.Head>
								<Table.Row>
									<Table.Header>
										Products & Services
									</Table.Header>
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
						</React.Fragment>
					</Table>
				) }
			</Card.Content>
		</Card>
	);
};

export default ProductCard;
