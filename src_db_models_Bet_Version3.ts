import { Schema, model } from "mongoose";

const BetSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  autoCashout: { type: Number, required: true },
  roundId: { type: Schema.Types.ObjectId, ref: "Round", required: true },
  cashedOut: { type: Boolean, default: false },
  payout: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export const Bet = model("Bet", BetSchema);