const fs = require('fs')
const fetch = require('node-fetch')
const wpEnv = require('./.wp-env.json')

fetch('https://api.wordpress.org/core/stable-check/1.0/')
	.then(res => res.json())
	.then(
		json => {
			const wpVersion = Object.keys(json)[Object.keys(json).length - 1]
			wpEnv.core = `WordPress/WordPress#tags/${ wpVersion }`
			fs.writeFile(
				'./.wp-env.json',
				JSON.stringify(wpEnv, null, 2),
				'utf8',
				(err) => {
					if (err) {
						console.log('An error occurred while writing latest WordPress version to .wp-env.json file.')
						return console.log(err)
					}
					console.log(`The .wp-env.json file was updated with the latest WordPress version (${wpVersion}).`)
				}
			);
		}
	)