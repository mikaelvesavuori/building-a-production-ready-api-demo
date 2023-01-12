import { InputDTO } from '../interfaces/Request';
import { Response } from '../interfaces/Response';

import { addCustomMetric } from '../frameworks/addCustomMetric';

/**
 * @description Greet a user by name and using a random greeting phrase.
 */
export function greetBetaUseCase(name: InputDTO): Response {
  addCustomMetric('v2');

  const greetings = ['Heya', 'Wazzup', 'Aye', 'Greetings', 'Hej', 'Konnichiwa'];

  const randomNumber = Math.ceil(Math.random() * greetings.length - 1);
  const greetingPhrase = greetings[randomNumber];

  return `${greetingPhrase} ${name}!`;
}
