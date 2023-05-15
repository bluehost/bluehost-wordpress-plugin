import { Heading } from '../../components';
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Dashicon,
	Button,
} from '@wordpress/components';

const PerformanceCallout = () => {
	return (
		<Card className="card-performance-callout short">
			<CardHeader>
				<Heading level="3">
					{ __( 'Performance', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				{ __(
					'Manage site performance and caching settings as well as clear the site cache.',
					'wp-plugin-blueprint'
				) }
			</CardBody>
			<CardFooter>
				<Button
					variant="primary"
					href="#/performance"
					icon={ <Dashicon icon="performance" /> }
					className="callout-link-performance"
				>
					{ __( 'Performance', 'wp-plugin-blueprint' ) }
				</Button>
			</CardFooter>
		</Card>
	);
};

export default PerformanceCallout;
