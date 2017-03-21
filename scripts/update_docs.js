/**
 * Created by Ibby on 3/20/2017.
 */
"use strict";

const projectPackage = require('../package.json'),
  Dgeni = require('dgeni'),
  dgeniConfig = require('./dgeni_config')(projectPackage.version);

const dgeni = new Dgeni([dgeniConfig]);

try {
  dgeni.generate()
    .then(docs => {
      console.log(`${docs.length} docs generated`);
    });
} catch (e) {
  console.error('An error occurred while attempting to generate docs');
  console.error(e.message);
  console.error(e.stack);
  process.exit(1);
}
