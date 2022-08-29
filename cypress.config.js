const {defineConfig} = require('cypress')
const {phpVersion, core} = require('./.wp-env.json')
const wpVersion = /[^/]*$/.exec(core)[0]

module.exports = defineConfig({
	projectId: "h78f39",
	env: {
		wpUsername: 'admin',
		wpPassword: 'password',
		wpVersion,
		phpVersion,
	},
	downloadsFolder: 'tests/cypress/downloads',
	fixturesFolder: 'tests/cypress/fixtures',
	screenshotsFolder: 'tests/cypress/screenshots',
	video: true,
	videosFolder: 'tests/cypress/videos',
	videoUploadOnPasses: false,
	experimentalFetchPolyfill: true,
	chromeWebSecurity: false,
	viewportWidth: 1024,
	viewportHeight: 768,
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./tests/cypress/plugins/index.js')(on, config)
		},
		baseUrl: 'http://localhost:8882',
		specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'tests/cypress/support/index.js',
	},
})
