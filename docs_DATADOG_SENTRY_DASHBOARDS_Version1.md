# Application Monitoring Dashboard Instructions

## Datadog

### Setup
- Install `datadog-metrics` and set your `DATADOG_API_KEY` in your backend server
- Record custom metrics (e.g., bets placed, active users, crashes) in your endpoints

### Example Metrics
- `aviator.active_users`
- `aviator.rounds_started`
- `aviator.crashes`
- `aviator.bets_placed`

### Dashboard
- Create visualizations for these metrics in the Datadog UI 
  - Timeseries graphs
  - Alert triggers for spikes/failures
- Tag metrics with environment or service name for filtering

---

## Sentry

### Setup
- Create Sentry project for backend app
- Set `SENTRY_DSN` & environment variable in server
- Integrate request/error handlers

### Dashboard Features
- Real-time error tracking
- Performance monitoring (tracesSampleRate)
- Release tracking (via GitHub Actions or Sentry CLI)
- Alerts for uncaught exceptions or slow requests

---

## Health Check Integration

- `/api/health` endpoint returns
  - `{ status: "ok", database: "connected" }` on healthy
  - `{ status: "error", database: "disconnected" }` when unhealthy

Monitor this endpoint with:
- Datadog Synthetic Checks
- AWS CloudWatch Alarms
- Slack alerts for downtime

---