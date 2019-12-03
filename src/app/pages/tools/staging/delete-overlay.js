import { __ } from '@wordpress/i18n';

import { Overlay } from '@/components';
import { WorkingImageUrl } from '@/assets';
import Tips from './tips';

export default function DeleteOverlay( {} ) {
	return (
		<Overlay className={ `bluehost-staging__overlay` }>
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
		</Overlay>
	);
}
