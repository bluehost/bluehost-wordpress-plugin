import { Heading } from '../../components';
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Button,
} from '@wordpress/components';
import { settings } from '@wordpress/icons';

const SettingsCallout = () => {
	return (
		<Card className="short card-settings-callout">
			<CardHeader>
				<Heading level="3">
					{ __( 'Settings', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				{ __(
					'Looking for other Settings? You can refine auto-updates, comments and backups of content revisions on the Settings page.',
					'wp-plugin-blueprint'
				) }
			</CardBody>
			<CardFooter>
				<Button
					variant="primary"
					href="#/settings"
					icon={ settings }
					className="callout-link-settings"
				>
					{ __( 'Settings', 'wp-plugin-blueprint' ) }
				</Button>
			</CardFooter>
		</Card>
	);
};

export default SettingsCallout;
