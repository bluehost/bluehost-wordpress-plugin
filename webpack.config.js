/**
 * Load NPM's path module for resolving filesystem.
 */
const path = require( 'path' );
/**
 * Import @wordpress/scripts webpack config
 * @see https://github.com/WordPress/gutenberg/tree/master/packages/scripts#extending-the-webpack-config
 */
const wpScriptsConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );
/**
 * MiniCssExtractPlugin is used to hoist CSS out of JS files (see module rules below)
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
/**
 * Note use of the JS spread operator (...) to import the original wpScriptsConfig, making this config extend the original.
 */
const appWebpackConfig = {
	...wpScriptsConfig,
	entry: { admin: './src/index.js' }, // name the main file app.js when exported
	output: {
		path: path.resolve( __dirname, './assets' ),
		publicPath: '../wp-content/plugins/bluehost-wordpress-plugin/assets/',
		filename: '[name].js',
	},
	externals: [
		{
			'react-router-dom': 'ReactRouterDOM'
		}
	],
	resolve: {
		alias: {
			'lodash-es': 'lodash',
			'@': path.resolve(__dirname, 'src/app/')
		}
	},
	module: {
		...wpScriptsConfig.module,
		rules: [
			...wpScriptsConfig.module.rules,
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { url: false, sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "@svgr/webpack"
                    }, 
                    "url-loader"
                ]
            }
		],
	},
	plugins: [
		...wpScriptsConfig.plugins,
		new MiniCssExtractPlugin( {
			chunkFilename: 'admin.css',
		} ),
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: {
			name: 'admin-manifest', // this is how we tell webpack to separate the manifest into its' own file.
		},
	},
	stats: {
		children: false,
		colors: true,
	},
};

module.exports = appWebpackConfig;