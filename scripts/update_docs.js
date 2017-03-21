/**
 * Created by Ibby on 3/20/2017.
 */
"use strict";

const projectPackage = require('../package.json'),
  Dgeni = require('dgeni'),
  dgeniConfig = require('./dgeni_config')(projectPackage.version);

const dgeni = new Dgeni([dgeniConfig]);

dgeni.generate()
  .then(docs => {
    console.log(`${docs.length} docs generated`);
  });
