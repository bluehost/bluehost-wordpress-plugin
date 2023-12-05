import './stylesheet.scss';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { useNotification } from 'App/components/notifications';
// component sourced from staging module
import { default as NewfoldStaging } from '@modules/wp-module-staging/components/staging/';

const Staging = () => {
	// constants to pass to module
	const moduleConstants = {
		text: {
			title: __( 'Staging', 'bluehost-wordpress-plugin' ),
		},
	};

	// methods to pass to module
	const moduleMethods = {
		apiFetch,
		classnames,
		useState,
		useEffect,
		NewfoldRuntime,
		useNotification,
	};

	return (
		<NewfoldStaging
			constants={ moduleConstants }
			methods={ moduleMethods }
		/>
	);
};

export default Staging;
