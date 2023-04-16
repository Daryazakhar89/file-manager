import { unlink } from 'fs/promises';

import copyFile from "./copyFile.js";

// mv ./file-manager/actions/test.js ./file-manager/this/is/test
export default async (pathToFile, pathToNewDirectory) => {
  await copyFile(pathToFile, pathToNewDirectory);
  await unlink(pathToFile);
};

