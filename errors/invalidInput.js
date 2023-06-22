export default class InvalidInputError extends Error {
  constructor(message) {
    super(message = 'Invalid input');
    this.name = 'invalidInput';
  }
};