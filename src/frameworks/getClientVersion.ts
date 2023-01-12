import { InvalidClientVersionError } from '../application/errors';

export function getClientVersion(event: Record<string, any>): number {
  const clientVersion =
    parseInt(event?.headers?.['X-Client-Version'] || event?.headers?.['x-client-version']) || 1;

  validateClientVersion(clientVersion);

  return clientVersion;
}

function validateClientVersion(clientVersion: number) {
  if (!(clientVersion >= 1 && clientVersion <= 2)) throw new InvalidClientVersionError();
}
