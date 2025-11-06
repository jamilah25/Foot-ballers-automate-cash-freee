import express from "express";
import { healthCheckRouter } from "./healthCheck";
import { sentryRequestHandler, sentryErrorHandler } from "./monitoring/sentry";
import { recordCustomMetric } from "./monitoring/datadog";

const app = express();
app.use(sentryRequestHandler());
app.use("/api", healthCheckRouter());

// Sample endpoint recording a custom metric
app.get("/metrics", (req, res) => {
  recordCustomMetric("aviator.bets_placed", Math.floor(Math.random() * 100)); // Example
  res.send("Custom Datadog metric recorded");
});

// Always place error handler LAST
app.use(sentryErrorHandler());

export default app;