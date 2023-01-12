/**
 * @description Utility function to create a valid AWS Lambda return object.
 */
export function end(
  statusCode = 200,
  message?: Record<string, any> | number | string,
  headers?: Record<string, string>
) {
  if (!message) message = '';

  return {
    statusCode,
    body: JSON.stringify(message),
    headers: headers || {}
  };
}
