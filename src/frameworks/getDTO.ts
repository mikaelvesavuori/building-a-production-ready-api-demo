import { InputDTO } from '../interfaces/Request';

import { validateName } from './validateName';

/**
 * @description Resolves the expected input in a well-defined shape.
 */
export function getDTO(body: Record<string, any>): InputDTO {
  const name = body?.name?.toString();

  validateName(name);

  return name;
}
