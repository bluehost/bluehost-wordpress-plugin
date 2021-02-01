// shared, common wp-scripts webpack config
const common = require( './webpack.common' );
// This WordPress plugin's build settings
const settings = require( './build.settings');

// merging library for blending webpack configs
const { merge } = require( 'webpack-merge' );
// Nice webpack loader bar from Nuxt.js.
const WebpackBar = require('webpackbar');
// Pipe development build errors to node-notifier
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

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
			color: settings.bluehostBlue,
        }),
        new WebpackBuildNotifierPlugin({
            title: "Bluehost WordPress Plugin",
            suppressSuccess: true,
            sound: false,
        }),
    ]
} );

module.exports = bluehostPluginDevelopConfig;