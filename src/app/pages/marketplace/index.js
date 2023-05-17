import './stylesheet.scss';

// to pass to marketplace module
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

    const products = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setIsError(true);
        }, 5000);
    }, []);

    // constants to pass to module
    const moduleConstants = {
        'resturl': window.WPPB.resturl,
        'eventendpoint': '/newfold-data/v1/events/',
        'perPage': 12,
        'supportsCTB': false, // not needed, but explicity setting to false anyway
    }

    return (
        <Page className={"wppb-app-marketplace-page"}>
            <SectionContainer className={'wppb-app-marketplace-container'}>
                <SectionHeader
                    title={'Marketplace'}
                    subTitle={'Explore our featured collection of tools and services.'}
                    className={'wppb-app-marketplace-header'}
                />

                <SectionContent className={'wppb-app-marketplace-content'}>

                    {isLoading && <MarketplaceLoading />}
                    {isError && <MarketplaceError />}
                    {!isLoading && !isError &&
                        <MarketplaceList products={products}/>
                    }

                </SectionContent>
            </SectionContainer>
        </Page>
    );
};

export default MarketplacePage;