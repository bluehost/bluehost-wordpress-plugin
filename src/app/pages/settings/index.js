import './stylesheet.scss';
import graphicUrl from '../../../../assets/svg/website-content.svg';
import AutomaticUpdates from './automaticUpdates';
import ComingSoon from './comingSoon';
import CommentSettings from './commentSettings';
import ContentSettings from './contentSettings';
import PerformanceCallout from './performanceCallout';
import { useViewportMatch } from '@wordpress/compose';

const Settings = () => {
	const isWideViewport = useViewportMatch( 'large' );
	return (
		<div className="wppb-Settings grid col2 has-page-graphic">
			<AutomaticUpdates />
			{ isWideViewport && (
				<div>
					<img
						src={ graphicUrl }
						style={ {
							float: 'right',
							width: '70%',
							height: 'auto',
						} }
						alt={ __( 'Website building illustration', 'wp-plugin-blueprint' ) }
					/>
				</div>
			) }
			<ComingSoon />
			<ContentSettings />
			<CommentSettings />
			<PerformanceCallout />
		</div>
	);
};

export default Settings;
