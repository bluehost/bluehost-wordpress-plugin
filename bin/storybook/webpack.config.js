const path = require( 'path' );
const rootPath = path.resolve( __dirname, '../src/app/');
/**
 * Mode has value of 'PRODUCTION' or 'DEVELOPMENT
 */
module.exports = async ( { config, mode } ) => {
	config.module.rules.push(
		{
			test: /\/stories\/.+\.js$/,
			loaders: [ require.resolve( '@storybook/source-loader' ) ],
			enforce: 'pre',
		},
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
            ],
		}
    );
    
    config.resolve.alias['@'] = rootPath;

	return config;
};