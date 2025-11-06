import { Request, Response, NextFunction } from "express";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  // Use your jwtUtils verifyToken
  const user = require("../auth/jwtUtils").verifyToken(token);
  if (!user) return res.status(401).json({ error: "Invalid token" });
  (req as any).user = user;
  next();
}