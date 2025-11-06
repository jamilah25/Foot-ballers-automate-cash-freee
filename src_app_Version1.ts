import express from "express";
import { healthCheckRouter } from "./healthCheck";
// ...other imports

const app = express();
app.use("/api", healthCheckRouter());
// ...other middleware/routes

export default app;