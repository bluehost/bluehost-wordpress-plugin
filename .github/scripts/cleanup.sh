#!/usr/bin/env bash

rm -rf .git
rm -rf .github
rm -rf node_modules
rm -rf src
rm -rf storybook
rm -rf tests
find . -name '.*' -type f -maxdepth 1 -delete
find . -name '*.md' -type f -maxdepth 1 -delete
find . -name '*.json' -type f -maxdepth 1 -delete
find . -name '*.lock' -type f -maxdepth 1 -delete
find . -name '*.xml' -type f -maxdepth 1 -delete
rm webpack.config.js
