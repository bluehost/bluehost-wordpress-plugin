// Load modified copy of @wordpress/scripts.
// Our code belongs here. All overrides there for easier maintenance.
const modifiedWpScripts = require('./webpack.modified-wp-scripts');
// merging library for blending webpack configs
const { merge } = require( 'webpack-merge' );
// Generate WordPress-ready files for registering assets with WordPress' dependency system.
const { WpDependencyWebpackPlugin } = require('./wp-dependency-webpack-plugin');
// Used to separate CSS. We override wp-scripts copy to inject chunkhash in filename.
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
// webpack plugin to copy, delete, move and read files
const FileManagerPlugin = require('filemanager-webpack-plugin');
// Bluehost branding in CLI and license handling.
const { BluehostWebpackPlugin } = require('./bluehost-webpack-plugin');

// This WordPress plugin's build settings
const settings = require('./build.settings');

/**
 * Common, shared webpack configuration invoked by development & production builds.
 */
const bluehostPluginConfig = {
	name: settings.name,
    entry: settings.webpack.entry,
    output: {
		path: settings.webpack.output.path,
		devtoolNamespace: settings.name,
		filename: settings.webpack.filenamePattern + '.js',
		chunkFilename: settings.webpack.filenamePattern + '.js',
		library: [ 'bluehostPlugin', '[name]' ],
		libraryTarget: 'window',
	},
    resolve: {
		alias: settings.webpack.aliases,
    },
    optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: {
			name: entrypoint => `manifest~${entrypoint.name}`
		},
	},
	plugins:[
		new BluehostWebpackPlugin({
			name: settings.name,
			version: settings.version,
		}),
		new WpDependencyWebpackPlugin({
			handlePrefix: settings.name,
			externals: settings.webpack.externals,
		}),
		new MiniCSSExtractPlugin({ // wp-scripts copy disabled in modifiedWpScripts
			esModule: false, 
			filename: settings.webpack.filenamePattern + '.css' 
		}),
	],
	stats: settings.stats,
};

const bluehostPluginCommonConfig = merge(modifiedWpScripts, bluehostPluginConfig);

module.exports = bluehostPluginCommonConfig;