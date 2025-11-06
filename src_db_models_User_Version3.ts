import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // hashed in practice
  balance: { type: Number, default: 1000 },
});

export const User = model("User", UserSchema);