import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, ToggleField } from '@newfold/ui-component-library';
import AppStore from '../../data/store';
import { featureToggle, updateUI } from '../../util/helpers';
import { useNotification } from 'App/components/notifications';

const StagingFeatureSettings = () => {
	const { store, setStore } = useContext( AppStore );
	const [ staging, setStaging ] = useState( store.features.staging );
	const [ stagingLocked, setStagingLocked ] = useState(
		! store.toggleableFeatures.staging
	);
	const [ isError, setError ] = useState( false );
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
			staging,
		} );
		notifySuccess( getStagingNoticeTitle, getStagingNoticeText );
		updateUI( '.wppbh-app-navitem-Staging', staging );
	}, [ staging ] );

	return (
		<div className="nfd-flex nfd-flex-col nfd-gap-6">
			<ToggleField
				id="staging-toggle"
				label="Staging"
				description={ __(
					'The staging feature provides a way to copy a site to test new updates, features or content.',
					'wp-plugin-bluehost'
				) }
				disabled={ stagingLocked }
				checked={ staging }
				onChange={ toggleStaging }
			/>

			{ isError && (
				<Alert variant="error">
					{ __(
						'Oops! Something went wrong. Please try again.',
						'wp-plugin-bluehost'
					) }
				</Alert>
			) }
		</div>
	);
};

export default StagingFeatureSettings;
