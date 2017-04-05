"use strict";

module.exports = config => {

  const conf = {
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine-html-reporter',
      'karma-babel-preprocessor',
    ],

    preprocessors: {
      'dist/**/*.js': ['babel']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015'],
      }
    },

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

      { pattern: 'systemjs.config.js', included: false, watched: false }
    ],

    // Proxied base paths for loading assets
    proxies: {
      '/dist/': '/base/dist/'
    },
    exclude: [],
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
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
      sl_firefox_dev: {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Windows 10',
        version: 'dev'
      },
      sl_firefox_52: {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'Windows 10',
        version: '52'
      },
      sl_firefox_40: {
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
      sl_ie_10: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '10'
      },
      sl_ie_9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      sl_ie_8: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '8'
      },
      sl_edge: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '14'
      },
      sl_android_5: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '5.1'
      },
      'sl_android_4.4': {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.4'
      },
      SL_IOS_8: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.10',
        version: '8.4'
      },
      SL_IOS_9: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.10',
        version: '9.3'
      },
      SL_IOS_10: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.10',
        version: '10.0'
      },
      sl_safari: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: '10'
      },
      sl_safari_9: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'macOS 10.11',
        version: '9'
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
    conf.browserDisconnectTolerance = 2;
    conf.browserNoActivityTimeout = 20000;
    conf.browserDisconnectTimeout = 5000;
  }

  config.set(conf);

};
