import { datadog } from "datadog-metrics";

// Initialize metrics
datadog.init({ apiKey: process.env.DATADOG_API_KEY });

export function recordCustomMetric(name: string, value: number) {
  datadog.gauge(name, value);
}