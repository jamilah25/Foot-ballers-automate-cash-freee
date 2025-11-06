// ...existing imports
import authRoutes from "./auth/routes";

// ...existing app setup
app.use("/auth", authRoutes);

// Example API for checking balance (secure this in production!)
app.get("/user/:id/balance", (req, res) => {
  const { id } = req.params;
  const user = findUser(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ balance: user.balance });
});