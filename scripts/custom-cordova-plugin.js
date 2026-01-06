const fs = require('fs');
const path = require('path');

module.exports = function(context) {
    console.log('[TEST HOOK] Attempting to access old XML files...');
    
    const platformRoot = path.join(context.opts.projectRoot, 'platforms', 'android');
    
    // Try to access the OLD filename (simulating Cordova Android 14 scenario)
    const oldStringsPath = path.join(
        platformRoot,
        'app', 'src', 'main', 'res', 'values',
        'strings.xml'  // This is the OLD name
    );
    
    console.log('[TEST HOOK] Looking for: ' + oldStringsPath);
    
    // Force it to look for a file that doesn't exist
    // In real Cordova Android 14, strings.xml won't exist
    const testPath = path.join(
        platformRoot,
        'app', 'src', 'main', 'res', 'values',
        'strings.xml'
    );
    
    // This will throw ENOENT if file doesn't exist
    const content = fs.readFileSync(testPath, 'utf8');
    console.log('[TEST HOOK] Successfully read strings.xml');
};