exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'e2e/scenarios.js'
    ],
    capabilities: {
        'browserName':'chrome'
    },
    
    baseUrl: 'http://localhost:3000/',
    
    framework: 'jasmine',
    
    directConnect: true,
    
    jasmineNodeOpts: { 
        defaultTimeoutInternal: 30000
    }
};