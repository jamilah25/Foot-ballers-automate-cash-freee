import crypto from "crypto";

// Generate a random server seed for the round
export function generateServerSeed(): string {
  return crypto.randomBytes(32).toString("hex");
}

// Calculate a crash point from combined seeds
export function getCrashPoint(serverSeed: string, clientSeed: string, nonce: number): number {
  const hash = crypto.createHash("sha256")
    .update(serverSeed + "-" + clientSeed + "-" + nonce)
    .digest("hex");

  // Convert hash to number (adapt for actual Aviator formula)
  const h = parseInt(hash.slice(0, 13), 16);
  if (h % 33 === 0) return 1.0;
  return Math.floor((100 * (1 << 32) - h) / (1 << 20)) / 100;
}

// Return public hash for user verification
export function getRoundHash(serverSeed: string): string {
  return crypto.createHash("sha256").update(serverSeed).digest("hex");
}