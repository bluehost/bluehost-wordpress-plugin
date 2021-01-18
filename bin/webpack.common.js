/**
 * Load NPM's path module for resolving filesystem.
 */
const path = require('path');

/**
 * Import @wordpress/scripts base webpack config.
 * @see https://github.com/WordPress/gutenberg/tree/master/packages/scripts#extending-the-webpack-config
 */
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');

/**
 * Use Webpack Merge in lieu of spread operator for extending @wordpress/scripts for cleaner config.
 */
const { mergeWithRules } = require( 'webpack-merge' );

/**
 * Project Settings & Variables
 */
const webpackSettings = require('./webpack.settings');

/**
 * Environment variable set in package.json npm scripts (normalized by cross-env)
 */
const isProduction = 'production' === process.env.NODE_ENV;

/**
 * Handle WordPress Core dependencies and extend with additional externals.
 */
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isModuleFromSrcDir = (subdir, module) => {
	if (
		'undefined' !== typeof module
		&& module.resource
		&& module.resource.includes('.develop/src/' + subdir + '/')
	) {
		return true;
	}

	return false;
};

/**
 * 🗑 Clear out default entry assets 
 */
wpScriptsConfig.entry = {};
wpScriptsConfig.plugins = wpScriptsConfig.plugins.filter(
	( plugin ) => // wipeout the @wordpress/scripts usage
		plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
);

const bluehostPluginConfig = {
    entry: {
        app: path.resolve(__dirname, '../src/app.js'),
    },
    output: {
		path: path.resolve(process.cwd(), 'assets', 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
    resolve: {
		alias: {
			'lodash-es': 'lodash',
			'@app': path.resolve(__dirname, '../src/app/')
		}
    },
    module: {
		rules: [
			{
				test: /\.(png|jp(e*)g|gif)$/,
				use: [
					{loader: "url-loader", options: {esModule: false}},
					{loader: "file-loader"},
				]
			},
		],
    },
    optimization: {
		splitChunks: {
			chunks: 'all'
		},
		runtimeChunk: {
			name: entrypoint => `manifest~${entrypoint.name}`
		},
	},
	plugins:[
		new CleanWebpackPlugin(),
		new DependencyExtractionWebpackPlugin({
			injectPolyfill: true,
			requestToExternal( request ) {
				switch( request ) {
					case 'react-router-dom':
						return 'ReactRouterDOM';
				}
			},
		}),
	],
	stats: webpackSettings.stats,
};

/**
 * Extend @wordpress/scripts with custom config and use 
 * special merge strategy to reconcile and blend module rules.
 */
const bluehostPluginCommonConfig = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: {
          loader: "match",
          options: "replace",
        },
      },
    },
  })(wpScriptsConfig, bluehostPluginConfig);

module.exports = bluehostPluginCommonConfig;