import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import {
	AppButton as Button
} from '@/components/atoms';

import {
	AppModal as Modal,
	Warning,
} from '@/components/molecules';

export default function( { onClick, onClose } ) {
	return (
		<Modal
			actionsComponent={ (
				<Fragment>
					<Warning>{ __( 'This action cannot be undone', 'bluehost-wordpress-plugin' ) }</Warning>
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
