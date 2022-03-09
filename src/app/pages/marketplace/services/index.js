import { BWAMarketplaceTemplate } from '@app/components/templates';
import { BWAProductCard } from '@app/components/molecules';
import { useMojoApi } from '@app/hooks';
import { withRouter } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { addUtmParams, getPlatformBaseUrl } from '@app/functions';

function ServicesPage( { history } ) {
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'services', { category: '', count: 1000 } );
	const [ shimsInserted, setShimsInserted ] = useState(false);

	if ( isError ) {
		throw new Error( 'API Error. Payload: ' + JSON.stringify( payload ) );
	}

	if ( ! shimsInserted && payload.hasOwnProperty('items') ) {
		payload.items.unshift({
			id: 'lendio',
			'buy_url': 'https://lp.lendio.com/partners-lf?source=BlueHost&affiliate=3125925044&campaign=wp&term=BLMS',
			overrideUrl: 'https://lp.lendio.com/partners-lf?source=BlueHost&affiliate=3125925044&campaign=wp&term=BLMS',
			images: {
				'preview_url': 'https://cdn.hiive.space/bluehost/plugin/services-lendio.png',
			},
			marketplaceType: 'services',
			prices: {
				'single_domain_license': '', // removes price from card
			},
			name: 'Apply for a Business Loan – fast',
			buttonPrimary: { children: __( 'Apply Now', 'bluehost-wordpress-plugin' ) },
			buttonSecondary: { children: null },
			created_timestamp: 1631853345,
			sales_count: 9999999998,
		});
		payload.items.unshift({
			id: 'blue-sky',
			'buy_url': getPlatformBaseUrl('/cgi/app/#/marketplace/product/i/bluesky?utm_term=Get%20Started&utm_content=bluesky_link&utm_campaign=&utm_source=wp-admin%2Fadmin.php%3Fpage%3Dbluehost%23%2Fmarketplace%2Fservices&utm_medium=bluehost_plugin'),
			images: {
				'preview_url': 'https://cdn.hiive.space/bluehost/blue-sky-product-banner.png',
			},
			marketplaceType: 'services',
			prices: {
				'single_domain_license': '29.00'
			},
			name: 'Blue Sky Premium Support',
			created_timestamp: 1631853346,
			sales_count: 9999999999,
		})
		setShimsInserted(true);
	}

	const renderCallback = ( { item, hasFavorite, toggleFavorite } ) => {
		return (
			<BWAProductCard
				className={ item.id }
				buttonPrimary={ { href: item.buy_url, ...item?.buttonPrimary } }
				buttonSecondary={ {
					onClick: () => {
						history.push( `/marketplace/services/${ item.id }` );
					},
					...item?.buttonSecondary
				} }
				id={ item.id }
				imageUrl={ item.images.preview_url }
				type={ item.marketplaceType }
				isFavorite={ hasFavorite( item.id ) }
				key={ item.id }
				price={ item.prices.single_domain_license }
				title={ item.name }
				overrideUrl={ 'undefined' !== typeof item.overrideUrl ? item.overrideUrl : ''}
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
