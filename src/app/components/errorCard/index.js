import { Title } from '@newfold/ui-component-library';
import './stylesheet.scss';
import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Dashicon,
} from '@wordpress/components';
import { dispatchUpdateSnackbar } from '../../util/helpers';

const ErrorCard = ( { error, className, notice = 'Error!' } ) => {
	dispatchUpdateSnackbar( notice );

	return (
		<Card className={ classNames( 'error-card', className ) }>
			<CardHeader>
				<Title as="h3">
					<Dashicon
						icon="warning"
						style={ {
							fontSize: '24px',
							width: '24px',
							height: '24px',
						} }
					/>{ ' ' }
					{ __( 'Oh No, An Error!', 'wp-plugin-bluehost' ) }
				</Title>
			</CardHeader>
			<CardBody>
				<p>
					{ __(
						'You found an error, please refresh the page and try again!',
						'wp-plugin-bluehost'
					) }
				</p>
				<p>
					{ __(
						'If the error persists, please contact support.',
						'wp-plugin-bluehost'
					) }
				</p>
			</CardBody>
			<CardFooter>
				<p>
					{ error && error.message ? error.message : '' }
					{ error && error.data
						? __( ' Error code: ', 'wp-plugin-bluehost' ) +
						  error.data.status
						: '' }
				</p>
			</CardFooter>
		</Card>
	);
};

export default ErrorCard;
