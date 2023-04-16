export default () => {
  //Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
  const cwd = process.cwd();
  console.log(cwd)
  process.chdir('../');
  console.log(process.cwd())
}