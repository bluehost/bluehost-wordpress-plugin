// shared, common wp-scripts webpack config
const common = require( './webpack.common' );
// merging library for blending webpack configs
const { merge } = require( 'webpack-merge' );
// Google's size plugin to monitor build file size deltas.
const SizePlugin = require('size-plugin');

/**
 * Contextual build process powering npm run develop|start
 */
const bluehostPluginProductionConfig = merge( 
    common, 
    {
        mode: 'production',
        plugins: [
            new SizePlugin({
                filename: './bin/sizes-manifest.json'
            }),
        ],
        stats: false,
    } 
);

module.exports = bluehostPluginProductionConfig;