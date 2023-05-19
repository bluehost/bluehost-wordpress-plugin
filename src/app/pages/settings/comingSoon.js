import { useState } from '@wordpress/element';
import { Alert, ToggleField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";

const ComingSoon = () => {
	const [checked, setChecked] = useState(false);

	const toggleComingSoon = (nextChecked) => {
		setChecked(nextChecked);
		console.log('Coming soon toggle');
	};
	return (
		<SectionSettings
			title="Maintenance Mode"
			description="We'll use this information to help you setup your online store."
		>
			<div className="yst-flex yst-flex-col yst-gap-6">
				<ToggleField
					id="coming-soon"
					label="Coming soon page"
					description="A placeholder page that is displayed to visitors when a website is still under construction or undergoing significant changes."
					checked={checked}
					onChange={toggleComingSoon} 
				/>

				{checked && 
					<Alert variant="info">
						Your website is currently displaying a "Coming Soon" page.
					</Alert>
				}
			</div>
		</SectionSettings>
	);
}

export default ComingSoon;