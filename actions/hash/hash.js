import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

import InvalidInputError from '../../errors/invalidInput.js';

export default async (pathToFile) => {
  if (!pathToFile) {
    throw new InvalidInputError();
  }

  const content = await readFile(join(cwd(),pathToFile));
  const modifiedContent = createHash('sha256').update(content).digest('hex');
  console.log('\n', modifiedContent);
};