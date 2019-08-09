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
        value: 'popular',
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
    const [sortBy, setSortBy] = useState('popular');
    const [search, setSearch] = useState('');

    useEffect(() => {
        setLoading(true);
        const urlParams = new URLSearchParams('');
        urlParams.append('page', currentPage);
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
    }, [currentPage, search]);

    return (
        <AppPage>
            <h1>{__('Premium Themes', 'bluehost-wordpress-plugin')}</h1>
            <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
            <Search value={search} onChange={setSearch}/>
            <Dropdown
                label={__('Sort By', 'bluehost-wordpress-plugin')}
                onChange={(e) => setSortBy(e.target.value)}
                options={options}
                value={sortBy}
            />
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
