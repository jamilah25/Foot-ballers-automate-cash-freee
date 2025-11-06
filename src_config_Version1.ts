// Backend config loader
import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/aviator-game';
export const JWT_SECRET = process.env.JWT_SECRET ?? 'fallbackSecret';
export const PORT = process.env.PORT ?? 3000;
export const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:3001';