import express from "express";
import { findUser } from "./users";
import { hashPassword, comparePassword } from "./hashUtils";
import { createToken } from "./jwtUtils";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing fields" });
  const userExists = findUser(username);
  if (userExists) return res.status(400).json({ error: "User exists" });
  const hashed = await hashPassword(password);
  // Store in DB in reality!
  const user = { id: "u" + Date.now(), username, password: hashed, balance: 1000 };
  // Save user to DB (left as an exercise)
  res.json({ success: true, user: { id: user.id, username: user.username } });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const valid = await comparePassword(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });
  const token = createToken({ id: user.id, username: user.username });
  res.json({ success: true, token, user: { id: user.id, username: user.username, balance: user.balance } });
});

export default router;