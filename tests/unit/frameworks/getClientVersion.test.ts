import test from 'ava';

import { getClientVersion } from '../../../src/frameworks/getClientVersion';

test.serial('It should infer version 1 from an empty event object', (t) => {
  const expected = 1;

  const response = getClientVersion({});

  t.is(response, expected);
});

test.serial('It should use version provided in lower case format in event object', (t) => {
  const expected = 2;

  const response = getClientVersion({
    headers: {
      'x-client-version': 2
    }
  });

  t.is(response, expected);
});

test.serial('It should use version 1 if provided in event object', (t) => {
  const expected = 1;

  const response = getClientVersion({
    headers: {
      'X-Client-Version': 1
    }
  });

  t.is(response, expected);
});

test.serial('It should use version 2 if provided in event object', (t) => {
  const expected = 2;

  const response = getClientVersion({
    headers: {
      'X-Client-Version': 2
    }
  });

  t.is(response, expected);
});

/**
 * NEGATIVE TESTS
 */

test.serial(
  'It should throw a InvalidClientVersionError if using unsupported client version',
  (t) => {
    const expected = 'InvalidClientVersionError';

    const error: any = t.throws(() =>
      getClientVersion({
        headers: {
          'X-Client-Version': 3
        }
      })
    );

    t.is(error.name, expected);
  }
);
