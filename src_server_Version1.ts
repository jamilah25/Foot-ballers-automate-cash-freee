import express from "express";
import { AviatorGame } from "./game/aviator/AviatorGame";
import { AviatorBet } from "./game/aviator/AviatorBet";

const app = express();
const PORT = 3000;
const game = new AviatorGame();

app.use(express.json());

// Start new game round
app.post("/aviator/start", (req, res) => {
  game.startGame();
  res.json({ crashPoint: game.getCurrentCrashPoint() });
});

// Make a bet
let currentBets: AviatorBet[] = [];

app.post("/aviator/bet", (req, res) => {
  const { playerId, amount, autoCashout } = req.body;
  if (!game.isGameRunning()) {
    return res.status(400).json({ error: "Game not running" });
  }
  const bet: AviatorBet = {
    playerId,
    amount,
    autoCashout,
    isActive: true,
  };
  currentBets.push(bet);
  res.json({ status: "Bet placed", bet });
});

// Cash out
app.post("/aviator/cashout", (req, res) => {
  const { playerId, atMultiplier } = req.body;
  // Find the bet and mark as cashed out
  const bet = currentBets.find(b => b.playerId === playerId && b.isActive);
  if (!bet) {
    return res.status(404).json({ error: "Bet not found or already cashed out" });
  }
  bet.isActive = false;
  res.json({ status: "Cashed out", atMultiplier });
});

app.listen(PORT, () => {
  console.log(`Aviator backend running on http://localhost:${PORT}`);
});