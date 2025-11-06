import express from "express";
import { findUser } from "./users";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  // In production, use session/JWT etc!
  res.json({ success: true, user: { id: user.id, username: user.username, balance: user.balance } });
});

export default router;