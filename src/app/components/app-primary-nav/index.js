/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { AppNavLink as NavLink } from '@/components';
import './style.scss';

const i18n = 'bluehost-wordpress-plugin';

const AppPages = function() {
	return {
		'/home': __('Home', i18n),
		'/marketplace/themes': __('Themes', i18n),
		'/marketplace/plugins': __('Plugins', i18n),
		'/marketplace/services': __('Services', i18n),
		'/tools/staging': __('Staging', i18n),
		'/settings': __('Settings', i18n)
	};
};


const AppPrimaryNavigation = () => (
	<div id="app-primary-navigation">
		<ul class="tabs">
			<li className="tab">
				<NavLink to="/home">
					{__('Home', 'bluehost-wordpress-plugin')}
				</NavLink>
			</li>
			<li className="tab">
				<NavLink to="/marketplace/themes" className="hvr-underline-from-center">
					{__('Themes', 'bluehost-wordpress-plugin')}
				</NavLink>
			</li>
			<li className="tab">
				<NavLink to="/marketplace/plugins">
					{__('Plugins', 'bluehost-wordpress-plugin')}
				</NavLink>
			</li>
			<li className="tab">
				<NavLink to="/marketplace/services">
					{__('Services', 'bluehost-wordpress-plugin')}
				</NavLink>
			</li>
			<li className="tab">
				<NavLink to="/tools/staging">
					{__('Staging', 'bluehost-wordpress-plugin')}
				</NavLink>
			</li>
			<li className="tab">
				<NavLink to="/settings">
					{__('Settings', 'bluehost-wordpress-plugin')}
				</NavLink>
			</li>
		</ul>
	</div>
);

export default AppPrimaryNavigation;
