/**
 * WordPress dependencies
 */
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
    ProductDetails,
    Search
} from '@/components';
import {useFavorites, useMojoApi, useMojoFilter, useMojoSearch, useMojoSort, usePaginator} from '@/hooks';

import './style.scss';

export default function PluginsPage() {

    const [activeItem, setActiveItem] = useState({});
    const [sort, setSort] = useState('sort-sales-desc');
    const [{payload, isLoading}] = useMojoApi('plugins', {count: 1000});
    const [{favorites}, {hasFavorite, toggleFavorite}] = useFavorites();
    const [{items, pageCount, pageNumber}, {setCollection, setPageNumber}] = usePaginator();
    const [sortBy] = useMojoSort();
    const [filterBy] = useMojoFilter(favorites);
    const [{query}, {search, setQuery}] = useMojoSearch();
    const [view, setView] = useState('list');

    useEffect(() => {

        // Fetch items
        let results = payload.items;

        // Determine sort/filter method
        let [type, method, order] = sort.split('-');

        // Sort/filter
        results = ('filter' === type) ? filterBy(sortBy(results, 'sales'), method) : sortBy(results, method, order);

        // Handle search
        results = search(results, query);

        // Split results up into pages
        setCollection(results);
        setPageNumber(1);

    }, [payload, sort, query]);

    useEffect(() => {

        // Scroll to top of page when changing pages
        window.scrollTo(0, 0);

    }, [pageNumber]);

    return (
        <AppPage className="bluehost-plugins">
            <header className="bluehost-plugins__header">
                <div className="bluehost-plugins__header-primary">
                    <h1>{__('Premium Plugins', 'bluehost-wordpress-plugin')}</h1>
                    {view === 'list' && (
                        <Pagination callback={setPageNumber} currentPage={pageNumber} pageCount={pageCount}/>
                    )}
                </div>
                {view === 'list' && (
                    <div className="bluehost-plugins__header-secondary">
                        <Search value={query} onChange={setQuery}/>
                        <Dropdown
                            id="sort-filter"
                            label={__('Sort By', 'bluehost-wordpress-plugin')}
                            onChange={(value) => setSort(value)}
                            options={[
                                {
                                    label: __('Popular', 'bluehost-wordpress-plugin'),
                                    value: 'sort-sales-desc',
                                },
                                {
                                    label: __('Price (High to Low)', 'bluehost-wordpress-plugin'),
                                    value: 'sort-price-desc',
                                },
                                {
                                    label: __('Price (Low to High)', 'bluehost-wordpress-plugin'),
                                    value: 'sort-price-asc',
                                },
                                {
                                    label: __('Date Added', 'bluehost-wordpress-plugin'),
                                    value: 'sort-date-desc',
                                },
                                {
                                    label: __('Favorite', 'bluehost-wordpress-plugin'),
                                    value: 'filter-favorites',
                                },
                            ]}
                            value={sort}
                            width={178}
                        />
                    </div>
                )}
            </header>
            {
                isLoading ? (
                    <Spinner/>
                ) : (
                    view === 'list' ? (
                        <Grid>
                            {items ? items.map(item => {
                                return (
                                    <ProductCard
                                        buttonPrimary={{href: item.buy_url}}
                                        buttonSecondary={{
                                            onClick: () => {
                                                setView('item');
                                                setActiveItem(item);
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
                            }) : 'Sorry, no items matched your query.'}
                        </Grid>
                    ) : (
                        <ProductDetails
                            item={activeItem}
                            onClose={() => {
                                setView('list');
                                setActiveItem({});
                            }}
                            rootBreadcrumbText={__('All Premium Plugins', 'bluehost-wordpress-plugin')}
                        />
                    )
                )
            }
            {view === 'list' && (
                <footer className="bluehost-plugins__footer">
                    <div className="bluehost-plugins__ad"><img src="https://via.placeholder.com/468x60" alt=""/></div>
                    <Pagination callback={setPageNumber} currentPage={pageNumber} pageCount={pageCount}/>
                </footer>
            )}
        </AppPage>
    );
}
