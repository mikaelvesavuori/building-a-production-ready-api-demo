import { MikroLog } from 'mikrolog';

import { EventInput } from '../interfaces/Lambda';

import { handleCors } from '../frameworks/authorization/handleCors';
import { generatePolicy } from '../frameworks/authorization/generatePolicy';

import { MissingAuthorizationHeaderError, InvalidAuthTokenError } from '../application/errors';

const AUTHORIZATION_TOKEN = (() => {
  if (process.env.NODE_ENV === 'test') return '65a662ab-9d57-4f72-aff1-3a63e0738ace';
  /* c8 ignore next */
  return process.env.AUTH_TOKEN || '';
})();

/**
 * @description Authorizer that will check for the `Authorization` header
 * for an authorization token and see if it's the correct and expected one.
 *
 * @example `Authorization: 65a662ab-9d57-4f72-aff1-3a63e0738ace` header.
 */
export async function authorizeUseCase(event: EventInput) {
  const logger = MikroLog.start();

  try {
    // @ts-ignore
    if (event.httpMethod === 'OPTIONS') return handleCors();

    const userAuthToken = event?.headers?.['Authorization'] || '';
    if (!userAuthToken) throw new MissingAuthorizationHeaderError();

    const isValid = userAuthToken === AUTHORIZATION_TOKEN;
    if (!isValid) throw new InvalidAuthTokenError();

    return generatePolicy(userAuthToken, 'Allow', event.methodArn, '');
  } catch (error: any) {
    const message: string = error.message;
    logger.error(message);
    const id = event?.headers?.['Authorization'] || 'UNKNOWN';
    return generatePolicy(id, 'Deny', event.methodArn, {});
  }
}
