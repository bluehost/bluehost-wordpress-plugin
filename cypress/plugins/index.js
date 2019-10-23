"use strict";
const {readFileSync} = require('fs');
const {resolve} = require('path');

module.exports = (on, config) => {

    const file = readFileSync(resolve('cypress.env.json'), 'utf-8');
    file.split('\n').map((line) => {
        if (line.trim() !== '') {
            const matches = line.match(/"baseUrl": "(.+)?"/);
            if (matches) {
                config.baseUrl = matches[1];
            }
        }
    });

    return config;
};