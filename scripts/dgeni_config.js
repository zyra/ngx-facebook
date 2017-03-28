"use strict";

const Package = require('dgeni').Package,
  jsdocPackage = require('dgeni-packages/jsdoc'),
  nunjucksPackage = require('dgeni-packages/nunjucks'),
  typescriptPackage = require('dgeni-packages/typescript'),
  linksPackage = require('dgeni-packages/links'),
  path = require('path'),
  fs = require('fs'),
  marked = require('marked');




const stringifyFilter = {
  name: 'stringify',
  process: obj => {
    console.log(obj);
    return '';
  }
};

const markedFilter = {
  name: 'marked',
  process: code => {

    return marked(code, { langPrefix: 'rounded ' });
  }
};

const removeIndexFiles = {
  name: 'remove-index-files',
  description: 'Document things from source instead of index',
  $runBefore: ['rendering-docs'],
  $process: docs => {
   const goodDocs = [];
   docs.forEach(doc => {
     if (!!doc.name && doc.id.indexOf('index') === -1) goodDocs.push(doc);
   });
    return goodDocs;
  }
};

const hideStuff = {
  name: 'hide-stuff',
  description: 'removes anything with @hidden tag',
  $runBefore: ['rendering-docs'],
  $process: docs => {

    console.log(docs.length);
    const newDocs = [];

    docs = docs.filter(doc => {

      doc.moduleDoc.exports = doc.moduleDoc.exports.filter(doc => {
        if (doc.tags.tagsByName.get('hidden')) {
          return false;
        }
        doc.members = doc.members.filter(member => !member.tags.tagsByName.get('hidden'));
        doc.statics = doc.statics.filter(method => !method.tags.tagsByName.get('hidden'));
        return true;
      });

      return true;
    });

    return docs;

  }
};

const generateIndex = {

  name: 'generate-index',
  description: 'Generate index file',
  $runAfter: ['paths-computed'],
  $runBefore: ['rendering-docs'],
  $process: docs => {

    docs = docs.filter(doc => (!!doc.name && !!doc.outputPath));
    docs.sort((a,b) => {
      let textA = a.name.toLowerCase(),
        textB = b.name.toLocaleLowerCase();

      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

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

};

const addPageTitle = {
  name: 'add-page-title',
  description: 'Adds page titles to docs',
  $runBefore: ['rendering-docs'],
  $process: docs => {
    docs = docs.filter(doc => !!doc.name && !!doc.outputPath);
    docs.forEach(doc => doc.pageTitle = doc.name + ' | Angular2 Facebook SDK');
    return docs;
  }
};

const collectIO = {
  name: 'Collect IO',
  $runBefore: ['rendering-docs'],
  $process: docs => {
    function parseMember(member) {
      member.type = member.content.substring(
        member.content.indexOf('{') + 1,
        member.content.indexOf('}')
      );
      member.description = member.content.substring(
        member.content.indexOf('}') + 1,
        member.content.length
      );
      return member;
    }

    docs.forEach(doc => {
      if (doc.members && doc.members.length) {

        const members = [], inputs = [], outputs = [];

        memberLoop:
        for (let i in doc.members) {
          if (typeof doc.members[i].parameters == 'undefined') {
            doc.members[i].isProperty = true;
          }
          if (doc.members[i].decorators && doc.members[i].decorators.length) {
            for (let ii in doc.members[i].decorators) {
              switch(doc.members[i].decorators[ii].name) {
                case 'Input':
                  inputs.push(parseMember(doc.members[i]));
                  continue memberLoop;
                case 'Output':
                  outputs.push(parseMember(doc.members[i]));
                  continue memberLoop;
              }
            }
          }
          members.push(doc.members[i]);
        }

        doc.members = members;
        doc.inputs = inputs;
        doc.outputs = outputs;

      }
    });
  }
};

module.exports = function() {


  return new Package('ng2-facebook-sdk', [jsdocPackage, nunjucksPackage, typescriptPackage, linksPackage])

    .processor(removeIndexFiles)
    .processor(addPageTitle)
    .processor(hideStuff)
    .processor(generateIndex)
    .processor(collectIO)

    .config(function (computePathsProcessor) {
      // set path for each doc page
      computePathsProcessor.pathTemplates = [{
        docTypes: ['class', 'interface'],
        getOutputPath: doc => doc.name + '/index.html'
      }];

    })

    .config(function(log) {
      log.level = 'error';
    })

    .config(function (readFilesProcessor, readTypeScriptModules) {
      readFilesProcessor.$enabled = false;
      readFilesProcessor.basePath = path.resolve(__dirname, '..');
      readTypeScriptModules.basePath = path.resolve(__dirname, '..');
      readTypeScriptModules.sourceFiles = [
        './src/**/*.ts'
      ];
    })

    .config(function (writeFilesProcessor) {
      if (process.env.test) {
        writeFilesProcessor.outputFolder = './generated-docs/';
      } else {
        writeFilesProcessor.outputFolder = '../ng2-facebook-sdk-site/';
      }
    })

    .config(function (templateFinder, templateEngine) {
      templateEngine.filters.push(stringifyFilter);
      templateEngine.filters.push(markedFilter);
      templateFinder.templateFolders = [path.resolve(__dirname, 'templates')];
      templateFinder.templatePatterns = [
        '${ doc.template }',
        '${ doc.docType }.template.html',
        'common.template.html'
      ];
    })

    .config(function (parseTagsProcessor) {
      parseTagsProcessor.tagDefinitions.push({ name: 'shortdesc' });
      parseTagsProcessor.tagDefinitions.push({ name: 'usage' });
      parseTagsProcessor.tagDefinitions.push({ name: 'hidden' });
    })

};
