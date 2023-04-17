import os from 'node:os';

export default () => os.userInfo().username;

// work correctly
// os --username