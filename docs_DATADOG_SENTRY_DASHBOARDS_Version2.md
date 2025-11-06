# Application Monitoring Dashboard Setup

## Datadog

**Setup**
- Install the `datadog-metrics` package in your backend.
- Set your `DATADOG_API_KEY` as an environment variable.

**Tracking**
- Record metrics for key business events:  
  - `aviator.bets_placed`
  - `aviator.crashes`
  - `aviator.rounds_started`
  - `aviator.active_users`
  - ...add as needed

**Dashboards**
- In Datadog UI, create graphs and alerts for these metrics.
- Set up anomaly detection and error rate alerts.

---

## Sentry

**Setup**
- Create a Sentry project, set DSN in environment.
- Add error/request handlers to backend app.

**Dashboard Features**
- See real-time errors, stack traces, and performance slowdowns.
- Create alert rules: new error events, repeated exceptions, slow requests.

---

## Health Check Endpoint

Monitor `/api/health`:
- Returns `{ status: "ok", database: "connected" }` if healthy.
- Use synthetic monitoring (Datadog, AWS CloudWatch, or external services).

## Alerting
- Connect Datadog/Sentry dashboards to Slack/email/SMS for incident notifications.
- See respective dashboards for event and metric summaries.