const path = require('path');
const { merge } = require('webpack-merge');
const wpScriptsConfig = require('@wordpress/scripts/config/webpack.config');
const version = require('./package.json').version;
const { ProvidePlugin } = require('webpack');
/**
 * Aliases for resolving Brand imports
 */
const alias = {
    App: path.resolve(__dirname, '/src/app/'),
    Store: path.resolve(__dirname, '/src/app/data/store.js'),
    Routes: path.resolve(__dirname, '/src/app/data/routes.js'),
};
/**
 * Make most-common imports available globally to ease import debt.
 * (Instead of import { useEffect } from '@wordpress/element' in every file)
 */
const mostCommonImports = {
    Fragment: ['@wordpress/element', 'Fragment'],
    useState: ['@wordpress/element', 'useState'],
    useEffect: ['@wordpress/element', 'useEffect'],
    useContext: ['@wordpress/element', 'useContext'],
    useLocation: ['react-router-dom', 'useLocation'],
    useNavigate: ['react-router-dom', 'useNavigate'],
    _filter: ['lodash', 'filter'],
    _map: ['lodash', 'map'],
    _isEmpty: ['lodash', 'isEmpty'],
    _camelCase: ['lodash', 'camelCase'],
    __: ['@wordpress/i18n', '__'],
    _n: ['@wordpress/i18n', '_n'],
    sprintf: ['@wordpress/i18n', 'sprintf'],
    classNames: ['classnames'],
};
/**
 * Extend @wordpress/scripts default webpack config with:
 * - Versioned build folder (via package.json version) for cache-busting.
 * - Set Plugin-specific aliases for tidy imports.
 * - Use webpack's ProvidePlugin to ease repetitive imports.
 */
const webConfig = {
    mode: 'production',
    output: {
        // versioned output directory i.e. /build/1.0.0, /build/1.1.0, etc.
        path: path.resolve(process.cwd(), 'build/' + version),
    },
    resolve: { alias },
    plugins: [new ProvidePlugin(mostCommonImports)],
};
module.exports = merge(wpScriptsConfig, webConfig);