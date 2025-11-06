import express from "express";
import mongoose from "mongoose";

export function healthCheckRouter() {
  const router = express.Router();

  router.get("/health", async (req, res) => {
    const dbConnected = mongoose.connection.readyState === 1;
    res.status(dbConnected ? 200 : 500).json({
      status: dbConnected ? "ok" : "error",
      database: dbConnected ? "connected" : "disconnected"
    });
  });

  return router;
}