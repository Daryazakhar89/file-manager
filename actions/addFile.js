import { writeFile } from 'fs/promises';
import { join } from 'path';

export default (fileName) => {
  writeFile(join(process.cwd(), fileName), '');
}