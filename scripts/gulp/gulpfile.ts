import { task, series } from 'gulp';
import { join } from 'path';
import { exec } from 'child_process';
import { readJsonSync, writeJsonSync, removeSync } from 'fs-extra';

const PROJECT_ROOT = join(__dirname, '../../');
const DIST_ROOT = join(PROJECT_ROOT, 'dist');
const NODE_MODULES_BIN = join(PROJECT_ROOT, 'node_modules/.bin');
const NGC = join(NODE_MODULES_BIN, 'ngc');
const TSCONFIG  = join(PROJECT_ROOT, 'tsconfig.json');

function ngc(target: string, module: string, outDir: string) {
  console.log(NGC);
  const tsConfigPath = createTsconfig.apply(null, arguments);
  return new Promise<any>((resolve, reject) => {
    exec(`${NGC} -p ${tsConfigPath}`, (err: Error, stdout: string, stderr: string) => {
      if (err || stderr) {
        reject(err || stderr);
      } else {
        destroyTsconfig(tsConfigPath);
        resolve();
      }
    });
  });
}

function createTsconfig(target: string, module: string, outDir: string): string {
  const tsConfig = readJsonSync(TSCONFIG);
  tsConfig.compilerOptions.target = target;
  tsConfig.compilerOptions.module = module;
  tsConfig.compilerOptions.outDir = join(DIST_ROOT, outDir);
  const newFileName = `tsconfig-${target}-${module}.json`;
  const newFilePath = join(PROJECT_ROOT, newFileName);
  writeJsonSync(newFilePath, tsConfig);
  return newFilePath;
}

function destroyTsconfig(path: string) {
  removeSync(path);
}

function getCleanTask(outDir: string) {
  return done => {
    console.log(`Cleaning dist/${outDir}`);
    removeSync(join(DIST_ROOT, outDir));
    done();
  };
}

task('clean:aot', done => {
  removeSync(join(PROJECT_ROOT, 'aot'));
  done();
});

task('build:umd', <any>series('clean:aot', getCleanTask('umd'), done => {
  console.log('Building UMD');
  return ngc('es5', 'umd', 'umd')
    .then(() => done())
    .catch(e => done(e));
}));

task('build:esm', <any>series('clean:aot', getCleanTask('esm'), done => {
  console.log('Building ESM');
  return ngc('es5', 'es2015', 'esm')
    .then(() => done())
    .catch(e => done(e));
}));

task('build', <any>series('build:umd', 'build:esm', done => {
  console.log('Done building');
  done();
}));
