import { chdir } from 'process';

import InvalidInputError from '../../errors/invalidInput.js';

export default (pathToNewDirectory ) => {
  if (!pathToNewDirectory) {
    throw new InvalidInputError();
  }

  chdir(pathToNewDirectory);
};