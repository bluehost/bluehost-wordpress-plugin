import classNames from 'classnames';
import { useState } from '@wordpress/element';
import AppStore from '../../data/store';
import HelpCenterSettings from '../settings/helpCenterSettings';
import WonderBlocksSettings from '../settings/wonderBlocksSettings';
import { useUpdateEffect } from 'react-use';
import { featureToggle } from '../../util/helpers';
import { Container, Page, ToggleField } from '@newfold/ui-component-library';
import { useNotification } from 'App/components/notifications';

const Admin = () => {
	const { store, setStore } = useContext( AppStore );
	const [ performance, setPerformance ] = useState(
		store.features.performance
	);
	const [ performanceLocked, setPerformanceLocked ] = useState(
		! store.toggleableFeatures.performance
	);
	const [ staging, setStaging ] = useState( store.features.staging );
	const [ stagingLocked, setStagingLocked ] = useState(
		! store.toggleableFeatures.staging
	);

	const notify = useNotification();

	const getStagingNoticeTitle = () => {
		return staging
			? __( 'Staging Enabled', 'wp-plugin-bluehost' )
			: __( 'Staging Disabled', 'wp-plugin-bluehost' );
	};
	const getStagingNoticeText = () => {
		return staging
			? __(
					'You need to reload the page to manage Staging.',
					'wp-plugin-bluehost'
			  )
			: __( 'Staging will no longer display.', 'wp-plugin-bluehost' );
	};

	const getPerformanceNoticeTitle = () => {
		return performance
			? __( 'Performance Enabled', 'wp-plugin-bluehost' )
			: __( 'Performance Disabled', 'wp-plugin-bluehost' );
	};
	const getPerformanceNoticeText = () => {
		return performance
			? __(
					'You need to reload the page to manage Performance.',
					'wp-plugin-bluehost'
			  )
			: __( 'Performance will no longer display.', 'wp-plugin-bluehost' );
	};

	const togglePerformance = () => {
		featureToggle( 'performance', ( response ) => {
			if ( response.success ) {
				setPerformance( ! performance );
			} else {
				setPerformanceLocked( true );
				notifyError();
			}
		} );
	};

	const toggleStaging = () => {
		featureToggle( 'staging', ( response ) => {
			if ( response.success ) {
				setStaging( ! staging );
			} else {
				setStagingLocked( true );
				notifyError();
			}
		} );
	};

	const updateUI = ( enabled, selector ) => {
		const element = document.querySelector( selector );
		if ( element ) {
			if ( ! enabled ) {
				element.classList.add( 'nfd-disabled' );
			} else {
				element.classList.remove( 'nfd-disabled' );
				// window.location.reload();
			}
		}
	};

	const notifyError = () => {
		notify.push( 'feature-toggle-notice', {
			title: __( 'Sorry, that is not allowed.', 'wp-plugin-bluehost' ),
			description: __(
				'This feature cannot currently be modified.',
				'wp-plugin-bluehost'
			),
			variant: 'error',
		} );
	};

	const notifySuccess = ( renderTitle, renderDescription ) => {
		notify.push( 'feature-toggle-notice', {
			title: renderTitle(),
			description: renderDescription(),
			variant: 'success',
			autoDismiss: 5000,
		} );
	};

	useUpdateEffect( () => {
		setStore( {
			...store,
			performance,
		} );
		notifySuccess( getPerformanceNoticeTitle, getPerformanceNoticeText );
		updateUI( performance, '.wppbh-app-navitem-Performance' );
	}, [ performance ] );

	useUpdateEffect( () => {
		setStore( {
			...store,
			staging,
		} );
		notifySuccess( getStagingNoticeTitle, getStagingNoticeText );
		updateUI( staging, '.wppbh-app-navitem-Staging' );
	}, [ staging ] );

	return (
		<Page title="Admin" className={ 'wppbh-app-settings-page' }>
			<Container className={ 'wppbh-app-settings-container' }>
				<Container.Header
					title={ __( 'Admin', 'wp-plugin-bluehost' ) }
					description={ __(
						'Secret page to manage admin features and settings.',
						'wp-plugin-bluehost'
					) }
					className={ 'wppbh-app-settings-header' }
				/>

				<Container.Block
					separator={ true }
					id={ 'help-center' }
					className={ classNames( 'wppbh-app-admin' ) }
				>
					<Container.SettingsField
						title="Features"
						description="These are the features – not settings."
					>
						<WonderBlocksSettings />
						<br />
						<HelpCenterSettings />
						<br />
						<ToggleField
							id="performance-toggle"
							label="Performance"
							disabled={ performanceLocked }
							checked={ performance }
							onChange={ togglePerformance }
						/>
						<br />
						<ToggleField
							id="staging-toggle"
							label="Staging"
							disabled={ stagingLocked }
							checked={ staging }
							onChange={ toggleStaging }
						/>
					</Container.SettingsField>
				</Container.Block>
			</Container>
		</Page>
	);
};

export default Admin;
