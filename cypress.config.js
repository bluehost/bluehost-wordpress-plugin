const { defineConfig } = require( 'cypress' );
const { phpVersion, core } = require( './.wp-env.json' );
const wpVersion = /[^/]*$/.exec( core )[ 0 ];

module.exports = defineConfig( {
	projectId: 'h78f39',
	env: {
		wpUsername: 'admin',
		wpPassword: 'password',
		wpVersion,
		phpVersion,
		pluginId: 'bluehost',
		appId: 'wppbh',
		pluginSlug: 'bluehost-wordpress-plugin',
	},
	downloadsFolder: 'tests/cypress/downloads',
	fixturesFolder: 'tests/cypress/fixtures',
	screenshotsFolder: 'tests/cypress/screenshots',
	video: true,
	videosFolder: 'tests/cypress/videos',
	chromeWebSecurity: false,
	viewportWidth: 1024,
	viewportHeight: 768,
	blockHosts: [
		'*doubleclick.net',
		'*jnn-pa.googleapis.com',
		'*youtube.com',
	],
	e2e: {
		setupNodeEvents( on, config ) {
			// Ensure that the base URL is always properly set.
			if ( config.env && config.env.baseUrl ) {
				config.baseUrl = config.env.baseUrl;
			}

			// Ensure that we have a semantically correct WordPress version number for comparisons.
			if ( config.env.wpVersion ) {
				if ( config.env.wpVersion.split( '.' ).length !== 3 ) {
					config.env.wpSemverVersion = `${ config.env.wpVersion }.0`;
				} else {
					config.env.wpSemverVersion = config.env.wpVersion;
				}
			}

			// Ensure that we have a semantically correct PHP version number for comparisons.
			if ( config.env.phpVersion ) {
				if ( config.env.phpVersion.split( '.' ).length !== 3 ) {
					config.env.phpSemverVersion = `${ config.env.phpVersion }.0`;
				} else {
					config.env.phpSemverVersion = config.env.phpVersion;
				}
			}

			// Tests require Wondor Theme, exclude if not supported due to WP or PHP versions
			if ( ! supportsWonderTheme( config.env ) ) {
				config.excludeSpecPattern = config.excludeSpecPattern.concat( [
					'vendor/newfold-labs/wp-module-onboarding/tests/cypress/integration/**', // Onboarding requires Wonder Theme
					'vendor/newfold-labs/wp-module-ecommerce/tests/cypress/integration/Home/ecommerce-next-steps.cy.js', // Requires Onboarding
				] );
			}

			// Tests requires Woo, so exclude if not supported due to WP or PHP versions
			if ( ! supportsWoo( config.env ) ) {
				config.excludeSpecPattern = config.excludeSpecPattern.concat( [
					'vendor/newfold-labs/wp-module-ecommerce/tests/cypress/integration/Site-Capabilities/**',
					'vendor/newfold-labs/wp-module-ecommerce/tests/cypress/integration/Home/homePageWithWoo.cy.js',
					'vendor/newfold-labs/wp-module-coming-soon/tests/cypress/integration/coming-soon-woo.cy.js',
				] );
			}

			// Test requires Jetpack, so exclude if not supported due to WP or PHP versions
			if ( ! supportsJetpack( config.env ) ) {
				config.excludeSpecPattern = config.excludeSpecPattern.concat( [
					'vendor/newfold-labs/wp-module-solutions/tests/cypress/integration/wp-plugins-installation-check.cy.js',
				] );
			}

			return config;
		},
		baseUrl: 'http://localhost:8882',
		specPattern: [
			'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
			'vendor/newfold-labs/**/tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
		],
		supportFile: 'tests/cypress/support/index.js',
		testIsolation: false,
		excludeSpecPattern: [
			'vendor/newfold-labs/**/tests/cypress/integration/wp-module-support/*.cy.js', // skip any module's wp-module-support files
			'vendor/newfold-labs/wp-module-migration/**/*.cy.js', // temporarily skip the broken migration test
		],
		experimentalRunAllSpecs: true,
	},
	retries: 1,
	experimentalMemoryManagement: true,
} );

// Check against plugin support at https://wordpress.org/plugins/woocommerce/
const supportsWoo = ( env ) => {
	const semver = require( 'semver' );
	if (
		semver.satisfies( env.wpSemverVersion, '>=6.5.0' ) &&
		semver.satisfies( env.phpSemverVersion, '>=7.4.0' )
	) {
		return true;
	}
	return false;
};
// Check against plugin support at https://wordpress.org/plugins/jetpack/
const supportsJetpack = ( env ) => {
	const semver = require( 'semver' );
	if (
		semver.satisfies( env.wpSemverVersion, '>=6.6.0' ) &&
		semver.satisfies( env.phpSemverVersion, '>=7.2.0' )
	) {
		return true;
	}
	return false;
};
// Check against theme support at https://github.com/newfold-labs/yith-wonder/blob/master/style.css
const supportsWonderTheme = ( env ) => {
	const semver = require( 'semver' );
	if (
		semver.satisfies( env.wpSemverVersion, '>=6.5.0' ) &&
		semver.satisfies( env.phpSemverVersion, '>=7.0.0' )
	) {
		return true;
	}
	return false;
};
