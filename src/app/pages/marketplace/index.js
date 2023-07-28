import './stylesheet.scss';

// to pass to marketplace module
import { NewfoldRuntime } from "@newfold-labs/wp-module-runtime";
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Button } from "@yoast/ui-library";
import { SectionContainer, SectionHeader, SectionContent } from "../../components/section";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Page } from "../../components/page";
import MarketplaceList from './MarketplaceList';
import MarketplaceLoading from './MarketplaceLoading';
import MarketplaceError from './MarketplaceError';

const MarketplacePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [marketplaceItems, setMarketplaceItems] = useState([]);
    const [products, setProducts] = useState([]);

    let location = useLocation();

    // constants to pass to module
    const moduleConstants = {
        'eventendpoint': '/newfold-data/v1/events/',
        'perPage': 12,
        'supportsCTB': false, // not needed, but explicity setting to false anyway
    }

    useEffect(() => {
        apiFetch({
            url: NewfoldRuntime.createApiUrl( `/newfold-marketplace/v1/marketplace` )
        }).then((response) => {
            // check response for data
            if (!response.hasOwnProperty('categories') || !response.hasOwnProperty('products')) {
                setIsError(true);
            } else {
                setMarketplaceItems(response.products.data);
            }
        })
    }, []);

    useEffect(() => {
        if (marketplaceItems.length > 0) {
            filterProducts();
        }
    }, [marketplaceItems, location]);

    const filterProducts = () => {
        const urlpath = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        );
        const category = urlpath === 'marketplace' ? 'featured' : urlpath;

        const filterdProducts = marketplaceItems.filter((product) => {
            return product.categories.some(element => {
                return element.toLowerCase() === category.toLowerCase();
              });
              
        });            

        setProducts(filterdProducts);
        setIsLoading(false);
    };

    return (
        <Page className={"wppbh-app-marketplace-page"}>
            <SectionContainer className={'wppbh-app-marketplace-container'}>
                <SectionHeader
                    title={__('Marketplace', 'wp-plugin-bluehost')}
                    subTitle={__('Explore our featured collection of tools and services.', 'wp-plugin-bluehost')}
                    className={'wppbh-app-marketplace-header'}
                />

                <SectionContent className={'wppbh-app-marketplace-content'}>

                    {isLoading && <MarketplaceLoading />}
                    {isError && <MarketplaceError />}
                    {!isLoading && !isError && <MarketplaceList products={products} />}

                </SectionContent>
            </SectionContainer>
        </Page>
    );
};

export default MarketplacePage;