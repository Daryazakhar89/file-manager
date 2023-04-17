import commands from './commands.js';

class OSHandlerCommands {
  constructor(commands) {
    this.commands = commands;
  }

  performCommand(command) {
    if (this.commands.has(command)) {
      const action = this.commands.get(command);
      return action();
    }
  }
}

const osHandlerCommands = new OSHandlerCommands(commands);

export default (command) => {
  const commandResult = osHandlerCommands.performCommand(command);

  console.log(commandResult);
};