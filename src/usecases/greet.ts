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
