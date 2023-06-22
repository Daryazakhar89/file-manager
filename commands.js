import up from './actions/fs/up.js';
import addFile from './actions/fs/addFile.js';
import renameFile from './actions/fs/renameFile.js';
import readFile from './actions/fs/readFile.js';
import copyFile from './actions/fs/copyFile.js';
import moveFile from './actions/fs/moveFile.js';
import removeFile from './actions/fs/removeFile.js';
import osModule from './actions/os/index.js';
import hash from './actions/hash/hash.js';
import compress from './actions/compessAndDecompress/compress.js';
import decompress from './actions/compessAndDecompress/decompress.js';
import changeDirectory from './actions/fs/changeDirectory.js';
import listFiles from './actions/fs/listFiles.js';


export default new Map([
  ['.exit', process.exit],
  ['up', up],
  ['cd', changeDirectory],
  ['ls', listFiles],
  ['cat', readFile],
  ['add', addFile],
  ['rn', renameFile],
  ['cp', copyFile],
  ['mv', moveFile],
  ['rm', removeFile],
  ['os', osModule],
  ['hash', hash],
  ['compress', compress],
  ['decompress', decompress]
]);