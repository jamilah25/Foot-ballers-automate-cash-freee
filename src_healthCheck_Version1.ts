import express from "express";
import mongoose from "mongoose";

export function healthCheckRouter() {
  const router = express.Router();

  router.get("/health", async (req, res) => {
    const dbOk = mongoose.connection.readyState === 1;
    res.status(dbOk ? 200 : 500).json({
      status: dbOk ? "ok" : "error",
      database: dbOk ? "connected" : "disconnected"
    });
  });

  return router;
}