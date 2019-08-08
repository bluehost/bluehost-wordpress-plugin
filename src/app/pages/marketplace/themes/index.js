/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import {Fragment, useState, useEffect} from '@wordpress/element';
import {__} from '@wordpress/i18n';

/**
 * External dependencies
 */
import {
    AppPage,
    AppSpinner as Spinner,
    Dropdown,
    Grid,
    Pagination,
    ProductCard,
    Search
} from '@/components';

export default function ThemesPage() {
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const urlParams = new URLSearchParams('');
        urlParams.append('page', currentPage);
        apiFetch({path: '/mojo/v1/themes?' + urlParams.toString()})
            .then(
                (response) => {
                    setItems(response.items);
                    setPageCount(response.pageCount);
                    setLoading(false);
                }
            );
    }, [currentPage]);

    return (
        <AppPage>
            <h1>{__('Premium Themes', 'bluehost-wordpress-plugin')}</h1>
            <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
            <Search/>
            <Dropdown/>
            {
                isLoading ? (
                    <Spinner/>
                ) : (
                    <Grid>
                        {items.map(item => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    imageUrl={item.images.thumbnail_url}
                                    price={item.prices.single_domain_license}
                                    title={item.name}
                                    isFavorite={false}
                                />
                            );
                        })}
                    </Grid>
                )
            }
            <div>
                Ad goes here
            </div>
            <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
        </AppPage>
    );
}
