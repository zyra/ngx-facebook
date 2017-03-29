const [Dgeni, dgeniConfig] = [require('dgeni'), require('./dgeni_config')];

new Dgeni([dgeniConfig]).generate()
  .then(docs => console.log(`${docs.length} docs generated`));
