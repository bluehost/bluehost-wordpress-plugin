/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import {useState, useEffect} from '@wordpress/element';
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

const options = [
    {
        label: __('Popular', 'bluehost-wordpress-plugin'),
        value: 'rating',
    },
    {
        label: __('Price', 'bluehost-wordpress-plugin'),
        value: 'price',
    },
    {
        label: __('Date Added', 'bluehost-wordpress-plugin'),
        value: 'date-added',
    },
    {
        label: __('Favorite', 'bluehost-wordpress-plugin'),
        value: 'favorite',
    },
];

export default function ThemesPage() {
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('rating');
    const [search, setSearch] = useState('');

    useEffect(() => {
        // When the search field changes, reset current page to 1
        setCurrentPage(1);
    }, [search]);

    useEffect(() => {
        // When the sort field changes, reset current page to 1
        setCurrentPage(1);
    }, [sortBy]);

    useEffect(() => {
        setLoading(true);
        const urlParams = new URLSearchParams('');
        urlParams.append('page', currentPage);
        urlParams.append('sort', sortBy);
        if (search.length) {
            urlParams.append('search', search);
        }
        apiFetch({path: '/mojo/v1/themes?' + urlParams.toString()})
            .then(
                (response) => {
                    console.log(urlParams.toString(), response);
                    setItems(response.items);
                    setPageCount(response.pageCount);
                    setLoading(false);
                }
            );
    }, [currentPage, search, sortBy]);

    return (
        <AppPage className="bluehost-themes">
            <header className="bluehost-themes__header">
                <div className="bluehost-themes__header-primary">
                    <h1>{__('Premium Themes', 'bluehost-wordpress-plugin')}</h1>
                    <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
                </div>
                <div className="bluehost-themes__header-secondary">
                    <Search value={search} onChange={setSearch}/>
                    <Dropdown
                        label={__('Sort By', 'bluehost-wordpress-plugin')}
                        onChange={(e) => setSortBy(e.target.value)}
                        options={options}
                        value={sortBy}
                    />
                </div>
            </header>
            {
                isLoading ? (
                    <Spinner/>
                ) : (
                    <Grid>
                        {items.map(item => {
                            return (
                                <ProductCard
                                    buttonSecondary={{
                                        children: __('View Details', 'bluehost-wordpress-plugin'),
                                        href: item.page_url,
                                    }}
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
            <footer className="bluehost-themes__footer">
                <div className="bluehost-themes__ad">Ad goes here</div>
                <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
            </footer>
        </AppPage>
    );
}
