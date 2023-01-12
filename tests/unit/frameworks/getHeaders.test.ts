import test from 'ava';

import { getHeaders } from '../../../src/frameworks/getHeaders';

test.serial('It should get a set of deprecation headers for version 1', (t) => {
  const response = getHeaders(true);

  t.assert(response['Deprecation']) !== null;
  t.assert(response['Sunset']) !== null;
  t.assert(response['Link']) !== null;
  t.assert(Object.keys(response).length === 3);
});

test.serial('It should get an empty object for version 2 headers', (t) => {
  const expected = {};

  const response = getHeaders(false);

  t.deepEqual(response, expected);
});
