// cli formatting
const chalk = require('chalk');
// Extract OSS licenses for JS pkgs (and their deps). Note: Sass imports not included!
const { LicenseWebpackPlugin } = require('license-webpack-plugin');
// Pipe development build errors to node-notifier
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
// Nice webpack loader bar from Nuxt.js.
const WebpackBar = require('webpackbar');
const merge = require('lodash/merge');
const mapValues = require('lodash/mapValues');
const { log } = console; // this works, but nuxt/consola is a good alt
const isProdBuild = 'production' === process.env.NODE_ENV;
const pluginName = 'BluehostWebpackPlugin';
const colors = {
  bluehost: '#3575d3',
  palePurple: '#83c0fc',
  deepPlum: '#1d2a3b',
  newfold: '#ec5328',
}

const asciiLogo = () => chalk.hex(colors.bluehost)([
    "|    |              |              |    ",
    "|---.|    .   .,---.|---.,---.,---.|--- ",
    "|   ||    |   ||---'|   ||   |`---.|    ",
    "`---'`---'`---'`---'`   '`---'`---'`---'",
].join('\n'));

const productLine = (name, version) => chalk.bgHex(colors.palePurple).hex(colors.deepPlum).bold(name + ' v' + version);
const contextLine = () => chalk.bold('MODE: ' + process.env.NODE_ENV);
const corporateLine = () => chalk.hex(colors.newfold).bold('A Newfold Digital Company');
/**
 * Lets start this shell session off on the right foot!
 */
const humanBanner = (name, version) => {
    log('\n\n' + asciiLogo());
    log(corporateLine());
    log(productLine(name, version) + '\n');
    log(contextLine());
}

/**
 * Print log data
 * @param {string} name 
 * @param {string} version 
 */
const logBanner = (name, version) => {
    log(productLine(name, version) + ' | ' + contextLine());
}

const presetLicenseMaps = {
  'load-script': 'MIT',
  'algoliasearch': 'MIT',
  'react-instantsearch-core': 'MIT',
  'react-instantsearch-dom': 'MIT',
  'react-shepherd': 'MIT',
};

class BluehostWebpackPlugin {
  constructor( options ) { 
    this.options = Object.assign({ 
        name: 'bluehost-product', 
        version: '1.0',
        licenseOverrides: {}
      }, 
      options
    );
    this.options.licenseOverrides = merge( presetLicenseMaps, this.options.licenseOverrides );
    this.licensePlugin = new LicenseWebpackPlugin({ 
      perChunkOutput: false,
      licenseTypeOverrides: this.options.licenseOverrides,
      licenseTextOverrides: this.licenseTextMapping(),
    });
    if ( ! isProdBuild ) {
      this.progressBar = new WebpackBar({
        name: this.options.name.toLowerCase(),
        color: colors.bluehost,
      });
      this.osNotification = new WebpackBuildNotifierPlugin({
          title: this.options.name,
          suppressSuccess: true,
          sound: false,
      });
    }
  }
  licenseTextMapping() {
    return mapValues(this.options.licenseOverrides, (spdx) => {
      return 'https://opensource.org/licenses/' + spdx;
    });
  }
  apply(compiler) {
    this.licensePlugin.apply(compiler);
    if ( ! isProdBuild ) {
      this.progressBar.apply(compiler);
      this.osNotification.apply(compiler);
    }
    compiler.hooks.environment.tap(pluginName, () => {
        if ( ! isProdBuild ) {
           humanBanner(this.options.name, this.options.version);
        } else {
            logBanner(this.options.name, this.options.version);
        }
        log(chalk.hex(colors.palePurple)('Alright webpack, time to take you on...'));
    });
  }
}

module.exports = { BluehostWebpackPlugin, humanBanner };