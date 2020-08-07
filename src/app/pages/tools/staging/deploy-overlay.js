import { __ } from '@wordpress/i18n';

import { BWAOverlay } from '@app/components/molecules';

import { WorkingImageUrl } from '@app/assets';
import Tips from './tips';

export default function DeployBWAOverlay( { type = 'all' } ) {
	return (
		<BWAOverlay className={ `bluehost-staging__overlay` }>
			<h1>
				{ ( () => {
					switch ( type ) {
						case 'db':
							return __( 'Deploying Database to Production Site', 'bluehost-wordpress-plugin' );
						case 'files':
							return __( 'Deploying Files to Production Site', 'bluehost-wordpress-plugin' );
						default:
							return __( 'Deploying to Production Site', 'bluehost-wordpress-plugin' );
					}
				} )() }
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
