import './style.scss';

import { BWAButton, BWAHeading, BWAToggle } from '@app/components/atoms';
import { dispatch, withDispatch, withSelect } from '@wordpress/data';

import SettingsSection from '../settings-section';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';

const CacheLevelSelector = ( { value, cacheLevel, label, desc } ) => {
	const id = 'cache-level-' + value.toString();
	const checked = ( value === cacheLevel );
	const onChange = ( e ) => {
		dispatch( 'bluehost/plugin' ).updateSetting( 'cacheLevel', parseInt( e.target.value, 10 ) );
	};
	return (
		<div className="row">
			<input id={ id } type="radio" name="cache-level" className="radio" value={ value } checked={ checked } onChange={ onChange } />
			<div className="details">
				<label htmlFor={ id }>{ label }</label>
				<p>{ desc }</p>
			</div>
		</div>
	);
};

const SettingsPerformance = ( { cacheLevel, updateSetting } ) => {
	const cachingEnabled = ( cacheLevel > 0 );
	const cachingClass = ( cachingEnabled ) ? '' : 'hidden';
	const toggleCaching = () => {
		const newLevel = ( cachingEnabled ) ? 0 : 2;
		updateSetting( 'cacheLevel', newLevel );
	};
	return (
		<SettingsSection name="Performance" className="performance">
			<div className="caching">
				<BWAHeading level="h4" size={ 2 } className="caching__title">{ __( 'Caching', 'bluehost-wordpress-plugin' ) }</BWAHeading>
				<BWAToggle
					checked={ cachingEnabled }
					label="Toggle Caching"
					onChange={ toggleCaching }
				/>
				<p>{ __( 'Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors.', 'bluehost-wordpress-plugin' ) }</p>
				<div className={ 'cache-settings ' + cachingClass }>
					<div className={ 'cache-level' }>
						<BWAHeading level="h5" size={ 3 } className="caching__subtitle">{ __( 'Caching Level', 'bluehost-wordpress-plugin' ) }</BWAHeading>
						<CacheLevelSelector
							value={ 1 }
							cacheLevel={ cacheLevel }
							label={ __( 'Assets Only', 'bluehost-wordpress-plugin' ) }
							desc={ __( 'Cache static assets like images and the appearance of your site for 1 hour. Recommended for ecommerce and sites that update frequently or display info in real-time.', 'bluehost-wordpress-plugin' ) }
						/>
						<CacheLevelSelector
							value={ 2 }
							cacheLevel={ cacheLevel }
							label={ __( 'Assets & Web Pages', 'bluehost-wordpress-plugin' ) }
							desc={ __( 'Cache static assets for 24 hours and web pages for 2 hours. Recommended for blogs, educational sites, and sites that update at least weekly.', 'bluehost-wordpress-plugin' ) }
						/>
						<CacheLevelSelector
							value={ 3 }
							cacheLevel={ cacheLevel }
							label={ __( 'Assets & Web Pages - Extended', 'bluehost-wordpress-plugin' ) }
							desc={ __( 'Cache static assets for 1 week and web pages for 8 hours. Recommended for portfolios, brochure sites, and sites that update monthly or less often.', 'bluehost-wordpress-plugin' ) }
						/>
					</div>
					<BWAHeading level="h4" size={ 3 } className="caching__subtitle">{ __( 'Manage Cache', 'bluehost-wordpress-plugin' ) }</BWAHeading>
					<p>{ __( 'If you’ve recently updated your website, we recommend clearing the site cache. We’ll fetch a fresh version of your site to cache.', 'bluehost-wordpress-plugin' ) }</p>
					<BWAButton isPrimary>{ __( 'Clear Everything', 'bluehost-wordpress-plugin' ) }</BWAButton>
				</div>
			</div>
		</SettingsSection>
	);
};

export default compose(
	withSelect( ( select ) => ( {
		cacheLevel: select( 'bluehost/plugin' ).getSetting( 'cacheLevel' ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		updateSetting: dispatch( 'bluehost/plugin' ).updateSetting,
	} ) )
)( SettingsPerformance );
