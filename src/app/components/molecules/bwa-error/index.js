import './style.scss';

import { BWAButton as Button, BWASpinner as Spinner } from '@app/components/atoms';
import { ErrorStateImage, WarningIcon } from '@app/assets';

import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { getFragment } from '@wordpress/url';
import replace from "lodash/replace";
import { useState } from '@wordpress/element';

const resolvePageUrl = () => {
	if ( 'undefined' !== typeof window.bluehostWpAdminUrl) {
		return window.bluehostWpAdminUrl + 'admin.php?page=bluehost';
	} else {
		let url = window.location.href;
		return replace( url, getFragment(url), '' ); // nix fragment
	}
}

const ReportingUI = ({ status }) => {
	if (true === status) {
		return (
			<div style={{ color: '#17b212'}}>
				<span class="dashicons dashicons-yes"></span>
				{ __( 'Error report sent.', 'bluehost-wordpress-plugin' ) }
			</div>
		)
	} else if (false === status) {
		return (
			<div style={{ color: '#d0021b'}}>
				<span class="dashicons dashicons-no"></span>
				{ __( 'Failed to send error report.', 'bluehost-wordpress-plugin' ) }
			</div>
		)
	} else {
		return (
			<div>
				<div style={{transform: 'scale(0.25)', maxHeight: '40px', display: 'inline-flex', verticalAlign: 'middle', marginRight: '-1rem'}}>
					<Spinner />
				</div>
				<em>{ __( 'Sending error report...', 'bluehost-wordpress-plugin' ) }</em>
			</div>
		)
	}
}

const hideWPSubmenu = () => {
	try {
		const elem = window.document.querySelector( '#toplevel_page_bluehost ul.wp-submenu' );
		elem.style = 'display: none;'
	} catch ( e ) {
		console.log( 'Couldn\'t find Bluehost Menu Element to swap href.' );
	}
}

const restoreWPMenuDefaultURI = () => {
	try {
		const elem = window.document.querySelector( 'a.toplevel_page_bluehost' );
		elem.href = replace( elem.href, getFragment(elem.href), '' );
	} catch ( e ) {
		console.log( 'Couldn\'t restore Bluehost Menu default URI.' );
	}
}

const BWAError = ({error, resetErrorBoundary}) => {
	let [showDetails, toggleDetailsDisplay] = useState(false);
	let [errorLogged, errorSentSuccessfully] = useState(null);

	hideWPSubmenu();
	restoreWPMenuDefaultURI();

	const errorPayload = {
		message: error.message,
		stack: error.stack,
		date: new Date(),
		user: window.userSettings ? window.userSettings.uid : 'Unknown',
		vendor: navigator.vendor ? navigator.vendor : 'Unknown',
		agent: navigator.userAgent ? navigator.userAgent : 'Unknown',
		url: window.location.href,
	};

	if ( null === errorLogged) {
		apiFetch({
			path: '/bluehost/v1/error/track',
			method: 'POST',
			data: errorPayload
		}).then( 
			response => errorSentSuccessfully(true) 
		)
		.catch( 
			error => errorSentSuccessfully(false) 
		);
	}

	return (
		<div id="app-error">
			<div className="warning-icon-wrap">
				<WarningIcon className="animated heartBeat" />
			</div>
			<h3
				className="animated fadeIn">{ __('There was a problem loading the Bluehost Plugin.', 'bluehost-wordpress-plugin') }</h3>
			<p
				className="animated fadeIn">{ __('Get in touch and we\'ll sort out the issue for you.', 'bluehost-wordpress-plugin') }</p>
			<div className="animated fadeIn" style={ {textAlign: 'center', margin: '1rem auto 80px'} }>
				<Button href="https://bluehost.com/support" utmContent="button_contact_support" isPrimary>
					{ __('Contact Support', 'bluehost-wordpress-plugin') }
				</Button>
				<Button href={resolvePageUrl()} isSecondary>
					{ __( 'Try Refresh', 'bluehost-wordpress-plugin' )}
				</Button>
				<br /><br />
				<Button onClick={() => toggleDetailsDisplay(!showDetails)} isLink>
					{ __( 'Details', 'bluehost-wordpress-plugin')}
				</Button>
				<br /><br />
				{ showDetails && (
					<pre style={{ textAlign: 'left', maxWidth: '750px', margin: '0.33rem auto'}}>
						<code dangerouslySetInnerHTML={{ __html: '<strong>' + __( 'Error Message: ') + error.message + '</strong><br /><br />' + error.stack }} />
					</pre>
				)}
				<ReportingUI status={errorLogged} />
			</div>

			<div className="error-illustration-wrap animated fadeIn">
				<ErrorStateImage />
			</div>
		</div>
	);
}

export default BWAError;
