import { Schema, model } from "mongoose";

const RoundSchema = new Schema({
  serverSeed: { type: String, required: true },
  clientSeed: { type: String, required: true },
  nonce: { type: Number, required: true },
  crashPoint: { type: Number, required: true },
  startedAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
});

export const Round = model("Round", RoundSchema);