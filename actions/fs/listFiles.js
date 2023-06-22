import { readdir } from 'fs/promises';
import { cwd } from 'process';

const sortArrayofObjectsByString = (arr, property) => {
  arr.sort((a, b) => {
    const nameA = a[property].toUpperCase();
    const nameB = b[property].toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
};

export default async () => {
  const dirData = await readdir(cwd(), { withFileTypes: true });
  const files = dirData.filter((dirent) => dirent.isFile()).map((dirent) => {
    return {
      Name: dirent.name,
      Type: 'file',
    }
  });
  const directories = dirData.filter((dirent) => dirent.isDirectory()).map((dirent) => {
    return {
      Name: dirent.name,
      Type: 'directory',
    }
  });
  sortArrayofObjectsByString(files, 'Name');
  sortArrayofObjectsByString(directories, 'Name');
  console.table([...directories, ...files]);
};