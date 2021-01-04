import {
	BWAWarning,
	BWAModal as Modal,
} from '@app/components/molecules';

import {
	BWAButton as Button
} from '@app/components/atoms';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function( { onClick, onClose } ) {
	return (
		<Modal
			actionsComponent={ (
				<Fragment>
					<BWAWarning>{ __( 'This action cannot be undone', 'bluehost-wordpress-plugin' ) }</BWAWarning>
					<Button onClick={ onClose }>
						{ __( 'Cancel', 'bluehost-wordpress-plugin' ) }
					</Button>
					<Button isPrimary onClick={ onClick }>
						{ __( 'Clone', 'bluehost-wordpress-plugin' ) }
					</Button>
				</Fragment>
			) }
			onRequestClose={ onClose }
			title={ __( 'Clone production to staging?', 'bluehost-wordpress-plugin' ) }
		>
			<p>
				{ __( 'Are you sure you want to clone production to staging? This will permanently overwrite your staging site.', 'bluehost-wordpress-plugin' ) }
			</p>
		</Modal>
	);
}
