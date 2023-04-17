import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import {createBrotliDecompress } from 'zlib';
import { join } from 'path';
import { cwd } from 'process';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (pathToFile, pathToDestination) => {
  if (!pathToFile || !pathToDestination) {
    throw new InvalidInputError();
  }

  const source = createReadStream(join(cwd(),pathToFile));
  const compression = createBrotliDecompress();
  const destination = createWriteStream(join(cwd(),pathToDestination));

  return await pipeline(source, compression, destination);
};