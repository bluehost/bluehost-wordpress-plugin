import {
	BWAMarketplaceTemplate,
} from '@app/components/templates';
import { BWAProductCard } from '@app/components/molecules';
import { useMojoApi } from '@app/hooks';
import { useState } from '@wordpress/element';
import { withRouter } from 'react-router-dom';
import { addUtmParams } from '@app/functions';

// component sourced from module
import { default as NewfoldMarketplace } from '../../../../../vendor/newfold-labs/wp-module-marketplace/components/marketplace/'; 
// to pass to notifications module
import apiFetch from '@wordpress/api-fetch'; 
import classnames from 'classnames';
import { useEffect } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardMedia,
} from '@wordpress/components';

function PluginsPage( { history } ) {
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'plugins', { count: 1000 } );
	const [ shimsInserted, setShimsInserted ] = useState(false);

	if ( isError ) {
		throw new Error( 'API Error. Payload: ' + JSON.stringify( payload ) );
	}

	if ( ! shimsInserted && payload.hasOwnProperty('items') ) {
		payload.items.unshift({
			id: 'yoast-seo-premium',
			'buy_url': addUtmParams('https://yoa.st/bh-premium'),
			images: {
				'preview_url': 'https://cdn.hiive.space/bluehost/plugin/yoast-seo-premium.png'
			},
			marketplaceType: 'plugins',
			prices: {
				'single_domain_license': '99.00'
			},
			name: 'Yoast SEO Premium',
			sales_count: 9999999999,
			created_timestamp: 1631853346,
		})
		payload.items.unshift({
			id: 'yoast-woocommerce-seo',
			'buy_url': addUtmParams('https://yoa.st/bh-woo-seo'),
			images: {
				'preview_url': 'https://cdn.hiive.space/bluehost/plugin/yoast-seo-woo.png'
			},
			marketplaceType: 'plugins',
			prices: {
				'single_domain_license': '79.00'
			},
			name: 'Yoast WooCommerce SEO',
			sales_count: 999999999,
			created_timestamp: 1631853346,
		})
		setShimsInserted(true);
	}

	const renderCallback = ( { item, hasFavorite, toggleFavorite } ) => {
		return (
			<BWAProductCard
				className={item.id}
				buttonPrimary={ { href: item.buy_url } }
				buttonSecondary={ {
					onClick: () => {
						history.push( `/marketplace/plugins/${ item.id }` );
					},
				} }
				id={ item.id }
				type={ item.marketplaceType }
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
		<>
			<NewfoldMarketplace 
				apiFetch={apiFetch}
				classnames={classnames} 
				resturl={window.nfdRestRoot}
				useState={useState}
				useEffect={useEffect}
				Button={Button}
				Card={Card}
				CardBody={CardBody}
				CardFooter={CardFooter}
				CardHeader={CardHeader}
				CardMedia={CardMedia}
			/>
			<BWAMarketplaceTemplate
				isLoading={ ! done || isLoading }
				payload={ payload }
				render={ renderCallback }
				marketplaceType="plugins"
				type="marketplace"
			/>
		</>
	);
}

export default withRouter( PluginsPage );
