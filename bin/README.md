# Overview

## Quickstart

* npm run develop | npm run develop:analyzer
* npm run build

### build.settings.js
Generic (and webpack) settings.

### webpack.modified-wp-scripts.js
All overridese and direct mods to the wp-scripts default config belong here

### webpack.common.js
Base config used in all contexts. Uses build settings and modified wp-scripts config.

### webpack.develop.js
Development build (and watch) config extending common.

### webpack.production.js
Production build config extending common.

### sizes-manifest.json
Tracks build sizes for Google's SizesPlugin so it can show deltas.

### bluehost-webpack-plugin
Prototype for banners, progress bar and license extraction logic for all webpack-based builds.
This will eventually extract out of this repo.

### wp-dependency-webpack-plugin
Prototype for reducing run time complexity by processing webpack assets more thoroughly at build time.
This will eventually extract out of this repo.

## Adding new entries

1. Create src/[entry].js and src/[entry].
2. Update const entries array in bin/build.settings.js with [entry].
3. [entry] assets and registration will now be in /build and wp-dependency manifest.

## Important notes
* Sass @imports cannot have licenses automatically extracted to licenses.txt.
* 

