const fs = require('fs');
const path = require('path');
const reactFC = require('./componentTemplate');
const styles = require('./styleTemplate');
const story = require('./storiesTemplate');
const reduxSlice = require('./reduxSliceTemplate');
const schema = require('./schemaTemplate');
const api = require('./apiTemplate');

const layer = process.argv[2];
const slice = process.argv[3];
const lowercasedSlice = slice[0].toLowerCase() + slice.slice(1);

const resolveRootDir = () => `${path.resolve(__dirname, '..', '..', 'src', layer)}/${slice}`;

if (!layer || layer === 'shared' || layer === 'app' || layer === 'widgets') {
  throw new Error('Неправильный слой');
}

const makeDir = async () => {
  const root = resolveRootDir();
  try {
    fs.mkdirSync(root); // new slice
    fs.mkdirSync(`${root}/ui`);
    fs.mkdirSync(`${root}/ui/${slice}`);
    fs.writeFileSync(`${root}/ui/${slice}/${slice}.tsx`, reactFC(slice));
    fs.writeFileSync(`${root}/ui/${slice}/${slice}.stories.tsx`, story(layer, slice));
    fs.writeFileSync(`${root}/ui/${slice}/${slice}.module.scss`, styles(slice));
    fs.mkdirSync(`${root}/model`);
    fs.mkdirSync(`${root}/model/slices`);
    fs.writeFileSync(`${root}/model/slices/${lowercasedSlice}Slice.ts`, reduxSlice(slice));
    fs.mkdirSync(`${root}/model/types`);
    fs.writeFileSync(`${root}/model/types/${lowercasedSlice}Schema.ts`, schema(slice));
    fs.mkdirSync(`${root}/model/services`);
    fs.mkdirSync(`${root}/model/selectors`);
    fs.writeFileSync(`${root}/index.ts`, api(slice));
  } catch (error) {
    console.log(error);
  }
};

makeDir();
