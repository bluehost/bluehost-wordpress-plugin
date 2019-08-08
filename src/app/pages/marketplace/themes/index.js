/**
 * WordPress dependencies
 */
import {Fragment, useState, useEffect} from '@wordpress/element';
import {__} from '@wordpress/i18n';
/**
 * External dependencies
 */
import {AppPage, AppSpinner as Spinner, Grid, ProductCard} from '@/components';

import apiFetch from '@wordpress/api-fetch';

export default function ThemesPage() {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    apiFetch({path: '/mojo/v1/items'}).then((items) => {
        console.log(items);
        setItems(items);
        setLoading(false);
    });
    return (
        <AppPage>
            {__('Themes Page', 'bluehost-wordpress-plugin')}
            <Grid>
                {
                    isLoading ? (
                        <Spinner/>
                    ) : (
                        <Fragment>
                            {items.map(item => {
                                return (
                                    <ProductCard
                                        imageUrl={item.images.thumbnail_url}
                                        price={item.prices.single_domain_license}
                                        title={item.name}
                                    />
                                );
                            })}
                        </Fragment>
                    )
                }
            </Grid>
        </AppPage>
    );
}
