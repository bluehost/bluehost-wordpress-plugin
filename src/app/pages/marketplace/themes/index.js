import {lazy, Suspense} from 'react';
import {__} from '@wordpress/i18n';
import {ProductCard} from '@/components';
import {useMojoApi} from '@/hooks';

const Page = lazy(() => import( '@/components/marketplace-page' ));

export default function ThemesPage() {

    const [{done, isError, isLoading, payload}] = useMojoApi('themes', {count: 1000});

    if (!isError) {
        throw new Error('API Error. Payload: ' + JSON.stringify(payload));
    }

    const renderCallback = ({item, hasFavorite, toggleFavorite}) => {
        return (
            <ProductCard
                buttonPrimary={{href: item.buy_url}}
                buttonSecondary={{
                    children: __('Preview', 'bluehost-wordpress-plugin'),
                    href: item.preview_url,
                    target: '_blank'
                }}
                id={item.id}
                imageUrl={item.images.thumbnail_url}
                isFavorite={hasFavorite(item.id)}
                key={item.id}
                price={item.prices.single_domain_license}
                title={item.name}
                toggleFavorite={() => toggleFavorite(item.id)}
            />
        );
    };

    return (
        <Suspense fallback={<div/>}>
            <Page isLoading={!done || isLoading} payload={payload} render={renderCallback}/>
        </Suspense>
    );
}