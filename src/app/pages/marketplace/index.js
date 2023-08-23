import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { useState, useEffect } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import { SectionContainer, SectionHeader, SectionContent } from "../../components/section";
import { Page } from "../../components/page";
import { NewfoldRuntime } from "@newfold-labs/wp-module-runtime";

// component sourced from marketplace module
import { default as NewfoldMarketplace } from '../../../../vendor/newfold-labs/wp-module-marketplace/components/marketplace/';

const MarketplacePage = () => {

    // constants to pass to module
    const moduleConstants = {
        'eventendpoint': '/newfold-data/v1/events/',
        'perPage': 12,
        'supportsCTB': true,
    };

    // methods to pass to module
    const moduleMethods = {
        apiFetch,
        classnames,
        useState,
        useEffect,
        useLocation,
        NewfoldRuntime,
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

                    <NewfoldMarketplace 
                        methods={moduleMethods}
                        constants={moduleConstants}
                    />

                </SectionContent>
            </SectionContainer>
        </Page>
    );
};

export default MarketplacePage;