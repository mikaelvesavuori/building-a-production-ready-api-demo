/**
 * @description Used when an expected `Authorization` header is missing.
 */
export class MissingAuthorizationHeaderError extends Error {
  constructor() {
    super();
    this.name = 'MissingAuthorizationHeaderError';
    const message = `Missing required "Authorization" header!`;
    this.message = message;
    // @ts-ignore
    this.cause = {
      statusCode: 400
    };
  }
}

/**
 * @description Used when an incorrect authorization token is used.
 */
export class InvalidAuthTokenError extends Error {
  constructor() {
    super();
    this.name = 'InvalidAuthTokenError';
    const message = `The provided authorization token is incorrect.`;
    this.message = message;
    // @ts-ignore
    this.cause = {
      statusCode: 400
    };
  }
}

/**
 * @description Used when an input name is invalid.
 */
export class InvalidNameError extends Error {
  constructor() {
    super();
    this.name = 'InvalidNameError';
    const message = `Not a valid name!`;
    this.message = message;
    // @ts-ignore
    this.cause = {
      statusCode: 400
    };
  }
}

/**
 * @description Used when an input name is missing.
 */
export class MissingNameError extends Error {
  constructor() {
    super();
    this.name = 'MissingNameError';
    const message = `Missing a name!`;
    this.message = message;
    // @ts-ignore
    this.cause = {
      statusCode: 400
    };
  }
}

/**
 * @description Used when a requested client version of the application is invalid.
 */
export class InvalidClientVersionError extends Error {
  constructor() {
    super();
    this.name = 'InvalidClientVersionError';
    const message = `Invalid client version!`;
    this.message = message;
    // @ts-ignore
    this.cause = {
      statusCode: 400
    };
  }
}
