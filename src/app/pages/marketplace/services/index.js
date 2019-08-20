/**
 * External dependencies
 */
import {chunk, filter, find, reverse, sortBy, without} from 'lodash';
import Fuse from 'fuse.js';

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import {useState, useEffect} from '@wordpress/element';
import {__} from '@wordpress/i18n';

/**
 * Internal dependencies
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

import './style.scss';

function filterBySearch(items, query) {
    if (!query) {
        return items;
    }
    var options = {
        threshold: 0.1,
        keys: [
            'name',
            'short_description',
            'features',
            'tags',
        ]
    };
    var fuse = new Fuse(items, options);
    return fuse.search(query);
}

function filterByFavorites(items, favorites) {
    return filter(items, (item) => favorites.includes(item.id));
}

function sortByDateAdded(items) {
    return reverse(sortBy(items, ['created_timestamp']));
}

function sortByPriceAscending(items) {
    return sortBy(items, (item) => parseInt(item.prices.single_domain_license, 10));
}

function sortByPriceDescending(items) {
    return reverse(sortBy(items, (item) => parseInt(item.prices.single_domain_license, 10)));
}

function sortBySales(items) {
    return reverse(sortBy(items, ['sales_count']));
}

export default function ServicesPage() {

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [pages, setPages] = useState([]);
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState({});
    const [sort, setSort] = useState('sortBySales');

    const options = [
        {
            label: __('Popular', 'bluehost-wordpress-plugin'),
            value: 'sortBySales',
            callback: sortBySales,
        },
        {
            label: __('Price (High to Low)', 'bluehost-wordpress-plugin'),
            value: 'sortByPriceDescending',
            callback: sortByPriceDescending,
        },
        {
            label: __('Price (Low to High)', 'bluehost-wordpress-plugin'),
            value: 'sortByPriceAscending',
            callback: sortByPriceAscending,
        },
        {
            label: __('Date Added', 'bluehost-wordpress-plugin'),
            value: 'sortByDateAdded',
            callback: sortByDateAdded,
        },
        {
            label: __('Favorite', 'bluehost-wordpress-plugin'),
            value: 'filterByFavorites',
            callback: (items) => filterByFavorites(items, favorites),
        },
    ];

    useEffect(() => {
        setLoading(true);
        const urlParams = new URLSearchParams('');
        urlParams.append('category', '');
        urlParams.append('count', 1000);
        // Fetch API response once on mount
        apiFetch({path: '/mojo/v1/services?' + urlParams.toString()})
            .then(response => {
                console.log(response);
                setResponse(response);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // When the search field or sort changes, reset current page to 1
        setCurrentPage(1);
    }, [sort, query]);

    useEffect(() => {
        // Apply the correct sort/filter callbacks
        let results = response.items;
        results = filterBySearch(results, query);
        results = find(options, ['value', sort]).callback.call(null, results);
        // Split results up into pages
        const pages = chunk(results, itemsPerPage);
        setPages(pages);
        setPageCount(pages.length);
    }, [response, sort, query]);

    useEffect(() => {
        // Set the items to be displayed on the current page.
        const items = pages[currentPage - 1];
        setItems(items);
        window.scrollTo(0, 0);
    }, [pages, currentPage]);

    return (
        <AppPage className="bluehost-services">
            <header className="bluehost-services__header">
                <div className="bluehost-services__header-primary">
                    <h1>{__('Premium Services', 'bluehost-wordpress-plugin')}</h1>
                    <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
                </div>
                <div className="bluehost-services__header-secondary">
                    <Search value={query} onChange={setQuery}/>
                    <Dropdown
                        label={__('Sort By', 'bluehost-wordpress-plugin')}
                        onChange={(e) => setSort(e.target.value)}
                        options={options}
                        value={sort}
                    />
                </div>
            </header>
            {
                isLoading ? (
                    <Spinner/>
                ) : (
                    <Grid>
                        {items ? items.map(item => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    buttonSecondary={{
                                        children: __('View Details', 'bluehost-wordpress-plugin'),
                                        href: item.page_url,
                                    }}
                                    id={item.id}
                                    imageUrl={item.images.thumbnail_url}
                                    price={item.prices.single_domain_license}
                                    title={item.name}
                                    isFavorite={favorites.includes(item.id)}
                                    toggleFavorite={() => {
                                        if (favorites.includes(item.id)) {
                                            setFavorites(without(favorites, item.id));
                                        } else {
                                            setFavorites([...favorites, item.id]);
                                        }
                                    }}
                                />
                            );
                        }) : 'Sorry, no items matched your query.'}
                    </Grid>
                )
            }
            <footer className="bluehost-services__footer">
                <div className="bluehost-services__ad"><img src="https://via.placeholder.com/468x60" alt=""/></div>
                <Pagination callback={setCurrentPage} currentPage={currentPage} pageCount={pageCount}/>
            </footer>
        </AppPage>
    );
}
