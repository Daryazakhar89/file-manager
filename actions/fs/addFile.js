import { writeFile } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (fileName) => {
  if (!fileName) {
    throw new InvalidInputError();
  }

  return await writeFile(join(cwd(), fileName), '');
};