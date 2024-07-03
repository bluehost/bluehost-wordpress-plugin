import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect, useContext, Fragment } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Container, Page } from '@newfold/ui-component-library';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import AppStore from '../../data/store';
import {
	bluehostSettingsApiFetch as newfoldSettingsApiFetch,
	bluehostPurgeCacheApiFetch as newfoldPurgeCacheApiFetch,
} from 'App/util/helpers';
import { useNotification } from 'App/components/notifications';

import { default as NewfoldPerformance } from '@modules/wp-module-performance/components/performance/';

const PerformancePage = () => {
	// constants to pass to module
	const moduleConstants = {};

	// methods to pass to module
	const moduleMethods = {
		apiFetch,
		useState,
		useEffect,
		useContext,
		NewfoldRuntime,
		useNotification,
		newfoldSettingsApiFetch,
		newfoldPurgeCacheApiFetch,
		useUpdateEffect,
		AppStore,
	};

	const moduleComponents = {
		Fragment,
	};

	return (
		<Page title="Performance" className={ 'wppbh-app-settings-page' }>
			<Container className={ 'wppbh-app-settings-container' }>
				<Container.Header
					title={ __( 'Performance', 'wp-plugin-bluehost' ) }
					description={ __(
						'This is where you can manage cache settings for your website.',
						'wp-plugin-bluehost'
					) }
					className={ 'wppbh-app-settings-header' }
				/>
				<NewfoldPerformance
					constants={ moduleConstants }
					methods={ moduleMethods }
					Components={ moduleComponents }
				/>
			</Container>
		</Page>
	);
};

export default PerformancePage;
