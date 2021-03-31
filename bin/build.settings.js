const path = require('path');
const transform = require('lodash/transform');
const { getPluginHeaderData } = require('./wp-dependency-webpack-plugin');
const isProduction = 'production' === process.env.NODE_ENV;

const bluehostPluginSlug    = 'bluehost-wordpress-plugin';
const bluehostPluginPath    = path.resolve(__dirname, '..');
const bluehostPluginAcronym = 'bwp';

// 👀 entries array below makes everything else "just work."
const entries = [ 'app', 'dashboard' ];
const pattern = isProduction ? '[name]-[chunkhash]' : '[name]';

const buildSettings = {
    name: bluehostPluginSlug,
    acronym: bluehostPluginAcronym,
    version: getPluginHeaderData(bluehostPluginSlug, 'version'),
    webpack: {
      entry: transform(
        entries,
        (result, entry) => { result[entry] = bluehostPluginPath + '/src/' + entry + '.js' }, 
        {}
      ),
      output: { path: bluehostPluginPath + '/build' },
      aliases: transform(
        entries, 
        (result, entry) => { result['@' + entry] = bluehostPluginPath + '/src/' + entry + '/' }, 
        {}
      ),
      externals: {
        'react-router-dom': 'ReactRouterDOM',
      },
      filenamePattern: pattern,
      performance: {
          maxAssetSize: 25000
      },
      stats: {
        all: false,
        errors: true,
        warnings: true,
        assets: false,
        errorDetails: true,
        performance: true,
        colors: true,
      },
    },
    rootPath: bluehostPluginPath,
    bluehostBlue: '#3575D3',
}

module.exports = buildSettings;