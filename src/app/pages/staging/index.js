import './stylesheet.scss';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { NewfoldRuntime } from '@newfold/wp-module-runtime';
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
		classNames,
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
