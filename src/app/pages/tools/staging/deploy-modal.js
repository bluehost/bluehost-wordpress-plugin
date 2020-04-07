import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import {
	BWAButton as Button
} from '@/components/atoms';

import {
	BWAModal as Modal,
	BWAWarning,
} from '@/components/molecules';

export default function( { onClick, onClose, type = 'all' } ) {
	let title, message;

	switch ( type ) {
		case 'db':
			title = __( 'Deploy Database to Production?', 'bluehost-wordpress-plugin' );
			message = __( 'This will override your production site. Are you sure you want to deploy the database from staging to production?', 'bluehost-wordpress-plugin' );
			break;
		case 'files':
			title = __( 'Deploy Files to Production?', 'bluehost-wordpress-plugin' );
			message = __( 'This will override your production site. Are you sure you want to deploy all staging files to production?', 'bluehost-wordpress-plugin' );
			break;
		default:
			title = __( 'Deploy to Production?', 'bluehost-wordpress-plugin' );
			message = __( 'This will override your production site. Are you sure you want to deploy everything from staging to production?', 'bluehost-wordpress-plugin' );
	}

	return (
		<Modal
			actionsComponent={ (
				<Fragment>
					<BWAWarning>
						{ __( 'This action cannot be undone', 'bluehost-wordpress-plugin' ) }
					</BWAWarning>
					<Button onClick={ onClose }>
						{ __( 'Cancel', 'bluehost-wordpress-plugin' ) }
					</Button>
					<Button className="--delete" isPrimary onClick={ onClick }>
						{ __( 'Deploy', 'bluehost-wordpress-plugin' ) }
					</Button>
				</Fragment>
			) }
			onRequestClose={ onClose }
			title={ title }
		>
			<p>{ message }</p>
		</Modal>
	);
}
