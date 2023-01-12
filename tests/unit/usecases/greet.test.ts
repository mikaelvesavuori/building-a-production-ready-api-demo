import test from 'ava';

import { greetUseCase } from '../../../src/usecases/greet';

test.serial('It should greet a user with a provided name', (t) => {
  const name = 'Jeremiah';
  const expected = `Hi ${name}!`;

  const response = greetUseCase(name);

  t.is(response, expected);
});
