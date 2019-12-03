import { lazy, Suspense } from 'react';
import { withRouter } from 'react-router-dom';

import { ProductCard, AppSpinner } from '@/components';
import { useMojoApi } from '@/hooks';

const Page = lazy( () => import( '@/components/marketplace-page' ) );

function PluginsPage( { history } ) {
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'plugins', { count: 1000 } );

	if ( isError ) {
		throw new Error( 'API Error. Payload: ' + JSON.stringify( payload ) );
	}

	const renderCallback = ( { item, hasFavorite, toggleFavorite } ) => {
		return (
			<ProductCard
				buttonPrimary={ { href: item.buy_url } }
				buttonSecondary={ {
					onClick: () => {
						history.push( `/marketplace/product/${ item.id }` );
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
		<Suspense fallback={ <AppSpinner small /> }>
			<Page
				isLoading={ ! done || isLoading }
				payload={ payload }
				render={ renderCallback }
				type="plugins"
			/>
		</Suspense>
	);
}

export default withRouter( PluginsPage );
