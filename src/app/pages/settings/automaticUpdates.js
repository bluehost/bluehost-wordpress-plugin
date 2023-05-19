import { useState } from '@wordpress/element';
import { ToggleField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";

const AutomaticUpdates = () => {
	const [autoUpdatesMajorCore, setAutoUpdatesMajorCore] = useState(false);
	const [autoUpdatesPlugins, setAutoUpdatesPlugins] = useState(false);
	const [autoUpdatesThemes, setAutoUpdatesThemes] = useState(false);

	const handleAutoUpdatesMajorCoreChange = (nextChecked) => {
		setAutoUpdatesMajorCore(nextChecked);
	};

	const handleAutoUpdatesPluginsChange = (nextChecked) => {
		setAutoUpdatesPlugins(nextChecked);
	};

	const handleAutoUpdatesThemesChange = (nextChecked) => {
		setAutoUpdatesThemes(nextChecked);
	};

	return (
		<SectionSettings
			title="Automatic Updates"
			description="Keeping automatic updates on ensures timely security fixes and the latest features."
		>
			<div className="yst-flex yst-flex-col yst-gap-4">
				<ToggleField
					id="autoupdate-core-toggle"
					label="WordPress Core"
					checked={autoUpdatesMajorCore}
					onChange={handleAutoUpdatesMajorCoreChange}
				/>

				<ToggleField
					id="autoupdate-plugins-toggle"
					label="Plugins"
					checked={autoUpdatesPlugins}
					onChange={handleAutoUpdatesPluginsChange}
				/>

				<ToggleField
					id="autoupdate-themes-toggle"
					label="Themes"
					checked={autoUpdatesThemes}
					onChange={handleAutoUpdatesThemesChange}
				/>
			</div>
		</SectionSettings>
	);
}

export default AutomaticUpdates;