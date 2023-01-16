import test from 'ava';

import { getDTO } from '../../../src/frameworks/getDTO';

test('It should get a provided name from a well-defined object', (t) => {
  const expected = 'Jeremiah';

  const response = getDTO({ name: expected });

  t.is(response, expected);
});
