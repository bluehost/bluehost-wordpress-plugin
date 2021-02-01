// nodejs path utilities
const path = require('path')
// nodejs filesystem utilities
const fs = require('fs');

// take JS syntax and convert to php syntax equivalent for type
const json2php = require('json2php');
// lodash utilities
const forEach = require('lodash/forEach');
const merge = require('lodash/merge');
const kebabCase = require('lodash/kebabCase');
// cli formatting
const chalk = require('chalk');

// generate entrypoint manifest mapping unhashed filenames to hashed build assets
const WebpackAssetsManifest = require('webpack-assets-manifest');
// Handle WordPress Core dependencies and extend with additional externals.
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { cleanForSlug } = require('@wordpress/url');

// string ID for this webpack plugin
const webpackPluginName = 'WpDependencyWebpackPlugin';
let config = {};
let data = {};
const getPluginHeaderData = require( './getPluginHeaderData' );
// helper to load externals through dependency extraction
const customRequestToExternal = ( request ) => {
  if ( 
    'externals' in config 
    && request in config.externals 
  ) {
    return config.externals[ request ];
  }
  // purposefully do not return anything
}
/**
 * Opinionated webpack plugin for digesting built assets in WordPress.
 */
class WpDependencyWebpackPlugin {
  
  constructor(options) {
    // setup webpack plugin options
    this.setup(options);
    // create instance of webpack-assets-manifest
    this.assetsManifest = new WebpackAssetsManifest({
      output: '.asset-manifest.json',
			entrypoints: true,
			transform: (assets) => {
        data.assetsManifest = assets.entrypoints;
				return assets.entrypoints;
			}
    });
    // create instance of @wordpress/dependency-extraction-webpack-plugin.
    // if this plugin is used with @wordpress/scripts the copy in that webpack
    // config file needs to be disabled so both don't run!
    this.dependencyExtraction = new DependencyExtractionWebpackPlugin({
			injectPolyfill: true,
			outputFormat: 'json',
			combineAssets: true,
			combinedOutputFile: '.dependency-extraction.json',
			requestToExternal(request) {
        return customRequestToExternal(request)
      },
		});
  }

  setup(options) {
    if ( ! 'handlePrefix' in options ) {
      throw new Error(webpackPluginName + ': handlePrefix string must be provided.');
    }
    this.defaults = { 
      php: true, 
      json: true, 
      silent: false,
      path: path.resolve(process.cwd(), 'build'),
      buildFilename: 'wp-dependency',
    };
    config = merge(this.defaults, options);
    this.output = {};
  }

  buildUnifiedManifest() {
    this.output.manifest = {};
    forEach(data.assetsManifest, (entryData, entryName) => {
      console.log(entryName);
      console.log(entryData);
      this.output.manifest[entryName] = { 
        assets: this.processEntrypointAssets( entryName, entryData ),
      };
    });
  }

  processEntrypointAssets(entryName, entryData) {
    let js = [];
    let css = [];
    if('js' in entryData.assets) {
      let previousJsHandle = false;
      forEach(entryData.assets.js, (filename) => {
        let asset = { 
          filename,
          handle: this.createAssetHandle(filename, entryName),
        };
        if (filename in data.wordpress) {
          asset = {...asset, ...data.wordpress[filename]};
        } else if ( previousJsHandle ) {
          asset.dependencies = [ previousJsHandle ];
        }
        js.push(asset);
        previousJsHandle = asset.handle;
      })
    }

    if ('css' in entryData.assets) {
      let previousCssHandle = false;
      forEach(entryData.assets.css, (filename) => {
        let asset = this.createAssetData(filename, entryName, previousCssHandle);
        css.push(asset);
        previousCssHandle = asset.handle;
      });
    }

    return { js, css }
  }

  createAssetData(filename, entry, previous = false ) {
    let asset = {
      filename,
      handle: this.createAssetHandle(filename, entry),
    };
    if ( previous ) {
      asset.dependencies = [ previous ];
    }
    
    return asset;
  }

  createAssetHandle( filename, entryname ) {
    return cleanForSlug( kebabCase( config.handlePrefix + '-' + filename.split(entryname)[0] + entryname ) );
  }

  writeWpDependencyManifestToFS() {
    const json = JSON.stringify(this.output, null, 2); // pretty-print JSON
    const fileNoExt = config.path + '/' + config.buildFilename;

    if (config.php) {
      fs.writeFileSync(fileNoExt + '.php', `<?php return ${json2php( JSON.parse( json ) )};`);
      this.success(config.buildFilename + '.php emitted');
    }
    if (config.json) {
      fs.writeFileSync(fileNoExt + '.json', json)
      this.success(config.buildFilename + '.json emitted');
    }
  }

  afterEmit(compilation) {
    data.wordpress = JSON.parse(fs.readFileSync(config.path + '/.dependency-extraction.json'));
    this.output = { buildHash: compilation.hash };
    this.buildUnifiedManifest();      
    this.writeWpDependencyManifestToFS();
  }
  
  apply(compiler) {
    // apply plugins to webpack compiler (just like adding in a wepack config plugins array)
    this.assetsManifest.apply(compiler);
    this.dependencyExtraction.apply(compiler);
    // tap afterEmit because it's the earliest hook where data is fully available
    compiler.hooks.afterEmit.tap(webpackPluginName, compilation => this.afterEmit(compilation));
  }

  logger(msg) {
    ! config.silent && console.log(msg);
  }

  success(msg) {
    this.logger(chalk.greenBright.italic(msg));
  }

  error(msg) {
    this.logger(chalk.redBright.italic(msg));
  }

  log(msg) {
    this.logger(msg);
  }
}

module.exports = { WpDependencyWebpackPlugin, getPluginHeaderData };