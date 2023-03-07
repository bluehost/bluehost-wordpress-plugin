// to pass to marketplace module
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { useEffect } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardMedia
} from '@wordpress/components';

// component sourced from marketplace module
import { default as NewfoldMarketplaceLite } from '../../../../vendor/newfold-labs/wp-module-marketplace/components/marketplaceLite/';

function MarketplaceSection(props) {
    // indicate specific/default props here
    const vendor = props.vendor ? props.vendor : 'YITH';
    const category = props.category ? props.category : 'eCommerce';
    const perPage = props.perPage ? props.perPage : 12;

	// Components to pass to module
	const moduleComponents = {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardMedia,
	};
	// methods to pass to module
	const moduleMethods = {
		apiFetch,
		classnames,
		useEffect,
		useState,
	};
	// constants to pass to module
	const moduleConstants = {
		'resturl': window.nfdRestRoot,
		'eventendpoint': '/newfold-data/v1/events/',
		'perPage': perPage,
		'supportsCTB': window.nfdConnected,
	}

	return (
			<NewfoldMarketplaceLite
				Components={ moduleComponents }
				methods={ moduleMethods }
				constants={ moduleConstants }
                category={ category }
                vendor={ vendor }
			/>
	);
}

export default MarketplaceSection;
