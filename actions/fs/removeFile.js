import { unlink } from 'fs/promises';
import { normalize } from 'path';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (pathToFile) => {
  if (!pathToFile) {
    throw new InvalidInputError();
  }

  return await unlink(normalize(pathToFile));
};