import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (pathToFile) => {
  if (!pathToFile) {
    throw new InvalidInputError();
  }

  await pipeline(createReadStream(pathToFile, 'utf8'), stdout, { end: false });
  stdout.write('\n');
};
