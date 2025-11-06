# Frontend Deployment

## Deploy to Netlify

1. Push `client/` directory to your repo.
2. Login to [Netlify](https://netlify.com), create new site, and link repo.
3. Set build command: `npm run build`, publish directory: `build`
4. Add `netlify.toml` (see above).

## Deploy to Vercel

1. Install [Vercel CLI](https://vercel.com/docs/cli).
2. Run `vercel` from the `client/` directory.
3. Add `vercel.json` for custom routing.

## HTTPS/SSL for backend

- Use Nginx as a reverse proxy for secure connections.
- Add SSL certificates and configure backend proxy (see above).

## Environment Variables

- Set `REACT_APP_API_URL` in your frontend `.env` for the backend location in production.