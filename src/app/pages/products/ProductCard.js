import { CpuChipIcon } from '@heroicons/react/24/outline';
import { Card, Title } from '@newfold/ui-component-library';
import { productApiFetch } from '../../util/helpers';

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
				<Title size={ 2 }>Active Products</Title>
				{ productData && (
					<ul className="nfd-grid nfd-grid-cols-3 nfd-h-full">
						{ productData.map( ( link ) => (
							<li
								key={ link.prodId }
								className="nfd-flex nfd-items-center nfd-justify-center"
							>
								<CpuChipIcon className={ 'nfd-w-12' } />
								{ link.prodName }
							</li>
						) ) }
					</ul>
				) }
			</Card.Content>
		</Card>
	);
};

export default ProductCard;
