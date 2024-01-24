import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, Container, ToggleField } from '@newfold/ui-component-library';
import AppStore from '../../data/store';
import {
	bluehostSettingsApiFetch,
	comingSoonAdminbarToggle,
} from '../../util/helpers';
import { useNotification } from 'App/components/notifications';

const ComingSoon = () => {
	const { store, setStore } = useContext( AppStore );
	const [ comingSoon, setComingSoon ] = useState( store.comingSoon );
	const [ isError, setError ] = useState( false );

	const notify = useNotification();

	const getComingSoonNoticeTitle = () => {
		return comingSoon
			? __( 'Coming soon activated', 'wp-plugin-bluehost' )
			: __( 'Coming soon deactivated', 'wp-plugin-bluehost' );
	};

	const getComingSoonNoticeText = () => {
		return comingSoon
			? __(
					'Coming soon page is active. Site requires login.',
					'wp-plugin-bluehost'
			  )
			: __(
					'Coming soon page is not active. Site is live to visitors.',
					'wp-plugin-bluehost'
			  );
	};

	const toggleComingSoon = () => {
		bluehostSettingsApiFetch(
			{ comingSoon: ! comingSoon },
			setError,
			// eslint-disable-next-line no-unused-vars
			( response ) => {
				setComingSoon( ! comingSoon );
			}
		);
	};

	const notifySuccess = () => {
		notify.push( 'coming-soon-toggle-notice', {
			title: getComingSoonNoticeTitle(),
			description: <span>{ getComingSoonNoticeText() }</span>,
			variant: 'success',
			autoDismiss: 5000,
		} );
	};

	useUpdateEffect( () => {
		setStore( {
			...store,
			comingSoon,
		} );

		notifySuccess();
		comingSoonAdminbarToggle( comingSoon );
	}, [ comingSoon ] );

	const getComingSoonSectionTitle = () => {
		const getStatus = () => {
			return comingSoon ? (
				<span className="nfd-text-[#e10001]">
					{ __( 'NOT LIVE', 'wp-plugin-bluehost' ) }
				</span>
			) : (
				<span className="nfd-text-[#008112]">
					{ __( 'LIVE', 'wp-plugin-bluehost' ) }
				</span>
			);
		};

		return (
			<span>
				{ __( 'Site Status', 'wp-plugin-bluehost' ) }: { getStatus() }
			</span>
		);
	};

	return (
		<Container.SettingsField
			title={ getComingSoonSectionTitle() }
			description={ __(
				comingSoon ? 'Turn off your "Coming Soon" page when you are ready to launch your website.'
				: 'Turn on your "Coming Soon" page when you need to make major changes to your website.',
				'wp-plugin-bluehost'
			) }
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-6">
				<ToggleField
					id="coming-soon-toggle"
					label="Coming Soon page"
					description={ __(
						'When this is enabled, a placeholder page will be displayed to your website visitors to show that your site is still under construction or undergoing significant changes.',
						'wp-plugin-bluehost'
					) }
					checked={ comingSoon }
					onChange={ () => {
						toggleComingSoon();
					} }
				/>

				{ comingSoon && (
					<Alert variant="info">
						{ __(
							'Your website is currently displaying a "Coming Soon" page.',
							'wp-plugin-bluehost'
						) }
					</Alert>
				) }

				{ isError && (
					<Alert variant="error">
						{ __(
							'Oops! Something went wrong. Please try again.',
							'wp-plugin-bluehost'
						) }
					</Alert>
				) }
			</div>
		</Container.SettingsField>
	);
};

export default ComingSoon;
