# Scaling & Monitoring

## Backend Scaling

- Elastic Beanstalk: configure EC2 instance auto-scaling (min/max, CPU/traffic thresholds).
- Use health checks and rolling deployments.

## Frontend Scaling

- CloudFront CDN caches and scales globally; configure cache policies for optimal performance.

## Monitoring

- AWS CloudWatch: setup log ingestion from EB/server, traffic and error dashboards.
- Can integrate third-party monitoring: Datadog, Sentry, NewRelic.
- Set alarms for error rates, downtime, resource usage.

## Example alerts (CloudWatch):

1. Set alarm for CPU > 80% for 15 min
2. Set alarm for HTTP 5xx errors
3. Set alarm for MongoDB connection failures

---

Monitor dashboards regularly and automate incident notifications (e.g. Slack, email).