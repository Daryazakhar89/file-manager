import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { access, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const createFolderStructureIfNotExist = async (pathToNewDirectory) => {
  try {
    await access(pathToNewDirectory)
  } catch (err) {
    await mkdir(pathToNewDirectory, { recursive: true });
  }
}

// cp ./file-manager/actions/up.js ./file-manager/this/is/test
export default async (pathToFile, pathToNewDirectory) => {
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

