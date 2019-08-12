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
 * 
 */
const CopyWebpackPlugin = require( 'copy-webpack-plugin');
const _ = require( 'lodash' );

const animateCss = [
    { from: 'node_modules/animate.css/animate.css', to: 'animate.css' },
    { from: 'node_modules/animate.css/animate.min.css', to: 'animate.min.css' },
];

const pureCss = [
    { from: 'node_modules/purecss/build/base.css', to: 'pure/base.css' },
    { from: 'node_modules/purecss/build/base-min.css', to: 'pure/base.min.css' },
    { from: 'node_modules/purecss/build/grids.css', to: 'pure/grids.css' },
    { from: 'node_modules/purecss/build/grids-min.css', to: 'pure/grids.min.css' },
    { from: 'node_modules/purecss/build/grids-responsive.css', to: 'pure/grids-responsive.css' },
    { from: 'node_modules/purecss/build/grids-responsive-min.css', to: 'pure/grids-responsive.min.css' },
    { from: 'node_modules/purecss/build/pure.css', to: 'pure/pure.css' },
    { from: 'node_modules/purecss/build/pure-min.css', to: 'pure/pure.min.css' },
];

const reactRouterDOM = [
    { from: 'node_modules/react-router-dom/umd/react-router-dom.js', to: 'react-router-dom.js' },
    { from: 'node_modules/react-router-dom/umd/react-router-dom.min.js', to: 'react-router-dom.min.js' },
];

const vendorFileMatrix = _.union(
    animateCss,
    pureCss,
    reactRouterDOM
);

const internalAssetMatrix = [];

const fileMatrix = _.union( vendorFileMatrix, internalAssetMatrix );
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
			filename: '[name].css',
		} ),
		new CopyWebpackPlugin(fileMatrix),
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