/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch, dispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * External Dependencies
 */
import { AppButton, AppToggle } from '@/components';

/**
 * Internal Dependencies
 */
import SettingsSection from '../settings-section';
import './style.scss';

const CacheLevelSelector = ( { value, cacheLevel, label, desc } ) => {
	const id = "cache-level-" + value.toString();
	const checked = ( value === cacheLevel );
	const onChange = e => { dispatch('bluehost/plugin').updateSetting( 'cacheLevel', parseInt( e.target.value, 10 ) ) };
	return (
		<div className="row">
			<input id={id} type="radio" name="cache-level" className="radio" value={value} checked={checked} onChange={onChange} />
			<div className="details">
				<label htmlFor={id}>{label}</label>
				<p>{desc}</p>
			</div>
		</div>
	);
}

const SettingsPerformance = ( { cacheEnabled, cacheLevel, toggleSetting } ) => {
	const cacheLevelClass = ( cacheEnabled ) ? '' : 'hidden';
	return (
		<SettingsSection name="Performance" className="pure-u-lg-19-24 performance">
			<div className="bordered-box settings-block">
				<h3>{__( 'Caching', 'bluehost-wordpress-plugin' )}</h3>
				<AppToggle checked={cacheEnabled} onChange={() => {toggleSetting( 'cacheEnabled' )}} />
				<p>{ __( 'Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors.', 'bluehost-wordpress-plugin' )}</p>
				<div className={"cache-level " + cacheLevelClass}>
					<h4>{__( 'Caching Level', 'bluehost-wordpress-plugin' )}</h4>
					<CacheLevelSelector
						value={1}
						cacheLevel={cacheLevel}
						label={__( 'Assets Only', 'bluehost-wordpress-plugin' )}
						desc={__( 'Cache static assets like images and the appearance of your site for 5 minutes. Recommended for ecommerce and sites that update frequently or display info in real-time.', 'bluehost-wordpress-plugin' )}
						/>
					<CacheLevelSelector
						value={2}
						cacheLevel={cacheLevel}
						label={__( 'Assets & Web Pages', 'bluehost-wordpress-plugin' )}
						desc={__( 'Cache static assets for 6 hours and other web pages for 5 minutes. Recommended for blogs, educational sites, and sites that update at least weekly.', 'bluehost-wordpress-plugin' )}
						/>
					<CacheLevelSelector
						value={3}
						cacheLevel={cacheLevel}
						label={__( 'Assets & Web Pages - Extended', 'bluehost-wordpress-plugin' )}
						desc={__( 'Cache static assets for 1 week and web pages for 5 minutes. Recommended for portfolios, brochure sites, and sites that update monthly or less often.', 'bluehost-wordpress-plugin' )}
						/>
				</div>

				<h4>{__( 'Manage Cache', 'bluehost-wordpress-plugin' )}</h4>
				<p>{__( 'If you’ve recently updated your website, we recommend clearing the site cache. We’ll fetch a fresh version of your site to cache.', 'bluehost-wordpress-plugin' )}</p>
				<AppButton isPrimary>{__( 'Clear Everything', 'bluehost-wordpress-plugin' )}</AppButton>
			</div>
		</SettingsSection>
	);
}

export default compose(
	withSelect( select => ({
		cacheLevel: select( 'bluehost/plugin' ).getSetting( 'cacheLevel' ),
		cacheEnabled: select( 'bluehost/plugin' ).getSetting( 'cachingEnabled' ),
	})),
	withDispatch( dispatch => ({
		toggleSetting: dispatch( 'bluehost/plugin' ).toggleSetting,
	}))
)( SettingsPerformance );
