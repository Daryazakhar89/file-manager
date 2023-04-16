import { createReadStream } from 'fs';
import { join } from 'path';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';

export default async (fileName) => {
  const pathToFile = join(process.cwd(), fileName);
  await pipeline(createReadStream(pathToFile, 'utf8'), stdout, { end: false });
  stdout.write('\n');
};