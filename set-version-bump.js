let fs = require('fs');
let semver = require('semver');

if (fs.existsSync('./package.json')) {
    var package = require('./package.json');
    let currentVersion = package.version;
    let type = process.argv[2];
    if (!['major', 'minor', 'patch'].includes(type)) {
        type = 'patch';
    }

    let newVersion = semver.inc(package.version, type);
    package.version = newVersion;
    fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));

    console.log('Version updated', currentVersion, '=>', newVersion);
}