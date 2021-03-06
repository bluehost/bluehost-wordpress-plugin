import { BWAMarketplaceTemplate } from '@app/components/templates';
import { BWAProductCard } from '@app/components/molecules';
import { useMojoApi } from '@app/hooks';
import { withRouter } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

function ServicesPage( { history } ) {
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'services', { category: '', count: 1000 } );

	if ( isError ) {
		throw new Error( 'API Error. Payload: ' + JSON.stringify( payload ) );
	}

	if ( payload.hasOwnProperty('items') ) {
		payload.items.unshift({
			id: 'blue-sky',
			'buy_url': 'https://my.bluehost.com/cgi/app/#/marketplace/product/i/bluesky?utm_term=Get%20Started&utm_content=bluesky_link&utm_campaign=&utm_source=wp-admin%2Fadmin.php%3Fpage%3Dbluehost%23%2Fmarketplace%2Fservices&utm_medium=bluehost_plugin',
			images: {
				'preview_url': 'https://cdn.hiive.space/bluehost/blue-sky-product-banner.png'
			},
			marketplaceType: 'services',
			prices: {
				'single_domain_license': '29.00'
			},
			name: 'Blue Sky Premium Support',
		})
	}

	const renderCallback = ( { item, hasFavorite, toggleFavorite } ) => {
		return (
			<BWAProductCard
				className={ item.id }
				buttonPrimary={ { href: item.buy_url } }
				buttonSecondary={ {
					onClick: () => {
						history.push( `/marketplace/services/${ item.id }` );
					},
				} }
				id={ item.id }
				imageUrl={ item.images.preview_url }
				type={ item.marketplaceType }
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
