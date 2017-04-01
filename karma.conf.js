"use strict";

module.exports = config => {

  const dist = 'dist/',
    src = 'src/';

  const conf = {
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine-html-reporter'
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
      'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8'
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
    logLevel: config.INFO,
    autoWatch: true,
    browsers: ['PhantomJS', 'Chrome'],
    singleRun: false
  };

  if (process.env.SAUCE) {

    // Browsers to run on Sauce Labs
    const customLaunchers = {
      sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 10',
        version: '49'
      },
      sl_firefox: {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Windows 10',
        version: '40'
      },
      sl_ie_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '11'
      },
      sl_edge: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '14'
      },
      sl_android5: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '5.1'
      },
      sl_safari: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: '10'
      },
    };

    conf.plugins.push('karma-sauce-launcher');
    conf.reporters = ['saucelabs', 'dots'];
    conf.sauceLabs = {
      testName: 'ng2-facebook-sdk',
      public: 'public',
      recordScreenshots: false,
      startConnect: false,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    };
    conf.customLaunchers = customLaunchers;
    conf.browsers = Object.keys(customLaunchers);
    conf.singleRun = true;
    conf.concurrency = 5;
  }

  config.set(conf);

};
