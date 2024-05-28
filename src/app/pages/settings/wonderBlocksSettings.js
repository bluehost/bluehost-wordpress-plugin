import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, ToggleField } from '@newfold/ui-component-library';
import AppStore from '../../data/store';
import { featureToggle } from '../../util/helpers';
import { useNotification } from 'App/components/notifications';

const WonderBlocksSettings = () => {
	const { store, setStore } = useContext( AppStore );
	const [ wonderBlocks, setWonderBlocks ] = useState(
		store.features.patterns
	);
	const [ wonderBlocksLocked, setWonderBlocksLocked ] = useState(
		! store.toggleableFeatures.patterns
	);
	const [ isError, setError ] = useState( false );
	const notify = useNotification();

	const getWonderBlocksNoticeTitle = () => {
		return wonderBlocks
			? __( 'Wonder Blocks Enabled', 'wp-plugin-bluehost' )
			: __( 'Wonder Blocks Disabled', 'wp-plugin-bluehost' );
	};
	const getWonderBlocksNoticeText = () => {
		return wonderBlocks
			? __(
					'Create new content to see Wonder Blocks in action.',
					'wp-plugin-bluehost'
			  )
			: __(
					'Wonder Blocks will no longer display.',
					'wp-plugin-bluehost'
			  );
	};

	const toggleWonderBlocks = () => {
		featureToggle( 'patterns', ( response ) => {
			// console.log( response );
			if ( response.success ) {
				setWonderBlocks( ! wonderBlocks );
			} else {
				setWonderBlocksLocked( true );
				setError( true );
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
			wonderBlocks,
		} );
		notifySuccess( getWonderBlocksNoticeTitle, getWonderBlocksNoticeText );
	}, [ wonderBlocks ] );

	return (
		<div className="nfd-flex nfd-flex-col nfd-gap-6">
			<ToggleField
				id="help-center-toggle"
				label="Wonder Blocks"
				description={ __(
					'Wonder Blocks provides a library of customizable block patterns and page templates.',
					'wp-plugin-bluehost'
				) }
				disabled={ wonderBlocksLocked }
				checked={ wonderBlocks }
				onChange={ toggleWonderBlocks }
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

export default WonderBlocksSettings;
