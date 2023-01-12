import { MikroMetric } from 'mikrometric';

/**
 * @description Add a custom metric using `MikroMetric`.
 */
export function addCustomMetric(versionUsage: 'v1' | 'v2') {
  const SERVICE = 'prod-ready-demo';

  const mikroMetric = MikroMetric.start({
    namespace: SERVICE,
    serviceName: SERVICE
  });
  mikroMetric.putDimension('Version usage', versionUsage);
  mikroMetric.putMetric(versionUsage, 1, 'Count');
  mikroMetric.setProperty('Request time (approximate)', `${Math.floor(Date.now() / 1000)}`);
  mikroMetric.flush();
}
