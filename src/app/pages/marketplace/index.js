import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { Page } from "../../components/page";
import { SectionContainer, SectionHeader, SectionContent } from "../../components/section";
import { NewfoldRuntime } from "@newfold-labs/wp-module-runtime";
// component sourced from marketplace module
import { default as NewfoldMarketplace } from '@modules/wp-module-marketplace/components/marketplace/';

const MarketplacePage = () => {

    // constants to pass to module
    const moduleConstants = {
		'supportsCTB': true,
		'text': {
			'title': __('Marketplace', 'bluehost-wordpress-plugin'),
			'subTitle': __('Explore our featured collection of tools and services.', 'bluehost-wordpress-plugin'),
			'error': __('Oops, there was an error loading the marketplace, please try again later.', 'bluehost-wordpress-plugin'),
			'noProducts': __('Sorry, no marketplace items. Please, try again later.', 'bluehost-wordpress-plugin'),
			'loadMore': __('Load More', 'bluehost-wordpress-plugin'),
		}
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

	const moduleComponents = {
		SectionHeader,
		SectionContent,
	}

    return (
        <Page className={"wppbh-app-marketplace-page"}>
            <SectionContainer className={'wppbh-app-marketplace-container'}>

                <NewfoldMarketplace 
                    methods={moduleMethods}
                    constants={moduleConstants}
                    Components={moduleComponents}
                />

            </SectionContainer>
        </Page>
    );
};

export default MarketplacePage;