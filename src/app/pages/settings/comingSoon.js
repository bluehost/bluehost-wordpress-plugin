import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, ToggleField } from '@newfold/ui-component-library';
import AppStore from '../../data/store';
import {
	bluehostSettingsApiFetch,
	comingSoonAdminbarToggle,
} from '../../util/helpers';
import { SectionSettings } from 'App/components/section';
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
					{ __( 'Coming Soon', 'wp-plugin-bluehost' ) }
				</span>
			) : (
				<span className="nfd-text-[#008112]">
					{ __( 'Live', 'wp-plugin-bluehost' ) }
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
		<SectionSettings
			title={ getComingSoonSectionTitle() }
			description={ __(
				'Still building your site? Need to make a big change?',
				'wp-plugin-bluehost'
			) }
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-6">
				<ToggleField
					id="coming-soon-toggle"
					label="Coming soon page"
					description={ __(
						'Your Bluehost Coming Soon page lets you hide your site from visitors while you make the magic happen.',
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
		</SectionSettings>
	);
};

export default ComingSoon;
