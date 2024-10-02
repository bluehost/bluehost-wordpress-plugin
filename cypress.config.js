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
			const semver = require( 'semver' );

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

			// Exclude Onboarding and ecommerce tests for WordPress lower than 6.5 (6.4 or 6.3) or PHP lower than 7.4 (7.1, 7.2 and 7.3)
			if ( semver.satisfies( config.env.wpSemverVersion, '<6.5.0' ) || semver.satisfies( config.env.phpSemverVersion, '<7.4.0' )) {
				config.excludeSpecPattern = config.excludeSpecPattern.concat( [
					'vendor/newfold-labs/wp-module-ecommerce/tests/cypress/integration/Site-Capabilities/**',
					'vendor/newfold-labs/wp-module-ecommerce/tests/cypress/integration/Home/homePageWithWoo.cy.js',
					'vendor/newfold-labs/wp-module-ecommerce/tests/cypress/integration/Home/ecommerce-next-steps.cy.js', // Skip this since Onboarding does not support this version
					'vendor/newfold-labs/wp-module-onboarding/tests/cypress/integration/**' // Onboarding requires WP 6.5 or greater, as it uses the Wonder Theme which has the same requirement
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
		],
		experimentalRunAllSpecs: true,
	},
	retries: 1,
	experimentalMemoryManagement: true,
} );
