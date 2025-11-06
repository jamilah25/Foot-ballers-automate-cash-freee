// ...other imports
import { sentryRequestHandler, sentryErrorHandler } from "./monitoring/sentry";

const app = express();
app.use(sentryRequestHandler());
// ...other routes
app.use(sentryErrorHandler());

// Sample Datadog metric endpoint
import { recordCustomMetric } from "./monitoring/datadog";
app.get("/metrics", (req, res) => {
  recordCustomMetric("aviator.active_users", 42); // Example metric
  res.send("Metrics recorded");
});