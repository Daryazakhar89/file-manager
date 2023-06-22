import { stdout, cwd, chdir } from 'process';
import { homedir } from 'os';

import InvalidInputError from './errors/invalidInput.js';
import commands from './commands.js';

const getUserName = () => process.argv[2].split('--username=').pop();

const greetUser = (userName) => stdout.write( `Welcome to the File Manager, ${userName}!\n`);

const sayByeToUser = (userName) => stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);

const showCWD = () => stdout.write(`\nYou are currently in ${cwd()}\n\n`);

const getCommand = (inputString) => inputString.split(' ').shift();

const getCommandArguments = (inputString) => inputString.split(' ').slice(1);

const performAction = async (action, commandArguments) => {
  try {
    await action(...commandArguments);
  } catch(err) {
    let message;

    if (err instanceof InvalidInputError) {
      message = '\nInvalid input';
    } else {
      message = '\nOperation failed';
    }

    stdout.write(message + '\n');
  } finally {
    showCWD();
  }
};

const handleInputDataReceived = (chunk) => {
  const inputString = chunk.toString().trim();
  const command = getCommand(inputString);
  const commandArguments = getCommandArguments(inputString);

  if (commands.has(command)) {
    const action = commands.get(command);
    performAction(action, commandArguments);
  } else {
    stdout.write('Invalid input' + '\n');
  }
};

const fileManager = async () => {
  const userName = getUserName();

  greetUser(userName);
  chdir(homedir());
  showCWD();

  process.stdin.on('data', handleInputDataReceived);
  process.on('SIGINT', process.exit);
  process.on('exit', sayByeToUser.bind(null, userName));
};

fileManager();