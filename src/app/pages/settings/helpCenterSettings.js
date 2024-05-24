import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, ToggleField } from '@newfold/ui-component-library';
import AppStore from '../../data/store';
import { featureToggle } from '../../util/helpers';
import { useNotification } from 'App/components/notifications';

const HelpCenterSettings = () => {
	const { store, setStore } = useContext( AppStore );
	const [ helpCenter, setHelpCenter ] = useState( store.features.helpCenter );
	const [ helpCenterLocked, setHelpCenterLocked ] = useState(
		! store.toggleableFeatures.helpCenter
	);
	const [ isError, setError ] = useState( false );
	const notify = useNotification();

	const getHelpCenterNoticeTitle = () => {
		return helpCenter
			? __( 'Help Center Enabled', 'wp-plugin-bluehost' )
			: __( 'Help Center Disabled', 'wp-plugin-bluehost' );
	};
	const getHelpCenterNoticeText = () => {
		return helpCenter
			? __(
					'You need to reload the page to see the Help Center.',
					'wp-plugin-bluehost'
			  )
			: __(
					'The help center will no longer display.',
					'wp-plugin-bluehost'
			  );
	};

	const toggleHelpCenter = () => {
		featureToggle( 'helpCenter', ( response ) => {
			// console.log( response );
			if ( response.success ) {
				setHelpCenter( ! helpCenter );
			} else {
				setHelpCenterLocked( true );
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
			helpCenter,
		} );
		notifySuccess( getHelpCenterNoticeTitle, getHelpCenterNoticeText );
		updateUI( helpCenter, '#wp-admin-bar-help-center' );
	}, [ helpCenter ] );

	return (
		<div className="nfd-flex nfd-flex-col nfd-gap-6">
			<ToggleField
				id="help-center-toggle"
				label="Help Center"
				description={ __(
					'The Help Center page can give you all kinds of WordPress answers from a prompt with the help of AI.',
					'wp-plugin-bluehost'
				) }
				disabled={ helpCenterLocked }
				checked={ helpCenter }
				onChange={ toggleHelpCenter }
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

export default HelpCenterSettings;
