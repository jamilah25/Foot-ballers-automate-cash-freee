// ...existing imports
import { connectDB } from "./db/index";
import { User } from "./db/models/User";
import { Bet } from "./db/models/Bet";
import { Round } from "./db/models/Round";

// Database connection at startup:
connectDB();

// Example: Creating a user (register API)
app.post("/auth/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.json({ success: true, user: { id: user._id, username } });
  } catch (e: any) {
    res.status(400).json({ error: "Registration failed: " + e.message });
  }
});

// Example: Placing a bet (store in DB)
app.post("/aviator/bet", async (req, res) => {
  const { userId, amount, autoCashout, roundId } = req.body;
  // Validate user, balance, round, etc
  const user = await User.findById(userId);
  if (!user || user.balance < amount)
    return res.status(400).json({ error: "Not enough balance or invalid user" });

  // Deduct balance
  user.balance -= amount;
  await user.save();

  // Store bet
  const bet = await Bet.create({ userId, amount, autoCashout, roundId });
  res.json({ success: true, bet });
});

// Example: Logging a new round
app.post("/aviator/round", async (req, res) => {
  const { serverSeed, clientSeed, nonce, crashPoint } = req.body;
  const round = await Round.create({ serverSeed, clientSeed, nonce, crashPoint });
  res.json({ success: true, round });
});