import './stylesheet.scss';

// to pass to marketplace module
import apiFetch from '@wordpress/api-fetch'; 
import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardMedia,
    TabPanel,
    Spinner
} from '@wordpress/components';

// component sourced from marketplace module
import { default as NewfoldMarketplace } from '../../../../vendor/newfold-labs/wp-module-marketplace/components/marketplace/';

const MarketplacePage = () => {
	
    // Components to pass to module
    const moduleComponents = {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardMedia,
        TabPanel,
        Spinner
    };
    // methods to pass to module
    const moduleMethods = {
        apiFetch,
        classnames,
        useState,
        useEffect,
        useNavigate,
        useLocation
    };
    // constants to pass to module
    const moduleConstants = {
        'resturl': window.WPPB.resturl,
        'eventendpoint': '/newfold-data/v1/events/',
        'perPage': 12,
        'supportsCTB': false, // not needed, but explicity setting to false anyway
    }

	return (
        <NewfoldMarketplace 
            Components={moduleComponents}
            methods={moduleMethods}
            constants={moduleConstants}
        />
	);
};

export default MarketplacePage;