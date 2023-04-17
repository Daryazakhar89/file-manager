import getEOL from './actions/getEOL.js';
import getCPUInfo from './actions/getCPUInfo.js';
import getHomeDir from './actions/getHomeDir.js';
import getUserName from './actions/getUserName.js';
import getArchitecture from './actions/getArchitecture.js';


export default new Map([
  ['--EOL', getEOL],
  ['--cpus', getCPUInfo],
  ['--homedir', getHomeDir],
  ['--username', getUserName],
  ['--architecture', getArchitecture],
]);