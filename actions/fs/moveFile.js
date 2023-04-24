import copyFile from "./copyFile.js";
import removeFile from './removeFile.js';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (pathToFile, pathToNewDirectory) => {
  if (!pathToFile || !pathToNewDirectory) {
    throw new InvalidInputError();
  }

  await copyFile(pathToFile, pathToNewDirectory);
  return await removeFile(pathToFile);
};

