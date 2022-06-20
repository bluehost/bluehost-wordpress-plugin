import './style.scss';

import { useState } from '@wordpress/element';
import { withRouter } from 'react-router-dom';
// import { addUtmParams } from '@app/functions';

// component sourced from marketplace module
import { default as NewfoldMarketplace } from '../../../../vendor/newfold-labs/wp-module-marketplace/components/marketplace/';

// to pass to marketplace module
import apiFetch from '@wordpress/api-fetch'; 
import classnames from 'classnames';
// import { useLocation } from 'react-router-dom' v6 needed here
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

function MarketplacePage( { history } ) {
	
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
        // these need react-router-dom v6 first
        // useNavigate,
        // useLocation
    };
    // constants to pass to module
    const moduleConstants = {
        'resturl': window.nfdRestRoot,
        'eventendpoint': '/newfold-data/v1/events/',
        'perPage': 12
    }

	return (
        <NewfoldMarketplace 
            Components={moduleComponents}
            methods={moduleMethods}
            constants={moduleConstants}
        />
	);
}

export default withRouter( MarketplacePage );
