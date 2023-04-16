import { stdout } from 'process';

import commands from './commands.js';


const getUserName = () => process.argv[2].split("--username=").pop();

const greetUser = (userName) => {
  stdout.write( `Welcome to the File Manager, ${userName}!\n`);}

const onExit = function (userName) {
  stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
  process.exit();
}

const getCommand = (inputString) => {
  return inputString.split(' ').shift();
}

const getCommandArguments = (inputString) => {
  return inputString.split(' ').slice(1);
}

const fileManager = async () => {
  const userName = getUserName();
  greetUser(userName);

  process.stdin.on('data', (chunk) => {
    const inputString = chunk.toString().trim();

    const command = getCommand(inputString);
    const commandArguments = getCommandArguments(inputString);

    if (commands.has(command)) {
      const action = commands.get(command);
      action(...commandArguments);
    }
  });

  process.on('SIGINT', onExit.bind(null, userName));
  process.on('exit', onExit.bind(null, userName));
  process.on('uncaughtException', (err) => {
    console.log(err) // remove this line after development
    stdout.write('Operation failed\n');
  })
}

// rn ./newFile.txt ./test.txt
fileManager();