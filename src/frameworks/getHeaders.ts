/**
 * @description DEMO: Aggressive obsolescence
 */
export function getHeaders(isUsingOldVersion: boolean): Record<string, string> {
  if (isUsingOldVersion)
    return {
      Deprecation: '01 Jan 2023 00:00:00 GMT',
      Sunset: '31 Dec 2023 23:59:59 GMT',
      Link: `<https://api.endpoint.com/deprecation>; rel="deprecation"; type="text/html"`
    };

  return {};
}
