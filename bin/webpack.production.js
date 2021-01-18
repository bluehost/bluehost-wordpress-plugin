/**
 * Load NPM's path module for resolving filesystem.
 */
const path = require('path');
/**
 * Base common config extending @wordpress/scripts
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

const SizePlugin = require('size-plugin');

/**
 * Build process executed by 'npm run start' or 'npm run develop'
 */
const bluehostPluginProductionConfig = merge( 
    common, 
    {
        mode: 'production',
        plugins: [
            new SizePlugin({ writeFile: true })
        ]
    } 
);

module.exports = bluehostPluginProductionConfig;