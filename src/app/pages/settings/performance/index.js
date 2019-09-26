/**
 * WordPress Dependencies
 */
import { Component } from '@wordpress/element';
/**
 * External Dependencies
 */
import { AppButton, AppToggle } from '@/components';
/**
 * Internal Dependencies
 */
import SettingsSection from '../settings-section';
import './style.scss';

class SettingsPerformance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cacheEnabled: true,
			cacheLevel: 2
		};

		this.updateCacheLevel = this.updateCacheLevel.bind(this);
		this.toggleCache = this.toggleCache.bind(this);
	}

	updateCacheLevel( cacheLevel ) {
		this.setState( { cacheLevel } );
	}

	toggleCache() {
		this.setState( ( state ) => {
			return { cacheEnabled: !state.cacheEnabled };
		})
	}

	render() {
		const { cacheEnabled, cacheLevel } = this.state;
		return (
			<SettingsSection name="Performance" className="pure-u-lg-19-24 performance">
				<div className="bordered-box settings-block">
					<h3>Caching</h3>
					<AppToggle checked={cacheEnabled} onChange={this.toggleCache} />
					<p>Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors.</p>
					<h4>Caching Level</h4>
					<div className="cache-level">
						<div className="row">
							<input id="cache-level-1" type="radio" name="cache-level" className="radio" />
							<div className="details">
								<label htmlFor="cache-level-1">Assets Only</label>
								<p>Cache static assets like images and the appearance of your site for 5 minutes. Recommended for ecommerce and sites that update frequently or display info in real-time.</p>
							</div>
						</div>
						<div className="row">
							<input id="cache-level-2" type="radio" name="cache-level" className="radio" />
							<div className="details">
								<label htmlFor="cache-level-2">Assets & Web Pages</label>
								<p>Cache static assets for 6 hours and other web pages for 5 minutes. Recommended for blogs, educational sites, and sites that update at least weekly.</p>
							</div>
						</div>
						<div className="row">
							<input id="cache-level-3" type="radio" name="cache-level" className="radio" />
							<div className="details">
								<label htmlFor="cache-level-3">Assets & Web Pages - Extended</label>
								<p>Cache static assets for 1 week and web pages for 5 minutes. Recommended for portfolios, brochure sites, and sites that update monthly or less often.</p>
							</div>
						</div>
					</div>

					<h4>Manage Cache</h4>
					<p>If you’ve recently updated your website, we recommend clearing the site cache. We’ll fetch a fresh version of your site to cache.</p>
					<AppButton
						isLink
						>
						Clear specific URLs
					</AppButton>
					<AppButton
						isPrimary>
						Clear Everything
					</AppButton>
				</div>
			</SettingsSection>
		);
	}
}

export default SettingsPerformance;
