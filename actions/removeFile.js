import { unlink } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

export default async (pathToFile) => {
  await unlink(join(cwd(),pathToFile));
};

// rm ./file-manager/testFiles/fileToDelete.txt