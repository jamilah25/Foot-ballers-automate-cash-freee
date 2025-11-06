# Monitoring & Alerting Integration

## Automation

- Terraform workflow (`infra-terraform.yml`) auto-provisions infra on GitHub push.
- Backend `/health` endpoint for health checks.
- `/metrics` endpoint for custom metrics (Datadog).
- Sentry integration for error tracking.

## Alerts

- Connect health checks or error counts to Slack/email/Datadog/Sentry for incident response.