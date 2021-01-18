/**
 * Base common configuration extending @wordpress/scripts
 */
const common = require( './webpack.common' );

/**
 * Centralized settings for webpack configs
 */
const settings = require( './webpack.settings');

/**
 * Use Webpack Merge in lieu of spread operator for cleaner extension of common config.
 */
const { merge } = require( 'webpack-merge' );

/**
 * Nice webpack loader bar from Nuxt.js.
 */
const WebpackBar = require('webpackbar');

/**
 * Build process executed by 'npm run start' or 'npm run develop'
 */
const bluehostPluginDevelopConfig = merge( common, {
    mode: 'development',
    stats: {
        assets: true
    },
    plugins: [
        new WebpackBar({
			name: 'Development Webpack Build',
			color: settings.brand.bluehost,
		}),
    ]
} );

module.exports = bluehostPluginDevelopConfig;