'use strict';

module.exports = (on, config) => {

	if (config.env && config.env.baseUrl) {
		config.baseUrl = config.env.baseUrl;
	}

	// Ensure that the
	if (config.env.wpVersion) {
		if (config.env.wpVersion.split('.').length !== 3) {
			config.env.wpSemverVersion = `${ config.env.wpVersion }.0`;
		} else {
			config.env.wpSemverVersion = config.env.wpVersion;
		}
	}

	return config;
};
