const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    wpUsername: 'admin',
    wpPassword: 'password',
  },
  fixturesFolder: 'tests/cypress/fixtures',
  screenshotsFolder: 'tests/cypress/screenshots',
  video: false,
  videosFolder: 'tests/cypress/videos',
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  viewportWidth: 1024,
	viewportHeight: 768,
	blockHosts: [
		'*doubleclick.net',
		'*jnn-pa.googleapis.com',
		'*youtube.com',
	],
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./tests/cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8880',
    specPattern: 'tests/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/cypress/support/index.js',
    testIsolation: false,
  },
})
