import os from 'node:os';

export default () => JSON.stringify(os.EOL);

// work correctly
// os --EOL