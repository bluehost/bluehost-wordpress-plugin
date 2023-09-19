'use strict';

module.exports = (on, config) => {

    if (config.env && config.env.baseUrl) {
        config.baseUrl = config.env.baseUrl;
    }

    return config;
};
