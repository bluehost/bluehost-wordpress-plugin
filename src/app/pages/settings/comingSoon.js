import AppStore from '../../data/store';
import {
	bluehostSettingsApiFetch,
	comingSoonAdminbarToggle,
} from '../../util/helpers';
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, ToggleField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";
import { useNotification } from '../../components/notifications/feed';

const ComingSoon = () => {
	const { store, setStore } = useContext(AppStore);
	const [comingSoon, setComingSoon] = useState(store.comingSoon);
	const [isError, setError] = useState(false);

	let notify = useNotification();

	const getComingSoonNoticeTitle = () => {
		return comingSoon
			? __('Coming soon activated', 'wp-plugin-bluehost')
			: __('Coming soon deactivated', 'wp-plugin-bluehost');
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
		bluehostSettingsApiFetch({ comingSoon: !comingSoon }, setError, (response) => {
			setComingSoon(!comingSoon);
		});
	};

	const notifySuccess = () => {
		notify.push("coming-soon-toggle-notice", {
			title: getComingSoonNoticeTitle(),
			description: (
				<span>
					{getComingSoonNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			comingSoon,
		});

		notifySuccess();
		comingSoonAdminbarToggle(comingSoon);
	}, [comingSoon]);

	return (
		<SectionSettings
			title={__('Maintenance Mode', 'wp-plugin-bluehost')}
			description={__('Still building your site? Need to make a big change?', 'wp-plugin-bluehost')}
		>
			<div className="yst-flex yst-flex-col yst-gap-6">
				<ToggleField
					id="coming-soon-toggle"
					label="Coming soon page"
					description={__(
						'Your Bluehost Coming Soon page lets you hide your site from visitors while you make the magic happen.',
						'wp-plugin-bluehost'
					)}
					checked={comingSoon}
					onChange={() => {
						toggleComingSoon();
					}}
				/>

				{comingSoon &&
					<Alert variant="info">
						{__('Your website is currently displaying a "Coming Soon" page.', 'wp-plugin-bluehost')}
					</Alert>
				}

				{isError &&
					<Alert variant="error">
						{__('Oops! Something went wrong. Please try again.', 'wp-plugin-bluehost')}
					</Alert>
				}
			</div>
		</SectionSettings>
	);
}

export default ComingSoon;