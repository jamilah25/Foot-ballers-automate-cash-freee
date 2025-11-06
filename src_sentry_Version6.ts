import * as Sentry from "@sentry/node";
import "@sentry/tracing";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Example usage
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());