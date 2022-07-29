'use strict';

const cypressReplay = require("@replayio/cypress");

module.exports = (on, config) => {

    cypressReplay.default(on, config);

    if (config.env && config.env.baseUrl) {
        config.baseUrl = config.env.baseUrl;
    }

    return config;
};
