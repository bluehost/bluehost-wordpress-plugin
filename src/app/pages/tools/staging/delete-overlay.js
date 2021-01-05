import { BWAOverlay } from '@app/components/molecules';
import Tips from './tips';
import { WorkingImageUrl } from '@app/assets';
import { __ } from '@wordpress/i18n';

export default function DeleteBWAOverlay( {} ) {
	return (
		<BWAOverlay className={ `bluehost-staging__overlay` }>
			<h1>
				{ __( 'Deleting Staging Site', 'bluehost-wordpress-plugin' ) }
			</h1>
			<p>
				{ __( 'This should only take a minute', 'bluehost-wordpress-plugin' ) }
			</p>
			<img
				className={ `bluehost-staging__overlay-image` }
				src={ WorkingImageUrl }
				width="555"
				height="421"
				alt=""
			/>
			<Tips />
		</BWAOverlay>
	);
}
