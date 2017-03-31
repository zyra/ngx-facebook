"use strict";

console.log(!!process.env.SAUCE);
module.exports = config => {

  const dist = 'dist/',
    src = 'src/';

  const conf = {
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    // client: {
    //   builtPaths: [dist], // add more spec base paths as needed
    //   clearContext: false // leave Jasmine Spec Runner output visible in browser
    // },

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'dist/**/*.js', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: false},
      {pattern: 'dist/**/*.js.map', included: false, watched: false},

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: 'systemjs.config.js', included: false, watched: false },
    ],

    // Proxied base paths for loading assets
    proxies: {
      '/dist/': '/base/dist/'
    },
    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  };

  if (process.env.SAUCE) {

    // Browsers to run on Sauce Labs
    const customLaunchers = {
      'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '48.0',
        platform: 'Linux'
      },
      'SL_Firefox': {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '50.0',
        platform: 'Windows 10'
      },
      'SL_InternetExplorer': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '11.0',
        platform: 'Windows 7'
      },
      'SL_Safari': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '10.0'
      }
    };

    conf.plugins.push(require('karma-sauce-launcher'));
    conf.reporters.push('saucelabs');
    conf.sauceLabs = {
      testName: 'ng2-facebook-sdk',
      public: 'public',
      recordScreenshots: false
    };
    conf.browsers = Object.keys(customLaunchers);
    conf.singleRun = true;
  }

  config.set(conf);

};
