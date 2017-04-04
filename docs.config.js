const _ = require('lodash');
module.exports = {
  docTitle: 'Angular 2 Facebook SDK',
  templateDir: './scripts/docs/templates/',
  templates: [
    '${ doc.template }',
    '${ doc.docType }.template.html',
    'common.template.html'
  ],
  tags: [
    'shortdesc',
    'fbdoc'
  ],
  outputFolder: '../ng2-facebook-sdk-site/',
  sourceFiles: ['./src/**/*.ts'],
  customProcessors: [
    {
      name: 'generate-index',
      description: 'Generate index file',
      $runAfter: ['paths-computed'],
      $runBefore: ['rendering-docs'],
      $process: docs => {
        docs = docs.filter(doc => (!!doc.name && !!doc.outputPath));
        docs = _(docs).sortBy(['name']).sortBy([d => {
          if (d.name === 'FacebookModule') {
            return 0;
          } else if (d.name === 'FacebookService') {
            return 1;
          } else if (d.docType === 'class') {
            return 2;
          } else {
            return 3;
          }
        }]).valueOf();
        docs = docs.map(doc => {
          doc.URL = doc.outputPath.replace('index.html', '');
          return doc;
        });
        docs.push({
          template: 'index.template.html',
          outputPath: 'index.html',
          pageTitle: 'Angular2 Facebook SDK'
        });
        return docs;
      }
    }
  ]
};
