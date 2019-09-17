import {lazy, Suspense} from 'react';
import {ProductCard} from '@/components';
import {useMojoApi} from '@/hooks';

const Page = lazy(() => import( '@/components/marketplace-page' ));

export default function ThemesPage({history}) {

    const [{done, isError, isLoading, payload}] = useMojoApi('services', {category: '', count: 1000});

    if (isError) {
        throw new Error('API Error');
    }

    const renderCallback = ({item, hasFavorite, toggleFavorite}) => {
        return (
            <ProductCard
                buttonPrimary={{href: item.buy_url}}
                buttonSecondary={{
                    onClick: () => {
                        history.push(`/marketplace/product/${item.id}`);
                    }
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