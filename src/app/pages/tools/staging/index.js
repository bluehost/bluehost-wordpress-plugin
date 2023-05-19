import './style.scss';

import { BWACommonTemplate } from '@app/components/templates';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Icon,
	Spinner,
} from '@wordpress/components';
import { default as NewfoldStaging } from '../../../../../vendor/newfold-labs/wp-module-staging/components/staging/';

export default function StagingPage() {

	// Components to pass to module
	const moduleComponents = {
		Button,
		ButtonGroup,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		Icon,
		Spinner
	};

	// methods to pass to module
	const moduleMethods = {
		apiFetch,
		classnames,
		useState,
		useEffect
	};

	// constants to pass to module
	const moduleConstants = {
		'resturl': window.nfdplugin.restApiUrl,
		'restnonce': window.nfdplugin.restApiNonce,
		'eventendpoint': '/newfold-data/v1/events/',
		'stagingLongDescription': __( 'A staging site is a copy of your site where you can safely test changes before publishing them to your production site. It gives you a way to try new things, test updates, and then deploy them when you\'re ready.', 'bluehost-wordpress-plugin' ),
		'stagingDescription': __( 'This is an unpublished copy of your website.', 'bluehost-wordpress-plugin' ),
		'productionDescription': __( 'This is your live website.', 'bluehost-wordpress-plugin' ),
		'cloneButtonText': __( 'Clone to Staging', 'bluehost-wordpress-plugin' ),
		'unknownErrorMsg': __('An unknown error occurred', 'bluehost-wordpress-plugin' ),
	};

	return (
		<BWACommonTemplate className="bluehost-staging">
			<BWAHeading level="h2" size={ 1 } className="is-page-title">{ __( 'Staging', 'bluehost-wordpress-plugin' ) }</BWAHeading>

			<NewfoldStaging 
				Components={ moduleComponents }
				methods={ moduleMethods }
				constants={ moduleConstants }
			/>

		</BWACommonTemplate>
	);
}
