import os from 'node:os';

export default () => os.homedir();

// work correctly
// os --homedir