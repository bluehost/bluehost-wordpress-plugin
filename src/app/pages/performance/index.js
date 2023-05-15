import './stylesheet.scss';
import graphicUrl from '../../../../assets/svg/coming-soon.svg';
import CacheSettings from './cacheSettings';
import ClearCache from './clearCache';
import SettingsCallout from './settingsCallout';
import { useViewportMatch } from '@wordpress/compose';

const Performance = () => {
	const isWideViewport = useViewportMatch( 'large' );

	return (
		<div className="wppb-Performance grid col2 has-page-graphic">
			<CacheSettings />
			{ isWideViewport && (
				<div>
					<img
						src={ graphicUrl }
						style={ {
							float: 'right',
							width: '80%',
							height: 'auto',
						} }
						alt={ __( 'Rocket launch illustration', 'wp-plugin-blueprint' ) }
					/>
				</div>
			) }
			<ClearCache />
			<SettingsCallout />
		</div>
	);
};

export default Performance;
