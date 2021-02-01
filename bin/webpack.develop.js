// shared, common wp-scripts webpack config
const common = require( './webpack.common' );
// This WordPress plugin's build settings
const settings = require( './build.settings');

// merging library for blending webpack configs
const { merge } = require( 'webpack-merge' );


/**
 * Build process executed by 'npm run start' or 'npm run develop'
 */
const bluehostPluginDevelopConfig = merge( common, {
    mode: 'development',
    stats: {
        assets: true
    },
} );

module.exports = bluehostPluginDevelopConfig;