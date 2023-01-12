import test from 'ava';

import { validateName } from '../../../src/frameworks/validateName';

/**
 * NEGATIVE TESTS
 */

test.serial('It should throw a MissingNameError if missing name', (t) => {
  const expected = 'MissingNameError';

  //@ts-ignore
  const error: any = t.throws(() => validateName());

  t.is(error.name, expected);
});

test.serial('It should throw a InvalidNameError if having a bad name', (t) => {
  const expected = 'InvalidNameError';

  const error: any = t.throws(() => validateName('a'));

  t.is(error.name, expected);
});
