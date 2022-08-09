import './style.scss';

import { useState } from '@wordpress/element';
// import { addUtmParams } from '@app/functions';

// component sourced from marketplace module
import { default as NewfoldMarketplace } from '../../../../vendor/newfold-labs/wp-module-marketplace/components/marketplace/';

// to pass to marketplace module
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
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

import { BWACommonTemplate as Page } from '@app/components/templates';

function MarketplacePage() {

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
		'resturl': window.nfdRestRoot,
		'eventendpoint': '/newfold-data/v1/events/',
		'perPage': 12,
		'supportsCTB': window.nfdConnected,
	}

	return (
		<Page className="page-marketplace">
			<NewfoldMarketplace
				Components={ moduleComponents }
				methods={ moduleMethods }
				constants={ moduleConstants }
			/>
		</Page>
	);
}

export default MarketplacePage;
