import './stylesheet.scss';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { NewfoldRuntime } from "@newfold-labs/wp-module-runtime";
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent, SectionSettings } from '../../components/section';
import { useNotification } from '../../components/notifications/feed';
// component sourced from staging module
import { default as NewfoldStaging } from '@modules/wp-module-staging/components/staging/';

const Staging = () => {
    
    // constants to pass to module
    const moduleConstants = {
		'text': {
			'title': __('Staging', 'bluehost-wordpress-plugin'),
		}
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

	const moduleComponents = {
		Page,
        SectionHeader,
		SectionContent,
        SectionSettings,
        SectionContainer,
	}

    return (
        
        <NewfoldStaging
            Components={moduleComponents}
            constants={moduleConstants}
            methods={moduleMethods}
        />

    );
}

export default Staging;