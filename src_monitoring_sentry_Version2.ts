import * as Sentry from "@sentry/node";
import "@sentry/tracing";

// Replace with your actual Sentry DSN and environment
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

export function sentryRequestHandler() {
  return Sentry.Handlers.requestHandler();
}
export function sentryErrorHandler() {
  return Sentry.Handlers.errorHandler();
}