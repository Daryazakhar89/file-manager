import os from 'node:os';

export default () => os.arch();

// work correctly
// os --architecture