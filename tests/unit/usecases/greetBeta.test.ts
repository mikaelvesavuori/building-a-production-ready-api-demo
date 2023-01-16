import test from 'ava';

import { greetBetaUseCase } from '../../../src/usecases/greetBeta';

test('It should greet a user with a provided name', (t) => {
  const name = 'Jeremiah';
  const expected = true;

  const response = greetBetaUseCase(name).endsWith(`${name}!`);

  t.is(response, expected);
});

test('It should include a greeting', (t) => {
  const name = 'Jeremiah';

  const response = greetBetaUseCase(name);

  t.assert(response.length > name.length + 2);
  t.assert(response !== `${name}`);
  t.assert(response !== `${name}!`);
  t.assert(response !== ` ${name}!`);
});
