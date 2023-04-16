import up from './actions/up.js';
import addFile from './actions/addFile.js';
import renameFile from './actions/renameFile.js';
import readFile from './actions/readFile.js';
import copyFile from './actions/copyFile.js';
import moveFile from './actions/moveFile.js';


export default new Map([
  ['.exit', process.exit],
  ['up', up],
  ['add', addFile],
  ['rn', renameFile],
  ['cat', readFile],
  ['cp', copyFile],
  ['mv', moveFile],
]);