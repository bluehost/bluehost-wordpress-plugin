import { BWAMarketplaceTemplate } from '@app/components/templates';
import { BWAProductCard } from '@app/components/molecules';
import { useMojoApi } from '@app/hooks';
import { withRouter } from 'react-router-dom';

function ServicesPage( { history } ) {
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'services', { category: '', count: 1000 } );

	if ( isError ) {
		throw new Error( 'API Error. Payload: ' + JSON.stringify( payload ) );
	}

	const renderCallback = ( { item, hasFavorite, toggleFavorite } ) => {
		return (
			<BWAProductCard
				buttonPrimary={ { href: item.buy_url } }
				buttonSecondary={ {
					onClick: () => {
						history.push( `/marketplace/services/${ item.id }` );
					},
				} }
				id={ item.id }
				imageUrl={ item.images.preview_url }
				isFavorite={ hasFavorite( item.id ) }
				key={ item.id }
				price={ item.prices.single_domain_license }
				title={ item.name }
				toggleFavorite={ () => toggleFavorite( item.id ) }
			/>
		);
	};

	return (
		<BWAMarketplaceTemplate
			isLoading={ ! done || isLoading }
			payload={ payload }
			render={ renderCallback }
			marketplaceType="services"
			type="marketplace"
		/>
	);
}

export default withRouter( ServicesPage );
