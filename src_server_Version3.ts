// ...existing imports
import { getRoundHash } from "./game/aviator/Fairness";

// ...existing app setup

// Endpoint for provably fair data
app.get("/aviator/fair", (req, res) => {
  // for demo: get current game instance and its seeds
  const data = {
    publicServerSeed: game.getServerSeed(),
    clientSeed: game.getClientSeed(),
    nonce: game.getNonce(),
    roundHash: getRoundHash(game.getServerSeed())
  };
  res.json(data);
});