import { InputDTO } from '../interfaces/Request';
import { Response } from '../interfaces/Response';

import { addCustomMetric } from '../frameworks/addCustomMetric';

/**
 * @description Greet a person by name.
 * @deprecated
 */
export function greetUseCase(name: InputDTO): Response {
  addCustomMetric('v1');

  return 'Hi ' + name + '!';
}

/*
if (
  !name ||
  name.length < 2 ||
  name.length > 20 ||
  name.match(/[!^!"#€%&/()=?]/) ||
  name.match(/[!^\d]/) ||
  name === 'a' ||
  name === 'b' ||
  name === 'c' ||
  name === 'd'
)
  throw new Error('Not a valid name!');
*/
