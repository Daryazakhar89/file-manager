import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { access, mkdir } from 'fs/promises';
import { join, basename } from 'path';

import InvalidInputError from '../../errors/invalidInput.js';

const createFolderStructureIfNotExist = async (pathToNewDirectory) => {
  try {
    await access(pathToNewDirectory)
  } catch (err) {
    await mkdir(pathToNewDirectory, { recursive: true });
  }
};

export default async (pathToFile, pathToNewDirectory) => {
  if (!pathToFile || !pathToNewDirectory) {
    throw new InvalidInputError();
  }

  const fileName = basename(pathToFile);
  await createFolderStructureIfNotExist(pathToNewDirectory);

  return new Promise((res, rej) => {
    pipeline(
      [
        createReadStream(pathToFile),
        createWriteStream(join(pathToNewDirectory, fileName)),
      ],
      (err) => {
        if (err) {
          rej(err)
        } else {
          res();
        }
      }
    );
  });
};