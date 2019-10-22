/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect, dispatch } from '@wordpress/data';
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
	const id = "cache-level-" + value;
	const checked = ( value === cacheLevel );
	const onChange = e => { dispatch('bluehost/plugin').setCacheLevel( e.target.value ) };
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

const SettingsPerformance = ( { cacheLevel } ) => {
	const toggleCache = () => {
		// Reset it to 2 if it's anything other than 0
		const newCacheLevel = ( cacheLevel === '0' ) ? '2' : '0';
		return dispatch('bluehost/plugin').setCacheLevel( newCacheLevel );
	}
	const cacheEnabled = ( cacheLevel !== "0" );
	const cacheLevelClass = ( cacheEnabled ) ? '' : 'hidden';
	return (
		<SettingsSection name="Performance" className="pure-u-lg-19-24 performance">
			<div className="bordered-box settings-block">
				<h3>Caching</h3>
				<AppToggle checked={cacheEnabled} onChange={toggleCache} />
				<p>Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors.</p>
				<div className={"cache-level " + cacheLevelClass}>
					<h4>Caching Level</h4>
					<CacheLevelSelector
						value="1"
						cacheLevel={cacheLevel}
						label="Assets Only"
						desc="Cache static assets like images and the appearance of your site for 5 minutes. Recommended for ecommerce and sites that update frequently or display info in real-time."
						/>
					<CacheLevelSelector
						value="2"
						cacheLevel={cacheLevel}
						label="Assets & Web Pages"
						desc="Cache static assets for 6 hours and other web pages for 5 minutes. Recommended for blogs, educational sites, and sites that update at least weekly."
						/>
					<CacheLevelSelector
						value="3"
						cacheLevel={cacheLevel}
						label="Assets & Web Pages - Extended"
						desc="Cache static assets for 1 week and web pages for 5 minutes. Recommended for portfolios, brochure sites, and sites that update monthly or less often."
						/>
				</div>

				<h4>Manage Cache</h4>
				<p>If you’ve recently updated your website, we recommend clearing the site cache. We’ll fetch a fresh version of your site to cache.</p>
				<AppButton isLink>Clear specific URLs</AppButton>
				<AppButton isPrimary>Clear Everything</AppButton>
			</div>
		</SettingsSection>
	);
}

export default compose(
	withSelect( select => ({
		cacheLevel: select('bluehost/plugin').getCacheLevel(),
	}))
)(SettingsPerformance);
