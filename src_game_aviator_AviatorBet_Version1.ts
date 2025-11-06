// Simple bet structure for a player
export interface AviatorBet {
  playerId: string;
  amount: number;
  autoCashout: number; // multiplier to cash out automatically
  isActive: boolean;
}