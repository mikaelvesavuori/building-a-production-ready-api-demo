import { APIGatewayEvent, Context } from 'aws-lambda';
import { MikroLog } from 'mikrolog';

import { greetBetaUseCase } from '../usecases/greetBeta';
import { greetUseCase } from '../usecases/greet';

import { end } from '../frameworks/end';
import { getDTO } from '../frameworks/getDTO';
import { getClientVersion } from '../frameworks/getClientVersion';
import { getHeaders } from '../frameworks/getHeaders';

const BETA_VERSION = process.env.BETA_VERSION || 2;

/**
 * @description The AWS Lambda event handler.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  const logger = MikroLog.start({ event, context });

  try {
    return handleRequest(event);
  } catch (error: any) {
    return handleError(error, logger);
  }
};

/**
 * @description Wraps request handling.
 */
function handleRequest(event: APIGatewayEvent) {
  const body: Record<string, any> =
    event.body && typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

  // DEMO: Wrangle input into well-known DTO
  const input = getDTO(body);

  // DEMO: Branch by abstraction
  const clientVersion = getClientVersion(event);
  const isUsingOldVersion = clientVersion < BETA_VERSION;
  const headers = getHeaders(isUsingOldVersion);

  const result = (() => {
    // Run regular version for most users
    if (!clientVersion || isUsingOldVersion) return greetUseCase(input);
    // Run beta version for those explicitly asking for it
    return greetBetaUseCase(input);
  })();

  return end(200, result, headers);
}

/**
 * @description Wraps error handling.
 */
function handleError(error: any, logger: MikroLog) {
  const statusCode = error.cause?.statusCode || 500;
  const message = error.message;

  logger.error(message);

  return end(statusCode, message);
}
