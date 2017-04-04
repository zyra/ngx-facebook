'use strict';

require('ts-node').register({
  project: require('path').join(__dirname, 'scripts/gulp')
});

require('./scripts/gulp/gulpfile');
