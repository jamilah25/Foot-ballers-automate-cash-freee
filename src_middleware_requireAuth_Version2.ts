import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../auth/jwtUtils";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "No token provided" });
  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user) return res.status(401).json({ error: "Invalid or expired token" });
  (req as any).user = user;
  next();
}