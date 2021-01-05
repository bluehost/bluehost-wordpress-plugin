import { BWAMarketplaceTemplate } from '@app/components/templates';
import { BWAProductCard } from '@app/components/molecules';
import { __ } from '@wordpress/i18n';
import { useMojoApi } from '@app/hooks';

export default function ThemesPage() {
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'themes', { count: 1000 } );

	if ( isError ) {
		throw new Error( 'API Error. Payload: ' + JSON.stringify( payload ) );
	}

	const renderCallback = ( { item, hasFavorite, toggleFavorite } ) => {
		return (
			<BWAProductCard
				buttonPrimary={ { href: item.buy_url } }
				buttonSecondary={ {
					children: __( 'Preview', 'bluehost-wordpress-plugin' ),
					href: item.preview_url,
					target: '_blank',
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
			marketplaceType="themes"
			type="marketplace"
		/>
	);
}
