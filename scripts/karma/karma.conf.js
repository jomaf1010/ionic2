var buildConfig = require('../build/config');

module.exports = function(config) {
  config.set({
    singleRun: true,
    basePath: '../../',

    frameworks: ['jasmine'],

    files: buildConfig.scripts.concat([
      'node_modules/angular2/bundles/test_lib.js',
      'dist/tests/**/*.spec.js',
      'scripts/karma/test-main.js'
    ]),

    exclude: buildConfig.src.e2e,

    logLevel: 'warn',

    preprocessors: {
    },

    browsers: ['Chrome'],
    port: 9876
  });
};
