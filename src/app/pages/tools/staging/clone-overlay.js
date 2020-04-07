import { __ } from '@wordpress/i18n';

import { BWAOverlay } from '@/components/molecules';

import { WorkingImageUrl } from '@/assets';
import Tips from './tips';

export default function CloneBWAOverlay( {} ) {
	return (
		<BWAOverlay className={ `bluehost-staging__overlay` }>
			<h1>
				{ __( 'Cloning Production Site', 'bluehost-wordpress-plugin' ) }
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
