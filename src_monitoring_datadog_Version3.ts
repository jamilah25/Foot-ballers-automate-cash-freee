import { datadog } from "datadog-metrics";
// Datadog API key comes from process.env (NO hardcoding!)
datadog.init({ apiKey: process.env.DATADOG_API_KEY });

export function recordCustomMetric(name: string, value: number) {
  datadog.gauge(name, value);
}