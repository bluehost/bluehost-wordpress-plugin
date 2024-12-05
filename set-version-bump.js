const fs = require( 'fs' );
const semver = require( 'semver' );
const packagefile = './package.json';
const pluginfile = './bluehost-wordpress-plugin.php';

if ( fs.existsSync( packagefile ) && fs.existsSync( pluginfile ) ) {
	const packageData = require( packagefile );
	const currentVersion = packageData.version;
	let type = process.argv[ 2 ];
	if ( ! [ 'major', 'minor', 'patch' ].includes( type ) ) {
		type = 'patch';
	}

	const newVersion = semver.inc( packageData.version, type );
	packageData.version = newVersion;
	fs.writeFileSync( packagefile, JSON.stringify( packageData, null, 4 ) );

	fs.readFile( pluginfile, 'utf8', function ( err, data ) {
		if ( err ) {
			return console.log( err );
		}
		const result = data.replaceAll( currentVersion, newVersion );

		fs.writeFile( pluginfile, result, 'utf8', function ( err ) {
			if ( err ) {
				return console.log( err );
			}
		} );
	} );

	console.log( 'Version updated', currentVersion, '=>', newVersion );
}
