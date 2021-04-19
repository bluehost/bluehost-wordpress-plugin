const fs = require('fs');
const { resolve } = require('path');
const engine = require('php-parser');
const split = require('lodash/split');
const trim = require('lodash/trim');

const getPluginVersion = ( slug, path = false ) => {
    // lets get this parser party started
    const parser = new engine({
        parser: {
            extractDoc: true,
        }
    });
    // Read file contents (syncronously)
    const pluginRoot = path ? path : process.cwd();
    const fileString = fs.readFileSync(resolve(pluginRoot, slug + '.php'));
    // parse ast of plugin php file
    const ast = parser.parseCode(fileString);
    // Extract WordPress Plugin main file comment block
    const wpPluginHeaderDoc = ast.comments[0].value;
    // By slicing at 'Version: ' and '*' on the next line, no matter any line changes, 
    // php docblock (including @version), order swapping, etc this *always* works and 
    // is simple code to understand ¯\_(ツ)_/¯
    const sliceAtVersion = split( wpPluginHeaderDoc, 'Version: ');
    const sliceAtAsterisk = split( sliceAtVersion[1], '*' );

    return trim(sliceAtAsterisk[0]);
}

const getPluginHeaderData = ( slug, header = 'all' ) => {
    if ( ! slug ) {
        throw new Error( 'getPluginHeaderData requires slug');
    }
    let normalized = header.toLowerCase();
    switch( normalized ) {
        case 'version':
            return getPluginVersion( slug );
        default:
            return {
                version: getPluginVersion( slug ),
            }
    }
}

module.exports = getPluginHeaderData;