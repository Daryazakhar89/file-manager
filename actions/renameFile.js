import { rename } from 'fs/promises';
import { join, basename } from 'path';

export default (pathToFile, newFileName) => {
  const absolutePathToFile = join(process.cwd(), pathToFile);
  const newPathToFile = absolutePathToFile.replace(basename(pathToFile), newFileName);

  rename(absolutePathToFile, newPathToFile);
}