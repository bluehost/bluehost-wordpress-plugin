import AppStore from '../../data/store';
import { blueprintSettingsApiFetch } from '../../util/helpers';
import { useUpdateEffect } from 'react-use';
import { useState } from '@wordpress/element';
import { Alert, ToggleField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";
import { useNotification } from '../../components/notifications/feed';

const AutomaticUpdatesMajorCore = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [autoUpdatesMajorCore, setAutoUpdatesCore] = useState(
		store.autoUpdatesMajorCore
	);

	const getCoreNoticeTitle = () => {
		return autoUpdatesMajorCore
			? __('Enabled Core auto-updates', 'wp-plugin-blueprint')
			: __('Disabled Core auto-updates', 'wp-plugin-blueprint');
	};
	const getCoreNoticeText = () => {
		return autoUpdatesMajorCore
			? __('WordPress will automatically update.', 'wp-plugin-blueprint')
			: __('WordPress must be manually updated.', 'wp-plugin-blueprint');
	};

	const toggleAutoUpdatesMajorCore = () => {
		blueprintSettingsApiFetch({ autoUpdatesMajorCore: !autoUpdatesMajorCore }, setError, (response) => {
			setAutoUpdatesCore(!autoUpdatesMajorCore);
		});
	};

	const notifySuccess = () => {
		notify.push("major-core-autoupdate-notice", {
			title: getCoreNoticeTitle(),
			description: (
				<span>
					{getCoreNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			autoUpdatesMajorCore,
		});

		notifySuccess();
	}, [autoUpdatesMajorCore]);

	return (
		<ToggleField
			id="autoupdate-core-toggle"
			label={__('WordPress Core', 'wp-plugin-blueprint')}
			checked={autoUpdatesMajorCore}
			onChange={toggleAutoUpdatesMajorCore}
		/>
	);
}

const AutomaticUpdatesPlugins = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [autoUpdatesPlugins, setAutoUpdatesPlugins] = useState(
		store.autoUpdatesPlugins
	);

	const getPluginsNoticeTitle = () => {
		return autoUpdatesPlugins
			? __('Enabled Plugins auto-update', 'wp-plugin-blueprint')
			: __('Disabled Plugins auto-update', 'wp-plugin-blueprint');
	};
	const getPluginsNoticeText = () => {
		return autoUpdatesPlugins
			? __('All plugins will automatically update.', 'wp-plugin-blueprint')
			: __('Each plugin must be manually updated.', 'wp-plugin-blueprint');
	};

	const toggleAutoUpdatesPlugins = () => {
		blueprintSettingsApiFetch({ autoUpdatesPlugins: !autoUpdatesPlugins }, setError, (response) => {
			setAutoUpdatesPlugins(!autoUpdatesPlugins);
		});
	};

	const notifySuccess = () => {
		notify.push("plugins-autoupdate-notice", {
			title: getPluginsNoticeTitle(),
			description: (
				<span>
					{getPluginsNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			autoUpdatesPlugins,
		});

		notifySuccess();
	}, [autoUpdatesPlugins]);

	return (
		<ToggleField
			id="autoupdate-plugins-toggle"
			label={__('Plugins', 'wp-plugin-blueprint')}
			checked={autoUpdatesPlugins}
			onChange={toggleAutoUpdatesPlugins}
		/>
	);
}

const AutomaticUpdatesThemes = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [autoUpdatesThemes, setAutoUpdatesThemes] = useState(
		store.autoUpdatesThemes
	);

	const getThemesNoticeTitle = () => {
		return autoUpdatesThemes
			? __('Enabled Themes auto-update', 'wp-plugin-blueprint')
			: __('Disabled Themes auto-update', 'wp-plugin-blueprint');
	};

	const getThemesNoticeText = () => {
		return autoUpdatesThemes
			? __('All themes will automatically update.', 'wp-plugin-blueprint')
			: __('Each theme must be manually updated.', 'wp-plugin-blueprint');
	};

	const toggleAutoUpdatesThemes = () => {
		blueprintSettingsApiFetch({ autoUpdatesThemes: !autoUpdatesThemes }, setError, (response) => {
			setAutoUpdatesThemes(!autoUpdatesThemes);
		});
	};

	const notifySuccess = () => {
		notify.push("themes-autoupdate-notice", {
			title: getThemesNoticeTitle(),
			description: (
				<span>
					{getThemesNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			autoUpdatesThemes,
		});

		notifySuccess();
	}, [autoUpdatesThemes]);

	return (
		<ToggleField
			id="autoupdate-themes-toggle"
			label={__('Themes', 'wp-plugin-blueprint')}
			checked={autoUpdatesThemes}
			onChange={toggleAutoUpdatesThemes}
		/>
	);
}

const AutomaticUpdates = () => {
	const [isError, setError] = useState(false);

	let notify = useNotification();

	return (
		<SectionSettings
			title={__('Automatic Updates', 'wp-plugin-blueprint')}
			description={__('Keeping automatic updates on ensures timely security fixes and the latest features.', 'wp-plugin-blueprint')}
		>
			<div className="yst-flex yst-flex-col yst-gap-4">
				<AutomaticUpdatesMajorCore setError={setError} notify={notify} />
				<AutomaticUpdatesPlugins setError={setError} notify={notify} />
				<AutomaticUpdatesThemes setError={setError} notify={notify} />
				{isError &&
					<Alert variant="error">
						{__('Oops! Something went wrong. Please try again.', 'wp-plugin-blueprint')}
					</Alert>
				}
			</div>
		</SectionSettings>
	);
}

export default AutomaticUpdates;