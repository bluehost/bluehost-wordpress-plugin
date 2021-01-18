/**
 * Shared Configuration Settings for Webpack
 */
module.exports = {
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
    brand: {
        bluehost: '#3575D3',
        eig: '#17A0F3',
    }
}