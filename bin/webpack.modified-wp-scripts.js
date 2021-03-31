/**
 * Import @wordpress/scripts base webpack config.
 * @see https://github.com/WordPress/gutenberg/tree/master/packages/scripts#extending-the-webpack-config
 */
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');
// merging library for blending webpack configs
const { merge } = require('webpack-merge');

// 🗑 Clear out default entry assets 
wpScriptsConfig.entry = {};
// 🗑 Nix Block-specific code-splitting rules
wpScriptsConfig.optimization.splitChunks.cacheGroups = { default: false }
// 🗑 Remove instances of webpack plugins we modify in common/contextual configs
wpScriptsConfig.plugins = wpScriptsConfig.plugins.filter(
	( plugin ) => {
        switch( plugin.constructor.name ) {
            case 'DependencyExtractionWebpackPlugin': // used this in wp-dependency-webpack-plugin
            case 'MiniCssExtractPlugin': // we need chunkhash in filename in production
                return false;
        }
    }
);

/**
 * 
 * ℹ️ This file should mostly be limited to direct disabling of wp-scripts' config.
 * 
 * Our customizations, if any, belong in webpack.common.js or contextual build files.
 */
const modifiedWpScripts = merge( wpScriptsConfig, {});

module.exports = modifiedWpScripts;