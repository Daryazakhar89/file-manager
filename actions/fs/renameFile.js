import { rename } from 'fs/promises';
import { join, basename } from 'path';
import { cwd } from 'process';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (pathToFile, newFileName) => {
  if (!pathToFile || !newFileName) {
    throw new InvalidInputError();
  }

  const absolutePathToFile = join(cwd(), pathToFile);
  const newPathToFile = absolutePathToFile.replace(basename(pathToFile), newFileName);

  return await rename(absolutePathToFile, newPathToFile);
};