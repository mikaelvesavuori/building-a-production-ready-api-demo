import { InvalidNameError, MissingNameError } from '../application/errors';

/**
 * @description Validates a user input name.
 */
export function validateName(name: string) {
  if (!name) throw new MissingNameError();
  if (
    name.length < 2 ||
    name.length > 20 ||
    name.match(/[!^!"#€%&/()=?\d]/) ||
    badNames.includes(name)
  )
    throw new InvalidNameError();
}

const badNames = ['a', 'b', 'c', 'd'];
