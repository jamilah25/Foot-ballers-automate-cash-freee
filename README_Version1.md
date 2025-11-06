# Aviator Betting Game

## Setup

1. `cp .env.example .env` and customize variables.
2. `npm install`
3. `npm run build && npm start` (for backend)
4. `cd client && npm install && npm start` (for frontend)

## Docker

- `docker-compose up` (runs backend and MongoDB)

## Notes

- For production, review `.env`, use a secure JWT secret, add HTTPS and error handling.
- The game uses provably fair crash logic and stores rounds/bets in MongoDB.
- See each step in this repo for extensible modules.