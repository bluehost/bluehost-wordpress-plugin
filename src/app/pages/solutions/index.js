import './style.scss';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { Container, Page } from '@newfold/ui-component-library';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { default as NewfoldEntitlements } from '@modules/wp-module-solutions/components/entitlements';

const Solutions = () => {
	// constants to pass to module
	const moduleConstants = {
		text: {
			title: __( 'Solution', 'bluehost-wordpress-plugin' ),
			subTitle: __(
				'Explore the plugins and tools available with your solution.',
				'bluehost-wordpress-plugin'
			),
			error: __(
				'Oops, there was an error loading your plugins and tools, please try again later.',
				'bluehost-wordpress-plugin'
			),
			noEntitlements: __(
				'Sorry, no current plugins and tools. Please, try again later.',
				'bluehost-wordpress-plugin'
			),
		},
	};

	// methods to pass to module
	const moduleMethods = {
		apiFetch,
		classNames,
		useState,
		useEffect,
		useLocation,
		useMatch,
		useNavigate,
		NewfoldRuntime,
	};

	return (
		<Page>
			<Container
				className={ 'newfold-entitlements-container nfd-overflow-clip' }
			>
				<NewfoldEntitlements
					methods={ moduleMethods }
					constants={ moduleConstants }
				/>
			</Container>
		</Page>
	);
};

export default Solutions;
